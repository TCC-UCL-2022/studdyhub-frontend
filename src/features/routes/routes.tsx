import { HomePage, LoginPage, NotFoundPage, OnboardingPage } from "@pages";

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
  {
    path: "/onboarding",
    component: <OnboardingPage />,
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
