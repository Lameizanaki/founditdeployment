"use client";
import FreelancerNavHeader from "@/app/components/styles/global_styles/freelancer/header";
import ProjectsId from "@/app/components/styles/freelancer_styles/projects/id/project_id";
import FreelancerFooter from "@/app/components/styles/global_styles/freelancer/footer";

const ProjectsID: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB] overflow-x-hidden">
        <FreelancerNavHeader />
        <ProjectsId/>
        <FreelancerFooter />
    </div>
  );
};

export default ProjectsID;
