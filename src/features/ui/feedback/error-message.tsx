import { Button, Text, VStack } from "@chakra-ui/react";
import { RiRefreshFill } from "react-icons/ri";

type ErrorMessageProps = {
  onRetry: () => void;
};
export const ErrorMessage = ({ onRetry }: ErrorMessageProps): JSX.Element => {
  return (
    <VStack spacing="4">
      <Text>Ops! Algo deu errado</Text>
      <Button
        colorScheme="green"
        rightIcon={<RiRefreshFill />}
        onClick={onRetry as any}
        size="sm"
      >
        Recarregar
      </Button>
    </VStack>
  );
};
