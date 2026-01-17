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

      // Try to verify token with backend, but fallback to local validation if endpoint doesn't exist
      try {
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
          // If endpoint returns error, try local validation
          validateTokenLocally(token);
        }
      } catch (fetchError) {
        // If endpoint doesn't exist or network error, try local validation
        console.warn("Auth check endpoint not available, using local validation:", fetchError);
        validateTokenLocally(token);
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

  const validateTokenLocally = (token: string): void => {
    try {
      // Basic JWT validation - decode payload to check expiration
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;

      if (payload.exp && payload.exp > currentTime) {
        // Token is still valid, get user data from localStorage
        const userData = authService.getUser();
        if (userData) {
          const userWithPermissions: User = {
            ...userData,
            permissions: userData.role
              ? ROLE_PERMISSIONS[userData.role as Role] || []
              : [],
          };
          setUser(userWithPermissions);
          setIsAuthenticated(true);
          return;
        }
      }

      // Token expired or no user data
      authService.logout();
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      // Invalid token format
      console.error("Token validation failed:", error);
      authService.logout();
      setIsAuthenticated(false);
      setUser(null);
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
      // Try to update role with backend, but fallback to local update if endpoint doesn't exist
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
          // If endpoint returns error, update locally
          updateRoleLocally(newRole);
        }
      } catch (fetchError) {
        // If endpoint doesn't exist or network error, update locally
        console.warn("Role update endpoint not available, updating locally:", fetchError);
        updateRoleLocally(newRole);
      }
    } catch (error) {
      console.error("Role update failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateRoleLocally = (newRole: Role): void => {
    if (user) {
      const updatedUser: User = {
        ...user,
        role: newRole,
        permissions: ROLE_PERMISSIONS[newRole] || [],
      };
      setUser(updatedUser);
      // Update localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));
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
