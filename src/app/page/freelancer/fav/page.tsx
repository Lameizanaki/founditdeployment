"use client";
import FreelancerNavHeader from "@/app/components/styles/global_styles/freelancer/header";
import FreelancerFooter from "@/app/components/styles/global_styles/freelancer/footer";
import FavoritesJobsClientsPage from "@/app/components/styles/freelancer_styles/fav/favorite";

const Favorite: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB] overflow-x-hidden">
      <FreelancerNavHeader />
      <FavoritesJobsClientsPage />
      <FreelancerFooter />
    </div>
  );
};

export default Favorite;
