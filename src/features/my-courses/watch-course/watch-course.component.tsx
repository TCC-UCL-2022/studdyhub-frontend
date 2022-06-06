import { Storage } from "aws-amplify";
import { ErrorMessage, LoadingState } from "@/features/ui/feedback";
import { VideoPlayer } from "@/features/ui/media";
import { IActivity } from "@/services/activities";
import { CourseService } from "@/services/courses";
import {
  Box,
  Center,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { CourseContentBar } from "./course-content-bar";
import { CourseDescription } from "./course-description";

type WatchCourseProps = {
  courseId: string;
  activityId?: string;
};

type SourceProps = {
  src: string;
  type: string;
  label: string;
};

const getVideoQualityLabel = (key: string): string => {
  return key.split("_")[key.split("_").length - 1].replace(".mp4", "p");
};

const getVideoSourceUrl = async (key: string): Promise<string> => {
  return await Storage.get(key, {
    customPrefix: {
      public: "protected/",
    },
    expires: 24 * 60 * 60,
  });
};

const listActivitiesSources = async (
  activity: IActivity
): Promise<SourceProps[]> => {
  const sources = await Storage.list(activity.id, {
    customPrefix: {
      public: "protected/",
    },
  });

  const promises = sources.map(async (source) => ({
    src: await getVideoSourceUrl(source.key || ""),
    type: "video/mp4",
    label: getVideoQualityLabel(source.key || ""),
  }));

  return Promise.all(promises);
};

export const WatchCourse = ({
  courseId,
  activityId,
}: WatchCourseProps): JSX.Element => {
  const navigate = useNavigate();
  const [sources, setSources] = useState<SourceProps[]>();

  const { data, isLoading, refetch } = useQuery(
    `COURSE_DATA_${courseId}`,
    () => CourseService.getCourseById(courseId),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const fetchActivitySources = useCallback(async () => {
    if (activityId) {
      const activity = data?.activities.find(
        (activity) => activity.id === activityId
      );
      if (activity) {
        const sources = await listActivitiesSources(activity);

        sources.sort((a, b) => a.label.localeCompare(b.label));

        setSources(sources);
      }
    }
  }, [data, activityId]);

  useEffect(() => {
    fetchActivitySources();
  }, [fetchActivitySources]);

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
                  sources,
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
