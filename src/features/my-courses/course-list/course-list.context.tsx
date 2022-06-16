import { useAuthenticationContext } from "@/features/authentication";
import { CourseService, ICourse } from "@/services/courses";
import { useDisclosure } from "@chakra-ui/react";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { EditCourseForm, EditCourseModal } from "../edit-course";

type CourseListContextProps = {
  courses: ICourse[];
  setCourses: React.Dispatch<React.SetStateAction<ICourse[]>>;
  fetchCourses: () => Promise<void>;
  editCourse: (course: ICourse) => void;
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
  fetchCourses: async () => {},
  editCourse: () => {},
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
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState<ICourse | undefined>();

  const fetchUserCourses = useCallback(async () => {
    if (user?.id) {
      setLoading(true);
      const fetchedCourses = await CourseService.getCoursesByUserId(user.id);

      setCourses(fetchedCourses);
      setLoading(false);
    }
  }, [user]);

  const handleChangePublishStatus = useCallback(() => {
    const filteredCourses = courses.filter(
      (course) => course.published === mapPublishStatusToQuery(published)
    );

    setFilteredCourses(filteredCourses);
  }, [courses, published]);

  useEffect(() => {
    fetchUserCourses();
  }, [fetchUserCourses]);

  useEffect(() => {
    handleChangePublishStatus();
  }, [handleChangePublishStatus]);

  const { isOpen, onOpen, onClose } = useDisclosure({});

  const editCourse = useCallback(
    (course: ICourse) => {
      setCourseToEdit(course);
      onOpen();
    },
    [onOpen]
  );

  const onCourseUpdated = useCallback(async () => {
    fetchUserCourses();
    onClose();
  }, [fetchUserCourses, onClose]);

  return (
    <CourseListContext.Provider
      value={{
        courses: filteredCourses,
        loading,
        setCourses,
        fetchCourses: fetchUserCourses,
        editCourse,
      }}
    >
      {children}

      <EditCourseModal isOpen={isOpen} onClose={onClose}>
        {courseToEdit && (
          <EditCourseForm
            course={courseToEdit}
            onUpdated={onCourseUpdated}
            onCancel={onClose}
          />
        )}
      </EditCourseModal>
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
