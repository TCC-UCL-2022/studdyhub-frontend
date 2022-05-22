import { Button, ButtonGroup, Center, Heading, VStack } from "@chakra-ui/react";

export const SelectRole = (): JSX.Element => {
  return (
    <Center w="100%" h="100%" flexDirection="column">
      <Heading>Bem vindo ao Studdyhub!</Heading>

      <VStack mt={["10", "20"]}>
        <ButtonGroup spacing={4}>
          <Button variant="outline">Aluno</Button>
          <Button variant="outline">Professor</Button>
        </ButtonGroup>
      </VStack>
    </Center>
  );
};
