import { ProgressIndicator, Step } from "@/features/ui/navigation";
import { ICourse } from "@/services/courses";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
  CreateCourseContext,
  CreateCourseSteps,
} from "./create-course.context";
import { CreateActivityStep, CreateCourseStep } from "./steps";

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

export const CreateCourse = ({
  courseToEdit = null,
}: StepsContainerProps): JSX.Element => {
  const [step, setStep] = useState(CreateCourseSteps.CourseInfo);
  const [course, setCourse] = useState<ICourse | null>(courseToEdit);

  return (
    <CreateCourseContext.Provider
      value={{ currentStep: step, setStep, course, setCourse }}
    >
      <Flex mt="5" flexGrow="1" direction="column">
        <ProgressIndicator
          mode="horizontal"
          colorScheme="blue"
          w="100%"
          justify="center"
        >
          {steps.map(({ title, subTitle }, index) => (
            <Step
              key={`create-course-step-${title}`}
              title={title}
              subtitle={subTitle}
              current={step === index}
              done={step > index}
            />
          ))}
        </ProgressIndicator>

        {steps[step].component}
      </Flex>
    </CreateCourseContext.Provider>
  );
};
