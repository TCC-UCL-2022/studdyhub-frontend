import { Login } from "@/features/authentication";
import { useTitle } from "@/features/ui/hooks";

export const LoginPage = (): JSX.Element => {
  useTitle("Login");

  return <Login />;
};
