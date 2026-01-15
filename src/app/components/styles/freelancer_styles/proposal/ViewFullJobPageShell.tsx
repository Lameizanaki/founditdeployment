"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import ViewFullJobHeader from "@/app/components/styles/client_styles/application/ViewFullJobHeader";
import JobDescriptionCard from "@/app/components/styles/client_styles/application/JobDescriptionCard";
import SkillsCard from "@/app/components/styles/client_styles/application/SkillsCard";
import ProjectDetailsCard from "@/app/components/styles/client_styles/application/ProjectDetailsCard";
import ScreeningQuestionsCard from "@/app/components/styles/client_styles/application/ScreeningQuestionsCard";
import AttachmentsCard from "@/app/components/styles/client_styles/application/AttachmentsCard";
import JobSidebar from "@/app/components/styles/freelancer_styles/proposal/JobSidebar";

import { viewFullJobMock } from "@/app/components/styles/freelancer_styles/proposal/mockdata";
import AboutClientCard from "./AboutClientCard";
import SimilarJobsCard from "./SimilarJobsCard";

export default function ViewFullJobPageShell() {
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  // Adjust if your HeaderNav height differs
  const stickyTopClass = "top-[72px]";

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-6">
          <ViewFullJobHeader
            title={viewFullJobMock.title}
            badge={viewFullJobMock.badge}
            postedByName={viewFullJobMock.postedByName}
            postedByImageSrc={viewFullJobMock.postedByImageSrc}
            liked={liked}
            onToggleLike={() => setLiked((v) => !v)}
            onBack={() => router.push("/page/application")}
          />

          {/* grey divider like Figma */}
          <div className="mt-4 border-b border-gray-200" />

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_360px]">
            {/* LEFT */}
            <section className="space-y-4">
              <JobDescriptionCard
                intro={viewFullJobMock.descriptionIntro}
                keyRequirements={viewFullJobMock.keyRequirements}
                deliverables={viewFullJobMock.deliverables}
                idealCandidate={viewFullJobMock.idealCandidate}
                proposalInclude={viewFullJobMock.proposalInclude}
              />

              <SkillsCard skills={viewFullJobMock.skills} />

              <ProjectDetailsCard details={viewFullJobMock.details} />

              <ScreeningQuestionsCard
                questions={viewFullJobMock.screeningQuestions}
              />

              <AttachmentsCard attachments={viewFullJobMock.attachments} />

              <AboutClientCard client={viewFullJobMock.client} />
              
              <SimilarJobsCard jobs={viewFullJobMock.similarJobs} />
            </section>

            {/* RIGHT */}
            <aside className="space-y-4 ">
              <div className={`lg:sticky ${stickyTopClass} space-y-4 pt-3`}>
                <JobSidebar budget={viewFullJobMock.budget} />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
