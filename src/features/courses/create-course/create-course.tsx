import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { StepsContainer } from "./steps-container";

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

      <StepsContainer />
    </Flex>
  );
};
