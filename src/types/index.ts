export type ProjectCategory = 
  | "all"
  | "backend-microservices"
  | "ai-data-systems"
  | "web-scraping"
  | "web-applications";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  technologies: string[];
  featured?: boolean;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  role?: string;
  organization?: string;
  period?: string;
  highlights?: string[];
  architectureOverview?: string;
  keyFeatures?: string[];
  challengesSolved?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  employmentType?: string;
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  responsibilities: string[];
  keyProjects: {
    name: string;
    description: string;
    technologies?: string[];
  }[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  targetAudience: string;
  problemsSolved: string[];
  deliverables: string[];
  technologies: string[];
  relatedProjectSlugs?: string[];
}

export interface SuccessStoryItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  clientOrProject: string;
  domain: string;
  technologies: string[];
  challenge: string;
  solution: string;
  architectureDetails: string[];
  outcomes: string[];
  relatedProjectSlug?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
  primary?: boolean;
}

export interface ProfileData {
  name: string;
  preferredName: string;
  aliases: string[];
  title: string;
  headline: string;
  shortBio: string;
  longBio: string[];
  location: {
    city: string;
    region: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsappUrl: string;
    calendarUrl: string;
    formspreeEndpoint: string;
    canonicalUrl: string;
  };
  resume: {
    filename: string;
    path: string;
    updatedLabel: string;
  };
  stats: {
    yearsOfExperience: string;
    projectsDelivered: string;
    coreFocus: string;
    availability: string;
  };
  skillsHierarchy: {
    category: string;
    skills: string[];
  }[];
}

