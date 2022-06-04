import { CourseDetails } from "@/features/my-courses";
import { AppLayout, MyCoursesLayout } from "@/features/ui/layout";
import { useNavigate, useParams } from "react-router-dom";

export const MyCourseDetailsPage = (): JSX.Element | null => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  if (!courseId) {
    navigate("/");

    return null;
  }

  return (
    <AppLayout title="Detalhes do curso">
      <MyCoursesLayout subTitle="Detalhes do curso" backButton>
        <CourseDetails courseId={courseId} />
      </MyCoursesLayout>
    </AppLayout>
  );
};
