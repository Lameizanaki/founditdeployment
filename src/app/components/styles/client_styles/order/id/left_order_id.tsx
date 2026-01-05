// left_order_id.tsx
import React, { useState } from 'react';

interface Delivery {
  version: string;
  user: string;
  date: string;
  description: string;
  files: FileItem[];
  isApproved: boolean;
}

interface Milestone {
  phase: string;
  amount: number;
  due: string;
  status: 'Paid' | 'In progress' | 'Unfunded';
}

interface FileItem {
  name: string;
  size?: string;
  verified?: boolean;
}

interface Activity {
  description: string;
  date: string;
  user: string;
}

interface Invoice {
  number: string;
  date: string;
  description: string;
  amount: number;
}

interface MemberData {
  deliveries: Delivery[];
  milestones: Milestone[];
  overallProgress: number;
  released: number;
  total: number;
  files: FileItem[];
  invoices: Invoice[];
  activities: Activity[];
}

interface LeftOrderIdProps {
  selectedMemberId?: string;
}

export default function LeftOrderId({ selectedMemberId = 'user_002' }: LeftOrderIdProps) {
  const [currentTab, setCurrentTab] = useState<'timeline' | 'files' | 'invoices'>('timeline');
  const [visibleActivities, setVisibleActivities] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeliveryIndex, setSelectedDeliveryIndex] = useState<number | null>(null);

  // Per-member data (in real app, fetch from backend using selectedMemberId)
  const [memberData, setMemberData] = useState<Record<string, MemberData>>({
    'user_002': { // James Foster
      deliveries: [
        {
          version: 'v3.2',
          user: 'James Foster',
          date: 'Nov 11, 2024',
          description: 'Backend API endpoints for course management, user authentication, and payment processing. Includes comprehensive API documentation.',
          files: [
            { name: 'api-documentation.pdf', size: '4.2 MB' },
            { name: 'backend-source-code.zip', size: '28.3 MB' },
            { name: 'database-schema.sql', size: '156 KB' },
          ],
          isApproved: false,
        },
        {
          version: 'v1.5',
          user: 'James Foster',
          date: 'Oct 28, 2024',
          description: 'Initial database architecture and authentication system implementation.',
          files: [
            { name: 'database-design-v1.pdf', size: '2.8 MB' },
            { name: 'auth-system.zip', size: '6.4 MB' },
          ],
          isApproved: false,
        },
      ],
      milestones: [
        { phase: 'Phase 1: Initial Development & Architecture', amount: 6000, due: 'Oct 30, 2024', status: 'Paid' },
        { phase: 'Phase 2: Core Features & UI Development', amount: 8000, due: 'Nov 15, 2024', status: 'In progress' },
        { phase: 'Phase 3: Integration & Testing', amount: 6000, due: 'Dec 1, 2024', status: 'Unfunded' },
      ],
      overallProgress: 72,
      released: 6000,
      total: 20000,
      files: [
        { name: 'api-documentation.pdf', size: '4.2 MB', verified: true },
        { name: 'backend-source-code.zip', size: '28.3 MB', verified: true },
        { name: 'database-schema.sql', size: '156 KB', verified: true },
        { name: 'student-dashboard-v2.fig', size: '22.4 MB', verified: true },
        { name: 'frontend-components.zip', size: '17.7 MB', verified: true },
        { name: 'dashboard-preview.png', size: '3.5 MB', verified: true },
        { name: 'admin-panel-v3.zip', size: '34.6 MB', verified: true },
        { name: 'analytics-components.tsx', size: '4.1 KB', verified: true },
        { name: 'admin-screenshots.png', size: '4.1 MB', verified: true },
        { name: 'NDA-Agreement-2.5.pdf', verified: true },
        { name: 'Service-Agreement-2.5.pdf', verified: true },
        { name: 'Project-Brief.pdf', verified: true },
      ],
      invoices: [
        { number: 'Invoice #2.5-m1', date: 'Oct 30, 2024', description: 'Phase 1: Initial Development & Architecture', amount: 6000 },
        { number: 'Platform fee statement', date: 'Oct 20, 2024', description: 'Service charges', amount: 1000 },
      ],
      activities: [
      { description: 'Delivered backend API v3.2 with payment integration', date: 'Nov 11, 2024 at 4:15 PM', user: 'James Foster' },
      { description: 'Backend API development progressing well - payment gateway integrated', date: 'Nov 10, 2024 at 3:45 PM', user: 'James Foster' },
      { description: 'Approved admin panel delivery from David', date: 'Nov 9, 2024 at 10:00 AM', user: 'You' },
      { description: 'Approved course catalog design from Rachel', date: 'Nov 6, 2024 at 9:15 AM', user: 'You' },
      { description: 'Database optimization completed, starting payment integration', date: 'Nov 3, 2024 at 11:20 AM', user: 'James Foster' },
      { description: 'Approved initial database architecture', date: 'Oct 30, 2024 at 2:00 PM', user: 'You' },
      { description: 'Delivered database design and auth system v1.5', date: 'Oct 28, 2024 at 5:50 PM', user: 'James Foster' },
      { description: 'Funded Phase 1: Initial Development', date: 'Oct 21, 2024 at 10:00 AM', user: 'You' },
      { description: 'Delivered backend API v3.2 with payment integration', date: 'Nov 11, 2024 at 4:15 PM', user: 'James Foster' },
        { description: 'Backend API development progressing well - payment gateway integrated', date: 'Nov 10, 2024 at 3:45 PM', user: 'James Foster' },
        { description: 'Approved admin panel delivery from David', date: 'Nov 9, 2024 at 10:00 AM', user: 'You' },
        { description: 'Approved course catalog design from Rachel', date: 'Nov 6, 2024 at 9:15 AM', user: 'You' },
        { description: 'Database optimization completed, starting payment integration', date: 'Nov 3, 2024 at 11:20 AM', user: 'James Foster' },
        { description: 'Approved initial database architecture', date: 'Oct 30, 2024 at 2:00 PM', user: 'You' },
        { description: 'Delivered database design and auth system v1.5', date: 'Oct 28, 2024 at 5:50 PM', user: 'James Foster' },
        { description: 'Funded Phase 1: Initial Development', date: 'Oct 21, 2024 at 10:00 AM', user: 'You' },
    ]
    },
    'user_003': { // Rachel Kim
      deliveries: [
        {
          version: 'v2.4',
          user: 'Rachel Kim',
          date: 'Nov 5, 2024',
          description: 'UI designs for course catalog and user dashboard. Includes wireframes and prototypes.',
          files: [
            { name: 'ui-designs.pdf', size: '5.1 MB' },
            { name: 'wireframes.zip', size: '15.2 MB' },
          ],
          isApproved: false,
        },
        {
          version: 'v1.2',
          user: 'Rachel Kim',
          date: 'Oct 25, 2024',
          description: 'Initial frontend architecture setup.',
          files: [
            { name: 'frontend-setup.zip', size: '8.7 MB' },
          ],
          isApproved: false,
        },
      ],
      milestones: [
        { phase: 'Phase 1: UI Planning', amount: 4000, due: 'Oct 28, 2024', status: 'Paid' },
        { phase: 'Phase 2: Design Implementation', amount: 5000, due: 'Nov 10, 2024', status: 'In progress' },
        { phase: 'Phase 3: Final Touches', amount: 3000, due: 'Nov 30, 2024', status: 'Unfunded' },
      ],
      overallProgress: 65,
      released: 4000,
      total: 12000,
      files: [
        { name: 'ui-designs.pdf', size: '5.1 MB', verified: true },
        { name: 'wireframes.zip', size: '15.2 MB', verified: true },
        { name: 'frontend-setup.zip', size: '8.7 MB', verified: true },
        { name: 'color-scheme.png', size: '2.3 MB', verified: true },
        { name: 'NDA-Agreement-2.5.pdf', verified: true },
        { name: 'Service-Agreement-2.5.pdf', verified: true },
      ],
      invoices: [
        { number: 'Invoice #2.5-r1', date: 'Oct 28, 2024', description: 'Phase 1: UI Planning', amount: 4000 },
        { number: 'Platform fee statement', date: 'Oct 20, 2024', description: 'Service charges', amount: 800 },
      ],
      activities: [],
    },
    'user_004': { // David Chen
      deliveries: [
        {
          version: 'v4.1',
          user: 'David Chen',
          date: 'Nov 8, 2024',
          description: 'Integration of payment gateway and testing scripts.',
          files: [
            { name: 'payment-integration.zip', size: '12.4 MB' },
            { name: 'test-scripts.pdf', size: '3.6 MB' },
          ],
          isApproved: false,
        },
        {
          version: 'v1.8',
          user: 'David Chen',
          date: 'Oct 30, 2024',
          description: 'Database optimization and initial testing.',
          files: [
            { name: 'db-optimization.sql', size: '210 KB' },
          ],
          isApproved: false,
        },
      ],
      milestones: [
        { phase: 'Phase 1: Setup & Optimization', amount: 5000, due: 'Oct 31, 2024', status: 'Paid' },
        { phase: 'Phase 2: Integration', amount: 6000, due: 'Nov 12, 2024', status: 'In progress' },
        { phase: 'Phase 3: Testing & Deployment', amount: 5000, due: 'Dec 5, 2024', status: 'Unfunded' },
      ],
      overallProgress: 80,
      released: 5000,
      total: 16000,
      files: [
        { name: 'payment-integration.zip', size: '12.4 MB', verified: true },
        { name: 'test-scripts.pdf', size: '3.6 MB', verified: true },
        { name: 'db-optimization.sql', size: '210 KB', verified: true },
        { name: 'deployment-guide.md', size: '1.2 MB', verified: true },
        { name: 'NDA-Agreement-2.5.pdf', verified: true },
        { name: 'Service-Agreement-2.5.pdf', verified: true },
      ],
      invoices: [
        { number: 'Invoice #2.5-d1', date: 'Oct 31, 2024', description: 'Phase 1: Setup & Optimization', amount: 5000 },
        { number: 'Platform fee statement', date: 'Oct 20, 2024', description: 'Service charges', amount: 900 },
      ],
      activities: [],
    },
  });

  const data = memberData[selectedMemberId] || memberData['user_002'];

  const tabs = [
    { id: 'timeline', label: 'Timeline' },
    { id: 'files', label: 'Files' },
    { id: 'invoices', label: 'Invoices' },
  ];

  const [delivery, setDelivery] = useState({ isApproved: false });

  // Handle approve button click
  const approveDelivery = () => {
    setDelivery({ ...delivery, isApproved: true });
    setIsModalOpen(false);  // Close modal after approval
  };

  // Handle cancel button click
  const cancelApproval = () => {
    setIsModalOpen(false);  // Just close the modal
  };

  // const approveHours = (index: number) => {
  //   // Update delivery's approval status
  //   const updatedDeliveries = [...data.deliveries];
  //   updatedDeliveries[index].isApproved = true;

  //   // Update memberData in state
  //   setMemberData(prevData => ({
  //     ...prevData,
  //     [selectedMemberId]: {
  //       ...prevData[selectedMemberId],
  //       deliveries: updatedDeliveries,
  //     },
  //   }));

  //   setIsModalOpen(false); // Close the modal after approval
  //   setSelectedDeliveryIndex(null); // Reset the selected delivery index after approval
  // };

  const loadMoreActivities = () => {
    setVisibleActivities((prev) => prev + 5); // Increase the number of activities to show by 5
  };

  return (
    <div className="w-full h-screen">
      {/* Tab Bar */}
      <div className="flex border border-gray-200">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setCurrentTab(tab.id as any)}
            className={`flex-1 px-6 py-4 text-center font-medium text-sm sm:text-base cursor-pointer transition-all relative ${
              currentTab === tab.id ? 'border-[#009966] border-b-2 border-t border-r border-l text-[#009966]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            
          </div>
        ))}
      </div>

      <div className="bg-white h-screen overflow-y-auto">
        {currentTab === 'timeline' && (
          <div className="space-y-8">
            {/* Deliverables */}
            <div className='mt-3 rounded-2xl border border-gray-200 p-6'>
              <div className="text-xl text-gray-900 mb-6">Deliverables</div>
              <div className="space-y-6">
                {data.deliveries.map((delivery, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div className='flex items-center gap-x-3'>
                        <div className="flex items-center gap-x-2 text-gray-900">
                          <p className='px-3 py-1 border broder-gray-300 rounded-2xl text-sm text-gray-600'>{delivery.version}</p>
                        </div>
                        <div className='-space-y-3'>
                          <div>
                            <p className='text-lg'>{delivery.user}</p> 
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{delivery.date}</p>
                          </div>
                        </div>
                      </div>

                      {/* Pending Approval or Approved */}
                      <div
                        className={`text-xs px-4 rounded-full ${
                          delivery.isApproved
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        <div className="flex items-center h-10 gap-x-2">
                          <p className="text-lg mt-3">{delivery.isApproved ? 'Approved' : 'Pending Approval'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-600 mb-5 text-lg leading-relaxed">{delivery.description}</div>
                    <div className="space-y-3">
                      {delivery.files.map((file, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <svg className="w-8 h-8 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div>
                              <div className="font-medium text-gray-900">{file.name}</div>
                              {file.size && <div className="text-sm text-gray-500">{file.size}</div>}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {file.verified && (
                              <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Verified
                              </div>
                            )}
                          </div>                         
                        </div>
                      ))}
                    </div>

                    <div className='w-fit active:opacity-30'>
                      {!delivery.isApproved && (
                        <div className='flex items-center mt-3 gap-x-3 bg-emerald-600 h-10 px-3 text-white rounded-lg hover:bg-emerald-700 transition-colors'>
                          <svg className='w-5 h-5' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 13.1003 0.988061 15.07 1.86572M21 3L11 13.01L8 10.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <p
                            onClick={() => { setSelectedDeliveryIndex(index); setIsModalOpen(true)}} 
                            className='pt-3 active:opacity-30 cursor-pointer'                     
                          >
                            Approve
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Modal for Approval */}
                    {isModalOpen && (
                      <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg w-1/3">
                          <h2 className="text-xl mb-4">Accept delivery?</h2>
                          <p className="mb-4">Once you accept this delivery, the work will be marked as approved. You can still release payment later.</p>
                          <div className="flex text-center justify-between gap-4 hover:cursor-pointer">
                            <p
                              onClick={cancelApproval}
                              className="w-full py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 active:opacity-30"
                            >
                              Cancel
                            </p>
                            <p
                              onClick={() => alert('Delivery accepted!')}
                              className="w-full py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 active:opacity-30"
                            >
                              Accept delivery
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div className="space-y-3 p-6">
              <div className="text-2xl text-gray-900">Milestones</div>
              <div className="text-sm text-gray-600">
                ${data.released.toLocaleString()} of ${data.total.toLocaleString()} released
              </div>
              <div className="grid gap-y-4 pb-3">
                {data.milestones.map((milestone, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="text-lg text-gray-900">{milestone.phase}</div>
                        <div className="text-sm text-gray-500 mt-1">Due {milestone.due}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-bold text-emerald-600">${milestone.amount.toLocaleString()}</div>
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            milestone.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                            milestone.status === 'In progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {milestone.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className='w-full h-[1px] bg-gray-200 mb-2'></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-gray-900">Overall progress</div>
                  <div className="text-lg font-bold text-gray-900">{data.overallProgress}%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full transition-all duration-700"
                    style={{ width: `${data.overallProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="space-y-6 mt-6 rounded-2xl border border-gray-200 p-6">
              <div className="text-xl text-gray-900 mb-6">Activity Timeline</div>
              <div className="space-y-4">
                {data.activities.slice(0, visibleActivities).map((activity, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="text-lg text-gray-900">{activity.description}</div>
                      <div className="text-sm text-gray-500">{activity.date}</div>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">{activity.user}</div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleActivities < data.activities.length && (
                <div className="text-center">
                  <p
                    onClick={loadMoreActivities}
                    className="text-emerald-600 font-medium text-lg py-2 px-6 border border-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                  >
                    Load More
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {currentTab === 'files' && (
          <div className="space-y-6 mt-3 rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between ">
              <div className="text-2xl text-gray-900">All Files</div>
              <div className="flex items-center gap-2 text-emerald-600 font-medium cursor-pointer hover:text-emerald-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="text-sm sm:text-base">Download all</span>
              </div>
            </div>
            <div className="grid gap-y-3">
              {data.files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-4">
                    <svg className="w-9 h-9 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">{file.name}</div>
                      {file.size && <div className="text-sm text-gray-500">{file.size}</div>}
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    {file.verified !== false && (
                      <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    )}
                    <svg className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
              <div className="text-gray-500">
                <div className="text-lg font-medium mb-2">Drop files here or click to browse</div>
                <div className="text-sm">Share references, feedback, or additional materials</div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'invoices' && (
          <div className="space-y-6 mt-3 rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="text-2xl text-gray-900">Invoices</div>
              <div className="flex items-center gap-2 text-emerald-600 font-medium cursor-pointer hover:text-emerald-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="text-sm sm:text-base">Export CSV</span>
              </div>
            </div>
            <div className="space-y-4">
              {data.invoices.map((invoice, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg text-gray-900">{invoice.number}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {invoice.date} • {invoice.description}
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="text-lg font-bold text-gray-900">${invoice.amount.toLocaleString()}</div>
                      <svg className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}