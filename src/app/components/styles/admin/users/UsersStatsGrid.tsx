"use client";

import React, { useMemo } from "react";

export default function UsersStatsGrid() {
  const stats = useMemo(
    () => [
      { label: "Total\nUsers", value: "15,423", tone: "blue", icon: <IconUsers /> },
      { label: "Freelancers", value: "8,945", tone: "purple", icon: <IconBriefcase /> },
      { label: "Clients", value: "5,832", tone: "green", icon: <IconUser /> },
      { label: "Sellers", value: "2,156", tone: "orange", icon: <IconBag /> },
      { label: "Active", value: "14,892", tone: "green2", icon: <IconCheck /> },
      { label: "Suspended", value: "231", tone: "red", icon: <IconBan /> },
      { label: "Pending", value: "300", tone: "amber", icon: <IconWarning /> },
      { label: "New This\nMonth", value: "1,247", tone: "violet", icon: <IconNewUser /> },
    ],
    []
  );

  function toneClasses(tone: string) {
    switch (tone) {
      case "blue":
        return "bg-blue-50 text-blue-600";
      case "purple":
        return "bg-fuchsia-50 text-fuchsia-600";
      case "green":
        return "bg-emerald-50 text-emerald-600";
      case "orange":
        return "bg-orange-50 text-orange-600";
      case "green2":
        return "bg-green-50 text-green-600";
      case "red":
        return "bg-rose-50 text-rose-600";
      case "amber":
        return "bg-amber-50 text-amber-600";
      case "violet":
        return "bg-violet-50 text-violet-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 min-h-[140px] flex flex-col"
        >
          <div
            className={`h-10 w-10 rounded-lg flex items-center justify-center ${toneClasses(
              s.tone
            )}`}
            aria-hidden="true"
          >
            {s.icon}
          </div>

          <div className="mt-3 text-sm text-gray-500 whitespace-pre-line leading-snug">
            {s.label}
          </div>

          {/* pinned bottom */}
          <div className="mt-auto pt-2 text-2xl font-semibold text-gray-900 leading-none">
            {s.value}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Icons — currentColor only */
function IconUsers() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0013 18.3346C14.6037 18.3346 18.3346 14.6037 18.3346 10.0013C18.3346 5.39893 14.6037 1.66797 10.0013 1.66797C5.39893 1.66797 1.66797 5.39893 1.66797 10.0013C1.66797 14.6037 5.39893 18.3346 10.0013 18.3346Z" stroke="#2B7FFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.832C11.3807 10.832 12.5 9.71274 12.5 8.33203C12.5 6.95132 11.3807 5.83203 10 5.83203C8.61929 5.83203 7.5 6.95132 7.5 8.33203C7.5 9.71274 8.61929 10.832 10 10.832Z" stroke="#2B7FFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83203 17.2196V15.8346C5.83203 15.3926 6.00763 14.9687 6.32019 14.6561C6.63275 14.3436 7.05667 14.168 7.4987 14.168H12.4987C12.9407 14.168 13.3646 14.3436 13.6772 14.6561C13.9898 14.9687 14.1654 15.3926 14.1654 15.8346V17.2196" stroke="#2B7FFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}
function IconBriefcase() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3346 16.668V3.33464C13.3346 2.89261 13.159 2.46868 12.8465 2.15612C12.5339 1.84356 12.11 1.66797 11.668 1.66797H8.33464C7.89261 1.66797 7.46869 1.84356 7.15612 2.15612C6.84356 2.46868 6.66797 2.89261 6.66797 3.33464V16.668" stroke="#615FFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.668 5H3.33464C2.41416 5 1.66797 5.74619 1.66797 6.66667V15C1.66797 15.9205 2.41416 16.6667 3.33464 16.6667H16.668C17.5884 16.6667 18.3346 15.9205 18.3346 15V6.66667C18.3346 5.74619 17.5884 5 16.668 5Z" stroke="#615FFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}
function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0013 18.3346C14.6037 18.3346 18.3346 14.6037 18.3346 10.0013C18.3346 5.39893 14.6037 1.66797 10.0013 1.66797C5.39893 1.66797 1.66797 5.39893 1.66797 10.0013C1.66797 14.6037 5.39893 18.3346 10.0013 18.3346Z" stroke="#00BC7D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.832C11.3807 10.832 12.5 9.71274 12.5 8.33203C12.5 6.95132 11.3807 5.83203 10 5.83203C8.61929 5.83203 7.5 6.95132 7.5 8.33203C7.5 9.71274 8.61929 10.832 10 10.832Z" stroke="#00BC7D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83203 17.2196V15.8346C5.83203 15.3926 6.00763 14.9687 6.32019 14.6561C6.63275 14.3436 7.05667 14.168 7.4987 14.168H12.4987C12.9407 14.168 13.3646 14.3436 13.6772 14.6561C13.9898 14.9687 14.1654 15.3926 14.1654 15.8346V17.2196" stroke="#00BC7D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}
function IconBag() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3346 8.33203C13.3346 9.21609 12.9834 10.0639 12.3583 10.6891C11.7332 11.3142 10.8854 11.6654 10.0013 11.6654C9.11725 11.6654 8.2694 11.3142 7.64428 10.6891C7.01916 10.0639 6.66797 9.21609 6.66797 8.33203" stroke="#FE9A00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.58594 5.02734H17.4143" stroke="#FE9A00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.83333 4.55714C2.61696 4.84563 2.5 5.19652 2.5 5.55714V16.668C2.5 17.11 2.67559 17.5339 2.98816 17.8465C3.30072 18.159 3.72464 18.3346 4.16667 18.3346H15.8333C16.2754 18.3346 16.6993 18.159 17.0118 17.8465C17.3244 17.5339 17.5 17.11 17.5 16.668V5.55714C17.5 5.19652 17.383 4.84563 17.1667 4.55714L15.5 2.33464C15.3448 2.12764 15.1434 1.95964 14.912 1.84392C14.6806 1.72821 14.4254 1.66797 14.1667 1.66797H5.83333C5.57459 1.66797 5.3194 1.72821 5.08798 1.84392C4.85655 1.95964 4.65525 2.12764 4.5 2.33464L2.83333 4.55714Z" stroke="#FE9A00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}
function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1669 8.33357C18.5474 10.2013 18.2762 12.1431 17.3984 13.8351C16.5206 15.527 15.0893 16.8669 13.3431 17.6313C11.597 18.3957 9.64154 18.5384 7.80293 18.0355C5.96433 17.5327 4.35368 16.4147 3.23958 14.8681C2.12548 13.3214 1.57529 11.4396 1.68074 9.53639C1.78619 7.63318 2.54092 5.82364 3.81906 4.40954C5.0972 2.99545 6.8215 2.06226 8.7044 1.76561C10.5873 1.46897 12.515 1.82679 14.166 2.7794" stroke="#00C950" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 9.16536L10 11.6654L18.3333 3.33203" stroke="#00C950" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}
function IconBan() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.10938 4.10938L15.8935 15.8944" stroke="#FB2C36" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0013 18.3346C14.6037 18.3346 18.3346 14.6037 18.3346 10.0013C18.3346 5.39893 14.6037 1.66797 10.0013 1.66797C5.39893 1.66797 1.66797 5.39893 1.66797 10.0013C1.66797 14.6037 5.39893 18.3346 10.0013 18.3346Z" stroke="#FB2C36" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}
function IconWarning() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.109 14.9999L11.4423 3.33319C11.297 3.0767 11.0862 2.86335 10.8314 2.71492C10.5767 2.56649 10.2872 2.48828 9.99234 2.48828C9.69752 2.48828 9.40797 2.56649 9.15324 2.71492C8.8985 2.86335 8.6877 3.0767 8.54234 3.33319L1.87567 14.9999C1.72874 15.2543 1.6517 15.5431 1.65235 15.837C1.653 16.1308 1.73132 16.4192 1.87938 16.673C2.02744 16.9269 2.23996 17.137 2.49542 17.2822C2.75088 17.4274 3.04018 17.5025 3.33401 17.4999H16.6673C16.9598 17.4996 17.2469 17.4223 17.5001 17.2759C17.7532 17.1295 17.9634 16.9191 18.1094 16.6658C18.2555 16.4125 18.3324 16.1252 18.3323 15.8328C18.3322 15.5404 18.2552 15.2531 18.109 14.9999Z" stroke="#FE9A00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7.5V10.8333" stroke="#FE9A00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14.168H10.0083" stroke="#FE9A00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}
function IconNewUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2359_17029)">
<path d="M13.332 9.16667L14.9987 10.8333L18.332 7.5" stroke="#AD46FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3346 17.5V15.8333C13.3346 14.9493 12.9834 14.1014 12.3583 13.4763C11.7332 12.8512 10.8854 12.5 10.0013 12.5H5.0013C4.11725 12.5 3.2694 12.8512 2.64428 13.4763C2.01916 14.1014 1.66797 14.9493 1.66797 15.8333V17.5" stroke="#AD46FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5013 9.16667C9.34225 9.16667 10.8346 7.67428 10.8346 5.83333C10.8346 3.99238 9.34225 2.5 7.5013 2.5C5.66035 2.5 4.16797 3.99238 4.16797 5.83333C4.16797 7.67428 5.66035 9.16667 7.5013 9.16667Z" stroke="#AD46FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2359_17029">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}
