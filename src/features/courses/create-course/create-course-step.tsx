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
import { useForm } from "react-hook-form";
import { RiArrowRightFill } from "react-icons/ri";
import { useCreateCourseContext } from "./create-course.context";

export const CreateCourseStep = (): JSX.Element | null => {
  const { register, handleSubmit } = useForm<CreateCourseDto>();
  const { user } = useAuthenticationContext();
  const { setStep } = useCreateCourseContext();

  if (!user) {
    return null;
  }

  const onSubmit = async (data: CreateCourseDto) => {
    const course = await CourseService.createCourse({
      ...data,
      userId: user.cognitoId,
    });

    if (course) {
      setStep((prev) => prev + 1);
    }
  };

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
