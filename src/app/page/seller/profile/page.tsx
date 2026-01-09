"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import ProfileHeader from "@/app/components/styles/seller_styles/profile/ProfileHeader";
import ProfileTabs, { type ProfileTabKey } from "@/app/components/styles/seller_styles/profile/ProfileTabs";
import OverviewTab from "@/app/components/styles/seller_styles/profile/tabs/overview";
import ProductsTab from "@/app/components/styles/seller_styles/profile/tabs/products";
import ReviewsTab from "@/app/components/styles/seller_styles/profile/tabs/review";
import AboutTab from "@/app/components/styles/seller_styles/profile/tabs/about";
import SellerNavHeader from "@/app/components/styles/global_styles/seller/header";
import SellerFooter from "@/app/components/styles/global_styles/seller/footer";

export default function SellerProfilePage() {
  const router = useRouter();
  const [tab, setTab] = useState<ProfileTabKey>("overview");

  return (
    <main className="bg-gray-50">
      <SellerNavHeader />
      <section className="mx-auto w-full  px-4 py-6">
        <ProfileHeader
          onEditProfile={() => router.push("/page/seller/profile/editprofile")}
        />

        <div className="mt-5">
          <ProfileTabs value={tab} onChange={setTab} />
        </div>

        <div className="mt-5">
          {tab === "overview" && (
            <OverviewTab
              onViewAllProducts={() => router.push("/page/seller/home/myproduct")}
            />
          )}

          {tab === "products" && <ProductsTab />}

          {tab === "reviews" && <ReviewsTab />}

          {tab === "about" && <AboutTab />}
        </div>
      </section>
      <SellerFooter />
    </main>
  );
}
