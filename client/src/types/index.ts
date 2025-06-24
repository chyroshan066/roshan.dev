export type Status = 'Active' | 'Inactive' | 'Pending' | 'Completed' | 'Ongoing';
export type Category = 'personal' | 'client';

interface BaseItem {
  id: number;
  title?: string;
  description?: string;
}

interface BaseLink {
  name: string;
  href: string;
}

interface BasePerson {
  name: string;
}

interface SocialLinks {
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  xUrl?: string;
}

export interface NavLink extends BaseLink {}

export interface BentoSocialLink extends BaseLink {
  icon: string;
}

export interface IconsList {
  name: string;
  image: string;
}

export interface FooterIconList extends BaseLink {
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
  color?: string;
}

export interface Project extends BaseItem {
  img: string;
  technologies?: readonly string[]; // readonly for better performance
  category?: Category;
  liveURL?: string;
  githubURL?: string;
}

export interface Certificate {
  id?: number;
  name?: string;
  title?: string;
  organization?: string;
  date?: string;
  image?: string;
  color?: string;
  description?: string;
  credentialUrl?: string;
}

export interface WorkExperience extends BaseItem {
  company: string;
  period: string;
  status: string;
  logo: "🏛️";
  details: readonly string[];
  certificates: readonly Certificate[];
}

export interface Education extends BaseItem {
  degree: string;
  institution: string;
  duration: string;
  status: Status;
  year: string;
  position: number;
}

export interface Service extends BaseItem {
  features: readonly string[];
  technologies: readonly Technology[];
  icon: string;
}

export interface Testimonial extends BasePerson, SocialLinks {
  pos: string;
  review: string;
  imgPath: string;
}

export interface ContactForm extends BasePerson {
  email: string;
  subject: string;
  message: string;
}

// Type guards for runtime type checking (optional but useful)
export const isProject = (obj: any): obj is Project => {
  return typeof obj === 'object' && 
         typeof obj.id === 'number' && 
         typeof obj.title === 'string' &&
         typeof obj.img === 'string';
};

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Utility types for better type inference
export type ProjectKeys = keyof Project;
export type RequiredProject = Required<Pick<Project, 'id' | 'title' | 'img'>>;
export type OptionalProject = Partial<Pick<Project, 'description' | 'technologies' | 'category' | 'liveURL' | 'githubURL'>>;

// Union types for better performance with literal types
export type SocialPlatform = 'linkedin' | 'facebook' | 'instagram' | 'tiktok' | 'x';
export type FileExtension = 'jpg' | 'jpeg' | 'png' | 'webp' | 'svg';

// Const assertions for better tree shaking
export const PROJECT_CATEGORIES = ['personal', 'client'] as const;
export const STATUS_OPTIONS = ['active', 'inactive', 'pending', 'completed'] as const;
