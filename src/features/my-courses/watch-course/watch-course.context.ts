import { ICourse } from "@/services/courses";
import { createContext, useContext } from "react";

type WatchCourseContextType = {
  course: ICourse | null;
  currentActivityId?: string;
};

export const WatchCourseContext = createContext<WatchCourseContextType>({
  course: null,
});

export const useWatchCourseContext = () => {
  const context = useContext(WatchCourseContext);
  if (context === undefined) {
    throw new Error(
      "useWatchCourseContext must be used within a WatchCourseContextProvider"
    );
  }
  return context;
};
