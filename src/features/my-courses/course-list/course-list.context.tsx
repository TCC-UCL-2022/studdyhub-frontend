import { useAuthenticationContext } from "@/features/authentication";
import { CourseService, ICourse } from "@/services/courses";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type CourseListContextProps = {
  courses: ICourse[];
  setCourses: React.Dispatch<React.SetStateAction<ICourse[]>>;
  loading: boolean;
};

export enum PublishStatus {
  All = "all",
  Published = "published",
  Unpublished = "unpublished",
}

const defaultValue: CourseListContextProps = {
  courses: [],
  setCourses: () => {},
  loading: false,
};

export const CourseListContext =
  createContext<CourseListContextProps>(defaultValue);

type CourseListContextProviderProps = {
  published?: PublishStatus;
};

const mapPublishStatusToQuery = (published: PublishStatus) => {
  const mapKeys = {
    [PublishStatus.All]: undefined,
    [PublishStatus.Published]: true,
    [PublishStatus.Unpublished]: false,
  };

  return mapKeys[published];
};

export const CourseListProvider = ({
  children,
  published = PublishStatus.All,
}: PropsWithChildren<CourseListContextProviderProps>) => {
  const { user } = useAuthenticationContext();
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUserCourses = useCallback(async () => {
    if (user?.id) {
      setLoading(true);
      const fetchedCourses = await CourseService.getCourseByUserId(
        user.id,
        mapPublishStatusToQuery(published)
      );

      setCourses(fetchedCourses.items);
      setLoading(false);
    }
  }, [published, user]);

  useEffect(() => {
    fetchUserCourses();
  }, [fetchUserCourses]);

  return (
    <CourseListContext.Provider value={{ courses, loading, setCourses }}>
      {children}
    </CourseListContext.Provider>
  );
};

export const useCourseListContext = () => {
  const context = useContext(CourseListContext);

  if (!context) {
    throw new Error(
      "useCourseListContext must be used within a CourseListProvider"
    );
  }

  return context;
};
