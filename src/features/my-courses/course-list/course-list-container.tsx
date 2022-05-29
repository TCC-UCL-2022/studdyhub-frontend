import { Center, Flex, FlexProps, List, Spinner, Text } from "@chakra-ui/react";
import { CourseListItem } from "./course-list-item";
import { useCourseListContext } from "./course-list.context";

export const CourseListContainer = (props: FlexProps): JSX.Element => {
  const { courses, loading } = useCourseListContext();

  return (
    <Flex {...props} direction="column">
      {loading && (
        <Center h="100%">
          <Spinner colorScheme="blue" />
        </Center>
      )}

      {!loading && courses.length === 0 && (
        <Center h="100%">
          <Text>Nenhum curso encontrado</Text>
        </Center>
      )}

      {!loading && (
        <List spacing={3} w="100%">
          {courses.map((course) => (
            <CourseListItem
              key={`course-list-item-${course.id}`}
              course={course}
            />
          ))}
        </List>
      )}
    </Flex>
  );
};
