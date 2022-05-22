import { Login } from "@features/authentication";
import { useTitle } from "@features/ui/page";

export const LoginPage = (): JSX.Element => {
  useTitle("Login");

  return <Login />;
};
