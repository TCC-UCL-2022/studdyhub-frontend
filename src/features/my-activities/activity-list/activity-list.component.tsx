import { Roles } from "@/enums";
import { useAuthenticationContext } from "@/features/authentication";
import { ActivitiesService } from "@/services/activities";
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
import { RiAddFill, RiRefreshFill } from "react-icons/ri";
import { useQuery } from "react-query";
import { CreateActivityModal } from "../create-activity";
import { ActivityItem } from "./activity-item";
import { ActivityListContext } from "./activity-list.context";

type ActivityListProps = StackProps & {
  courseId: string;
};

export const ActivityList = ({
  courseId,
  ...props
}: ActivityListProps): JSX.Element => {
  const { isLoading, data, refetch } = useQuery(
    `COURSE_ACTIVITIES_${courseId}`,
    () => ActivitiesService.getCourseActivities(courseId),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );
  const { onOpen, ...modalPros } = useDisclosure();
  const { user } = useAuthenticationContext();

  const canAdd = user?.role === Roles.TEACHER;

  return (
    <VStack spacing="5" w="100%" flexGrow="1" {...props}>
      {isLoading && (
        <Center h="100%" w="100%">
          <Spinner colorScheme="blue" />
        </Center>
      )}

      {!isLoading && !data && (
        <VStack spacing="4">
          <Text>Ops! Algo deu errado</Text>
          <Button
            colorScheme="green"
            rightIcon={<RiRefreshFill />}
            onClick={refetch as any}
            size="sm"
          >
            Recarregar
          </Button>
        </VStack>
      )}

      {!isLoading && data?.length === 0 && (
        <Text>Nenhuma atividade cadastrada</Text>
      )}

      <List spacing={3} w="100%" maxW="lg">
        {data?.map((activity) => (
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

      <ActivityListContext.Provider
        value={{ courseId, refetchActivities: refetch as any }}
      >
        {canAdd && <CreateActivityModal modalProps={modalPros} />}
      </ActivityListContext.Provider>
    </VStack>
  );
};
