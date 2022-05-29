import {
  CreateCoursePage,
  HomePage,
  ListCoursesPage,
  LoginPage,
  NotFoundPage,
  OnboardingPage,
} from "@/pages";

interface IRoute {
  path: string;
  component: React.ReactNode;
  index?: boolean;
}

export const authenticatedRoutes: IRoute[] = [
  {
    path: "/onboarding",
    component: <OnboardingPage />,
  },
  {
    path: "/my-courses/create",
    component: <CreateCoursePage />,
  },
  {
    path: "/my-courses",
    component: <ListCoursesPage />,
  },
];

export const routes: IRoute[] = [
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/",
    component: <HomePage />,
    index: true,
  },
  {
    path: "*",
    component: <NotFoundPage />,
  },
];
