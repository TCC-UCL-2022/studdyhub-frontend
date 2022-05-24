import {
  Flex,
  Heading,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { ProgressIndicator } from "@features/ui/navigation";
import { CreateActivityStep } from "./create-activity-step";
import { CreateCourseStep } from "./create-course-step";

export const CreateCourse = (): JSX.Element => {
  return (
    <Flex
      w="100%"
      maxW={{ base: "container.md", "2xl": "container.lg" }}
      bgColor={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.800", "gray.200")}
      direction="column"
      my="10"
      px="10"
      py="8"
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading size="md">Criar um curso</Heading>

      <ProgressIndicator
        mode={useBreakpointValue(["vertical", "vertical", "horizontal"])}
        colorScheme="blue"
        w="100%"
        justify="center"
        my="auto"
      >
        <CreateCourseStep />
        <CreateActivityStep />
      </ProgressIndicator>
    </Flex>
  );
};
