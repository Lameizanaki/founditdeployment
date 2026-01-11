"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import authService from "@/app/services/authService";

export default function OAuth2Callback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleOAuthCallback = () => {
      const token = searchParams.get("token");
      const errorParam = searchParams.get("error");

      if (errorParam) {
        setError("OAuth2 authentication failed. Please try again.");
        setTimeout(() => {
          router.push("/page/sign_in");
        }, 3000);
        return;
      }

      if (token) {
        // Store the token and navigate immediately
        // The ProtectedRoute will handle the auth check and show loading
        authService.setToken(token);
        router.push("/page/client/home");
      } else {
        setError("No token received. Please try again.");
        setTimeout(() => {
          router.push("/page/sign_in");
        }, 3000);
      }
    };

    handleOAuthCallback();
  }, [searchParams, router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-red-600 text-center mb-4">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-semibold">Authentication Failed</h2>
          </div>
          <p className="text-gray-600 text-center">{error}</p>
          <p className="text-gray-500 text-center text-sm mt-2">
            Redirecting to sign in...
          </p>
        </div>
      </div>
    );
  }

  // No loading screen here - navigate immediately and let ProtectedRoute show loading
  return null;
}
