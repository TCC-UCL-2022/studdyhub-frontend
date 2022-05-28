import { Button, List, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";
import { CreateActivityModal } from "../create-course-activity";
import { ActivityItem } from "./activity-item";
import { activityMock } from "./mocks";

export const ActivityList = (): JSX.Element => {
  // const { activities } = useActivityListContext();
  const { onOpen, ...modalPros } = useDisclosure();

  return (
    <VStack spacing="5" w="100%" flexGrow="1">
      {activityMock.length === 0 && <Text>Nenhuma atividade cadastrada</Text>}

      <List spacing={3} w="100%" maxW="lg">
        {activityMock.map((activity) => (
          <ActivityItem
            key={`activity-item-${activity.id}`}
            activity={activity}
          />
        ))}
      </List>

      <Button
        colorScheme="blue"
        size="sm"
        rightIcon={<RiAddFill />}
        onClick={onOpen}
      >
        Adicionar atividade
      </Button>

      <CreateActivityModal modalProps={modalPros} />
    </VStack>
  );
};
