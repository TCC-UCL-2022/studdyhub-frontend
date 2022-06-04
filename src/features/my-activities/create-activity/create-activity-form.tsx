import { RadioButton, RadioButtonGroup } from "@/features/ui/forms";
import {
  ActivitiesService,
  ActivityType,
  IActivity,
} from "@/services/activities";
import { CreateActivityDto } from "@/services/activities/dto";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RiSave3Fill } from "react-icons/ri";
import { useActivityListContext } from "../activity-list";
import { CreateVideoActivity } from "./create-video-activity";

export type CreateActivityFormProps = {
  activityToEdit?: IActivity;
  onClose?: () => void;
};

export const CreateActivityForm = ({
  activityToEdit,
  onClose,
}: CreateActivityFormProps): JSX.Element => {
  const [activityType, setActivityType] = useState<ActivityType>(
    activityToEdit?.type ?? ActivityType.VIDEO
  );

  const { courseId, refetchActivities } = useActivityListContext();

  const { register, getValues, setValue, handleSubmit } = useForm({
    defaultValues: activityToEdit,
  });

  const onSubmit = useCallback(
    async (data: CreateActivityDto) => {
      const newActivity = await ActivitiesService.createCourseActivity(
        courseId,
        data
      );

      if (newActivity) {
        await refetchActivities();
        onClose?.();
      }
    },
    [courseId, onClose, refetchActivities]
  );

  useEffect(() => {
    register("content", { required: true });
  }, [register]);

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
            setActivityType(value as ActivityType);
          }}
          value={activityType}
          variant="outline"
        >
          <RadioButton value={ActivityType.VIDEO}>Video</RadioButton>
          <RadioButton value={ActivityType.ARTICLE}>Artigo</RadioButton>
          <RadioButton value={ActivityType.EXERCISE}>Exercício</RadioButton>
        </RadioButtonGroup>
      </FormControl>

      {activityType === ActivityType.VIDEO && (
        <CreateVideoActivity
          onChange={(value) => {
            setValue("content", value);
          }}
          value={getValues("content")}
        />
      )}
      {activityType === ActivityType.EXERCISE && <Text>Não implementado</Text>}
      {activityType === ActivityType.ARTICLE && <Text>Não implementado</Text>}

      <Button
        alignSelf="flex-end"
        type="submit"
        colorScheme="blue"
        rightIcon={<RiSave3Fill />}
      >
        Salvar
      </Button>
    </VStack>
  );
};
