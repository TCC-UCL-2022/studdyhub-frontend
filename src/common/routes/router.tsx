import {
  AuthenticatedRoute,
  AuthenticationProvider,
} from "@/features/authentication";
import { EnrollmentsProvider } from "@/features/enrollments";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authenticatedRoutes, routes } from "./routes";

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <AuthenticationProvider>
      <EnrollmentsProvider>
        <Routes>
          {authenticatedRoutes.map(({ component, path, index = false }) => (
            <Route
              key={path}
              path={path}
              element={<AuthenticatedRoute />}
              index={index}
            >
              <Route path={path} element={component} index={index} />
            </Route>
          ))}

          {routes.map(({ component, path, index = false }) => (
            <Route key={path} path={path} element={component} index={index} />
          ))}
        </Routes>
      </EnrollmentsProvider>
    </AuthenticationProvider>
  </BrowserRouter>
);
