import { CreateCourse } from "@/features/my-courses";
import { AppLayout } from "@/features/ui/layout";

export const CreateCoursePage = (): JSX.Element => {
  return (
    <AppLayout title="Criar curso">
      <CreateCourse />
    </AppLayout>
  );
};
