import { CourseInfoContainer } from "@/features/course-info";
import { AppLayout } from "@/features/ui/layout";
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
      <CourseInfoContainer courseId={courseId} />
    </AppLayout>
  );
};
