"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import { isPublicRoute, getRequiredRoles } from "@/app/config/routes";
import Loading from "@/app/components/styles/global_styles/loading/loading";

interface RouteGuardProps {
  children: React.ReactNode;
}

/**
 * RouteGuard - Global route protection component
 * Handles authentication and role-based access control for all routes
 */
export const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const { isAuthenticated, isLoading, user, hasRole } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) return;

    // Check if current route is public
    const isPublic = isPublicRoute(pathname);

    if (!isPublic) {
      // Protected route - require authentication
      if (!isAuthenticated) {
        router.replace(
          `/page/sign_in?redirect=${encodeURIComponent(pathname)}`
        );
        return;
      }

      // Check role requirements
      const requiredRoles = getRequiredRoles(pathname);
      if (requiredRoles && requiredRoles.length > 0) {
        const hasRequiredRole = requiredRoles.some((role) => hasRole(role));

        if (!hasRequiredRole) {
          // User doesn't have required role - redirect to role selection
          router.replace("/page/type_role");
          return;
        }
      }
    }
  }, [isAuthenticated, isLoading, user, pathname, router, hasRole]);

  // Show loading while checking authentication
  if (isLoading) {
    return <Loading />;
  }

  // Check if current route is public
  const isPublic = isPublicRoute(pathname);

  // For protected routes, block rendering if not authenticated
  if (!isPublic && !isAuthenticated) {
    return <Loading />;
  }

  // For protected routes with role requirements, block if user doesn't have the role
  if (!isPublic && isAuthenticated) {
    const requiredRoles = getRequiredRoles(pathname);
    if (requiredRoles && requiredRoles.length > 0) {
      const hasRequiredRole = requiredRoles.some((role) => hasRole(role));
      if (!hasRequiredRole) {
        return <Loading />;
      }
    }
  }

  return <>{children}</>;
};
