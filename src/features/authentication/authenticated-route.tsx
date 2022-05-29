import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthenticatedRoute = () => {
  const location = useLocation();

  const { user } = useAuthenticator((context) => [context.user]);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?redirect=${location.pathname}`} />
  );
};
