import { CourseService } from "@/services/courses";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../search-bar";
import { SearchList } from "../search-list";

export const SearchContainer = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const { isLoading, data } = useQuery(
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

  useEffect(() => {
    console.log(searchParams.get("search"));
  }, [searchParams]);

  return (
    <Flex w="100%">
      <VStack w="100%" spacing="8">
        <Heading size="lg">Buscar Cursos</Heading>

        <SearchBar />

        <SearchList courses={data?.items || []} isLoading={isLoading} />
      </VStack>
    </Flex>
  );
};
