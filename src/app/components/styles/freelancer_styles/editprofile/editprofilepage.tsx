"use client";

import React, { useState } from "react";

// ============ TYPES ============
interface ProfileData {
  displayName: string;
  username: string;
  description: string;
  location: string;
  memberSince: string;
  hourlyRate: number;
  startingPrice: number;
  avatar: string;
  coverImage: string;
}

interface AboutData {
  bio: string;
  keywords: string[];
}

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  clicks?: number;
  likes?: number;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

interface Language {
  id: string;
  name: string;
  level: "basic" | "conversational" | "fluent" | "native";
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

interface Employment {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Availability {
  hoursPerWeek: number;
  earliestStart: string;
  followUpProject: string;
}

interface Verification {
  id: string;
  name: string;
  description: string;
  verified: boolean;
  icon: "identity" | "payment" | "email" | "badge";
}

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

interface PrivacySettings {
  profileVisibility: "public" | "private";
  allowInvites: "everyone" | "connections" | "none";
}

interface Analytics {
  profileViews: number;
  impressions: number;
  clicks: number;
  orders: number;
}

// ============ ICON COMPONENTS ============
const IconEdit = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const IconPlus = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const IconLocation = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconCalendar = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const IconStar = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconEye = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const IconChart = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconCreditCard = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const IconMail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconTrophy = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconGlobe = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const IconBehance = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);

const IconDribbble = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
  </svg>
);

const IconInstagram = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconLinkedin = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconTwitter = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconLink = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const IconLightbulb = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconChevronDown = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// ============ INITIAL DATA ============
const initialProfileData: ProfileData = {
  displayName: "Toby Developer",
  username: "tobydev",
  description: "Brand Designer • Illustrator & Design System",
  location: "San Francisco, CA",
  memberSince: "Sep 2022",
  hourlyRate: 85,
  startingPrice: 500,
  avatar: "",
  coverImage: "",
};

const initialAboutData: AboutData = {
  bio: "Detail-oriented designer with 10+ years experience in design app...",
  keywords: [
    "Technology",
    "E-commerce",
    "Real Estate",
    "Finance",
    "Education",
    "Entertainment",
    "Real Tools",
    "Non-profit",
  ],
};

const initialPortfolio: PortfolioProject[] = [
  {
    id: "1",
    title: "SaaS Material Kit Brand",
    category: "Branding for Software",
    image: "",
    tags: ["Branding", "Logo Design", "SaaS"],
    clicks: 101,
    likes: 21,
  },
  {
    id: "2",
    title: "E-commerce Brand System",
    category: "Design System",
    image: "",
    tags: ["App", "Mobile", "Design System"],
    clicks: 243,
    likes: 18,
  },
  {
    id: "3",
    title: "Fintech Mobile App",
    category: "Product Design",
    image: "",
    tags: ["Mobile", "Finance", "UI/UX"],
  },
];

const initialSkills: SkillCategory[] = [
  {
    name: "What I Do",
    skills: [
      "Figma",
      "Branding",
      "Web Development",
      "Marketing",
      "Writing",
      "Video",
      "Photography",
      "Animation",
      "AI Art",
    ],
  },
  {
    name: "Tools",
    skills: ["Adobe Illustrator", "Figma", "Photoshop", "InDesign", "XD"],
  },
];

const initialLanguages: Language[] = [
  { id: "1", name: "English", level: "fluent" },
  { id: "2", name: "Vietnamese", level: "fluent" },
  { id: "3", name: "Spanish", level: "basic" },
];

const initialEducation: Education[] = [
  {
    id: "1",
    degree: "BFA in Graphic Design",
    institution: "Rhode Island School of Design",
    year: "2012-2017",
  },
];

const initialEmployment: Employment[] = [
  {
    id: "1",
    title: "Senior Brand Designer",
    company: "Acme Design Co.",
    period: "2020 - Present",
    description:
      "Led rebranding for 5 enterprises products like Canva design system and lead for a 10+ designers team.",
  },
  {
    id: "2",
    title: "Brand Designer",
    company: "Webflow Inc",
    period: "2017-2020",
    description:
      "Designed marketing materials for major product launches. Collaborated with a 10-member team of designers.",
  },
];

const initialAvailability: Availability = {
  hoursPerWeek: 30,
  earliestStart: "Dec 15, 2025",
  followUpProject: "Select region",
};

const initialVerifications: Verification[] = [
  {
    id: "1",
    name: "Identity Verified",
    description: "Government ID verified",
    verified: true,
    icon: "identity",
  },
  {
    id: "2",
    name: "Payment Method",
    description: "Valid card on file",
    verified: true,
    icon: "payment",
  },
  {
    id: "3",
    name: "Phone & Email",
    description: "Contact details verified",
    verified: true,
    icon: "email",
  },
  {
    id: "4",
    name: "Top Rated Badge",
    description:
      "Maintain a 4.8+ rating to be elevated and 95%+ Job Success score.",
    verified: false,
    icon: "badge",
  },
];

const initialSocialLinks: SocialLink[] = [
  { id: "1", platform: "Behance", url: "behance.net/tobydesign", icon: "behance" },
  { id: "2", platform: "Dribbble", url: "dribbble/user", icon: "dribbble" },
  { id: "3", platform: "Instagram", url: "instagram/user", icon: "instagram" },
  { id: "4", platform: "LinkedIn", url: "linkedin/in/user", icon: "linkedin" },
  { id: "5", platform: "X/Twitter", url: "@thedesigner", icon: "twitter" },
];

const initialPrivacy: PrivacySettings = {
  profileVisibility: "public",
  allowInvites: "everyone",
};

const initialAnalytics: Analytics = {
  profileViews: 2947,
  impressions: 24,
  clicks: 18,
  orders: 0,
};

// ============ SUBCOMPONENTS ============

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  onEdit?: () => void;
  editable?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  onEdit,
  editable = true,
}) => (
  <div className="flex items-center justify-between mb-4">
    <div>
      <span className="text-lg font-semibold text-gray-900">{title}</span>
      {subtitle && (
        <span className="block text-sm text-gray-500 mt-0.5">{subtitle}</span>
      )}
    </div>
    {editable && onEdit && (
      <span
        onClick={onEdit}
        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
      >
        <IconEdit />
      </span>
    )}
  </div>
);

interface TagProps {
  text: string;
  variant?: "default" | "primary" | "outline";
  onRemove?: () => void;
}

const Tag: React.FC<TagProps> = ({ text, variant = "default", onRemove }) => {
  const variants = {
    default: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    primary: "bg-violet-600 text-white",
    outline: "border border-gray-300 text-gray-600 hover:bg-gray-50",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${variants[variant]}`}
    >
      {text}
      {onRemove && (
        <span
          onClick={onRemove}
          className="ml-1 hover:text-gray-900 cursor-pointer"
        >
          ×
        </span>
      )}
    </span>
  );
};

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = "bg-violet-600",
}) => (
  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
    <div
      className={`h-full rounded-full transition-all duration-500 ${color}`}
      style={{ width: `${(value / max) * 100}%` }}
    />
  </div>
);

interface LevelIndicatorProps {
  level: Language["level"];
}

const LevelIndicator: React.FC<LevelIndicatorProps> = ({ level }) => {
  const levels = {
    basic: 1,
    conversational: 2,
    fluent: 3,
    native: 4,
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-sm ${
            i <= levels[level] ? "bg-violet-600" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const VerificationIcon: React.FC<{ type: Verification["icon"] }> = ({ type }) => {
  const icons = {
    identity: <IconShield />,
    payment: <IconCreditCard />,
    email: <IconMail />,
    badge: <IconTrophy />,
  };
  return icons[type] || <IconCheck />;
};

const SocialIcon: React.FC<{ platform: string }> = ({ platform }) => {
  const icons: Record<string, React.ReactNode> = {
    behance: <IconBehance />,
    dribbble: <IconDribbble />,
    instagram: <IconInstagram />,
    linkedin: <IconLinkedin />,
    twitter: <IconTwitter />,
  };
  return <>{icons[platform.toLowerCase()] || <IconGlobe />}</>;
};

// ============ MAIN COMPONENT ============
export default function EditProfilePage() {
  // State
  const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);
  const [aboutData, setAboutData] = useState<AboutData>(initialAboutData);
  const [portfolio, setPortfolio] = useState<PortfolioProject[]>(initialPortfolio);
  const [skills, setSkills] = useState<SkillCategory[]>(initialSkills);
  const [languages, setLanguages] = useState<Language[]>(initialLanguages);
  const [education, setEducation] = useState<Education[]>(initialEducation);
  const [employment, setEmployment] = useState<Employment[]>(initialEmployment);
  const [availability, setAvailability] = useState<Availability>(initialAvailability);
  const [verifications] = useState<Verification[]>(initialVerifications);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(initialSocialLinks);
  const [privacy, setPrivacy] = useState<PrivacySettings>(initialPrivacy);
  const [analytics] = useState<Analytics>(initialAnalytics);

  // Profile completion calculation
  const calculateCompletion = (): number => {
    let score = 0;
    if (profileData.displayName) score += 10;
    if (profileData.description) score += 10;
    if (aboutData.bio) score += 15;
    if (portfolio.length > 0) score += 20;
    if (skills.length > 0) score += 15;
    if (languages.length > 0) score += 10;
    if (education.length > 0) score += 10;
    if (employment.length > 0) score += 10;
    return score;
  };

  const profileCompletion = calculateCompletion();

  // Handlers (stubs for backend integration)
  const handleEditProfile = () => console.log("Edit profile");
  const handleEditAbout = () => console.log("Edit about");
  const handleAddProject = () => console.log("Add project");
  const handleEditSkills = () => console.log("Edit skills");
  const handleAddLanguage = () => console.log("Add language");
  const handleAddEducation = () => console.log("Add education");
  const handleAddEmployment = () => console.log("Add employment");
  const handleEditAvailability = () => console.log("Edit availability");
  const handleEditSocial = () => console.log("Edit social");
  const handleEditPrivacy = () => console.log("Edit privacy");

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Top Navigation Tabs */}
        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-900">Identity & Rates</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <span className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
              Preview
            </span>
            <span className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
              Save Draft
            </span>
            <span className="px-4 py-2 text-sm text-white bg-violet-600 hover:bg-violet-700 rounded-lg cursor-pointer transition-colors font-medium">
              Publish
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="w-full lg:flex-1 space-y-6">
            {/* Identity & Rates Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Identity & Rates"
                subtitle="Your professional identity"
                onEdit={handleEditProfile}
              />

              <div className="flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 flex items-center justify-center overflow-hidden">
                    {profileData.avatar ? (
                      <img
                        src={profileData.avatar}
                        alt={profileData.displayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl text-white font-bold">
                        {profileData.displayName.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <IconEdit />
                  </span>
                </div>

                {/* Profile Info */}
                <div className="flex-1 space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Display Name</span>
                    <span className="block text-gray-900 font-medium">
                      {profileData.displayName}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Username</span>
                    <span className="block text-gray-900">
                      @{profileData.username}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Description</span>
                    <span className="block text-gray-900">
                      {profileData.description}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <span className="flex items-center gap-1.5 text-sm text-gray-600">
                      <IconLocation />
                      {profileData.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-600">
                      <IconCalendar />
                      Member since {profileData.memberSince}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-sm text-gray-500">Hourly Rate (From)</span>
                  <span className="block text-xl font-semibold text-gray-900 mt-1">
                    ${profileData.hourlyRate}
                  </span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-sm text-gray-500">Starting Price (Min)</span>
                  <span className="block text-xl font-semibold text-gray-900 mt-1">
                    ${profileData.startingPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="About"
                subtitle="Tell us about yourself"
                onEdit={handleEditAbout}
              />

              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500 mb-2 block">
                    Lead paragraph
                  </span>
                  <span className="text-gray-700 leading-relaxed block">
                    {aboutData.bio}
                  </span>
                  <span className="text-sm text-gray-400 mt-2 block">
                    * Please complete this to give buyers more info about you and boost
                    your profile.
                  </span>
                </div>

                <div className="pt-4">
                  <span className="text-sm text-gray-500 mb-3 block">
                    Keywords you are skilled at
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.keywords.map((keyword, index) => (
                      <Tag key={index} text={keyword} variant="outline" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Portfolio"
                subtitle="Showcase your best work"
                editable={false}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-100 to-purple-100">
                        <span className="text-violet-400 text-4xl font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-white font-medium block">
                          {project.title}
                        </span>
                        <span className="text-white/70 text-sm block">
                          {project.category}
                        </span>
                        {(project.clicks || project.likes) && (
                          <div className="flex gap-3 mt-2 text-white/80 text-xs">
                            {project.clicks && (
                              <span className="flex items-center gap-1">
                                <IconEye />
                                {project.clicks}
                              </span>
                            )}
                            {project.likes && (
                              <span className="flex items-center gap-1">
                                <IconStar />
                                {project.likes}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <IconEdit />
                    </span>
                  </div>
                ))}

                {/* Add Project Card */}
                <div
                  onClick={handleAddProject}
                  className="flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl aspect-[4/3] cursor-pointer hover:border-violet-300 hover:bg-violet-50/50 transition-colors"
                >
                  <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                    <IconPlus />
                  </span>
                  <span className="text-gray-600 font-medium">Add Project</span>
                  <span className="text-gray-400 text-sm">Gallery or Case Study</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                {portfolio.slice(0, 1).map((project) => (
                  <div key={`featured-${project.id}`} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-100 to-purple-100">
                          <span className="text-violet-400 text-sm font-bold">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-gray-900 font-medium text-sm block">
                        {project.title}
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Tools Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Skill & Tools"
                subtitle="Your professional toolkit"
                onEdit={handleEditSkills}
              />

              <div className="space-y-6">
                {skills.map((category, catIndex) => (
                  <div key={catIndex}>
                    <span className="text-sm text-gray-500 mb-3 block">
                      {category.name}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Tag
                          key={skillIndex}
                          text={skill}
                          variant={skillIndex === 0 ? "primary" : "default"}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <span className="text-sm text-gray-500 mb-3 block">
                    UI selected
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <Tag text="12 selected" variant="outline" />
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Languages"
                subtitle="Languages you speak"
                editable={false}
              />

              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.id}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                        {lang.name.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="text-gray-900">{lang.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <LevelIndicator level={lang.level} />
                      <span className="text-gray-400 text-sm capitalize">
                        {lang.level}
                      </span>
                      <IconChevronDown />
                    </div>
                  </div>
                ))}
              </div>

              <span
                onClick={handleAddLanguage}
                className="flex items-center gap-2 mt-4 text-violet-600 hover:text-violet-700 cursor-pointer font-medium"
              >
                <IconPlus />
                Add Language
              </span>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Education"
                subtitle="Your academic background"
                editable={false}
              />

              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <span className="text-gray-900 font-medium block">
                        {edu.degree}
                      </span>
                      <span className="text-gray-600 text-sm block">
                        {edu.institution} • {edu.year}
                      </span>
                    </div>
                    <span className="p-1.5 hover:bg-gray-200 rounded cursor-pointer transition-colors">
                      <IconEdit />
                    </span>
                  </div>
                ))}
              </div>

              <span
                onClick={handleAddEducation}
                className="flex items-center gap-2 mt-4 text-violet-600 hover:text-violet-700 cursor-pointer font-medium"
              >
                <IconPlus />
                Add Education
              </span>
            </div>

            {/* Employment Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Employment"
                subtitle="Your professional background"
                editable={false}
              />

              <div className="space-y-4">
                {employment.map((emp) => (
                  <div
                    key={emp.id}
                    className="relative p-4 border-l-2 border-violet-200 ml-2"
                  >
                    <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-violet-600 border-2 border-white" />
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-gray-900 font-medium block">
                          {emp.title}
                        </span>
                        <span className="text-gray-600 text-sm block">
                          {emp.company} • {emp.period}
                        </span>
                        <span className="text-gray-500 text-sm mt-2 block">
                          {emp.description}
                        </span>
                      </div>
                      <span className="p-1.5 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                        <IconEdit />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <span
                onClick={handleAddEmployment}
                className="flex items-center gap-2 mt-4 text-violet-600 hover:text-violet-700 cursor-pointer font-medium"
              >
                <IconPlus />
                Add Experience
              </span>
            </div>

            {/* Availability Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Availability"
                subtitle="When you are available to work"
                onEdit={handleEditAvailability}
              />

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Hours per week</span>
                    <span className="text-violet-600 font-semibold">
                      {availability.hoursPerWeek}hrs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={availability.hoursPerWeek}
                    onChange={(e) =>
                      setAvailability({
                        ...availability,
                        hoursPerWeek: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500 mb-2 block">
                      Earliest start date
                    </span>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <IconCalendar />
                      <span className="text-gray-900">{availability.earliestStart}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 mb-2 block">
                      Follow-up project
                    </span>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-500">{availability.followUpProject}</span>
                      <IconChevronDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verifications & Badges Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Verifications & Badges"
                subtitle="Build trust with clients"
                editable={false}
              />

              <div className="space-y-4">
                {verifications.map((verification) => (
                  <div
                    key={verification.id}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      verification.verified
                        ? "bg-gray-50"
                        : "bg-orange-50 border border-orange-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          verification.verified
                            ? "bg-violet-100 text-violet-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        <VerificationIcon type={verification.icon} />
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium block">
                          {verification.name}
                        </span>
                        <span className="text-gray-500 text-sm block">
                          {verification.description}
                        </span>
                      </div>
                    </div>
                    {verification.verified ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                        Verified
                      </span>
                    ) : (
                      <div className="text-right">
                        <div className="w-24 bg-gray-200 rounded-full h-1.5 mb-1">
                          <div
                            className="bg-orange-500 h-1.5 rounded-full"
                            style={{ width: "60%" }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">60%</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social & Links Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Social & Links"
                subtitle="Connect your online presence"
                onEdit={handleEditSocial}
              />

              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <div
                    key={link.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                        <SocialIcon platform={link.icon} />
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium block text-sm">
                          {link.platform}
                        </span>
                        <span className="text-gray-500 text-xs block">{link.url}</span>
                      </div>
                    </div>
                    {link.platform === "Behance" && (
                      <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded">
                        Featured
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500 mb-2 block">Custom Link</span>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <IconLink />
                  <div>
                    <span className="text-gray-900 font-medium block text-sm">Website</span>
                    <span className="text-gray-500 text-xs block">
                      http://www.myportfolio.me or similar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Visibility Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <SectionHeader
                title="Privacy & Visibility"
                subtitle="Control who sees your profile"
                onEdit={handleEditPrivacy}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="text-gray-900 font-medium block">
                      Profile Visibility
                    </span>
                    <span className="text-gray-500 text-sm block">
                      Who can view your profile
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                        privacy.profileVisibility === "public"
                          ? "bg-violet-600 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                      onClick={() =>
                        setPrivacy({ ...privacy, profileVisibility: "public" })
                      }
                    >
                      Public
                    </span>
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                        privacy.profileVisibility === "private"
                          ? "bg-violet-600 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                      onClick={() =>
                        setPrivacy({ ...privacy, profileVisibility: "private" })
                      }
                    >
                      Private
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="text-gray-900 font-medium block">
                      Allow Invites From
                    </span>
                    <span className="text-gray-500 text-sm block">
                      Who can invite you to jobs
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                        privacy.allowInvites === "everyone"
                          ? "bg-violet-600 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                      onClick={() =>
                        setPrivacy({ ...privacy, allowInvites: "everyone" })
                      }
                    >
                      Everyone
                    </span>
                    <span
                      className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                        privacy.allowInvites === "connections"
                          ? "bg-violet-600 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                      onClick={() =>
                        setPrivacy({ ...privacy, allowInvites: "connections" })
                      }
                    >
                      Connections
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 xl:w-96 space-y-6">
            {/* Progress Section */}
            <div className="sticky top-6 space-y-6">
              {/* Current Section Indicator */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <span className="text-sm text-gray-500">Current Section</span>
                <span className="text-gray-900 font-medium block">Identity & Rates</span>
              </div>

              {/* Profile Completion */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-900 font-semibold">Profile Completion</span>
                  <span className="text-violet-600 font-bold">{profileCompletion}%</span>
                </div>
                <ProgressBar value={profileCompletion} />
                <span className="text-sm text-gray-500 mt-2 block">
                  Complete your profile to get hired
                </span>
              </div>

              {/* Quality Score */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <IconStar />
                  <span className="text-gray-900 font-semibold">Quality Score</span>
                </div>
                <span className="text-sm text-gray-600 block">
                  A higher score improves your ranking and visibility on Claude.
                </span>
                <span className="text-xs text-gray-400 mt-2 block">
                  Updated daily 17/12/2024
                </span>
              </div>

              {/* Analytics */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <IconChart />
                  <span className="text-gray-900 font-semibold">Analytics (30 days)</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Profile Views</span>
                  <span className="text-xl font-bold text-gray-900">
                    {analytics.profileViews.toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl font-bold text-gray-900 block">
                      {analytics.impressions}
                    </span>
                    <span className="text-xs text-gray-500">Impressions</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl font-bold text-gray-900 block">
                      {analytics.clicks}
                    </span>
                    <span className="text-xs text-gray-500">Clicks</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl font-bold text-gray-900 block">
                      {analytics.orders}
                    </span>
                    <span className="text-xs text-gray-500">Orders</span>
                  </div>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                    <IconLightbulb />
                  </div>
                  <span className="text-violet-900 font-semibold">Pro Tip</span>
                </div>
                <span className="text-sm text-violet-800 block">
                  Profiles with professional photos get 40% more views.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}