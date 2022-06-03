import { images } from "@/assets";
import { ICourse } from "@/services/courses";
import {
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type SearchListItemProps = {
  course: ICourse;
};

export const SearchListItem = ({
  course,
}: SearchListItemProps): JSX.Element => {
  return (
    <Flex
      w="100%"
      p="6"
      bgColor={useColorModeValue("white", "whiteAlpha.50")}
      boxShadow="md"
      borderRadius="lg"
      _hover={{
        transition: "all 0.2s ease-in-out",
        boxShadow: "lg",
        bgColor: useColorModeValue("gray.50", "whiteAlpha.100"),
      }}
      direction={{ base: "column", lg: "row" }}
    >
      <Stack
        spacing="4"
        align="flex-start"
        direction={{ base: "column", lg: "row" }}
      >
        <Image
          src={images.defaultThumbnail}
          borderRadius="lg"
          maxH="32"
          h="100%"
          alt={course.title}
        />
        <VStack align="flex-start" justify="flex-start">
          <Text fontWeight="semibold">{course.title}</Text>
          <Text display={{ base: "none", lg: "inline" }}>
            <strong>Descrição:</strong> {course.description}
          </Text>
          <Text>
            <strong>Professor:</strong> {course.user?.name}
          </Text>
        </VStack>
      </Stack>

      <Button
        ml={{ base: "0", lg: "auto" }}
        mt="4"
        size="lg"
        colorScheme="blue"
        as={Link}
        to={`/courses/${course.id}`}
      >
        Acessar curso
      </Button>
    </Flex>
  );
};
