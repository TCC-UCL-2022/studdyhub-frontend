import { CourseService, ICourse } from "@/services/courses";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { RiSave3Fill } from "react-icons/ri";

type EditCourseFormProps = {
  course: ICourse;
  onUpdated?: (course: ICourse) => void;
  onCancel?: () => void;
};

export const EditCourseForm = ({
  course,
  onUpdated,
  onCancel,
}: EditCourseFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<ICourse>({
    defaultValues: course ?? undefined,
  });

  const onSubmit = useCallback(
    async (data: ICourse) => {
      const updated = await CourseService.updateCourse(course.id, data);

      if (updated) {
        onUpdated?.(updated);
      }
    },
    [course.id, onUpdated]
  );
  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w="100%"
      spacing="5"
      pb="4"
    >
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

      <ButtonGroup alignSelf="flex-end">
        <Button onClick={onCancel}>Cancelar</Button>
        <Button type="submit" colorScheme="blue" rightIcon={<RiSave3Fill />}>
          Atualizar
        </Button>
      </ButtonGroup>
    </VStack>
  );
};
