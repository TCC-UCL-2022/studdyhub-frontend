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
};

const defaultValue: ActivityListContextProps = {
  activities: [],
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
    <ActivityListContext.Provider value={{ activities }}>
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
