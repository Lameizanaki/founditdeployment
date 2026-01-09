"use client";

import React from "react";

export default function JobDescriptionCard({
  intro,
  keyRequirements,
  deliverables,
  idealCandidate,
  proposalInclude,
}: {
  intro: string;
  keyRequirements: string[];
  deliverables: string[];
  idealCandidate: string[];
  proposalInclude: string[];
}) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h3 className="text-sm font-semibold text-gray-900">Job Description</h3>
      </div>

      <div className="px-5 py-4 text-md text-gray-700">
        <p className="text-gray-600">{intro}</p>

        <Block title="Key Requirements:" items={keyRequirements} />
        <Block title="Deliverables:" items={deliverables} />
        <Block title="The ideal candidate should have:" items={idealCandidate} />
        <Block title="Please include in your proposal:" items={proposalInclude} />
      </div>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <p className="text-md font-semibold text-gray-900">{title}</p>
      <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
