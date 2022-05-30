import { CourseDetails } from "@/features/my-courses";
import { AppLayout, MyCoursesLayout } from "@/features/ui/layout";
import { useParams } from "react-router-dom";

export const CourseDetailsPage = (): JSX.Element => {
  const { courseId } = useParams<{ courseId: string }>();

  return (
    <AppLayout title="Detalhes do curso">
      <MyCoursesLayout subTitle="Detalhes do curso" backButton>
        {!courseId && <div>CourseId not found</div>}
        {courseId && <CourseDetails courseId={courseId} />}
      </MyCoursesLayout>
    </AppLayout>
  );
};
