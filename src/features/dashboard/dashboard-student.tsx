import { Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import { useEnrollmentsContext } from "../enrollments";
import { SearchList } from "../search-courses/search-list";

export const DashboardStudent = (): JSX.Element => {
  const { enrollments, isLoading } = useEnrollmentsContext();

  return (
    <VStack align="start" w="100%">
      <Heading
        as="h4"
        size="md"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        Meus Cursos
      </Heading>

      <SearchList
        courses={enrollments.map((enrollment) => enrollment.course)}
        isLoading={isLoading}
        isError={false}
      />
    </VStack>
  );
};
