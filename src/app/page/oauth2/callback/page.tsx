"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import authService from "@/app/services/authService";

export default function OAuth2Callback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
      // Store the token
      authService.setToken(token);

      // Redirect to client home for OAuth2 users
      setTimeout(() => {
        router.push("/page/client/home");
      }, 500);
    } else {
      setError("No token received. Please try again.");
      setTimeout(() => {
        router.push("/page/sign_in");
      }, 3000);
    }
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Completing Sign In...
          </h2>
          <p className="text-gray-600">Please wait while we log you in.</p>
        </div>
      </div>
    </div>
  );
}
