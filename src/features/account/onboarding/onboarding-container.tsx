import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { OnboardingSelectRole } from "./onboarding-select-role";
import { useOnboardingContext } from "./onboarding.context";

export const OnboardingContainer = (): JSX.Element => {
  const { role, handleFinishOnboarding } = useOnboardingContext();

  return (
    <VStack spacing={["10"]} textAlign="center">
      <Heading>Bem vindo ao Studdyhub!</Heading>

      <Text fontSize="xl">Para começar, selecione o seu perfil.</Text>

      <OnboardingSelectRole />

      <Button
        w="100%"
        onClick={handleFinishOnboarding}
        disabled={!role}
        colorScheme="blue"
      >
        Continuar
      </Button>
    </VStack>
  );
};
