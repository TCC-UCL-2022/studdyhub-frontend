import { useTitle } from "@features/ui/page";
import { SelectRole } from "@features/user";

export const OnboardingPage = (): JSX.Element => {
  useTitle("Primeiro acesso");

  return <SelectRole />;
};
