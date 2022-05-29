import { CourseList } from "@/features/my-courses";
import { AppLayout } from "@/features/ui/layout";

export const ListCoursesPage = (): JSX.Element => {
  return (
    <AppLayout title="Meus cursos">
      <CourseList />
    </AppLayout>
  );
};
