"use client";

import React from "react";

export default function UserBioCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      <div className="text-base font-semibold text-gray-900">Bio</div>
      <div className="mt-4 text-sm text-gray-600 leading-relaxed">
        Full-stack developer with 8+ years of experience in React, Node.js, and cloud infrastructure.
        Passionate about building scalable applications.
      </div>
    </div>
  );
}
