import { Button } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { useOnboardingContext } from "./onboarding.context";

export const OnboardingButton = (): JSX.Element => {
  const { handleFinishOnboarding, role } = useOnboardingContext();

  const { mutate, isLoading } = useMutation(handleFinishOnboarding);

  return (
    <Button
      w="100%"
      onClick={mutate as any}
      disabled={!role}
      colorScheme="blue"
      isLoading={isLoading}
    >
      Continuar
    </Button>
  );
};
