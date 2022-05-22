import { AuthenticationProvider } from "@features/authentication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authenticatedRoutes, routes } from "./routes";

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      {authenticatedRoutes.map(({ component, path, index = false }) => (
        <Route
          key={path}
          path={path}
          element={
            <AuthenticationProvider
              children={component}
            ></AuthenticationProvider>
          }
          index={index}
        />
      ))}

      {routes.map(({ component, path, index = false }) => (
        <Route key={path} path={path} element={component} index={index} />
      ))}
    </Routes>
  </BrowserRouter>
);
