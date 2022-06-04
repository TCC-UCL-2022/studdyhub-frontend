import { EnrollmentsService, IEnrollment } from "@/services/enrollments";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthenticationContext } from "../authentication";

type EnrollmentsContextType = {
  enrollments: IEnrollment[];
  isLoading: boolean;
  fetchEnrollments: () => Promise<void>;
};

const EnrollmentsContext = createContext<EnrollmentsContextType>({
  enrollments: [],
  isLoading: false,
  fetchEnrollments: async () => {},
});

export const EnrollmentsProvider = ({ children }: PropsWithChildren<{}>) => {
  const { user } = useAuthenticationContext();
  const [enrollments, setEnrollments] = useState<IEnrollment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEnrollments = useCallback(async () => {
    if (user?.id) {
      setIsLoading(true);
      const data = await EnrollmentsService.getEnrollments(user.id);
      setEnrollments(data);
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchEnrollments();
  }, [fetchEnrollments]);

  return (
    <EnrollmentsContext.Provider
      value={{
        enrollments,
        isLoading,
        fetchEnrollments,
      }}
    >
      {children}
    </EnrollmentsContext.Provider>
  );
};

export const useEnrollmentsContext = () => {
  const context = useContext(EnrollmentsContext);
  if (!context) {
    throw new Error(
      "useEnrollmentsContext must be used within a EnrollmentsProvider"
    );
  }
  return context;
};
