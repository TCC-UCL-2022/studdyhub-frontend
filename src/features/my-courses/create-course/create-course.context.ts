import { ICourse } from "@/services/courses";
import { createContext, useContext } from "react";

export enum CreateCourseSteps {
  CourseInfo,
  Activities,
}

type CreateCourseContextType = {
  currentStep: CreateCourseSteps;
  setStep: React.Dispatch<React.SetStateAction<CreateCourseSteps>>;
  course: ICourse | null;
  setCourse: React.Dispatch<React.SetStateAction<ICourse | null>>;
};

const defaultValue: CreateCourseContextType = {
  currentStep: CreateCourseSteps.CourseInfo,
  setStep: () => {},
  course: null,
  setCourse: () => {},
};

export const CreateCourseContext =
  createContext<CreateCourseContextType>(defaultValue);

export const useCreateCourseContext = () => useContext(CreateCourseContext);
