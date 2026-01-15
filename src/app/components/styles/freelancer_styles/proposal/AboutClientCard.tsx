"use client";

import React from "react";
import { BadgeCheck, Clock, MapPin, Star } from "lucide-react";

type AboutClient = {
  name: string;
  avatarSrc?: string;

  locationText: string; // e.g. "Cambodia, PP"
  timezoneText: string; // e.g. "PST"
  verified: boolean;

  totalSpent: string; // "$45,000"
  totalHires: number; // 28
  openJobs: number; // 3
  hireRate: number; // 85
  responseTime: string; // "2 hours"
  ratingValue: number; // 4.8
  ratingOutOf: number; // 5.0
};

export default function AboutClientCard({
  client,
  onViewProfile,
}: {
  client: AboutClient;
  onViewProfile?: () => void;
}) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">About the Client</h2>
      </div>

      <div className="px-5 py-4">
        {/* top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            {/* avatar */}
            {client.avatarSrc ? (
              <img
                src={client.avatarSrc}
                alt={client.name}
                className="h-10 w-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 flex-shrink-0">
                {client.name
                  .split(" ")
                  .slice(0, 2)
                  .map((x) => x[0]?.toUpperCase())
                  .join("")}
              </div>
            )}

            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900 truncate">
                {client.name}
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  <span>{client.locationText}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-gray-400" />
                  <span>{client.timezoneText}</span>
                </div>
              </div>
            </div>
          </div>

          {/* verified badge */}
          {client.verified ? (
            <div className="flex items-center gap-1 rounded-full bg-gray-100 border border-gray-200 px-2 py-1 text-xs text-gray-700 flex-shrink-0">
              <BadgeCheck className="h-3.5 w-3.5 text-gray-600" />
              <span className="font-medium">Verified</span>
            </div>
          ) : null}
        </div>

        {/* stats */}
        <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-5">
          <div>
            <div className="text-xs text-gray-500">Total spent:</div>
            <div className="text-sm font-semibold text-gray-900">
              {client.totalSpent}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Hire rate:</div>
            <div className="text-sm font-semibold text-gray-900">
              {client.hireRate}%
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Total hires:</div>
            <div className="text-sm font-semibold text-gray-900">
              {client.totalHires}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Response time:</div>
            <div className="text-sm font-semibold text-gray-900">
              {client.responseTime}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Open jobs:</div>
            <div className="text-sm font-semibold text-gray-900">
              {client.openJobs}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Rating:</div>
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>
                {client.ratingValue.toFixed(1)}/{client.ratingOutOf.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="mt-5">
          <div
            role="button"
            tabIndex={0}
            onClick={() => onViewProfile?.()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onViewProfile?.();
              }
            }}
            className="w-full text-center px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
          >
            View Profile
          </div>
        </div>
      </div>
    </div>
  );
}
