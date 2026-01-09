"use client";
import FreelancerNavHeader from "@/app/components/styles/global_styles/freelancer/header";
import ProjectsPage from "@/app/components/styles/freelancer_styles/projects/projects";
import FreelancerFooter from "@/app/components/styles/global_styles/freelancer/footer";
const ProjectsId: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB] overflow-x-hidden">
        <FreelancerNavHeader />
        <ProjectsPage />
        <FreelancerFooter />
    </div>
  );
};

export default ProjectsId;
