import { Login } from "@features/authentication";
import { useTitle } from "@features/ui/layout";

export const LoginPage = (): JSX.Element => {
  useTitle("Login");

  return <Login />;
};
