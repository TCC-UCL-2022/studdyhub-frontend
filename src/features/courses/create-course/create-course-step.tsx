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

export const CreateCourseStep = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any): void => {
    console.log(data);
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
