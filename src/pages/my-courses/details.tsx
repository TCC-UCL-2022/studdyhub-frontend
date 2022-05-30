import { CourseDetails } from "@/features/my-courses";
import { AppLayout, MyCoursesLayout } from "@/features/ui/layout";

export const CourseDetailsPage = (): JSX.Element => {
  return (
    <AppLayout title="Detalhes do curso">
      <MyCoursesLayout subTitle="Detalhes do curso">
        <CourseDetails />
      </MyCoursesLayout>
    </AppLayout>
  );
};
