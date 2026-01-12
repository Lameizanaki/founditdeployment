"use client";

import React, { useState } from "react";

import ProfileHeader from "@/app/components/styles/freelancer_styles/freelanceprofile/header2";
import WorkSection from "@/app/components/styles/freelancer_styles/freelanceprofile/WorkSection";
import SkillsSection from "@/app/components/styles/freelancer_styles/freelanceprofile/SkillsSection";
import Sidebar from "@/app/components/styles/freelancer_styles/freelanceprofile/Sidebar";
import ReviewsSection from "@/app/components/styles/freelancer_styles/freelanceprofile/ReviewsSection";
import AboutSection from "@/app/components/styles/freelancer_styles/freelanceprofile/AboutSection"; 


type Tab = "work" | "reviews" | "about";

export default function TalentProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  return (
    <div>
      

      <div className="min-h-screen bg-white text-gray-900 font-inter">
        {/* Breadcrumb */}
        <div className="px-6 py-4 text-sm  flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.0026 12.6668L3.33594 8.00016L8.0026 3.3335" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6693 8H3.33594" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Back
        </div>
        <div className="px-8 pb-4">
            <ProfileHeader />
        </div>
        <div className="px-6 grid grid-cols-12 gap-6">
          {/* Left: Main Content */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            
            {/* Tabs */}
            <div className="flex gap-8 border-b">
              <button
                onClick={() => setActiveTab("work")}
                className={`pb-4 px-1 text-sm font-medium border-b-2 transition-all ${
                  activeTab === "work"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Work
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-4 px-1 text-sm font-medium border-b-2 transition-all ${
                  activeTab === "reviews"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`pb-4 px-1 text-sm font-medium border-b-2 transition-all ${
                  activeTab === "about"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </button>
            </div>

            {/* Content Switcher */}
            {activeTab === "work" && (
              <>
              
                <WorkSection />
                
                <SkillsSection />
                
              </>
            )}

            {activeTab === "reviews" && <ReviewsSection />}

              <div className="pb-3">
            {activeTab === "about" && <AboutSection />} 
            </div>

          </div>

          {/* Right: Sidebar – Always visible */}
          <div className="col-span-12 lg:col-span-4 pt-5">
            <Sidebar />
          </div>
        </div>
      </div>

      
    </div>
  );
}