type CourseContainerProps = {
  courseId: string;
};

export const CourseInfoContainer = ({
  courseId,
}: CourseContainerProps): JSX.Element => {
  return (
    <div>
      <h1>Course Info Container</h1>
      <p>Course ID: {courseId}</p>
    </div>
  );
};
