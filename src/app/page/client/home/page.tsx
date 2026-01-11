"use client";
import TalentPageContent from "@/app/components/styles/client_styles/home/PageContent";
import { ProtectedRoute } from "@/app/components/auth/ProtectedRoute";
import { Role } from "@/app/types/auth";

const ClientHomePage: React.FC = () => {
  return (
    <ProtectedRoute requiredRole={Role.CLIENT}>
      <div className="w-full h-screen bg-[#F9FAFB]">
        <TalentPageContent />
      </div>
    </ProtectedRoute>
  );
};
export default ClientHomePage;
