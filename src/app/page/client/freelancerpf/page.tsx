'use client';

import { useState } from 'react';

import ProfileHeader from '@/app/components/styles/freelancer_styles/freelanceprofile/ProfileHeader';
import OverviewSection from '@/app/components/styles/freelancer_styles/freelancerpf/OverviewSection';
import JobsSection from '@/app/components/styles/freelancer_styles/freelancerpf/JobsSection';
import ReviewsSection from '@/app/components/styles/freelancer_styles/freelancerpf/ReviewsSection';
import ClientNavHeader from '@/app/components/styles/global_styles/client/header';
import ClientFooter from '@/app/components/styles/client_styles/setting/setting_footer';



export default function ClientProfilePage() {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Jobs' | 'Reviews'>('Overview');

 return (
    <>  
      <ClientNavHeader />
      <main className="flex-1 w-full mx-auto pl-12 pr-12 pt-8">
        <ProfileHeader />

        {/* Tabs */}
        <div className="border-b flex gap-8 text-sm font-medium pt-8">
          {['Overview', 'Jobs', 'Reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-3 border-b-2 transition capitalize ${
                activeTab === tab
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content GRID */}
        <section className="mt-8 grid grid-cols-12 gap-8">
          {activeTab === 'Overview' && <OverviewSection />}
          {activeTab === 'Jobs' && <JobsSection />}
          {activeTab === 'Reviews' && <ReviewsSection />}
        </section>
      </main>

      <ClientFooter />
    </>
  );
}
