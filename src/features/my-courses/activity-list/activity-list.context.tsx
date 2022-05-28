import { ActivitiesService, IActivity } from "@/services/activities";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ActivityListContextProps = {
  activities: IActivity[];
  setActivities: React.Dispatch<React.SetStateAction<IActivity[]>>;
  courseId: string;
};

const defaultValue: ActivityListContextProps = {
  activities: [],
  setActivities: () => {},
  courseId: "",
};

export const ActivityListContext =
  createContext<ActivityListContextProps>(defaultValue);

type ActivityListProviderProps = {
  courseId: string;
};

export const ActivityListProvider = ({
  courseId,
  children,
}: PropsWithChildren<ActivityListProviderProps>) => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  const fetchActivities = useCallback(async () => {
    const fetchedActivities = await ActivitiesService.getCourseActivities(
      courseId
    );

    setActivities(fetchedActivities);
  }, [courseId]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return (
    <ActivityListContext.Provider
      value={{ activities, courseId, setActivities }}
    >
      {children}
    </ActivityListContext.Provider>
  );
};

export const useActivityListContext = () => {
  const context = useContext(ActivityListContext);

  if (!context) {
    throw new Error(
      "useActivityListContext must be used within a ActivityListProvider"
    );
  }

  return context;
};
