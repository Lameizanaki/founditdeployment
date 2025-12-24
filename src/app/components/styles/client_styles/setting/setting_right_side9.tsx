import React, { useState } from 'react';

interface Integration {
  id: string;
  name: string;
  description: string;
  scopes?: string;
  connected: boolean;
  icon: React.ReactNode;
}

interface IntegrationSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  integrations: Integration[];
  additionalContent?: React.ReactNode;
}

const CalendarIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CloudIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const CodeIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ChatIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ExternalLinkIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const InfoIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IntegrationCard: React.FC<{
  integration: Integration;
  onConnect: () => void;
  onDisconnect: () => void;
}> = ({ integration, onConnect, onDisconnect }) => {
  return (
    <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
      <div className="flex items-start gap-3 flex-1">
        <div className="mt-0.5 text-gray-600">{integration.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-gray-900">{integration.name}</span>
            {integration.connected && (
              <span className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-50 rounded-full">
                Connected
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-1">{integration.description}</p>
          {integration.scopes && (
            <p className="text-xs text-gray-400">Scopes: {integration.scopes}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 ml-4">
        {integration.connected && (
          <div
            onClick={onDisconnect}
            className="p-1.5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
          >
            {ExternalLinkIcon}
          </div>
        )}
        <div
          onClick={integration.connected ? onDisconnect : onConnect}
          className="px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-colors whitespace-nowrap"
          style={{
            color: integration.connected ? '#dc2626' : '#2563eb',
            backgroundColor: integration.connected ? 'transparent' : 'transparent',
            border: integration.connected ? '1px solid #fecaca' : '1px solid #dbeafe',
          }}
        >
          {integration.connected ? 'Disconnect' : 'Connect'}
        </div>
      </div>
    </div>
  );
};

const ActionButton: React.FC<{
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}> = ({ icon, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
    >
      <span className="text-gray-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default function ConnectedApp() {
  const [sections, setSections] = useState<IntegrationSection[]>([
    {
      id: 'calendar',
      title: 'Calendar Integration',
      description: 'Sync deadlines and schedule meetings',
      icon: CalendarIcon,
      integrations: [
        {
          id: 'google-calendar',
          name: 'Google Calendar',
          description: 'Sync deadlines and meetings',
          scopes: 'calendar.readonly, calendar.events',
          connected: true,
          icon: CalendarIcon,
        },
      ],
    },
    {
      id: 'file-storage',
      title: 'File Storage',
      description: 'Connect cloud storage services',
      icon: CloudIcon,
      integrations: [
        {
          id: 'google-drive',
          name: 'Google Drive',
          description: 'Access and share files',
          scopes: 'drive.file',
          connected: true,
          icon: CloudIcon,
        },
      ],
      additionalContent: (
        <div className="flex flex-wrap gap-3 mt-4">
          <ActionButton
            icon={CloudIcon}
            text="Connect Dropbox"
            onClick={() => console.log('Connect Dropbox')}
          />
          <ActionButton
            icon={CloudIcon}
            text="Connect OneDrive"
            onClick={() => console.log('Connect OneDrive')}
          />
        </div>
      ),
    },
    {
      id: 'development',
      title: 'Development & Design',
      description: 'Connect your development and design tools',
      icon: CodeIcon,
      integrations: [
        {
          id: 'github',
          name: 'GitHub',
          description: 'Link repositories and commits',
          connected: false,
          icon: CodeIcon,
        },
        {
          id: 'figma',
          name: 'Figma',
          description: 'Share design files',
          connected: false,
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v14a2 2 0 01-2 2h-4zM7 21h4a2 2 0 002-2v-4a2 2 0 00-2-2H7m0-4h.01M7 10h4a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v3a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          id: 'bitbucket',
          name: 'Connect Bitbucket',
          description: '',
          connected: false,
          icon: CodeIcon,
        },
      ],
    },
    {
      id: 'communication',
      title: 'Communication',
      description: 'Sync with communication platforms',
      icon: ChatIcon,
      integrations: [
        {
          id: 'slack',
          name: 'Slack',
          description: 'Get notifications in Slack channels',
          scopes: 'chat:write, channels:read',
          connected: true,
          icon: ChatIcon,
        },
      ],
      additionalContent: (
        <div className="mt-4 space-y-3">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-900 mb-2">Channel Mapping</div>
            <p className="text-sm text-gray-500 mb-3">
              Send notifications to specific Slack channels
            </p>
            <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
              <span className="text-sm text-gray-700">#orders</span>
              <span className="text-xs text-gray-500">→ Order updates</span>
            </div>
          </div>
          <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-gray-600">{ChatIcon}</span>
              <span className="text-sm font-medium text-gray-900">Connect Discord</span>
            </div>
          </div>
        </div>
      ),
    },
  ]);

  const handleConnect = (sectionId: string, integrationId: string) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              integrations: section.integrations.map((integration) =>
                integration.id === integrationId
                  ? { ...integration, connected: true }
                  : integration
              ),
            }
          : section
      )
    );
  };

  const handleDisconnect = (sectionId: string, integrationId: string) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              integrations: section.integrations.map((integration) =>
                integration.id === integrationId
                  ? { ...integration, connected: false }
                  : integration
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="w-full h-screen overflow-y-auto py-2 px-4 sm:px-6 lg:px-8">
      <div className="w-full space-y-6">
        {/* Info Alert */}
        <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <div className="text-blue-600 mt-0.5">{InfoIcon}</div>
          <p className="text-sm text-gray-700">
            OAuth scopes are shown for each integration. You can revoke access at any time.
          </p>
        </div>

        {/* Integration Sections */}
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-gray-700 mt-1">{section.icon}</div>
              <div>
                <div className="text-base font-semibold text-gray-900 mb-1">
                  {section.title}
                </div>
                <p className="text-sm text-gray-500">{section.description}</p>
              </div>
            </div>

            <div className="space-y-3">
              {section.integrations.map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                  onConnect={() => handleConnect(section.id, integration.id)}
                  onDisconnect={() => handleDisconnect(section.id, integration.id)}
                />
              ))}
            </div>

            {section.additionalContent && section.additionalContent}
          </div>
        ))}
      </div>
    </div>
  );
}