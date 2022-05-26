import { createContext, useContext } from "react";

export enum CreateCourseSteps {
  CourseInfo,
  Activities,
}

type CreateCourseContextType = {
  currentStep: CreateCourseSteps;
  setStep: (step: CreateCourseSteps) => void;
};

const defaultValue: CreateCourseContextType = {
  currentStep: CreateCourseSteps.CourseInfo,
  setStep: () => {},
};

export const CreateCourseContext =
  createContext<CreateCourseContextType>(defaultValue);

export const useCreateCourseContext = () => useContext(CreateCourseContext);
