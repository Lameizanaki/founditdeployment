// File: components/setting_right_side6_com.tsx

import React, { useState } from "react";

interface ProfileFormData {
  displayName: string;
  username: string;
  primaryEmail: string;
  backupEmail: string;
  phoneNumber: string;
  country: string;
  timeZone: string;
  languages: string;
}

const SettingRightSide6Com1: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileFormData>({
    displayName: "",
    username: "",
    primaryEmail: "",
    backupEmail: "",
    phoneNumber: "",
    country: "",
    timeZone: "",
    languages: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md px-6 py-8">
      <div className="space-y-6">
        <div className="flex flex-col gap-4">
          {/* Display Name */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">Display Name</div>
            <input
              type="text"
              name="displayName"
              value={profileData.displayName}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">Handle (Username)</div>
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleChange}
              disabled
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
            />
            <div className="text-sm text-gray-500">Your unique username cannot be changed</div>
          </div>

          {/* Primary Email */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">Primary Email</div>
            <input
              type="email"
              name="primaryEmail"
              value={profileData.primaryEmail}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <div className="text-sm text-gray-500">Used for login and receipts</div>
          </div>

          {/* Backup Email */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">Backup Email (Recovery)</div>
            <input
              type="email"
              name="backupEmail"
              value={profileData.backupEmail}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <div className="text-sm text-gray-500">Used for account recovery</div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">Phone Number</div>
            <input
              type="text"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <div className="text-sm text-gray-500">We only use your phone for security and critical payout updates.</div>
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">Country</div>
            <select
              name="country"
              value={profileData.country}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            >
              <option value="Cambodia">Cambodia</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          {/* Time Zone */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">Time Zone</div>
            <select
              name="timeZone"
              value={profileData.timeZone}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            >
              <option value="Pacific Time (PT)">Pacific Time (PT)</option>
              {/* Add more time zones as needed */}
            </select>
          </div>

          {/* Languages */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">Languages</div>
            <select
              name="languages"
              value={profileData.languages}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            >
              <option value="English">English</option>
              {/* Add more languages as needed */}
            </select>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-6 flex justify-end">
          <div className="inline-flex items-center justify-center w-auto h-10 px-6 py-2 text-base font-semibold text-white bg-green-600 rounded-md cursor-pointer hover:bg-green-700">
            Save Changes
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingRightSide6Com1;
