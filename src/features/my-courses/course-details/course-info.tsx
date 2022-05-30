import { CourseService, ICourse } from "@/services/courses";
import {
  Button,
  Center,
  Flex,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiRefreshFill } from "react-icons/ri";
import { useQuery } from "react-query";

type CourseInfoProps = {
  courseId: string;
};

export const CourseInfo = ({ courseId }: CourseInfoProps): JSX.Element => {
  const { isLoading, data, refetch } = useQuery<ICourse | null>(
    `COURSE_INFO_${courseId}`,
    () => CourseService.getCourseById(courseId),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (isLoading) {
    return (
      <Center h="100%" w="100%">
        <Spinner colorScheme="blue" />
      </Center>
    );
  }

  return (
    <Flex w="100%" direction="column" h="100%" mt="4">
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
      {!isLoading && data && (
        <VStack align="flex-start">
          <HStack>
            <Text fontWeight="semibold">Titulo: </Text>
            <Text>{data.title}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="semibold">Descrição: </Text>
            <Text>{data.description}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="semibold">Status: </Text>
            <Text>{data.published ? "Publicado" : "Não Publicado"}</Text>
          </HStack>
          <HStack>
            <Text fontWeight="semibold">Data de criação: </Text>
            <Text>{data.createdAt}</Text>
          </HStack>
        </VStack>
      )}
    </Flex>
  );
};
