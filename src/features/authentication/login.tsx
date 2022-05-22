import { withAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const LoginComponent = (): JSX.Element => {
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

export const Login = withAuthenticator(LoginComponent, {
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
      name: {
        label: "Nome",
        placeholder: "Nome",
      },
    },
    resetPassword: {
      username: {
        placeholder: "Entre com seu email",
      },
    },
  },
  signUpAttributes: ["name"],
});
