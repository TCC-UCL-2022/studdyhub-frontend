import { WatchCourse } from "@/features/my-courses";
import { AppLayout } from "@/features/ui/layout";
import { useParams } from "react-router-dom";

export const WatchCoursePage = (): JSX.Element | null => {
  const { courseId, activityId } = useParams<{
    courseId: string;
    activityId: string;
  }>();

  return (
    <AppLayout title="Assistir curso">
      {courseId && <WatchCourse courseId={courseId} activityId={activityId} />}
    </AppLayout>
  );
};
