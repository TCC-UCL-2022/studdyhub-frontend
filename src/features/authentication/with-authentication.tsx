import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type WithAuthenticationProps = {
  children: React.ReactNode;
};

export const WithAuthentication = ({ children }: WithAuthenticationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirect=${location.pathname}`);
    }
  }, [user, location, navigate]);

  return <>{children}</>;
};
