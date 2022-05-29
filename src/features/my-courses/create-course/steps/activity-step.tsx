import { ActivityList, ActivityListProvider } from "@/features/my-activities";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useCreateCourseContext } from "../create-course.context";

export const CreateActivityStep = (): JSX.Element => {
  const { setStep, course } = useCreateCourseContext();
  const navigate = useNavigate();

  return (
    <Flex w="100%" direction="column" h="100%">
      {course && (
        <ActivityListProvider courseId={course.id}>
          <ActivityList />
        </ActivityListProvider>
      )}

      <ButtonGroup w="100%" justifyContent="space-between">
        <Button
          mt="auto"
          leftIcon={<RiArrowLeftFill />}
          onClick={() => setStep((prev) => prev - 1)}
        >
          Voltar
        </Button>
        <Button
          colorScheme="blue"
          mt="auto"
          rightIcon={<RiArrowRightFill />}
          onClick={() => navigate("/my-courses")}
        >
          Próximo
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
