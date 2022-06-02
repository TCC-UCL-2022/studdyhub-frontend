import { ICourse } from "@/services/courses";
import { Center, Spinner, VStack } from "@chakra-ui/react";
import { SearchListItem } from "./search-list-item";

type SearchListProps = {
  courses: ICourse[];
  isLoading: boolean;
};

export const SearchList = ({
  courses,
  isLoading,
}: SearchListProps): JSX.Element => {
  return (
    <VStack>
      {isLoading && (
        <Center>
          <Spinner colorScheme="blue" />
        </Center>
      )}

      {!isLoading && courses.length === 0 && (
        <Center>Nenhum curso encontrado.</Center>
      )}

      {!isLoading &&
        courses.map((course) => (
          <SearchListItem course={course} key={course.id} />
        ))}
    </VStack>
  );
};
