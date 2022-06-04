import { createContext, useContext } from "react";

type ActivityListContextProps = {
  refetchActivities: () => Promise<void>;
  courseId: string;
};

const defaultValue: ActivityListContextProps = {
  refetchActivities: async () => {},
  courseId: "",
};

export const ActivityListContext =
  createContext<ActivityListContextProps>(defaultValue);

export const useActivityListContext = () => {
  const context = useContext(ActivityListContext);

  if (!context) {
    throw new Error(
      "useActivityListContext must be used within a ActivityListProvider"
    );
  }

  return context;
};
