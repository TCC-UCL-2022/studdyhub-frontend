import { Button } from "@chakra-ui/react";
import { useOnboardingContext } from "./onboarding.context";

export const OnboardingButton = (): JSX.Element => {
  const { handleFinishOnboarding, role } = useOnboardingContext();

  return (
    <Button
      w="100%"
      onClick={handleFinishOnboarding}
      disabled={!role}
      colorScheme="blue"
    >
      Continuar
    </Button>
  );
};
