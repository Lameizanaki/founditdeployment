"use client";

import React from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { Role, Permission } from "@/app/types/auth";

interface RoleGuardProps {
  children: React.ReactNode;
  requiredRole?: Role | Role[];
  requiredPermission?: Permission | Permission[];
  fallback?: React.ReactNode;
}

/**
 * RoleGuard - Component-level access control
 * Shows children only if user has required role/permission
 * Unlike ProtectedRoute, this doesn't redirect - it just hides content
 */
export const RoleGuard: React.FC<RoleGuardProps> = ({
  children,
  requiredRole,
  requiredPermission,
  fallback = null,
}) => {
  const { user, hasRole, hasPermission } = useAuth();

  if (!user) {
    return <>{fallback}</>;
  }

  // Check role requirements
  if (requiredRole) {
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    const hasRequiredRole = roles.some((role) => hasRole(role));

    if (!hasRequiredRole) {
      return <>{fallback}</>;
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
      return <>{fallback}</>;
    }
  }

  return <>{children}</>;
};
