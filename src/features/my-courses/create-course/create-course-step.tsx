import { useAuthenticationContext } from "@/features/authentication";
import { CourseService } from "@/services/courses";
import { CreateCourseDto } from "@/services/courses/dto";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { RiArrowRightFill } from "react-icons/ri";
import { useCreateCourseContext } from "./create-course.context";

export const CreateCourseStep = (): JSX.Element | null => {
  const { user } = useAuthenticationContext();
  const { course, setStep, setCourse } = useCreateCourseContext();

  const { register, handleSubmit } = useForm<CreateCourseDto>({
    defaultValues: course ?? undefined,
  });

  const createOrUpdateCourse = useCallback(
    async (data: CreateCourseDto) => {
      if (!user) {
        return null;
      }

      if (course?.id) {
        const updatedCourse = await CourseService.updateCourse(course.id, data);

        return updatedCourse;
      }

      const courseCreated = await CourseService.createCourse({
        ...data,
        userId: user.cognitoId,
      });

      return courseCreated;
    },
    [course, user]
  );

  const onSubmit = useCallback(
    async (data: CreateCourseDto) => {
      const newCourse = await createOrUpdateCourse(data);

      if (newCourse) {
        setCourse(newCourse);
        setStep((prev) => prev + 1);
      }
    },
    [createOrUpdateCourse, setCourse, setStep]
  );

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} w="100%" spacing="5">
      <FormControl isRequired>
        <FormLabel htmlFor="title">Nome do curso</FormLabel>
        <Input
          id="title"
          variant="filled"
          {...register("title", {
            required: true,
          })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="description">Descrição do curso</FormLabel>
        <Textarea
          id="description"
          variant="filled"
          {...register("description")}
        />
      </FormControl>

      <Button
        type="submit"
        colorScheme="blue"
        alignSelf="flex-end"
        rightIcon={<RiArrowRightFill />}
      >
        Próximo
      </Button>
    </VStack>
  );
};
