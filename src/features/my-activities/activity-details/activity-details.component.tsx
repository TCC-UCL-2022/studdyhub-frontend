import { ActivityType, IActivity } from "@/services/activities";
import { HStack, Text, VStack } from "@chakra-ui/react";

export type ActivityDetailsProps = {
  activity: IActivity;
};

const activityTypeToLabel = {
  [ActivityType.ARTICLE]: "Artigo",
  [ActivityType.VIDEO]: "Vídeo",
  [ActivityType.EXERCISE]: "Exercício",
};

const getActivityContent = (activity: IActivity) => {
  const map = {
    [ActivityType.ARTICLE]: <Text>{activity.content}</Text>,
    [ActivityType.VIDEO]: <Text>{activity.content}</Text>,
    [ActivityType.EXERCISE]: <Text>{activity.content}</Text>,
  };

  return map[activity.type];
};

export const ActivityDetails = ({ activity }: ActivityDetailsProps) => {
  return (
    <VStack w="100%" align="flex-start">
      <HStack>
        <Text fontWeight="semibold">Titulo: </Text>
        <Text>{activity.title}</Text>
      </HStack>

      <HStack>
        <Text fontWeight="semibold">Tipo: </Text>
        <Text>{activityTypeToLabel[activity.type]}</Text>
      </HStack>

      <Text fontWeight="semibold">Conteudo: </Text>

      {getActivityContent(activity)}
    </VStack>
  );
};
