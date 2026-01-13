"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import ProfileHeader from "@/app/components/styles/freelancer_styles/freelanceprofile/ProfileHeader";
import WorkSection from "@/app/components/styles/freelancer_styles/freelanceprofile/WorkSection";
import SkillsSection from "@/app/components/styles/freelancer_styles/freelanceprofile/SkillsSection";
import Sidebar from "@/app/components/styles/freelancer_styles/freelanceprofile/Sidebar";
import ReviewsSection from "@/app/components/styles/freelancer_styles/freelanceprofile/ReviewsSection";
import AboutSection from "@/app/components/styles/freelancer_styles/freelanceprofile/AboutSection";
import ClientProfileView from "@/app/components/styles/client_styles/profile-view/ClientProfileView";

type Tab = "work" | "reviews" | "about";

interface GigData {
  id: number;
  freelancerId?: number;
  freelancerName: string;
  shortBio: string;
  description: string;
  price: number;
  skillName: string;
  rating: number;
  reviewCount: number;
  experience: string;
  location: string;
  lastActiveDays: number;
  workCount: number;
  verified: boolean;
  imageType?: string;
  imageData?: string;
}

interface ClientProfileData {
  id: number;
  avatarUrl?: string;
  fullName: string;
  titleRole: string;
  location: string;
  allowMessages: boolean;
  shortBio: string;
  valuesWhenHiring: string[];
  industries: string[];
  preferredWorkStyles: string[];
  hireCategories: string[];
  fixedProjectMedian: string;
  hourlyMedian: string;
  contractLengthMedian: string;
  website?: string;
  linkedin?: string;
  xTwitter?: string;
}

export default function TalentProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const [gigData, setGigData] = useState<GigData | null>(null);
  const [clientProfile, setClientProfile] = useState<ClientProfileData | null>(null);
  const [profileType, setProfileType] = useState<"freelancer" | "client" | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const gigId = searchParams.get("id");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!gigId) {
        console.error("No gig ID provided");
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("token");

        // Parse the ID to determine type and extract numeric ID
        let endpoint: string;
        let numericId: string;
        let type: "freelancer" | "client";

        console.log("Received gigId:", gigId);

        if (gigId.startsWith("fl-")) {
          // Freelancer gig
          numericId = gigId.replace("fl-", "");
          endpoint = `http://localhost:8085/gigs/freelancer/${numericId}/client-view`;
          type = "freelancer";
          console.log("Detected freelancer gig, numeric ID:", numericId);
        } else if (gigId.startsWith("cl-")) {
          // Client profile
          numericId = gigId.replace("cl-", "");
          endpoint = `http://localhost:8085/client/profile/public/${numericId}`;
          type = "client";
          console.log("Detected client profile, numeric ID:", numericId);
        } else {
          // Plain numeric ID (legacy, assume freelancer)
          numericId = gigId;
          endpoint = `http://localhost:8085/gigs/freelancer/${numericId}/client-view`;
          type = "freelancer";
          console.log(
            "Plain numeric ID, assuming freelancer gig:",
            numericId
          );
        }

        setProfileType(type);
        console.log(`Fetching from: ${endpoint}`);
        
        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(`📡 Response status: ${response.status}`);

        if (response.ok) {
          const data = await response.json();
          console.log(`Successfully fetched profile data:`, data);
          
          if (type === "freelancer") {
            setGigData(data);
          } else {
            setClientProfile(data);
          }
        } else {
          const errorText = await response.text();
          console.error(
            `Failed to fetch profile for ID: ${numericId}`,
            response.status,
            errorText
          );
          
          if (type === "client" && response.status === 500) {
            alert(
              "This client hasn't published their profile yet. Profile will be available after they save and publish their profile information."
            );
          } else {
            alert(`Failed to load profile: ${response.status} - ${errorText}`);
          }
          
          router.back();
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [gigId]);

  const handleBack = () => {
    router.back();
  };

  const handleHire = () => {
    if (!gigData) return;
    
    // Build freelancer data for the milestone/contract page
    const freelancerData = {
      id: gigData.freelancerId || gigData.id,
      gigId: gigData.id,
      name: gigData.freelancerName,
      title: gigData.skillName || "Freelancer",
      rating: gigData.rating || 0,
      reviewCount: gigData.reviewCount || 0,
      hourlyRate: gigData.price || 0,
      avatarUrl: gigData.imageData ? `data:${gigData.imageType};base64,${gigData.imageData}` : undefined,
    };
    
    // Navigate to milestone page with freelancer data
    router.push(`/page/client/milestone?freelancer=${encodeURIComponent(JSON.stringify(freelancerData))}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 text-lg">Loading profile...</div>
          <div className="text-sm text-gray-400 mt-2">
            Fetching ID: {gigId}
          </div>
        </div>
      </div>
    );
  }

  if (profileType === "client" && clientProfile) {
    return <ClientProfileView profileData={clientProfile} onBack={handleBack} />;
  }

  if (!gigData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 text-lg">Profile not found</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-white text-gray-900 font-inter">
        {/* Breadcrumb */}
        <div
          className="px-6 py-4 text-sm flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
          onClick={handleBack}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0026 12.6668L3.33594 8.00016L8.0026 3.3335"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6693 8H3.33594"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </div>
        <div className="px-8 pb-4">
          <ProfileHeader gigData={gigData} onHire={handleHire} />
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
                <WorkSection gigData={gigData} />

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
            <Sidebar gigData={gigData} />
          </div>
        </div>
      </div>
    </div>
  );
}
