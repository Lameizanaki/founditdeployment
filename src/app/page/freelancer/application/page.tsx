"use client";
import FreelancerNavHeader from "@/app/components/styles/global_styles/freelancer/header";
import ApplicationPage from "@/app/components/styles/freelancer_styles/application/application";
import FreelancerFooter from "@/app/components/styles/global_styles/freelancer/footer";
const Application: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB] overflow-x-hidden">
        <FreelancerNavHeader />
        <ApplicationPage />
        <FreelancerFooter />
    </div>
  );
};

export default Application;
