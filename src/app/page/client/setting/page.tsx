"use client"; 
import React from "react";
import ClientNavHeader from "@/app/components/styles/global_styles/client/header";
import ClientContent from "@/app/components/styles/client_styles/setting/setting_contents";
import ClientFooter from "@/app/components/styles/client_styles/setting/setting_footer";


const SettingsPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB] overflow-x-hidden">
      <ClientNavHeader />
      <ClientContent/>
      <ClientFooter />
    </div>
  );
};

export default SettingsPage;
