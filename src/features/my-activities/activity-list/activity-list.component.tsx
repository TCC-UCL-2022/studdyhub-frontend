import { Roles } from "@/enums";
import { useAuthenticationContext } from "@/features/authentication";
import {
  Button,
  Center,
  List,
  Spinner,
  StackProps,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";
import { CreateActivityModal } from "../create-activity";
import { ActivityItem } from "./activity-item";
import { useActivityListContext } from "./activity-list.context";

export const ActivityList = (props: StackProps): JSX.Element => {
  const { activities, loading } = useActivityListContext();
  const { onOpen, ...modalPros } = useDisclosure();
  const { user } = useAuthenticationContext();

  const canAdd = user?.role === Roles.TEACHER;

  return (
    <VStack spacing="5" w="100%" flexGrow="1" {...props}>
      {loading && (
        <Center h="100%" w="100%">
          <Spinner colorScheme="blue" />
        </Center>
      )}
      {!loading && activities.length === 0 && (
        <Text>Nenhuma atividade cadastrada</Text>
      )}

      <List spacing={3} w="100%" maxW="lg">
        {activities.map((activity) => (
          <ActivityItem
            key={`activity-item-${activity.id}`}
            activity={activity}
          />
        ))}
      </List>

      {canAdd && (
        <Button
          colorScheme="blue"
          size="sm"
          rightIcon={<RiAddFill />}
          onClick={onOpen}
        >
          Adicionar atividade
        </Button>
      )}

      {canAdd && <CreateActivityModal modalProps={modalPros} />}
    </VStack>
  );
};
