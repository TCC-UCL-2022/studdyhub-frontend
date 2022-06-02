import { ICourse } from "@/services/courses";
import { Button, Center, Spinner, Text, VStack } from "@chakra-ui/react";
import { RiRefreshFill } from "react-icons/ri";
import { SearchListItem } from "./search-list-item";

type SearchListProps = {
  courses: ICourse[];
  isLoading: boolean;
  isError: boolean;
  onRefresh: () => void;
};

export const SearchList = ({
  courses,
  isLoading,
  isError,
  onRefresh,
}: SearchListProps): JSX.Element => {
  return (
    <VStack w="100%">
      {isLoading && (
        <Center>
          <Spinner colorScheme="blue" />
        </Center>
      )}

      {!isLoading && isError && (
        <VStack spacing="4">
          <Text>Ops! Algo deu errado</Text>
          <Button
            colorScheme="green"
            rightIcon={<RiRefreshFill />}
            onClick={onRefresh}
            size="sm"
          >
            Recarregar
          </Button>
        </VStack>
      )}

      {!isLoading && !isError && courses.length === 0 && (
        <Center>Nenhum curso encontrado.</Center>
      )}

      {!isLoading &&
        courses.map((course) => (
          <SearchListItem course={course} key={course.id} />
        ))}
    </VStack>
  );
};
