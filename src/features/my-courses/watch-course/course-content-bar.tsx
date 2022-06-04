import { IActivity } from "@/services/activities";
import {
  Center,
  Checkbox,
  Divider,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useWatchCourseContext } from "./watch-course.context";

type ContentItemProps = {
  activity: IActivity;
  index: number;
  active: boolean;
  handleClick: (activityId: string) => void;
};

const ContentItem = memo(
  ({ activity, index, active, handleClick }: ContentItemProps) => (
    <ListItem
      w="100%"
      p="2"
      px="4"
      transition="all 0.2s"
      _hover={{
        cursor: "pointer",
        bgColor: useColorModeValue("gray.100", "gray.700"),
      }}
      onClick={() => handleClick(activity.id)}
    >
      <HStack spacing="4" direction="row" w="100%">
        <Checkbox />
        <Text fontWeight="semibold" color={active ? "" : "gray.500"}>
          {index + 1}. {activity.title}
        </Text>
      </HStack>
    </ListItem>
  )
);

export const CourseContentBar = (): JSX.Element => {
  const { course, currentActivityId } = useWatchCourseContext();
  const navigate = useNavigate();

  console.log(currentActivityId);

  const handleActivityClick = useCallback(
    (activityId: string) => {
      navigate(`/courses/watch/${course?.id}/${activityId}`);
    },
    [course?.id, navigate]
  );

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      flexGrow="1"
      overflowY="auto"
      borderRadius="lg"
      boxShadow="md"
      bgColor={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.800", "gray.200")}
    >
      <Center p="4" bgColor={useColorModeValue("gray.100", "gray.700")}>
        <Text fontWeight="semibold" fontSize="lg">
          Conteúdo do curso
        </Text>
      </Center>
      <Divider />
      <List>
        {course?.activities.map((activity, index) => (
          <ContentItem
            key={`course-content-item-${activity.id}`}
            activity={activity}
            index={index}
            active={activity.id === currentActivityId}
            handleClick={handleActivityClick}
          />
        ))}
      </List>
    </Flex>
  );
};
