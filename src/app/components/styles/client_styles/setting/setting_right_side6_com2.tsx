// File: components/setting_right_side6_com2.tsx
import React, { useState } from "react";

interface ActiveSession {
  device: string;
  location: string;
  ipAddress: string;
  lastSeen: string;
  isCurrent: boolean;
}

const SettingRightSide6Com2: React.FC = () => {
  const [sessions, setSessions] = useState<ActiveSession[]>([
    {
      device: "Chrome on macOS",
      location: "San Francisco, CA",
      ipAddress: "192.168.1.1",
      lastSeen: "2 minutes ago",
      isCurrent: true,
    },
    {
      device: "Safari on iPhone",
      location: "San Francisco, CA",
      ipAddress: "192.168.1.50",
      lastSeen: "1 hour ago",
      isCurrent: false,
    },
    {
      device: "Firefox on Windows",
      location: "New York, NY",
      ipAddress: "203.0.113.1",
      lastSeen: "2 days ago",
      isCurrent: false,
    },
  ]);

  const handleSignOut = (index: number) => {
    // Handle sign out logic (e.g., API call to sign out the session)
    const updatedSessions = sessions.filter((_, i) => i !== index);
    setSessions(updatedSessions);
  };

  return (
    <div className="w-full px-6 py-8 space-y-6">
      <div className="space-y-4">
        <div className="text-lg font-semibold">Active Sessions</div>
        <div className="text-sm text-gray-500">Manage devices where you're currently logged in</div>
      </div>
      
      <div className="space-y-4">
        {sessions.map((session, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-md border-gray-300">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-full bg-gray-300 ${session.isCurrent ? 'bg-blue-400' : ''}`} />
              </div>
              <div className="space-y-1">
                <div className="text-base font-semibold">{session.device}</div>
                <div className="text-sm text-gray-500">{session.location} · {session.ipAddress}</div>
                <div className="text-xs text-gray-400">{session.lastSeen}</div>
              </div>
            </div>
            {!session.isCurrent && (
              <div 
                onClick={() => handleSignOut(index)} 
                className="cursor-pointer text-sm text-gray-600 hover:text-red-600"
              >
                Sign Out
              </div>
            )}
            {session.isCurrent && (
              <div className="text-sm text-blue-600">Current</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingRightSide6Com2;
