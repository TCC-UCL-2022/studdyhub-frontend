import { RouteAuthenticator } from "@features/authentication";
import { HomePage, LoginPage, NotFoundPage } from "@pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface IRoute {
  path: string;
  component: React.ReactNode;
  index?: boolean;
}

const authenticatedRoutes: IRoute[] = [
  {
    path: "/",
    component: <HomePage />,
    index: true,
  },
];

const routes: IRoute[] = [
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
  },
];

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      {authenticatedRoutes.map(({ component, path, index = false }) => (
        <Route
          key={path}
          path={path}
          element={
            <RouteAuthenticator children={component}></RouteAuthenticator>
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
