import React, { useState } from 'react';
import { MessageSquare, FileText, Calendar, Download, Upload, ArrowLeft, Clock, CheckCircle, Circle } from 'lucide-react';

interface Milestone {
  id: number;
  title: string;
  amount: number;
  dueDate: string;
  status: 'completed' | 'pending';
  paymentReleased?: boolean;
}

interface Message {
  id: number;
  sender: string;
  senderType: 'client' | 'freelancer';
  content: string;
  timestamp: string;
}

interface ProjectFile {
  id: number;
  name: string;
  size: string;
  uploadedBy: string;
  uploadedByType: 'client' | 'freelancer';
  date: string;
  type: string;
}

interface Activity {
  id: number;
  user: string;
  userType: 'client' | 'freelancer';
  action: string;
  timestamp: string;
}

interface Project {
  id: string;
  title: string;
  status: string;
  client: { name: string; initials: string };
  freelancer: { name: string; initials: string };
  progress: number;
  daysLeft: number;
  dueDate: string;
  milestones: { completed: number; total: number };
  category: string;
  budget: number;
  startDate: string;
  deadline: string;
  description: string;
  skills: string[];
  milestonesList: Milestone[];
  messages: Message[];
  files: ProjectFile[];
  activities: Activity[];
}

const mockProject: Project = {
  id: '1',
  title: 'E-commerce Website Redesign',
  status: 'in progress',
  client: { name: 'Yami Sukehiro', initials: 'T' },
  freelancer: { name: 'Sarah Design', initials: 'S' },
  progress: 65,
  daysLeft: -639,
  dueDate: '3/1/2024',
  milestones: { completed: 1, total: 3 },
  category: 'Web Development',
  budget: 3500,
  startDate: 'Jan 15, 2024',
  deadline: 'Mar 1, 2024',
  description: 'Complete redesign of existing e-commerce platform with modern UI/UX',
  skills: ['React', 'TypeScript', 'Figma', 'Tailwind CSS'],
  milestonesList: [
    {
      id: 1,
      title: 'Design Mockups',
      amount: 1000,
      dueDate: '1/30/2024',
      status: 'completed',
      paymentReleased: true
    },
    {
      id: 2,
      title: 'Frontend Development',
      amount: 2000,
      dueDate: '2/20/2024',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Testing & Launch',
      amount: 500,
      dueDate: '3/1/2024',
      status: 'pending'
    }
  ],
  messages: [
    {
      id: 1,
      sender: 'TechCorp Solutions',
      senderType: 'client',
      content: 'The design mockups look great! Can we schedule a call to discuss the next phase?',
      timestamp: '3 hours ago'
    },
    {
      id: 2,
      sender: 'Sarah Design',
      senderType: 'freelancer',
      content: "Thank you! I'm available tomorrow at 2 PM EST. Does that work for you?",
      timestamp: '2 hours ago'
    },
    {
      id: 3,
      sender: 'TechCorp Solutions',
      senderType: 'client',
      content: "Perfect! I'll send you a calendar invite.",
      timestamp: '1 hour ago'
    }
  ],
  files: [
    { id: 1, name: 'homepage-design-v2.fig', size: '2.4 MB', uploadedBy: 'Sarah Design', uploadedByType: 'freelancer', date: '2024-01-28', type: 'Design' },
    { id: 2, name: 'product-page-mockup.pdf', size: '1.8 MB', uploadedBy: 'Sarah Design', uploadedByType: 'freelancer', date: '2024-01-25', type: 'Design' },
    { id: 3, name: 'requirements-doc.pdf', size: '856 KB', uploadedBy: 'Park Hyungsik', uploadedByType: 'client', date: '2024-01-15', type: 'Document' },
    { id: 4, name: 'brand-assets.zip', size: '12.3 MB', uploadedBy: 'Park Hyungsik', uploadedByType: 'client', date: '2024-01-15', type: 'Assets' },
    { id: 5, name: 'checkout-flow-wireframe.fig', size: '3.1 MB', uploadedBy: 'Sarah Design', uploadedByType: 'freelancer', date: '2024-01-24', type: 'Design' },
    { id: 6, name: 'mobile-responsive-screens.pdf', size: '4.2 MB', uploadedBy: 'Sarah Design', uploadedByType: 'freelancer', date: '2024-01-26', type: 'Design' },
    { id: 7, name: 'style-guide-v1.pdf', size: '2.1 MB', uploadedBy: 'Sarah Design', uploadedByType: 'freelancer', date: '2024-01-22', type: 'Document' },
    { id: 8, name: 'user-research-findings.docx', size: '645 KB', uploadedBy: 'Park Hyungsik', uploadedByType: 'client', date: '2024-01-16', type: 'Document' },
    { id: 9, name: 'competitor-analysis.xlsx', size: '1.2 MB', uploadedBy: 'Park Hyungsik', uploadedByType: 'client', date: '2024-01-16', type: 'Document' },
    { id: 10, name: 'design-system-tokens.json', size: '42 KB', uploadedBy: 'Sarah Design', uploadedByType: 'freelancer', date: '2024-01-27', type: 'Code' }
  ],
  activities: [
    { id: 1, user: 'Sarah Design', userType: 'freelancer', action: 'uploaded design files', timestamp: '2 hours ago' },
    { id: 2, user: 'Park Hyungsik', userType: 'client', action: 'approved milestone "Design Mockups"', timestamp: '1 day ago' },
    { id: 3, user: 'Sarah Design', userType: 'freelancer', action: 'submitted milestone for review', timestamp: '2 days ago' },
    { id: 4, user: 'Park Hyungsik', userType: 'client', action: 'sent a message', timestamp: '3 days ago' },
    { id: 5, user: 'Sarah Design', userType: 'freelancer', action: 'uploaded homepage wireframes', timestamp: '4 days ago' },
    { id: 6, user: 'Sarah Design', userType: 'freelancer', action: 'added 3 new design iterations', timestamp: '5 days ago' },
    { id: 7, user: 'Park Hyungsik', userType: 'client', action: 'shared brand guidelines document', timestamp: '1 week ago' },
    { id: 8, user: 'Sarah Design', userType: 'freelancer', action: 'started working on "Design Mockups" milestone', timestamp: '1 week ago' },
    { id: 9, user: 'Park Hyungsik', userType: 'client', action: 'created project and sent invitation', timestamp: '2 weeks ago' }
  ]
};

export default function Id1Page() {
  const [activeTab, setActiveTab] = useState<'overview' | 'milestones' | 'files' | 'activity'>('overview');
  const [project] = useState<Project>(mockProject);
  const [showContractModal, setShowContractModal] = useState(false);

  const getInitialsBg = (type: 'client' | 'freelancer') => {
    return type === 'client' ? 'bg-teal-100 text-teal-700' : 'bg-purple-100 text-purple-700';
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Contract Modal */}
      {showContractModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-md w-full my-8">
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span className="text-lg font-semibold text-gray-900">Project Contract</span>
              </div>
              <div 
                onClick={() => setShowContractModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <span className="text-gray-500 text-xl">×</span>
              </div>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="text-xs text-gray-500">
                Legal agreement for E-commerce Website Redesign
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Contract ID</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">PRJ-1</span>
                    <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded font-medium">Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Created On</div>
                    <div className="text-sm text-gray-900">January 15, 2024</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Expires On</div>
                    <div className="text-sm text-gray-900">March 1, 2024</div>
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">Parties Involved</span>
                  </div>
                  <div className="mt-2 space-y-1.5 ml-6">
                    <div className="text-xs text-gray-600">
                      <span className="font-medium">Client:</span> Park Hyung Sik
                    </div>
                    <div className="text-xs text-gray-600">
                      <span className="font-medium">Freelancer:</span> Sarah Design
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  Scope of Work
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  Complete redesign of existing e-commerce platform with modern UI/UX
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  Payment Terms
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Total Project Budget</span>
                    <span className="font-medium text-gray-900">$3,500</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Milestone Payments:</span>
                    </div>
                    <div className="flex items-center justify-between ml-4">
                      <span className="text-gray-600">✓ Milestone 1: Design Mockups</span>
                      <span className="text-gray-900">$1,000</span>
                    </div>
                    <div className="flex items-center justify-between ml-4">
                      <span className="text-gray-600">✓ Milestone 2: Frontend Development</span>
                      <span className="text-gray-900">$2,000</span>
                    </div>
                    <div className="flex items-center justify-between ml-4">
                      <span className="text-gray-600">✓ Milestone 3: Testing & Launch</span>
                      <span className="text-gray-900">$500</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded p-2 mt-3">
                    <div className="text-xs text-blue-800">
                      Funds are held in escrow until each milestone is completed and client approval.
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  Project Timeline
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Start Date</div>
                    <div className="text-xs text-gray-900">January 15, 2024</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Completion Deadline</div>
                    <div className="text-xs text-gray-900">March 1, 2024</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  Terms & Conditions
                </div>
                <div className="space-y-3 text-xs text-gray-600">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">1. Undertake</div>
                    <div className="leading-relaxed">
                      The Freelancer agrees to deliver all work as specified in the project milestones. All deliverables must be submitted on or before the deadline.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">2. Revisions</div>
                    <div className="leading-relaxed">
                      The Client is entitled to reasonable revisions for each milestone. Additional changes beyond may require contract amendment.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">3. Intellectual Property</div>
                    <div className="leading-relaxed">
                      Upon full payment, all intellectual property rights transfer to the Client. The Freelancer retains the right to showcase work in portfolio.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">4. Confidentiality</div>
                    <div className="leading-relaxed">
                      Both parties agree to maintain confidentiality of all proprietary information disclosed during the project.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">5. Termination</div>
                    <div className="leading-relaxed">
                      Either party may terminate this contract with 7 days written notice. Completed work will be paid in full.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-t border-gray-200 px-6 py-4 rounded-b-xl">
              <div className="flex items-center gap-2 justify-center py-2.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-medium">Download PDF</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-lg font-semibold text-gray-900">{project.title}</span>
                <span className="bg-indigo-600 text-white text-xs px-2.5 py-1 rounded font-medium">
                  {project.status}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-0.5">
                Client: {project.client.name}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-xs text-gray-500 mb-1">Progress</div>
                <div className="text-2xl font-semibold text-gray-900">{project.progress}%</div>
              </div>
              <div className="bg-indigo-50 p-2.5 rounded-full">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">Days Left</div>
                <div className="text-2xl font-semibold text-gray-900">{project.daysLeft}</div>
                <div className="text-xs text-gray-400 mt-1.5">Due {project.dueDate}</div>
              </div>
              <div className="bg-amber-50 p-2.5 rounded-full">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">Milestones</div>
                <div className="text-2xl font-semibold text-gray-900">
                  {project.milestones.completed}/{project.milestones.total}
                </div>
                <div className="text-xs text-gray-400 mt-1.5">{project.milestones.total - project.milestones.completed} remaining</div>
              </div>
              <div className="bg-teal-50 p-2.5 rounded-full">
                <FileText className="w-5 h-5 text-teal-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-4">
                {(['overview', 'milestones', 'files', 'activity'] as const).map((tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 text-center text-sm cursor-pointer transition-colors capitalize ${
                      activeTab === tab
                        ? 'text-gray-900 bg-gray-100 font-medium'
                        : 'text-gray-600 bg-white font-normal hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <div className="text-base font-medium text-gray-900 mb-2">Project Description</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{project.description}</div>
                    </div>

                    <div>
                      <div className="text-base font-medium text-gray-900 mb-3">Skills Required</div>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-base font-medium text-gray-900 mb-4">Recent Messages</div>
                      <div className="space-y-4">
                        {project.messages.map((msg) => (
                          <div key={msg.id} className="flex gap-3">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${getInitialsBg(msg.senderType)}`}>
                              {msg.sender.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900 text-sm">{msg.sender}</span>
                                <span className="text-xs text-gray-400">{msg.timestamp}</span>
                              </div>
                              <div className="text-sm text-gray-600 leading-relaxed">{msg.content}</div>
                            </div>
                          </div>
                        ))}
                        <div className="flex items-center justify-center gap-2 py-3 mt-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                          <MessageSquare className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-700 font-medium">View All Messages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'milestones' && (
                  <div className="space-y-5">
                    <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm mb-1">
                            <CheckCircle className="w-4 h-4 text-indigo-600" />
                            Milestone Progress
                          </div>
                          <div className="text-xs text-gray-600">
                            {project.milestones.completed} of {project.milestones.total} milestones completed
                          </div>
                        </div>
                        <div className="text-2xl font-semibold text-indigo-600">
                          {Math.round((project.milestones.completed / project.milestones.total) * 100)}%
                        </div>
                      </div>
                      <div className="w-full bg-indigo-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(project.milestones.completed / project.milestones.total) * 100}%` }}
                        />
                      </div>
                    </div>

                    {project.milestonesList.map((milestone) => (
                      <div 
                        key={milestone.id}
                        className={`rounded-lg p-5 border ${
                          milestone.status === 'completed' 
                            ? 'bg-teal-50 border-teal-200' 
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 ${milestone.status === 'completed' ? 'text-teal-600' : 'text-gray-400'}`}>
                            {milestone.status === 'completed' ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <Circle className="w-5 h-5" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                              <div className="font-semibold text-gray-900 text-sm">
                                Milestone {milestone.id}: {milestone.title}
                              </div>
                              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                milestone.status === 'completed' 
                                  ? 'bg-teal-600 text-white' 
                                  : 'bg-gray-300 text-gray-700'
                              }`}>
                                {milestone.status === 'completed' ? 'Completed' : 'Pending'}
                              </span>
                            </div>
                            <div className="flex items-center gap-5 text-sm text-gray-600">
                              <div className="flex items-center gap-1.5">
                                <span className="text-gray-500">$</span>
                                <span className="font-medium">{milestone.amount.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Due {milestone.dueDate}</span>
                              </div>
                            </div>
                            {milestone.paymentReleased && (
                              <div className="mt-2 flex items-center gap-1.5 text-xs text-teal-700">
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span className="font-medium">Payment Released</span>
                              </div>
                            )}
                          </div>
                        </div>
                        {milestone.status === 'pending' && (
                          <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Awaiting Previous Milestone</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'files' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-base font-medium text-gray-900">Project Files</div>
                      <div className="flex items-center gap-2 bg-indigo-600 text-white px-3.5 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition-colors">
                        <Upload className="w-4 h-4" />
                        <span className="text-sm font-medium">Upload File</span>
                      </div>
                    </div>
                    {project.files.map((file) => (
                      <div key={file.id} className="flex items-center justify-between p-3.5 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="bg-indigo-50 p-2.5 rounded-lg flex-shrink-0">
                            <FileText className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm truncate">{file.name}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-1.5 flex-wrap mt-0.5">
                              <span>{file.size}</span>
                              <span>•</span>
                              <span>by {file.uploadedBy}</span>
                              <span>•</span>
                              <span>{file.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 flex-shrink-0 ml-3">
                          <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded text-xs font-medium">
                            {file.type}
                          </span>
                          <Download className="w-4 h-4 text-gray-500 cursor-pointer hover:text-indigo-600 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="space-y-4">
                    <div className="text-base font-medium text-gray-900 mb-4">Project Activity</div>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                      <div className="space-y-4">
                        {project.activities.map((activity, index) => (
                          <div key={activity.id} className="flex gap-3 relative">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${getInitialsBg(activity.userType)} z-10`}>
                              {activity.user.charAt(0)}
                            </div>
                            <div className="flex-1 pt-1">
                              <div className="text-sm text-gray-900">
                                <span className="font-medium">{activity.user}</span>
                                <span className="text-gray-600"> {activity.action}</span>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{activity.timestamp}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div 
                onClick={() => setShowContractModal(true)}
                className="text-base font-medium text-gray-900 mb-4 cursor-pointer hover:text-indigo-600 transition-colors"
              >
                Project Details
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Category</div>
                  <div className="font-medium text-gray-900 text-sm">{project.category}</div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="text-xs text-gray-500 mb-1">Budget</div>
                  <div className="text-xl font-semibold text-gray-900">${project.budget.toLocaleString()}</div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="text-xs text-gray-500 mb-2">Start Date</div>
                  <div className="flex items-center gap-2 text-gray-900 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{project.startDate}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="text-xs text-gray-500 mb-2">Deadline</div>
                  <div className="flex items-center gap-2 text-gray-900 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{project.deadline}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="text-base font-medium text-gray-900 mb-4">Team</div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-2.5">Client</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-medium text-sm">
                        {project.client.initials}
                      </div>
                      <span className="font-medium text-gray-900 text-sm">{project.client.name}</span>
                    </div>
                    <MessageSquare className="w-4 h-4 text-gray-400 cursor-pointer hover:text-indigo-600 transition-colors" />
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="text-xs text-gray-500 mb-2.5">Freelancer</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-medium text-sm">
                        {project.freelancer.initials}
                      </div>
                      <span className="font-medium text-gray-900 text-sm">{project.freelancer.name}</span>
                    </div>
                    <MessageSquare className="w-4 h-4 text-gray-400 cursor-pointer hover:text-indigo-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="text-base font-medium text-gray-900 mb-4">Actions</div>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-900 text-sm">Send Message</span>
                </div>
                
                <div 
                  onClick={() => setShowContractModal(true)}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <FileText className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-900 text-sm">View Contract</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-900 text-sm">Download All Files</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}