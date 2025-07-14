import React from "react";

export type Status = 'Active' | 'Inactive' | 'Pending';
export type Category = 'personal' | 'client' | 'group';
export type EducationStatus = 'Completed' | 'Ongoing';

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

export interface NavLink extends BaseLink {
  prefetch: boolean;
  preload?: boolean;
}

export interface BentoSocialLink extends BaseLink {
  icon: string | React.ReactElement;
}

export interface IconsList {
  name: string;
  image: string | React.ReactElement;
}

export interface FooterIconList extends BaseLink {
  icon: React.ReactElement | string;
}

export interface Technology {
  name: string;
  icon: string | React.ReactElement;
}

export interface Project extends BaseItem {
  img: string;
  technologies?: readonly string[]; // readonly for better performance
  category?: Category;
  liveURL?: string;
  githubURL?: string;
  repeat?: boolean;
}

export interface Certificate {
  id: number;
  name?: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  color?: string;
  description: string;
  credentialUrl?: string;
  skills: string[];
  category: string;
}

export interface WorkExperience extends BaseItem {
  company: string;
  period: string;
  status: string;
  logo: string;
  details: readonly string[];
}

export interface Education extends BaseItem {
  degree: string;
  institution: string;
  status: EducationStatus;
  startYear: number;
  endYear: number;
  position: number;
  level: string;
  field: string;
  achievements: string[];
  isOngoing: boolean;
}

export interface Service extends BaseItem {
  features: string[];
  technologies: Technology[];
  icon: string;
}

export interface Testimonial extends BasePerson, SocialLinks {
  id: number;
  pos: string;
  review: string;
  imgPath: string;
}

export interface ContactType extends BasePerson {
  email: string;
  subject: string;
  message: string;
}

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
