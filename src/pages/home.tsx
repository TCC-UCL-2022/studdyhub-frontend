import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Button } from "@chakra-ui/react";

const HomeComponent = (): JSX.Element => {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={signOut}>Logout</Button>
    </div>
  );
};

export const HomePage = withAuthenticator(HomeComponent, {
  formFields: {
    signIn: {
      password: {
        label: "Senha",
        placeholder: "Senha",
      },
    },
    signUp: {
      password: {
        label: "Senha",
        placeholder: "Senha",
      },
      confirm_password: {
        label: "Confirmar Senha",
        placeholder: "Confirmar Senha",
      },
    },
    resetPassword: {
      username: {
        placeholder: "Entre com seu email",
      },
    },
  },
});
