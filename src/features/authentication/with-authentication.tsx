import { useAuthenticator } from "@aws-amplify/ui-react";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type ComponentProps<T = {}> = T;

export const withAuthentication = <T,>(
  Component: (props: ComponentProps<T>) => JSX.Element | null
) => {
  return function Route(props: ComponentProps<T>) {
    const location = useLocation();
    const navigate = useNavigate();
    const { user: cognitoUser } = useAuthenticator((context) => [context.user]);

    const checkCognitoAuthentication = useCallback(() => {
      if (!cognitoUser) {
        if (location.pathname !== "/login") {
          navigate(`/login?redirect=${location.pathname}`);
        }
      }
    }, [cognitoUser, location.pathname, navigate]);

    useEffect(() => {
      checkCognitoAuthentication();
    }, [checkCognitoAuthentication]);

    return <Component {...props} />;
  };
};
