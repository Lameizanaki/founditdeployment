"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import { Role, Permission } from "@/app/types/auth";
import Loading from "@/app/components/styles/global_styles/loading/loading";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: Role | Role[];
  requiredPermission?: Permission | Permission[];
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  requiredPermission,
  redirectTo = "/page/sign_in",
}) => {
  const { isAuthenticated, isLoading, user, hasRole, hasPermission } =
    useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) return;

    // Not authenticated - redirect to sign in
    if (!isAuthenticated) {
      router.push(`${redirectTo}?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    // Check role requirements
    if (requiredRole) {
      const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
      const hasRequiredRole = roles.some((role) => hasRole(role));

      if (!hasRequiredRole) {
        // User doesn't have the required role - redirect to role selection
        router.push("/page/type_role");
        return;
      }
    }

    // Check permission requirements
    if (requiredPermission) {
      const permissions = Array.isArray(requiredPermission)
        ? requiredPermission
        : [requiredPermission];
      const hasRequiredPermission = permissions.some((perm) =>
        hasPermission(perm)
      );

      if (!hasRequiredPermission) {
        // User doesn't have required permission - redirect to role selection
        router.push("/page/type_role");
        return;
      }
    }
  }, [
    isAuthenticated,
    isLoading,
    user,
    requiredRole,
    requiredPermission,
    router,
    pathname,
    hasRole,
    hasPermission,
    redirectTo,
  ]);

  // Show loading while checking authentication
  if (isLoading) {
    return <Loading />;
  }

  // Not authenticated
  if (!isAuthenticated) {
    return <Loading />;
  }

  // Check role
  if (requiredRole) {
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    const hasRequiredRole = roles.some((role) => hasRole(role));

    if (!hasRequiredRole) {
      return <Loading />;
    }
  }

  // Check permission
  if (requiredPermission) {
    const permissions = Array.isArray(requiredPermission)
      ? requiredPermission
      : [requiredPermission];
    const hasRequiredPermission = permissions.some((perm) =>
      hasPermission(perm)
    );

    if (!hasRequiredPermission) {
      return <Loading />;
    }
  }

  // All checks passed - render children
  return <>{children}</>;
};
