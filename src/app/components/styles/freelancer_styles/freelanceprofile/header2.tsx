import React, { useState } from "react";

interface GigData {
  id: number;
  freelancerName: string;
  shortBio: string;
  description: string;
  price: number;
  skillName: string;
  imageUrl?: string;
  verified: boolean;
  rating?: number;
  reviewCount?: number;
  experience: string;
  location: string;
  lastActiveDays?: number;
  workCount?: number;
}

interface ProfileHeaderProps {
  gigData?: GigData | null;
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

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 17.3l-5.2 3 1.4-5.9-4.6-4 6.1-.5L12 4.3l2.3 5.6 6.1.5-4.6 4 1.4 5.9-5.2-3z" />
    </svg>
  );
}

export default function ProfileHeader({ gigData }: ProfileHeaderProps) {
  const [tab, setTab] = useState<"work" | "reviews" | "about">("work");

  // Format last active text
  const formatLastActive = (days?: number) => {
    if (!days) return "Recently";
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}

      {/* Top row */}
      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Left */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
            {gigData?.imageUrl ? (
              <img
                src={gigData.imageUrl}
                alt={gigData.freelancerName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
            )}
          </div>

          {/* Text */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-none">
                {gigData?.freelancerName || "Freelancer"}
              </h1>

              {/* Verified pill */}
              {gigData?.verified && (
                <div className="px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium">
                  Verified ID
                </div>
              )}
            </div>

            <div className="mt-2 text-gray-700">
              {gigData?.shortBio ||
                gigData?.skillName ||
                "Professional Freelancer"}
            </div>

            {/* Meta */}
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600">
              {gigData?.rating && (
                <>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-amber-400" />
                    <span className="font-medium text-gray-900">
                      {gigData.rating.toFixed(1)}
                    </span>
                    <span className="text-gray-500">
                      ({gigData.reviewCount || 0})
                    </span>
                  </div>
                  <span className="text-gray-300">·</span>
                </>
              )}

              {gigData?.price && (
                <>
                  <span>${gigData.price}/hr</span>
                  <span className="text-gray-300">·</span>
                </>
              )}

              {gigData?.location && (
                <>
                  <span>{gigData.location}</span>
                  <span className="text-gray-300">·</span>
                </>
              )}

              <span className="text-gray-500">
                Last active {formatLastActive(gigData?.lastActiveDays)}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Hire */}
        <div className="sm:pt-1 ">
          <div
            role="button"
            tabIndex={0}
            onClick={() => {}}
            onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-xl  text-[#4F39F6] text-sm font-medium
                       hover:opacity-70 active:opacity-45 transition cursor-pointer select-none"
            aria-label="Hire"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8"
                  stroke="#4F39F6"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.2475 1.75015C12.5127 1.48493 12.8724 1.33594 13.2475 1.33594C13.6225 1.33594 13.9822 1.48493 14.2475 1.75015C14.5127 2.01537 14.6617 2.37508 14.6617 2.75015C14.6617 3.12522 14.5127 3.48493 14.2475 3.75015L8.23879 9.75948C8.08049 9.91765 7.88493 10.0334 7.67012 10.0962L5.75479 10.6562C5.69743 10.6729 5.63662 10.6739 5.57873 10.6591C5.52084 10.6442 5.46801 10.6141 5.42576 10.5719C5.3835 10.5296 5.35338 10.4768 5.33855 10.4189C5.32372 10.361 5.32473 10.3002 5.34146 10.2428L5.90146 8.32748C5.96448 8.11285 6.08048 7.91752 6.23879 7.75948L12.2475 1.75015Z"
                  stroke="#4F39F6"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            Edit Profile
          </div>
        </div>
      </div>
    </div>
  );
}
