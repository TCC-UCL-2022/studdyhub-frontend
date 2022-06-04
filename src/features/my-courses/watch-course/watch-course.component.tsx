import { ErrorMessage, LoadingState } from "@/features/ui/feedback";
import { CourseService } from "@/services/courses";
import { Box, Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { CourseContentBar } from "./course-content-bar";
import { CourseDescription } from "./course-description";
import { WatchCourseContext } from "./watch-course.context";

type WatchCourseProps = {
  courseId: string;
  activityId?: string;
};

export const WatchCourse = ({
  courseId,
  activityId,
}: WatchCourseProps): JSX.Element => {
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery(
    `COURSE_DATA_${courseId}`,
    () => CourseService.getCourseById(courseId),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  useEffect(() => {
    if (!activityId && data && data.activities.length > 0) {
      navigate(`/courses/watch/${courseId}/${data.activities[0].id}`);
    }
  }, [activityId, courseId, data, navigate]);

  return (
    <VStack spacing="8" w="100%" direction="column" mb="10" mt="4" px="10">
      {isLoading && <LoadingState />}

      {!isLoading && !data && <ErrorMessage onRetry={refetch as any} />}

      {!isLoading && data && (
        <WatchCourseContext.Provider
          value={{ course: data, currentActivityId: activityId }}
        >
          <Stack
            spacing="8"
            direction={{ base: "column", lg: "row" }}
            w="100%"
            h="500px"
          >
            <Box
              w={{ base: "100%", lg: "70%" }}
              h="100%"
              borderRadius="lg"
              boxShadow="md"
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bgColor={useColorModeValue("white", "gray.800")}
            />

            <Box h="100%" w={{ base: "100%", lg: "30%" }}>
              <CourseContentBar />
            </Box>
          </Stack>

          <CourseDescription />
        </WatchCourseContext.Provider>
      )}
    </VStack>
  );
};
