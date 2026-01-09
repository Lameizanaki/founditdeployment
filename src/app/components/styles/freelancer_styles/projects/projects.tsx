import React, { useState } from 'react';
import { Search, Filter, Calendar, DollarSign, Circle, CheckCircle2 } from 'lucide-react';

// Types
interface Milestone {
  id: string;
  title: string;
  completed: boolean;
}

interface Project {
  id: string;
  title: string;
  client: string;
  freelancer: string;
  description: string;
  technologies: string[];
  progress: number;
  budget: number;
  deadline: string;
  status: 'active' | 'completed' | 'planning';
  priority: 'high' | 'medium' | 'low' | 'urgent' | 'review';
  statusLabel: string;
  milestones?: Milestone[];
  icon?: 'circle' | 'check' | 'purple-circle';
}

// Mock data - replace with API call
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Website Redesign',
    client: 'Cardi B',
    freelancer: 'Bai Lu',
    description: 'Complete redesign of existing e-commerce platform with modern UI/UX',
    technologies: ['React', 'TypeScript', 'Figma', 'Tailwind CSS'],
    progress: 65,
    budget: 3500,
    deadline: '3/1/2024',
    status: 'active',
    priority: 'high',
    statusLabel: 'in progress',
    icon: 'circle',
    milestones: [
      { id: '1', title: 'Design Mockups', completed: true },
      { id: '2', title: 'Frontend Development', completed: false },
      { id: '3', title: 'Testing & Launch', completed: false }
    ]
  },
  {
    id: '2',
    title: 'Brand Identity Design',
    client: 'Cardi B',
    freelancer: '',
    description: 'Complete brand identity package including logo, colors, and guidelines',
    technologies: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy'],
    progress: 100,
    budget: 1200,
    deadline: '12/30/2023',
    status: 'completed',
    priority: 'low',
    statusLabel: 'completed',
    icon: 'check',
    milestones: [
      { id: '1', title: 'Logo Concepts', completed: true },
      { id: '2', title: 'Brand Guidelines', completed: true },
      { id: '3', title: 'Final Deliverables', completed: true }
    ]
  },
  {
    id: '3',
    title: 'WordPress Plugin Development',
    client: 'Digital Solutions Co',
    freelancer: '',
    description: 'Custom WordPress plugin for advanced booking system with payment integration',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
    progress: 35,
    budget: 2200,
    deadline: '3/15/2024',
    status: 'active',
    priority: 'urgent',
    statusLabel: 'cancelled',
    icon: 'circle',
    milestones: [
      { id: '1', title: 'Requirements Analysis', completed: true },
      { id: '2', title: 'Core Development', completed: false },
      { id: '3', title: 'Testing & Deployment', completed: false }
    ]
  }
];

const ProjectsPage = () => {
  const [projects] = useState<Project[]>(mockProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>('all');
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  // Filter projects based on tab, search, and status
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.freelancer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || project.status === activeTab;
    
    // Filter by selected status
    let matchesStatus = true;
    if (selectedStatus !== 'All Status') {
      matchesStatus = project.statusLabel.toLowerCase() === selectedStatus.toLowerCase() ||
                      project.statusLabel.toLowerCase().replace(' ', '') === selectedStatus.toLowerCase().replace(' ', '');
    }
    
    return matchesSearch && matchesTab && matchesStatus;
  });

  const getStatusColor = (label: string) => {
    const colors: Record<string, string> = {
      'in progress': 'bg-blue-50 text-blue-600 border border-blue-200',
      'planning': 'bg-gray-50 text-gray-600 border border-gray-200',
      'completed': 'bg-green-50 text-green-600 border border-green-200',
      'review': 'bg-purple-50 text-purple-600 border border-purple-200',
      'cancelled': 'bg-red-50 text-red-600 border border-red-200'
    };
    return colors[label.toLowerCase()] || 'bg-gray-50 text-gray-600 border border-gray-200';
  };

  const allCount = projects.length;
  const activeCount = projects.filter(p => p.status === 'active' || p.status === 'planning').length;
  const completedCount = projects.filter(p => p.status === 'completed').length;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full px-4 py-6 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="text-2xl font-semibold text-gray-900 mb-1">Projects</div>
          <p className="text-gray-500 text-sm">Manage and track your projects across all stages</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
            />
          </div>

          {/* Filters */}
          <div className="relative">
            <div 
              onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <Filter size={16} className="text-gray-600" />
              <span className="text-gray-700 text-sm">{selectedStatus}</span>
            </div>
            
            {/* Dropdown Menu */}
            {isStatusDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  {['All Status', 'In Progress', 'Completed', 'Cancelled'].map((status) => (
                    <div 
                      key={status}
                      onClick={() => {
                        setSelectedStatus(status);
                        setIsStatusDropdownOpen(false);
                      }}
                      style={{
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#615FFF';
                        const span = e.currentTarget.querySelector('span');
                        const svg = e.currentTarget.querySelector('svg');
                        if (span) (span as HTMLElement).style.color = 'white';
                        if (svg) (svg as SVGElement).style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        const span = e.currentTarget.querySelector('span');
                        const svg = e.currentTarget.querySelector('svg');
                        if (span) (span as HTMLElement).style.color = '#374151';
                        if (svg) (svg as SVGElement).style.color = '#374151';
                      }}
                      className="flex items-center justify-between px-2.5 py-1.5 cursor-pointer"
                    >
                      <span className="text-xs text-gray-700 whitespace-nowrap">{status}</span>
                      {selectedStatus === status && (
                        <svg className="w-3 h-3 text-gray-700 ml-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <div
            onClick={() => setActiveTab('all')}
            className={`text-sm cursor-pointer pb-1 ${
              activeTab === 'all'
                ? 'text-gray-900 font-medium border-b-2 border-gray-900'
                : 'text-gray-500'
            }`}
          >
            All Projects ({allCount})
          </div>
          <div
            onClick={() => setActiveTab('active')}
            className={`text-sm cursor-pointer pb-1 ${
              activeTab === 'active'
                ? 'text-gray-900 font-medium border-b-2 border-gray-900'
                : 'text-gray-500'
            }`}
          >
            Active ({activeCount})
          </div>
          <div
            onClick={() => setActiveTab('completed')}
            className={`text-sm cursor-pointer pb-1 ${
              activeTab === 'completed'
                ? 'text-gray-900 font-medium border-b-2 border-gray-900'
                : 'text-gray-500'
            }`}
          >
            Completed ({completedCount})
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg p-5">
              <div className="flex gap-6">
                {/* Left Content */}
                <div className="flex-1">
                  {/* Title */}
                  <div className="text-base font-medium text-gray-900 mb-2">{project.title}</div>
                  
                  {/* Client and Freelancer */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600 mb-3">
                    <span>Client: <span className="text-gray-900">{project.client}</span></span>
                    {project.freelancer && (
                      <span>Freelancer: <span className="text-gray-900">{project.freelancer}</span></span>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-xs border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-600">Progress</span>
                      <span className="text-xs font-medium text-gray-900">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Status, Budget, Deadline, Milestones */}
                <div className="flex flex-col gap-3">
                  {/* Status Badge */}
                  <span className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap self-end ${getStatusColor(project.statusLabel)}`}>
                    {project.statusLabel}
                  </span>
                  
                  {/* Budget and Deadline Side by Side */}
                  <div className="flex gap-3">
                    {/* Budget */}
                    <div className="bg-gray-50 rounded-lg px-3 py-2.5 w-24">
                      <div className="flex items-center gap-1 mb-1">
                        <DollarSign size={12} className="text-gray-500" />
                        <span className="text-xs text-gray-500">Budget</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">${project.budget.toLocaleString()}</div>
                    </div>

                    {/* Deadline */}
                    <div className="bg-gray-50 rounded-lg px-3 py-2.5 w-24">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={12} className="text-gray-500" />
                        <span className="text-xs text-gray-500">Deadline</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{project.deadline}</div>
                    </div>
                  </div>

                  {/* Milestones - Right Side */}
                  {project.milestones && (
                    <div className="bg-gray-50 rounded-lg p-3 w-52">
                      <div className="text-xs font-medium text-gray-900 mb-2">Milestones</div>
                      <div className="space-y-1.5">
                        {project.milestones.map((milestone) => (
                          <div key={milestone.id} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${milestone.completed ? 'bg-indigo-600' : 'bg-gray-300'}`} />
                            <span className={`text-xs leading-tight ${milestone.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                              {milestone.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-lg p-12 text-center">
            <div className="text-gray-300 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">No projects found</div>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;