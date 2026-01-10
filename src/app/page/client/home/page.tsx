"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import TalentPageContent from "@/app/components/styles/client_styles/home/PageContent";
import authService from "@/app/services/authService";

const ClientHomePage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Check if token is in URL (from OAuth2 redirect)
    const token = searchParams.get("token");
    if (token) {
      // Store the token from OAuth2 login
      authService.setToken(token);
      // Clean up URL by removing token parameter
      router.replace("/page/client/home");
    }
  }, [searchParams, router]);

  return (
    <div className="w-full h-screen bg-[#F9FAFB]">
      <TalentPageContent />
    </div>
  );
};
export default ClientHomePage;
