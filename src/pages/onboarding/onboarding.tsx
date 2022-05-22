import {
  OnboardingContainer,
  OnboardingContextProvider,
} from "@features/account";
import { AppLayout } from "@features/ui/layout";

export const OnboardingPage = (): JSX.Element => (
  <AppLayout title="Primeiro Acesso">
    <OnboardingContextProvider>
      <OnboardingContainer />
    </OnboardingContextProvider>
  </AppLayout>
);
