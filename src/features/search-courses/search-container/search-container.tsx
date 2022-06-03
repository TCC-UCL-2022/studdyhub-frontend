import { CourseService } from "@/services/courses";
import { Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../search-bar";
import { SearchFilters } from "../search-filters";
import { SearchList } from "../search-list";

export const SearchContainer = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const { isLoading, data, refetch, isError } = useQuery(
    `COURSES_${searchTerm}`,
    () =>
      CourseService.getAllCourses({
        query: searchTerm,
      }),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return (
    <Flex w="100%">
      <VStack w="100%" spacing="8">
        <Heading size="lg">Buscar Cursos</Heading>

        <HStack w="100%" spacing="8">
          <SearchFilters />

          <VStack w="100%" spacing="8">
            <SearchBar />

            <SearchList
              courses={data?.items || []}
              isLoading={isLoading}
              isError={isError}
              onRefresh={refetch as any}
            />
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};
