import { AppLayout } from "@/features/ui/layout";
import "@aws-amplify/ui-react/styles.css";

export const HomePage = (): JSX.Element => {
  return (
    <AppLayout title="Início">
      <h1>Home</h1>
    </AppLayout>
  );
};
