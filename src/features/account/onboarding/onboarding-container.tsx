import { Heading, Text, VStack } from "@chakra-ui/react";
import { OnboardingButton } from "./onboarding-button";
import { OnboardingSelectRole } from "./onboarding-select-role";

export const OnboardingContainer = (): JSX.Element => {
  return (
    <VStack spacing={["10"]} textAlign="center">
      <Heading>Bem vindo ao Studdyhub!</Heading>

      <Text fontSize="xl">Para começar, selecione o seu perfil.</Text>

      <OnboardingSelectRole />

      <OnboardingButton />
    </VStack>
  );
};
