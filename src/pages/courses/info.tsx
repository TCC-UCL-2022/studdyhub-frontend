import { CourseDetails } from "@/features/my-courses";
import { AppLayout, MyCoursesLayout } from "@/features/ui/layout";
import { useNavigate, useParams } from "react-router-dom";

export const CourseInfoPage = (): JSX.Element | null => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  if (!courseId) {
    navigate("/");

    return null;
  }

  return (
    <AppLayout title="Informações do Curso">
      <MyCoursesLayout subTitle="Informações do Curso" backButton>
        <CourseDetails courseId={courseId} withTabs={false} />
      </MyCoursesLayout>
    </AppLayout>
  );
};
