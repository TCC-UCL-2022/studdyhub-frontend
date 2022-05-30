import { CreateCourse } from "@/features/my-courses";
import { AppLayout, MyCoursesLayout } from "@/features/ui/layout";

export const CreateCoursePage = (): JSX.Element => {
  return (
    <AppLayout title="Criar curso">
      <MyCoursesLayout subTitle="Criar um curso">
        <CreateCourse />
      </MyCoursesLayout>
    </AppLayout>
  );
};
