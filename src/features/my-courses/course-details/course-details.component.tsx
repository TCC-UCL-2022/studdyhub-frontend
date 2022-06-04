import { ActivityList, ActivityListProvider } from "@/features/my-activities";
import { CourseDetailsStudent } from "./course-details-student";
import { CourseDetailsTeacher } from "./course-details-teacher";
import { CourseInfo } from "./course-info";

type CourseDetailsProps = {
  courseId: string;
  withTabs?: boolean;
};

export const CourseDetails = ({
  courseId,
  withTabs = true,
}: CourseDetailsProps): JSX.Element => {
  if (withTabs) {
    return (
      <CourseDetailsTeacher
        infoComponent={<CourseInfo courseId={courseId} />}
        activitiesComponent={
          <ActivityListProvider courseId={courseId}>
            <ActivityList />
          </ActivityListProvider>
        }
      />
    );
  }

  return (
    <CourseDetailsStudent
      courseId={courseId}
      infoComponent={<CourseInfo courseId={courseId} />}
      activitiesComponent={
        <ActivityListProvider courseId={courseId}>
          <ActivityList align="start" />
        </ActivityListProvider>
      }
    />
  );
};
