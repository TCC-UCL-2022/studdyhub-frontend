import { useAuthenticationContext } from "@/features/authentication";
import { useEnrollmentsContext } from "@/features/enrollments";
import { EnrollmentsService } from "@/services/enrollments";
import { Button, Stack, Text, VStack } from "@chakra-ui/react";
import { ReactNode, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

type CourseDetailsStudentProps = {
  courseId: string;
  infoComponent: ReactNode;
  activitiesComponent: ReactNode;
};

export const CourseDetailsStudent = ({
  courseId,
  activitiesComponent,
  infoComponent,
}: CourseDetailsStudentProps): JSX.Element => {
  const { user } = useAuthenticationContext();
  const { enrollments, fetchEnrollments } = useEnrollmentsContext();
  const navigate = useNavigate();

  const handleEnrollClick = useCallback(async () => {
    if (!user?.id) {
      return navigate("/login");
    }

    if (enrollments.find((e) => e.course.id === courseId)) {
      return navigate(`/courses/watch/${courseId}`);
    }

    const enrolled = await EnrollmentsService.createEnrollment({
      courseId,
      userId: user.id,
    });

    if (enrolled) {
      await fetchEnrollments();
      return navigate(`/courses/watch/${courseId}`);
    }
  }, [courseId, enrollments, fetchEnrollments, navigate, user?.id]);

  const enrollButtonText = useMemo(() => {
    if (!user?.id) {
      return "Fazer login para se matricular";
    }

    if (enrollments.find((e) => e.course.id === courseId)) {
      return "Acessar curso";
    }

    return "Matricule-se";
  }, [courseId, enrollments, user?.id]);

  return (
    <VStack
      mt="4"
      flexGrow="1"
      overflowY="auto"
      align="start"
      w="100%"
      spacing="10"
    >
      <Stack
        align="flex-start"
        direction={{ base: "column-reverse", lg: "row" }}
        justify={{ base: "flex-start", lg: "space-between" }}
        w="100%"
      >
        {infoComponent}
        <Button colorScheme="blue" size="lg" onClick={handleEnrollClick}>
          {enrollButtonText}
        </Button>
      </Stack>

      <VStack align="flex-start" w="100%">
        <Text fontWeight="semibold">Lista de Atividades</Text>

        {activitiesComponent}
      </VStack>
    </VStack>
  );
};
