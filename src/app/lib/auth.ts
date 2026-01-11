// Export all auth-related components and utilities
export { AuthProvider, useAuth } from "../contexts/AuthContext";
export { ProtectedRoute } from "../components/auth/ProtectedRoute";
export { RoleGuard } from "../components/auth/RoleGuard";
export { RouteGuard } from "../components/auth/RouteGuard";
export { Role, Permission, ROLE_PERMISSIONS } from "../types/auth";
export type { User, AuthContextType } from "../types/auth";
export {
  isPublicRoute,
  getRequiredRoles,
  getDefaultRouteForRole,
  PUBLIC_ROUTES,
  ROUTE_CONFIGS,
} from "../config/routes";
export type { RouteConfig } from "../config/routes";
