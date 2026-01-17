"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/app/services/authService";
import {
  Role,
  Permission,
  ROLE_PERMISSIONS,
  User,
  AuthContextType,
} from "@/app/types/auth";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8085";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const token = authService.getToken();

      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false);
        return;
      }

      // Verify token with backend
      const response = await fetch(`${API_BASE_URL}/api/check-auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...authService.getAuthHeader(),
        },
      });

      if (response.ok) {
        const userData = await response.json();
        const userWithPermissions: User = {
          ...userData,
          permissions: userData.role
            ? ROLE_PERMISSIONS[userData.role as Role] || []
            : [],
        };
        setUser(userWithPermissions);
        setIsAuthenticated(true);
      } else {
        // Token is invalid
        authService.logout();
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      authService.logout();
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials: { username: string; password: string }) => {
    setIsLoading(true);
    try {
      await authService.login(credentials);

      // After successful login, check auth to get user data
      await checkAuth();
      // Redirect admin users with @gmail email to admin dashboard
      if (
        isAuthenticated &&
        user?.role === "ADMIN" &&
        typeof user.email === "string" &&
        user.email.endsWith("@gmail.com")
      ) {
        router.push("/page/admin/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
    router.push("/");
  };

  const hasRole = (role: Role): boolean => {
    return user?.role === role;
  };

  const hasPermission = (permission: Permission): boolean => {
    return user?.permissions?.includes(permission) || false;
  };

  const updateUserRole = async (newRole: Role) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/user/update-role`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...authService.getAuthHeader(),
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        const userWithPermissions: User = {
          ...updatedUser,
          permissions: ROLE_PERMISSIONS[newRole] || [],
        };
        setUser(userWithPermissions);
      } else {
        // Try to extract backend error message
        let errorMsg = "Failed to update role";
        try {
          const errorData = await response.json();
          if (errorData && (errorData.message || errorData.error)) {
            errorMsg = errorData.message || errorData.error;
          }
        } catch {}
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error("Role update failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    checkAuth,
    login,
    logout,
    hasRole,
    hasPermission,
    updateUserRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
