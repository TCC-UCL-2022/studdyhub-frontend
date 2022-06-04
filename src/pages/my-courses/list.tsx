import { CourseList } from "@/features/my-courses";
import { AppLayout, MyCoursesLayout } from "@/features/ui/layout";

export const ListMyCoursesPage = (): JSX.Element => {
  return (
    <AppLayout title="Meus cursos">
      <MyCoursesLayout subTitle="Meus cursos">
        <CourseList />
      </MyCoursesLayout>
    </AppLayout>
  );
};
