'use client';
import ClientNavHeader from "@/app/components/styles/global_styles/client/header";
import ClientFooter from "@/app/components/styles/global_styles/client/footer";
import ContractPage from "@/app/components/styles/client_styles/milestone/contract";

const Milestone: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB]">
        <ClientNavHeader />
        <ContractPage />
        <ClientFooter/>
    </div>
  )
}
export default Milestone;