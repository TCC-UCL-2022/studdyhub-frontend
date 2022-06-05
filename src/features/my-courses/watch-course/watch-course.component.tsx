import { ErrorMessage, LoadingState } from "@/features/ui/feedback";
import { VideoPlayer } from "@/features/ui/media";
import { CourseService } from "@/services/courses";
import {
  Box,
  Center,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { CourseContentBar } from "./course-content-bar";
import { CourseDescription } from "./course-description";

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

      {!isLoading && data && activityId && (
        <>
          <Stack
            spacing="8"
            direction={{ base: "column", lg: "row" }}
            w="100%"
            h="500px"
          >
            <Center
              w={{ base: "100%", lg: "70%" }}
              h="100%"
              borderRadius="lg"
              boxShadow="md"
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bgColor={useColorModeValue("white", "gray.800")}
              position="relative"
            >
              <VideoPlayer
                options={{
                  sources: [
                    {
                      src: "https://studdyhub-video-output.s3.amazonaws.com/a5s6d4a56s4d5a4s654d65asd5as56d4a_1080.mp4",
                      type: "video/mp4",
                    },
                  ],
                }}
              />
            </Center>

            <Box h="100%" w={{ base: "100%", lg: "30%" }}>
              <CourseContentBar course={data} currentActivityId={activityId} />
            </Box>
          </Stack>

          <CourseDescription course={data} />
        </>
      )}
    </VStack>
  );
};
