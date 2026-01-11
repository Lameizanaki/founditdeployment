"use client";

import React from "react";
import { ArrowLeft, Home, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "./contexts/AuthContext";
import { getDefaultRouteForRole } from "./config/routes";

const NotFoundPage: React.FC = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    if (isAuthenticated && user?.role) {
      // Redirect to user's role-specific home
      router.push(getDefaultRouteForRole(user.role));
    } else {
      // Redirect to landing page
      router.push("/");
    }
  };

  const handleSearch = () => {
    // Redirect to appropriate search page based on role
    if (isAuthenticated) {
      router.push("/page/client/home"); // or search page
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <p className="text-9xl font-bold text-teal-600 mb-2">404</p>

        {/* Divider */}
        <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>

        {/* Page Not Found Text */}
        <p className="text-2xl font-semibold text-gray-900 mb-4">
          Page not found
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Sorry, we could not find the page you are looking for. It might have
          been moved, deleted, or you may not have permission to access it.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors hover:cursor-pointer active:scale-95"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors hover:cursor-pointer active:scale-95"
          >
            <Home size={18} />
            Home
          </button>

          <button
            onClick={handleSearch}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors hover:cursor-pointer active:scale-95"
          >
            <Search size={18} />
            Search
          </button>
        </div>

        {/* Popular Pages */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => router.push("/")}
                  className="!text-teal-600 hover:text-teal-700 !no-underline border-none bg-transparent cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() => router.push("/page/sign_in")}
                  className="!text-teal-600 hover:text-teal-700 !no-underline border-none bg-transparent cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => router.push("/page/sign_up")}
                  className="!text-teal-600 hover:text-teal-700 !no-underline border-none bg-transparent cursor-pointer"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    if (user?.role) {
                      router.push(getDefaultRouteForRole(user.role));
                    } else {
                      router.push("/page/type_role");
                    }
                  }}
                  className="!text-teal-600 hover:text-teal-700 !no-underline border-none bg-transparent cursor-pointer"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => router.push("/page/type_role")}
                  className="!text-teal-600 hover:text-teal-700 !no-underline border-none bg-transparent cursor-pointer"
                >
                  Switch Role
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
