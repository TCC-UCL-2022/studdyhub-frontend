import { ProgressIndicator, Step } from "@/features/ui/navigation";
import { ICourse } from "@/services/courses";
import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CreateActivityStep } from "./create-activity-step";
import { CreateCourseStep } from "./create-course-step";
import {
  CreateCourseContext,
  CreateCourseSteps,
} from "./create-course.context";

const steps = [
  {
    title: "Passo 1",
    subTitle: "Informações sobre o curso",
    component: <CreateCourseStep />,
  },
  {
    title: "Passo 2",
    subTitle: "Adicione atividades",
    component: <CreateActivityStep />,
  },
];

type StepsContainerProps = {
  courseToEdit?: ICourse | null;
};

export const StepsContainer = ({
  courseToEdit = null,
}: StepsContainerProps): JSX.Element => {
  const [step, setStep] = useState(CreateCourseSteps.CourseInfo);
  const [course, setCourse] = useState<ICourse | null>(courseToEdit);

  return (
    <CreateCourseContext.Provider
      value={{ currentStep: step, setStep, course, setCourse }}
    >
      <VStack spacing="5" mt="5">
        <ProgressIndicator
          mode="horizontal"
          colorScheme="blue"
          w="100%"
          justify="center"
        >
          {steps.map(({ title, subTitle }, index) => (
            <Step
              title={title}
              subtitle={subTitle}
              current={step === index}
              done={step > index}
            />
          ))}
        </ProgressIndicator>

        {steps[step].component}
      </VStack>
    </CreateCourseContext.Provider>
  );
};
