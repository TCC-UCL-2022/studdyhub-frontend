import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Step } from "@features/ui/navigation";
import { useForm } from "react-hook-form";

export const CreateActivityStep = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  return (
    <Step title="Passo 2" subtitle="Adicione atividades" current={!true}>
      <Flex w="100%">
        <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
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

          <Button type="submit" colorScheme="blue">
            Próximo
          </Button>
        </VStack>
      </Flex>
    </Step>
  );
};
