import { Text, VStack } from "@chakra-ui/react";
import { ActivityItem } from "./activity-item";
import { useActivityListContext } from "./activity-list.context";

export const ActivityList = (): JSX.Element => {
  const { activities } = useActivityListContext();

  return (
    <VStack spacing="5" w="100%">
      {activities.length === 0 && <Text>Nenhuma atividade cadastrada</Text>}

      {activities.map((_, index) => (
        <ActivityItem key={`activity-item-${index}`} />
      ))}
    </VStack>
  );
};
