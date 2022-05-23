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
      color={useColorModeValue("gray.800", "gray.200")}
      direction="column"
      h="100%"
      mt="10"
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
