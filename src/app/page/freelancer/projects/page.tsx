"use client";
import FreelancerNavHeader from "@/app/components/styles/global_styles/freelancer/header";
import ProjectsPage from "@/app/components/styles/freelancer_styles/projects/projects";
import FreelancerFooter from "@/app/components/styles/global_styles/freelancer/footer";
import { ProtectedRoute } from "@/app/components/auth/ProtectedRoute";
import { Role } from "@/app/types/auth";

const ProjectsId: React.FC = () => {
  return (
    <ProtectedRoute requiredRole={Role.FREELANCER}>
      <div className="w-full h-screen bg-[#F9FAFB] overflow-x-hidden">
        <FreelancerNavHeader />
        <ProjectsPage />
        <FreelancerFooter />
      </div>
    </ProtectedRoute>
  );
};

export default ProjectsId;
