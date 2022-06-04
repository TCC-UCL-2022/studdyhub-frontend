import { ActivityList } from "@/features/my-activities";
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
        activitiesComponent={<ActivityList courseId={courseId} />}
      />
    );
  }

  return (
    <CourseDetailsStudent
      courseId={courseId}
      infoComponent={<CourseInfo courseId={courseId} />}
      activitiesComponent={<ActivityList courseId={courseId} align="start" />}
    />
  );
};
