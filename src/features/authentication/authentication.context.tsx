import { ACCESS_TOKEN_KEY } from "@/constants";
import { Roles } from "@/enums";
import { IUser, UserService } from "@/services/user";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Center, Spinner } from "@chakra-ui/react";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AuthenticationContextProps = {
  user: IUser | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
  handleUserFirstAccess: (role: Roles) => Promise<void>;
  signOut: () => void;
};

const initialContext: AuthenticationContextProps = {
  user: null,
  loading: false,
  fetchUser: async () => {},
  handleUserFirstAccess: async () => {},
  signOut: () => {},
};

const authenticationContext = createContext(initialContext);

const setToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const AuthenticationProvider = ({ children }: PropsWithChildren<{}>) => {
  const [context, setContext] = useState(initialContext);
  const { user: cognitoUser, signOut } = useAuthenticator((context) => [
    context.user,
  ]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUser = useCallback(async () => {
    if (cognitoUser && !context.user) {
      setContext((prev) => ({
        ...prev,
        loading: true,
      }));

      const session = cognitoUser.getSignInUserSession();
      const token = session?.getIdToken().getJwtToken();

      if (token) {
        setToken(token);
      }

      const user = await UserService.getUser(cognitoUser.attributes?.sub || "");

      if (!user) {
        if (location.pathname !== "/onboarding") {
          return navigate("/onboarding");
        }
      }

      setContext((prev) => ({
        ...prev,
        user,
        cognitoUser,
        loading: false,
      }));
    }
  }, [cognitoUser, context.user, location.pathname, navigate]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleUserFirstAccess = useCallback(
    async (role: Roles) => {
      if (role && cognitoUser?.attributes) {
        const user = await UserService.createUser({
          cognitoId: cognitoUser.attributes.sub || "",
          email: cognitoUser.attributes.email || "",
          role,
          name: cognitoUser.attributes.name || "",
        });

        setContext((prev) => ({
          ...prev,
          user,
          loading: false,
        }));
      }
    },
    [cognitoUser]
  );

  if (context.loading) {
    return (
      <Center h="100vh">
        <Spinner color="blue.500" size="lg" />
      </Center>
    );
  }

  return (
    <authenticationContext.Provider
      value={{ ...context, fetchUser, handleUserFirstAccess, signOut }}
    >
      {children}
    </authenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  const context = useContext(authenticationContext);

  if (!context) {
    throw new Error(
      "useAuthenticationContext must be used within a AuthenticationProvider"
    );
  }

  return context;
};
