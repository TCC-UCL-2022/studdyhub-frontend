import { Roles } from "@/enums";
import { useAuthenticationContext } from "@/features/authentication";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

type OnboardingContextProps = {
  role?: Roles;
  handleSelectRole: (role: Roles) => void;
  handleFinishOnboarding: () => Promise<void>;
};
const initialContext: OnboardingContextProps = {
  handleSelectRole: () => {},
  handleFinishOnboarding: async () => {},
};

const OnboardingContext = createContext<OnboardingContextProps>(initialContext);

export const OnboardingContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const navigate = useNavigate();
  const [role, setRole] = useState<Roles>();
  const { user, handleUserFirstAccess } = useAuthenticationContext();

  const handleSelectRole = useCallback((role: Roles) => {
    setRole(role);
  }, []);

  const handleFinishOnboarding = useCallback(async () => {
    if (role) {
      await handleUserFirstAccess(role);
      navigate("/");
    }
  }, [handleUserFirstAccess, navigate, role]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <OnboardingContext.Provider
      value={{ role, handleSelectRole, handleFinishOnboarding }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      "useOnboardingContext must be used within a OnboardingContextProvider"
    );
  }

  return context;
};
