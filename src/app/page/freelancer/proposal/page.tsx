"use client";
import FreelancerNavHeader from "@/app/components/styles/global_styles/freelancer/header";
import ProposalPage from "@/app/components/styles/freelancer_styles/proposal/proposal";
import FreelancerFooter from "@/app/components/styles/global_styles/freelancer/footer";

const Proposal: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB] overflow-x-hidden">
      <FreelancerNavHeader />
      <ProposalPage />
      <FreelancerFooter />
    </div>
  );
};

export default Proposal;
