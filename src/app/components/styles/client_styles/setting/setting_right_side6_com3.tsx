// File: components/setting_right_side6_com3.tsx
import React, { useState } from "react";

interface BlockedUser {
  name: string;
  blockedDate: string;
  imageUrl?: string;
}

const SettingRightSide6Com3: React.FC = () => {
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([
    {
      name: "Marcus Peterson",
      blockedDate: "Jan 28, 2025",
      imageUrl: "/path-to-image-1.jpg", // You can replace this with an actual image URL
    },
    {
      name: "Lisa Anderson",
      blockedDate: "Jan 15, 2025",
      imageUrl: "/path-to-image-2.jpg", // Replace with image URL
    },
    {
      name: "David Martinez",
      blockedDate: "Dec 22, 2024",
      imageUrl: "/path-to-image-3.jpg", // Replace with image URL
    },
    {
      name: "Rachel Kim",
      blockedDate: "Dec 8, 2024",
      imageUrl: "/path-to-image-4.jpg", // Replace with image URL
    },
    {
      name: "James Foster",
      blockedDate: "Nov 30, 2024",
      imageUrl: "/path-to-image-5.jpg", // Replace with image URL
    },
  ]);

  const handleUnblock = (index: number) => {
    // Handle unblock logic (e.g., API call to unblock the user)
    const updatedBlockedUsers = blockedUsers.filter((_, i) => i !== index);
    setBlockedUsers(updatedBlockedUsers);
  };

  return (
    <div className="w-full px-6 py-8 space-y-6">
      <div className="space-y-4">
        <div className="text-lg font-semibold">Blocked Users</div>
        <div className="text-sm text-gray-500">Manage users you've blocked. They won't be able to contact you or see your job posts.</div>
      </div>
      
      <div className="space-y-4">
        {blockedUsers.map((user, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-md border-gray-300">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full bg-gray-300 ${user.imageUrl ? '' : 'flex items-center justify-center'}`}>
                  {user.imageUrl ? (
                    <img src={user.imageUrl} alt={`${user.name}'s avatar`} className="w-12 h-12 rounded-full" />
                  ) : (
                    <span className="text-white">{user.name[0]}</span> // Default avatar with the first letter of the name
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-base font-semibold">{user.name}</div>
                <div className="text-sm text-gray-500">Blocked on {user.blockedDate}</div>
              </div>
            </div>
            <div
              onClick={() => handleUnblock(index)}
              className="cursor-pointer text-sm text-gray-600 hover:text-red-600"
            >
              Unblock
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingRightSide6Com3;
