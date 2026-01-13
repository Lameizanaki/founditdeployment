"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClientNavHeader from "@/app/components/styles/global_styles/client/header";
import ClientFooter from "@/app/components/styles/global_styles/client/footer";
import ContractPage from "@/app/components/styles/client_styles/milestone/contract";

interface FreelancerData {
  id: number;
  gigId: number;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  avatarUrl?: string;
}

const Milestone: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [freelancerData, setFreelancerData] = useState<FreelancerData | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const freelancerParam = searchParams.get("freelancer");

    if (freelancerParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(freelancerParam));
        setFreelancerData(parsed);
      } catch (error) {
        console.error("Error parsing freelancer data:", error);
      }
    }
    setLoading(false);
  }, [searchParams]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitOffer = async (formData: any) => {
    if (!freelancerData) return;

    try {
      const token = localStorage.getItem("token");

      // Get user ID from stored user object
      // Handle both formats: { id, ... } or { user: { id, ... } }
      const userStr = localStorage.getItem("user");
      console.log("Raw user from localStorage:", userStr);
      const userData = userStr ? JSON.parse(userStr) : null;
      console.log("Parsed userData:", userData);
      const userId = userData?.id || userData?.user?.id;
      console.log("Extracted userId:", userId);

      if (!userId) {
        console.error("No userId found in userData:", userData);
        alert("User not logged in. Please log in again.");
        router.push("/page/sign_in");
        return;
      }

      // Build the offer payload for backend
      const offerPayload = {
        clientId: parseInt(userId),
        freelancerId: freelancerData.id,
        gigId: freelancerData.gigId,
        title: formData.projectDetails.title,
        description: formData.projectDetails.description || "",
        totalBudget: formData.milestones.reduce(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (sum: number, m: any) => sum + m.amount,
          0
        ),
        currency: "USD",
        message: formData.welcomeMessage || "",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        milestones: formData.milestones.map((m: any) => ({
          description: m.title,
          amount: m.amount,
        })),
      };

      console.log("Submitting offer:", offerPayload);

      const response = await fetch(
        "http://localhost:8085/offers/client-to-freelancer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(offerPayload),
        }
      );

      if (response.ok) {
        const offerId = await response.json();
        console.log("Offer created successfully, ID:", offerId);
        alert("Offer sent successfully!");
        router.push("/page/client/home");
      } else {
        const errorText = await response.text();
        console.error("Failed to create offer:", response.status, errorText);
        alert(`Failed to send offer: ${errorText}`);
      }
    } catch (error) {
      console.error("Error submitting offer:", error);
      alert("An error occurred while sending the offer");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="w-full h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // If no freelancer data, show a message
  if (!freelancerData) {
    return (
      <div className="w-full h-screen bg-[#F9FAFB]">
        <ClientNavHeader />
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <div className="text-center">
            <div className="text-gray-500 text-lg">No freelancer selected</div>
            <button
              onClick={() => router.push("/page/client/home")}
              className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
            >
              Go to Home
            </button>
          </div>
        </div>
        <ClientFooter />
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#F9FAFB]">
      <ClientNavHeader />
      <ContractPage
        freelancer={{
          id: String(freelancerData.id),
          name: freelancerData.name,
          title: freelancerData.title,
          rating: freelancerData.rating,
          reviewCount: freelancerData.reviewCount,
          avatarUrl: freelancerData.avatarUrl,
        }}
        onSubmit={handleSubmitOffer}
        onCancel={handleCancel}
      />
      <ClientFooter />
    </div>
  );
};

export default Milestone;
