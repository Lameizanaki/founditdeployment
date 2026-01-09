"use client";

import React from "react";

export default function ScreeningQuestionsCard({ questions }: { questions: string[] }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Screening Questions</h2>
      </div>

      <div className="px-5 py-4">
        <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
          {questions.map((q) => (
            <li key={q} className="text-gray-600">
              {q}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
