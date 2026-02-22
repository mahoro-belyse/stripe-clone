import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { base44 } from "../api/base44Client";
import { appParams } from "@/lib/app-params";
import { createAxiosClient } from "@base44/sdk/dist/utils/axios-client";

// Types
interface AuthError {
  type: string;
  message: string;
}

interface AppPublicSettings {
  id: string;
  public_settings: Record<string, any>;
}

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
  isLoadingPublicSettings: boolean;
  authError: AuthError | null;
  appPublicSettings: AppPublicSettings | null;
  logout: (shouldRedirect?: boolean) => void;
  navigateToLogin: () => void;
  checkAppState: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] =
    useState<boolean>(true);
  const [authError, setAuthError] = useState<AuthError | null>(null);
  const [appPublicSettings, setAppPublicSettings] =
    useState<AppPublicSettings | null>(null);

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);

      if (!appParams.appId) {
        throw new Error("Missing Base44 App ID");
      }

      const appClient = createAxiosClient({
        baseURL: `/api/apps/public`,
        headers: {
          "X-App-Id": appParams.appId,
        },
        token: appParams.token ?? undefined,
        interceptResponses: true,
      });

      try {
        const response = await appClient.get<AppPublicSettings>(
          `/prod/public-settings/by-id/${appParams.appId}`,
        );

        setAppPublicSettings(response.data);

        if (appParams.token) {
          await checkUserAuth();
        } else {
          setIsLoadingAuth(false);
          setIsAuthenticated(false);
        }
        setIsLoadingPublicSettings(false);
      } catch (appError: any) {
        console.error("App state check failed:", appError);

        if (appError.status === 403 && appError.data?.extra_data?.reason) {
          const reason = appError.data.extra_data.reason;
          if (reason === "auth_required") {
            setAuthError({
              type: "auth_required",
              message: "Authentication required",
            });
          } else if (reason === "user_not_registered") {
            setAuthError({
              type: "user_not_registered",
              message: "User not registered for this app",
            });
          } else {
            setAuthError({ type: reason, message: appError.message });
          }
        } else {
          setAuthError({
            type: "unknown",
            message: appError.message || "Failed to load app",
          });
        }

        setIsLoadingPublicSettings(false);
        setIsLoadingAuth(false);
      }
    } catch (error: any) {
      console.error("Unexpected error:", error);
      setAuthError({
        type: "unknown",
        message: error.message || "An unexpected error occurred",
      });
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
    }
  };

  const checkUserAuth = async () => {
    try {
      setIsLoadingAuth(true);
      const currentUser = await base44.auth.me();
      setUser(currentUser);
      setIsAuthenticated(true);
      setIsLoadingAuth(false);
    } catch (error: any) {
      console.error("User auth check failed:", error);
      setIsLoadingAuth(false);
      setIsAuthenticated(false);

      if (error.status === 401 || error.status === 403) {
        setAuthError({
          type: "auth_required",
          message: "Authentication required",
        });
      }
    }
  };

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);

    if (shouldRedirect) {
      base44.auth.logout(window.location.href);
    } else {
      base44.auth.logout();
    }
  };

  const navigateToLogin = () => {
    base44.auth.redirectToLogin(window.location.href);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        appPublicSettings,
        logout,
        navigateToLogin,
        checkAppState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
