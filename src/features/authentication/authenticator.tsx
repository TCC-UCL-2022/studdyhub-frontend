import { withAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthenticatorComponent = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    if (redirect) {
      navigate(redirect);
    }
  }, [navigate, redirect]);

  return (
    <>
      <title>Login | Studdyhub</title>
      <div>Login</div>
    </>
  );
};

export const Authenticator = withAuthenticator(AuthenticatorComponent, {
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
