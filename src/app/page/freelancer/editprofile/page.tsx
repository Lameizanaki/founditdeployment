"use client";
import FreelancerNavHeader from "@/app/components/styles/global_styles/freelancer/header";
import Editprofile from "@/app/components/styles/freelancer_styles/editprofile/editprofilepage";
import FreelancerFooter from "@/app/components/styles/global_styles/freelancer/footer";
const EditProfilePage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB] overflow-x-hidden">
        <FreelancerNavHeader />
        <Editprofile />
        <FreelancerFooter />
    </div>
  );
};

export default EditProfilePage;
