import { RadioButton, RadioButtonGroup } from "@/features/ui/forms";
import { ActivityType, IActivity } from "@/services/activities";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Portal,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { RiSave3Fill } from "react-icons/ri";
import { CreateVideoActivity } from "./create-video-activity";

export type CreateActivityFormProps = {
  activityToEdit?: IActivity;
  onClose?: () => void;
  modalFooterRef?: React.MutableRefObject<HTMLElement | null>;
};

export const CreateActivityForm = ({
  activityToEdit,
  onClose,
  modalFooterRef,
}: CreateActivityFormProps): JSX.Element => {
  const { register, getValues, setValue, handleSubmit } = useForm({
    defaultValues: activityToEdit,
  });

  const onSubmit = useCallback(
    (data: IActivity) => {
      console.log(data);
      onClose?.();
    },
    [onClose]
  );

  return (
    <VStack as="form" w="100%" spacing="5" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <FormLabel htmlFor="title">Nome da atividade</FormLabel>
        <Input
          id="title"
          variant="filled"
          {...register("title", {
            required: true,
          })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="description">Descrição da atividade</FormLabel>
        <Textarea
          id="description"
          variant="filled"
          {...register("description")}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="type">Tipo de atividade</FormLabel>
        <RadioButtonGroup
          onChange={(value) => {
            setValue("type", value as ActivityType);
          }}
          value={getValues().type}
          variant="outline"
        >
          <RadioButton value={ActivityType.VIDEO}>Video</RadioButton>
          <RadioButton value={ActivityType.ARTICLE}>Artigo</RadioButton>
          <RadioButton value={ActivityType.EXERCISE}>Exercício</RadioButton>
        </RadioButtonGroup>
      </FormControl>

      <CreateVideoActivity
        onChange={(value) => {
          setValue("content", value);
        }}
        value={getValues("content")}
      />

      <Portal containerRef={modalFooterRef}>
        <Button
          alignSelf="flex-end"
          type="submit"
          colorScheme="blue"
          rightIcon={<RiSave3Fill />}
        >
          Salvar
        </Button>
      </Portal>
    </VStack>
  );
};
