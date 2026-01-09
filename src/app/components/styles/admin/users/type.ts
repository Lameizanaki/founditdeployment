"use client";

export type UserRole = "Freelancer" | "Client" | "Seller";
export type UserStatus = "Active" | "Removed";

export type UserItem = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  rating?: number;
  avatarText?: string;
};

export function handleKeyboardActivate(
  e: React.KeyboardEvent,
  onActivate: () => void
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}