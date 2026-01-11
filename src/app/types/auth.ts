// Permission enum matching backend
export enum Permission {
  CREATE_GIG = "gig:create",
  READ_GIG = "gig:read",
  UPDATE_GIG = "gig:update",
  DELETE_GIG = "gig:delete",
  READ_USER = "user:read",
  DELETE_USER = "user:delete",
}

// Role enum matching backend
export enum Role {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
  SELLER = "SELLER",
  FREELANCER = "FREELANCER",
}

// Role permissions mapping (same as backend)
export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  [Role.ADMIN]: [Permission.READ_USER, Permission.DELETE_USER],
  [Role.CLIENT]: [Permission.READ_GIG],
  [Role.SELLER]: [
    Permission.CREATE_GIG,
    Permission.READ_GIG,
    Permission.UPDATE_GIG,
    Permission.DELETE_GIG,
  ],
  [Role.FREELANCER]: [
    Permission.CREATE_GIG,
    Permission.READ_GIG,
    Permission.UPDATE_GIG,
    Permission.DELETE_GIG,
  ],
};

// User interface
export interface User {
  id?: string;
  username?: string;
  email?: string;
  role?: Role;
  permissions?: Permission[];
  [key: string]: unknown;
}

// Auth context interface
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  checkAuth: () => Promise<void>;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  hasRole: (role: Role) => boolean;
  hasPermission: (permission: Permission) => boolean;
  updateUserRole: (newRole: Role) => Promise<void>;
}
