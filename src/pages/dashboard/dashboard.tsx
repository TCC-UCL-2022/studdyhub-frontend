import { DashboardContainer } from "@/features/dashboard";
import { AppLayout } from "@/features/ui/layout";

export const DashboardPage = (): JSX.Element => {
  return (
    <AppLayout title="Início">
      <DashboardContainer />
    </AppLayout>
  );
};
