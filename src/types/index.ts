// Type definitions for the portfolio website

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Skill {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}