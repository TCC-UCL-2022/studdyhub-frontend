import { Center, Spinner } from "@chakra-ui/react";

export const LoadingState = (): JSX.Element => {
  return (
    <Center h="100%" w="100%">
      <Spinner colorScheme="blue" />
    </Center>
  );
};
