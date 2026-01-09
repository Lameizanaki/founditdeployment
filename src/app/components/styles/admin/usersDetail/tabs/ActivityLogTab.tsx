"use client";

import React from "react";

export default function ActivityLogTab() {
  const items = [
    { icon: "check", tone: "green", title: "Completed job: E-commerce Website Development", time: "2 hours ago", amount: "+$2,500" },
    { icon: "star", tone: "amber", title: "Received 5-star review from John Smith", time: "5 hours ago", amount: "" },
    { icon: "dollar", tone: "green", title: "Payment received for Mobile App Design", time: "1 day ago", amount: "+$1,800" },
    { icon: "doc", tone: "blue", title: "Posted new job: API Integration", time: "2 days ago", amount: "" },
    { icon: "clock", tone: "gray", title: "Updated portfolio with new project", time: "3 days ago", amount: "" },
    { icon: "dollar", tone: "red", title: "Payment sent to Mike Johnson", time: "4 days ago", amount: "$500" },
    { icon: "box", tone: "blue", title: "Started working on Dashboard Redesign", time: "5 days ago", amount: "" },
    { icon: "bag", tone: "green", title: "Sold UI Kit Template to Design Studio", time: "6 days ago", amount: "+$149" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      <div className="font-semibold text-gray-900">Recent Activity</div>

      <div className="mt-4 divide-y divide-gray-100">
        {items.map((it, idx) => (
          <div key={idx} className="py-4 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 min-w-0">
              <div className={toneIcon(it.tone)} aria-hidden="true">
                {pickIcon(it.icon)}
              </div>

              <div className="min-w-0">
                <div className="text-sm text-gray-900 truncate">{it.title}</div>
                <div className="text-xs text-gray-500 mt-1">{it.time}</div>
              </div>
            </div>

            {it.amount ? (
              <div className={`text-sm font-medium ${amountTone(it.tone)}`}>{it.amount}</div>
            ) : (
              <div />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function toneIcon(tone: string) {
  if (tone === "green") return "text-emerald-600";
  if (tone === "amber") return "text-amber-500";
  if (tone === "blue") return "text-blue-600";
  if (tone === "red") return "text-rose-600";
  return "text-gray-500";
}
function amountTone(tone: string) {
  if (tone === "red") return "text-rose-600";
  if (tone === "green") return "text-emerald-600";
  return "text-gray-900";
}

function pickIcon(k: string) {
  if (k === "check") return <IconCheck />;
  if (k === "star") return <IconStar />;
  if (k === "dollar") return <IconDollar />;
  if (k === "doc") return <IconDoc />;
  if (k === "clock") return <IconClock />;
  if (k === "box") return <IconBox />;
  return <IconBag />;
}

/* icons */
function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l2.8 5.7 6.3.9-4.55 4.4 1.08 6.28L12 17.9 6.37 20.78l1.08-6.28L2.9 10.1l6.3-.9L12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconDollar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M17 7a4 4 0 0 0-4-2H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a4 4 0 0 1-4-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2359_18531)">
<path d="M10.0013 1.33203H4.0013C3.64768 1.33203 3.30854 1.47251 3.05849 1.72256C2.80844 1.9726 2.66797 2.31174 2.66797 2.66536V13.332C2.66797 13.6857 2.80844 14.0248 3.05849 14.2748C3.30854 14.5249 3.64768 14.6654 4.0013 14.6654H12.0013C12.3549 14.6654 12.6941 14.5249 12.9441 14.2748C13.1942 14.0248 13.3346 13.6857 13.3346 13.332V4.66536L10.0013 1.33203Z" stroke="#2B7FFF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33203 1.33203V3.9987C9.33203 4.35232 9.47251 4.69146 9.72256 4.94151C9.9726 5.19156 10.3117 5.33203 10.6654 5.33203H13.332" stroke="#2B7FFF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66536 6H5.33203" stroke="#2B7FFF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6654 8.66797H5.33203" stroke="#2B7FFF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6654 11.332H5.33203" stroke="#2B7FFF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2359_18531">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}
function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2359_18544)">
<path d="M8 4V8L10.6667 9.33333" stroke="#717182" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.9987 14.6654C11.6806 14.6654 14.6654 11.6806 14.6654 7.9987C14.6654 4.3168 11.6806 1.33203 7.9987 1.33203C4.3168 1.33203 1.33203 4.3168 1.33203 7.9987C1.33203 11.6806 4.3168 14.6654 7.9987 14.6654Z" stroke="#717182" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2359_18544">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>


  );
}
function IconBox() {
  return (
   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2359_18566)">
<path d="M10.6654 13.332V2.66536C10.6654 2.31174 10.5249 1.9726 10.2748 1.72256C10.0248 1.47251 9.68565 1.33203 9.33203 1.33203H6.66536C6.31174 1.33203 5.9726 1.47251 5.72256 1.72256C5.47251 1.9726 5.33203 2.31174 5.33203 2.66536V13.332" stroke="#615FFF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 4H2.66536C1.92898 4 1.33203 4.59695 1.33203 5.33333V12C1.33203 12.7364 1.92898 13.3333 2.66536 13.3333H13.332C14.0684 13.3333 14.6654 12.7364 14.6654 12V5.33333C14.6654 4.59695 14.0684 4 13.332 4Z" stroke="#615FFF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2359_18566">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}
function IconBag() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2359_18575)">
<path d="M10.6654 6.66797C10.6654 7.37521 10.3844 8.05349 9.88432 8.55359C9.38422 9.05368 8.70594 9.33464 7.9987 9.33464C7.29145 9.33464 6.61318 9.05368 6.11308 8.55359C5.61298 8.05349 5.33203 7.37521 5.33203 6.66797" stroke="#00C950" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.07031 4.02344H13.933" stroke="#00C950" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.26667 3.64336C2.09357 3.87416 2 4.15487 2 4.44336V13.332C2 13.6857 2.14048 14.0248 2.39052 14.2748C2.64057 14.5249 2.97971 14.6654 3.33333 14.6654H12.6667C13.0203 14.6654 13.3594 14.5249 13.6095 14.2748C13.8595 14.0248 14 13.6857 14 13.332V4.44336C14 4.15487 13.9064 3.87416 13.7333 3.64336L12.4 1.86536C12.2758 1.69977 12.1148 1.56537 11.9296 1.4728C11.7445 1.38022 11.5403 1.33203 11.3333 1.33203H4.66667C4.45967 1.33203 4.25552 1.38022 4.07038 1.4728C3.88524 1.56537 3.7242 1.69977 3.6 1.86536L2.26667 3.64336Z" stroke="#00C950" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2359_18575">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}
