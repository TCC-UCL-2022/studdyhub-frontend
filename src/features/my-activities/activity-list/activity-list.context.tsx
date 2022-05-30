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
  loading: boolean;
};

const defaultValue: ActivityListContextProps = {
  activities: [],
  setActivities: () => {},
  courseId: "",
  loading: false,
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
  const [loading, setLoading] = useState(true);

  const fetchActivities = useCallback(async () => {
    setLoading(true);

    const fetchedActivities = await ActivitiesService.getCourseActivities(
      courseId
    );

    setActivities(fetchedActivities);
    setLoading(false);
  }, [courseId]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return (
    <ActivityListContext.Provider
      value={{ activities, courseId, loading, setActivities }}
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
