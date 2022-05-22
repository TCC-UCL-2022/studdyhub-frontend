import { HomePage, LoginPage, NotFoundPage } from "@pages";

interface IRoute {
  path: string;
  component: React.ReactNode;
  index?: boolean;
}

export const authenticatedRoutes: IRoute[] = [
  {
    path: "/",
    component: <HomePage />,
    index: true,
  },
];

export const routes: IRoute[] = [
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
  },
];
