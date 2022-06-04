import {
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useWatchCourseContext } from "./watch-course.context";

export const CourseDescription = (): JSX.Element | null => {
  const { course } = useWatchCourseContext();

  return (
    <Flex w="100%" direction="column">
      <Heading size="xl">{course?.title}</Heading>

      <Text
        fontSize="lg"
        mt="4"
        w="max-content"
        fontWeight="semibold"
        lineHeight="9"
        position="relative"
        _after={{
          content: `""`,
          position: "absolute",
          w: "100%",
          h: "3px",
          bg: useColorModeValue("blue.500", "blue.300"),
          bottom: "0",
          left: "0",
          transform: "translateY(30%)",
          zIndex: "overlay",
        }}
      >
        Descrição
      </Text>

      <Divider borderColor="gray.500" />

      <Text mt="4">{course?.description}</Text>
    </Flex>
  );
};
