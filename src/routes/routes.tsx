import {
  CourseDetailsPage,
  CreateCoursePage,
  HomePage,
  ListMyCoursesPage,
  LoginPage,
  MyCourseDetailsPage,
  NotFoundPage,
  OnboardingPage,
  SearchPage,
  WatchCoursePage,
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
    component: <ListMyCoursesPage />,
  },
  {
    path: "/my-courses/:courseId",
    component: <MyCourseDetailsPage />,
  },
  {
    path: "/courses/watch/:courseId",
    component: <WatchCoursePage />,
  },
  {
    path: "/courses/watch/:courseId/:activityId",
    component: <WatchCoursePage />,
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
    path: "/courses",
    component: <SearchPage />,
  },
  {
    path: "/courses/:courseId",
    component: <CourseDetailsPage />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
  },
];
