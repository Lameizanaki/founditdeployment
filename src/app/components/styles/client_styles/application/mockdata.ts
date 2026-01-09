// app/components/styles/application/mockdata.ts
export type TabKey = "proposals" | "messages" | "hired";

export type Proposal = {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  jobsDone: number;
  country: string;
  bid: number;
  durationLabel: string;
  intro: string;
  qa: Array<{ q: string; a: string }>;
  attachments: Array<{ name: string; size: string }>;
  shortlisted?: boolean;
};

export type MessageRow = {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread?: boolean;
  meta?: string;
};

export type HiredRow = {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  jobsDone: number;
  status: "active" | "pending";
  contractValue: string;
  timeline: string;
  startLabel: string;
  startValue: string;
};

export type MatchRow = {
  id: string;
  name: string;
  subtitle: string;
  rating: number;
  rate: string;
  tags: string[];
};

export const JOB = {
  title: "Build a React Web Application",
  postedLabel: "Posted 2 days ago",
  views: 127,
  proposals: 3,
  visibility: "Public",
};

export const PROPOSALS: Proposal[] = [
  {
    id: "p1",
    name: "Bai Lu",
    title: "Senior React Developer",
    rating: 4.9,
    reviews: 127,
    jobsDone: 89,
    country: "United States",
    bid: 1200,
    durationLabel: "5 days",
    intro:
      "Hi there! I've reviewed your project requirements for a React web application and I'm confident I can deliver exactly what you need.",
    qa: [
      { q: "Experience with TypeScript?", a: "Yes, 5+ years of professional experience." },
      { q: "Available to start?", a: "Immediately - I have availability starting tomorrow." },
      { q: "Experience with similar projects?", a: "Yes, I've built multiple production apps." },
    ],
    attachments: [
      { name: "portfolio.pdf", size: "2.4 MB" },
      { name: "previous-work-samples.png", size: "1.8 MB" },
      { name: "technical-approach.docx", size: "856 KB" },
    ],
    shortlisted: false,
  },
  {
    id: "p2",
    name: "Zeus T1",
    title: "Full Stack Developer",
    rating: 4.8,
    reviews: 94,
    jobsDone: 67,
    country: "Canada",
    bid: 950,
    durationLabel: "7 days",
    intro:
      "Hi! I specialize in modern web development with a focus on performance and user experience.",
    qa: [
      { q: "Experience with TypeScript?", a: "Yes, 3 years in production apps." },
      { q: "Available to start?", a: "Within a week - I’m finishing a small project." },
    ],
    attachments: [{ name: "samples.zip", size: "5.1 MB" }],
    shortlisted: false,
  },
  {
    id: "p3",
    name: "Gong Yoo",
    title: "UI/UX Developer",
    rating: 5.0,
    reviews: 156,
    jobsDone: 124,
    country: "Cambodia",
    bid: 800,
    durationLabel: "10 days",
    intro:
      "Hello! I noticed you need a React developer with design sensibility. That's exactly my sweet spot.",
    qa: [
      { q: "Experience with TypeScript?", a: "Yes, 4 years of experience." },
      { q: "Available to start?", a: "Next Monday - I'm finishing up a project this week." },
    ],
    attachments: [],
    shortlisted: true,
  },
];

export const MESSAGES: MessageRow[] = [
  {
    id: "m1",
    name: "Ding Yu xi",
    preview:
      "Thanks for considering my proposal! I have a few clarifying questions about the project scope and timeline...",
    time: "2 hours ago",
    unread: true,
    meta: "Re: Your proposal",
  },
  {
    id: "m2",
    name: "Dong Wook",
    preview:
      "I'd love to discuss the design requirements in more detail. I've attached some examples of similar projects...",
    time: "Yesterday",
    meta: "3 messages • 1 attachment",
  },
  {
    id: "m3",
    name: "Ko VantiChai",
    preview:
      "Looking forward to hearing back from you. Happy to answer any questions you might have about my approach.",
    time: "2 days ago",
    meta: "5 messages",
  },
  {
    id: "m4",
    name: "Lin Yi",
    preview: "Hey! Just checking if you had time to review my proposal.",
    time: "3 days ago",
    meta: "1 message",
  },
  {
    id: "m5",
    name: "Xiao Chan",
    preview: "I can start right away. Let me know what you need from me.",
    time: "1 week ago",
    meta: "2 messages",
  },
];

export const HIRED: HiredRow[] = [
  {
    id: "h1",
    name: "Mann Vanda",
    role: "Senior Full-Stack Developer",
    rating: 5.0,
    reviews: 89,
    jobsDone: 127,
    status: "active",
    contractValue: "$1,500",
    timeline: "2 weeks",
    startLabel: "Started",
    startValue: "Nov 8, 2024",
  },
  {
    id: "h2",
    name: "Park seojun",
    role: "UI/UX Designer",
    rating: 4.9,
    reviews: 156,
    jobsDone: 203,
    status: "pending",
    contractValue: "$800",
    timeline: "1 week",
    startLabel: "Start date",
    startValue: "Nov 15, 2024",
  },
];

export const MATCHES: MatchRow[] = [
  {
    id: "s1",
    name: "Dong Wook",
    subtitle: "React & TypeScript Expert",
    rating: 4.9,
    rate: "$85/hr",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    id: "s2",
    name: "Hong Yi",
    subtitle: "Frontend Specialist",
    rating: 4.8,
    rate: "$75/hr",
    tags: ["React", "TypeScript", "Tailwind"],
  },
];

export const viewFullJobMock = {
  title: "Build a React Web Application",
  badge: "High",
  postedByName: "Cardi B",
  // you will replace this later
  postedByImageSrc: "/placeholder-avatar.jpg",

  descriptionIntro:
    "We are looking for an experienced full-stack developer to build a modern e-commerce platform.",

  keyRequirements: [
    "Build responsive web application with React and TypeScript",
    "Implement secure payment processing with Stripe",
    "Create admin dashboard for inventory management",
    "Set up user authentication and authorization",
    "Design and implement RESTful APIs",
    "Database design and optimization",
  ],

  deliverables: [
    "Fully functional e-commerce website",
    "Admin panel for product management",
    "User authentication system",
    "Payment gateway integration",
    "Documentation and deployment",
  ],

  idealCandidate: [
    "5+ years of full-stack development experience",
    "Strong proficiency in React and Node.js",
    "Experience with MongoDB or PostgreSQL",
    "Knowledge of payment gateway integration",
    "Excellent problem-solving skills",
    "Strong communication abilities",
  ],

  proposalInclude: [
    "Your relevant experience",
    "Similar projects you've completed",
    "Estimated timeline",
    "Any questions you have about the project",
  ],

  skills: ["React", "Node.js", "MongoDB", "Stripe API", "TypeScript"],

  details: [
    { label: "Project size", value: "Large" },
    { label: "Duration", value: "2-3 months" },
    { label: "Experience level", value: "Expert" },
    { label: "Posted", value: "2 hours ago" },
  ],

  screeningQuestions: [
    "What is your experience with payment gateway integration?",
    "Can you provide examples of e-commerce sites you've built?",
    "What is your estimated timeline for this project?",
  ],

  attachments: ["requirements.pdf", "wireframes.fig"],

  budget: {
    amount: "$5,500",
    type: "Fixed",
    competitionLabel: "Medium",
    proposalsText: "~8 proposals submitted",
    competitionPercent: 60,
  },
};

export const proposalMock = {
  candidate: {
    name: "Bai Lu",
    role: "Senior React Developer",
    avatarSrc: "/placeholder-avatar.jpg",
    badges: [
      { label: "Verified ID", tone: "neutral" as const },
      { label: "Top Rated", tone: "neutral" as const },
      { label: "Front-runner", tone: "green" as const }, // green border + text
    ],
    statsLeft: "4.9 (127 reviews) • 89 jobs completed",
    statsRight: "United States • 3:45 PM EST",
    submitted: "Submitted 2 hours ago",
    lastViewed: "Last viewed 1 hour ago",
  },

  coverLetter: [
    "Hi there!",
    "I've reviewed your project requirements for a React web application and I'm confident I can deliver exactly what you need.",
    "What I bring to the table:",
    "• Deep expertise in React 18, TypeScript, and modern frontend architecture",
    "• Strong focus on performance optimization and user experience",
    "• Experience with state management (Redux, Zustand, Context API)",
    "• Comprehensive testing practices (Jest, React Testing Library)",
    "• Responsive design and cross-browser compatibility",
    "",
    "Looking forward to working with you!",
    "Best regards,",
    "Sarah",
  ],

  milestones: [
    {
      title: "Project Setup & Architecture",
      desc:
        "Initial project setup, architecture design, and development environment configuration.",
      price: 300,
      days: "2 days",
    },
    {
      title: "Core Feature Development",
      desc: "Implementation of main features and functionality.",
      price: 600,
      days: "3 days",
    },
    {
      title: "Testing, Polish & Deployment",
      desc: "Comprehensive testing, bug fixes, performance optimization, and deployment.",
      price: 300,
      days: "2 days",
    },
  ],

  attachments: [
    { name: "portfolio.pdf", meta: "PDF • 2.4 MB" },
    { name: "previous-work-samples.png", meta: "Image • 1.8 MB" },
    { name: "technical-approach.docx", meta: "Document • 55 KB" },
  ],

  screeningQA: [
    {
      q: "Experience with TypeScript?",
      a: "Yes, 5+ years of professional experience. I've built over 30 TypeScript projects including large-scale apps.",
    },
    {
      q: "Available to start?",
      a: "Immediately — I have availability starting tomorrow and can dedicate full-time hours to your project.",
    },
    {
      q: "Experience with similar projects?",
      a: "Yes, I've built multiple React web apps including e-commerce platforms, SaaS dashboards, and CMS systems.",
    },
  ],

  relevantExperience: [
    {
      title: "React & TypeScript",
      desc:
        "5+ years building production applications with React and TypeScript. Expert in hooks and performance optimization.",
      linkLabel: "View case study",
    },
    {
      title: "State Management",
      desc:
        "Experience with Redux, Zustand, and Context API. I choose the right tool based on project complexity.",
      linkLabel: "",
    },
    {
      title: "Testing",
      desc:
        "Proficient with Jest, React Testing Library, and Cypress for E2E testing.",
      linkLabel: "",
    },
  ],

  workSamples: [
    { title: "E-commerce Dashboard", desc: "Dashboard for an e-commerce platform with real-time analytics." },
    { title: "SaaS Project Management Tool", desc: "Project management app with drag-and-drop and collaboration." },
    { title: "Healthcare Patient Portal", desc: "Secure portal for scheduling and records management." },
    { title: "Financial Analytics Platform", desc: "Analytics tool with data visualizations and reports." },
  ],

  recentWorkHistory: [
    { title: "React E-commerce Platform Rebuild", desc: "Rebuild of a legacy e-commerce site using modern React stack.", rating: 5, time: "2 weeks ago" },
    { title: "Custom CRM Dashboard", desc: "CRM dashboard with complex data visualization requirements.", rating: 4.9, time: "1 month ago" },
    { title: "Multi-tenant SaaS Application", desc: "Multi-tenant architecture for a B2B SaaS product.", rating: 5, time: "2 months ago" },
  ],

  timelineActivity: [
    { label: "Proposal submitted", time: "2 hours ago" },
    { label: "Viewed by you", time: "1 hour ago" },
    { label: "Proposal edited by freelancer", time: "45 minutes ago" },
  ],

  bid: {
    fixedPrice: 1200,
    projectCost: 1200,
    platformFee: 60,
    freelancerReceives: 1140,
    start: "Immediately",
    delivery: "5 days",
  },

  match: {
    score: 96,
    bullets: [
      { icon: "star" as const, title: "Outstanding rating", sub: "4.9 with 127 reviews" },
      { icon: "repeat" as const, title: "Repeat clients", sub: "78% of clients return" },
      { icon: "clock" as const, title: "Fast response", sub: "Replies within 1 hour" },
      { icon: "shield" as const, title: "Proven track record", sub: "89 jobs completed" },
    ],
    topSkills: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
  },
};
