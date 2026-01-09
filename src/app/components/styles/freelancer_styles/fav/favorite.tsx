"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Footer from "@/app/components/styles/landingpage_styles/footer";

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function handleKeyboardActivate(
  e: React.KeyboardEvent,
  onActivate: () => void
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

// inline icons (replace with your svg later)
function DocIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 20a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 17.3l-5.2 3 1.4-5.9-4.6-4 6.1-.5L12 4.3l2.3 5.6 6.1.5-4.6 4 1.4 5.9-5.2-3z" />
    </svg>
  );
}

type TabKey = "jobs" | "clients";

type JobPost = {
  id: string;
  title: string;
  companyLine: string;
  desc: string;
  tags: string[];
  level: string;
  duration: string;
  proposals: string;
  timeAgo: string;
  price: string;
  priceType: string;
};

type ClientCard = {
  id: string;
  name: string;
  location: string;
  verified?: boolean;
  desc: string;
  jobsPosted: number;
  hireRate: string;
  totalSpent: string;
  rating: string;
  ratingCount: string;
  avatarSrc?: string;
};

export default function FavoritesJobsClientsPage() {
  const router = useRouter();
  void router;

  const [activeTab, setActiveTab] = useState<TabKey>("jobs");
  const [searchText, setSearchText] = useState("");

  const jobPosts: JobPost[] = [
    {
      id: "j1",
      title: "Full-Stack Developer for E-commerce Platform",
      companyLine: "TechCorp Inc. • Remote",
      desc: "Looking for an experienced full-stack developer to build our e-commerce platform",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      level: "Expert",
      duration: "3-6 months",
      proposals: "15 proposals",
      timeAgo: "2 hours ago",
      price: "$5,000",
      priceType: "Fixed Price",
    },
    {
      id: "j2",
      title: "UI/UX Designer for Mobile App",
      companyLine: "Creative Studio • Hybrid • New York",
      desc: "Need a talented designer to create stunning mobile app interfaces",
      tags: ["Figma", "UI Design", "Prototyping", "Mobile UX"],
      level: "Intermediate",
      duration: "1-3 months",
      proposals: "23 proposals",
      timeAgo: "5 hours ago",
      price: "$50-$85/hr",
      priceType: "Hourly",
    },
    {
      id: "j3",
      title: "Content Writer for Tech Blog",
      companyLine: "StartupHub • Remote",
      desc: "Seeking creative writers to produce engaging technical content",
      tags: ["Content Writing", "SEO", "Tech Writing", "Blogging"],
      level: "Entry Level",
      duration: "Less than 1 month",
      proposals: "42 proposals",
      timeAgo: "1 day ago",
      price: "$1,200",
      priceType: "Fixed Price",
    },
  ];

  const clients: ClientCard[] = [
    {
      id: "c1",
      name: "Yami Sukhero",
      location: "San Francisco, CA",
      verified: true,
      desc: "Leading software company hiring top development talent",
      jobsPosted: 47,
      hireRate: "92%",
      totalSpent: "$125k+",
      rating: "4.8",
      ratingCount: "(35)",
      avatarSrc: "/images/yami.png", // optional
    },
    {
      id: "c2",
      name: "Slim Shady",
      location: "New York, NY",
      verified: true,
      desc: "Design agency seeking creative professionals",
      jobsPosted: 28,
      hireRate: "85%",
      totalSpent: "$75k+",
      rating: "4.9",
      ratingCount: "(22)",
      avatarSrc: "/images/client2.png", // optional
    },
    {
      id: "c3",
      name: "Xu Kai",
      location: "Austin, TX",
      verified: false,
      desc: "Fast-growing startup looking for innovative minds",
      jobsPosted: 15,
      hireRate: "78%",
      totalSpent: "$45k+",
      rating: "4.7",
      ratingCount: "(12)",
      avatarSrc: "/images/client3.png", // optional
    },
  ];

  return (
    <>
     

      <main className="bg-gray-50 min-h-screen px-4 py-6">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <div className="mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">Your Favorites</h1>
            <p className="text-sm text-gray-500 mt-1">
              Keep track of freelancers and ready-to-buy services you’re interested in
            </p>
          </div>

          {/* Search row */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-4">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>
              <input
                aria-label="Search favorites"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search freelancers, clients, jobs, products..."
                className={[
                  "w-full h-10 rounded-md border bg-white",
                  "pl-10 pr-3 text-sm",
                  "hover:border-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-[#615FFF] focus:border-[#615FFF]  ",
                ].join(" ")}
              />
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => console.log("Search clicked (placeholder):", searchText)}
              onKeyDown={(e) =>
                handleKeyboardActivate(e, () =>
                  console.log("Search clicked (placeholder):", searchText)
                )
              }
              className="h-10 px-5 rounded-md bg-[#615FFF] hover:bg-[#615FFF] text-white text-sm inline-flex items-center justify-center cursor-pointer select-none"
            >
              Search
            </div>
          </div>

          {/* Tabs row (Job Posts / Clients) */}
          <div className="mb-5">
            <div className="w-full sm:max-w-[520px] rounded-full bg-gray-100 p-1 border border-gray-200">
              <div className="grid grid-cols-2 gap-1">
                {/* Job Posts */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveTab("jobs")}
                  onKeyDown={(e) => handleKeyboardActivate(e, () => setActiveTab("jobs"))}
                  className={[
                    "h-10 rounded-full flex items-center justify-center gap-2 text-sm cursor-pointer select-none",
                    activeTab === "jobs"
                      ? "bg-white shadow-sm border border-gray-200 text-gray-900"
                      : "text-gray-600 hover:text-gray-900",
                  ].join(" ")}
                  aria-label="Open Job Posts"
                >
                  <DocIcon className="w-4 h-4 text-gray-500" />
                  Job Posts
                </div>

                {/* Clients */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveTab("clients")}
                  onKeyDown={(e) =>
                    handleKeyboardActivate(e, () => setActiveTab("clients"))
                  }
                  className={[
                    "h-10 rounded-full flex items-center justify-center gap-2 text-sm cursor-pointer select-none",
                    activeTab === "clients"
                      ? "bg-white shadow-sm border border-gray-200 text-gray-900"
                      : "text-gray-600 hover:text-gray-900",
                  ].join(" ")}
                  aria-label="Open Clients"
                >
                  <UserIcon className="w-4 h-4 text-gray-500" />
                  Clients
                </div>
              </div>
            </div>
          </div>

          {/* Tab content */}
          {activeTab === "jobs" ? (
            <div className="space-y-4">
              {jobPosts.map((j) => (
                <div
                  key={j.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between gap-6">
                    {/* Left */}
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg font-semibold text-gray-900">
                        {j.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">{j.companyLine}</div>
                      <div className="mt-1 text-sm text-gray-500">{j.desc}</div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {j.tags.map((t) => (
                          <div
                            key={t}
                            className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
                          >
                            {t}
                          </div>
                        ))}
                      </div>

                      {/* Bottom meta */}
                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <span>{j.level}</span>
                        <span className="text-gray-300">•</span>
                        <span>{j.duration}</span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex-shrink-0 text-right">
                      <div className="text-lg font-semibold text-gray-900">{j.price}</div>
                      <div className="text-xs text-gray-500 mt-1">{j.priceType}</div>
                    </div>
                  </div>

                  {/* bottom right proposals/time */}
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <div />
                    <div className="flex items-center gap-3">
                      <span>{j.proposals}</span>
                      <span className="text-gray-300">•</span>
                      <span>{j.timeAgo}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((c) => (
                <div
                  key={c.id}
                  className="bg-white border border-gray-200 rounded-2xl p-5"
                >
                  {/* Top */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      {c.avatarSrc ? (
                        <img
                          src={c.avatarSrc}
                          alt={c.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="font-semibold text-gray-900">{c.name}</div>
                        {c.verified && (
                          <div className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-100">
                            Verified
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">{c.location}</div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-500">{c.desc}</div>

                  {/* Stats (2x2) */}
                  <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-xs text-gray-500">Jobs Posted</div>
                      <div className="mt-1 font-semibold text-gray-900">{c.jobsPosted}</div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-500">Hire Rate</div>
                      <div className="mt-1 font-semibold text-gray-900">{c.hireRate}</div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-500">Total Spent</div>
                      <div className="mt-1 font-semibold text-gray-900">{c.totalSpent}</div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-500">Rating</div>
                      <div className="mt-1 flex items-center gap-1 font-semibold text-gray-900">
                        <StarIcon className="w-4 h-4 text-amber-400" />
                        {c.rating} <span className="text-gray-500 font-normal">{c.ratingCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div />
        </div>

        
      </main>

      <Footer />
      
    </>
  );
}
