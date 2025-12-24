import React, { useState } from 'react';

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ enabled, onChange }) => {
  return (
    <div
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
        enabled ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
          enabled ? 'translate-x-6' : 'translate-x-0.5'
        } mt-0.5`}
      />
    </div>
  );
};

interface SelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ value, options, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-gray-600">{icon}</span>}
          <span className="text-sm text-gray-900">{value}</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="px-4 py-3 text-sm text-gray-900 hover:bg-gray-50 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface SettingItemProps {
  title: string;
  description: string;
  control: React.ReactNode;
  icon?: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({ title, description, control, icon }) => {
  return (
    <div className="flex items-start justify-between py-4 gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {icon && <span className="text-gray-600">{icon}</span>}
          <span className="text-sm font-medium text-gray-900">{title}</span>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex-shrink-0">{control}</div>
    </div>
  );
};

interface PrivacySettings {
  profileVisibility: string;
  showOnlineStatus: boolean;
  searchEngineIndexing: boolean;
  aiContentDisclosure: boolean;
  allowDirectMessages: string;
}

export default function Privacy() {
  const [settings, setSettings] = useState<PrivacySettings>({
    profileVisibility: 'Public - Anyone can see',
    showOnlineStatus: false,
    searchEngineIndexing: false,
    aiContentDisclosure: false,
    allowDirectMessages: 'Anyone',
  });

  const updateSetting = <K extends keyof PrivacySettings>(
    key: K,
    value: PrivacySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const GlobeIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const SearchIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const BadgeIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );

  const MessageIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    </svg>
  );

  return (
    <div className="w-full h-screen ml-4 mr-4">
      <div className="w-full h-screen space-y-6">
        {/* Profile Visibility Section */}
        <div className="bg-white rounded-2xl shadow-sm px-3 py-4">
          <div>
            <div>
              <p className="text-2xl">
                Profile Visibility
              </p>
            </div>
            <div className="-mt-2">
                <p className="text-lg text-gray-500">
                    Control who can see your profile and information
                </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-gray-900 mb-3">
                Profile Visibility
              </div>
              <Select
                value={settings.profileVisibility}
                options={[
                  'Public - Anyone can see',
                  'Private - Only connections',
                  'Custom - Selected people',
                ]}
                onChange={(value) => updateSetting('profileVisibility', value)}
                icon={GlobeIcon}
              />
            </div>

            <SettingItem
              title="Show Online Status"
              description="Control whether others can see when you're active. Turning this off won't affect message delivery."
              control={
                <Toggle
                  enabled={settings.showOnlineStatus}
                  onChange={(value) => updateSetting('showOnlineStatus', value)}
                />
              }
            />

            <SettingItem
              title="Search Engine Indexing"
              description="Turning off indexing may reduce external traffic but improves privacy."
              icon={SearchIcon}
              control={
                <Toggle
                  enabled={settings.searchEngineIndexing}
                  onChange={(value) => updateSetting('searchEngineIndexing', value)}
                />
              }
            />

            <SettingItem
              title="AI-Content Disclosure Badge"
              description="Show a badge indicating when AI was used to create content"
              icon={BadgeIcon}
              control={
                <Toggle
                  enabled={settings.aiContentDisclosure}
                  onChange={(value) => updateSetting('aiContentDisclosure', value)}
                />
              }
            />
          </div>
        </div>

        {/* Communication Preferences Section */}
        <div className="bg-white h-80 rounded-2xl mt-9 shadow-sm px-3 py-3">
          <div className="mb-6">
            <div className="text-lg font-semibold text-gray-900 mb-1">
              Communication Preferences
            </div>
            <p className="text-sm text-gray-500">Manage who can contact you</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-600">{MessageIcon}</span>
              <span className="text-sm font-medium text-gray-900">
                Allow Direct Messages From
              </span>
            </div>
            <Select
              value={settings.allowDirectMessages}
              options={['Anyone', 'Connections only', 'No one']}
              onChange={(value) => updateSetting('allowDirectMessages', value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}