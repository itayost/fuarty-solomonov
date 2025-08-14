// Types for firm data structures

export interface Address {
  street: {
    he: string;
    en: string;
  };
  city: {
    he: string;
    en: string;
  };
  country: {
    he: string;
    en: string;
  };
  zipCode: string;
  fullAddress: {
    he: string;
    en: string;
  };
}

export interface ContactInfo {
  address: Address;
  phone: {
    main: string;
    display: string;
    link: string;
  };
  fax: {
    main: string;
    display: string;
  };
  email: {
    main: string;
    display: string;
    link: string;
  };
  officeHours: OfficeHours;
  location: LocationInfo;
}

export interface OfficeHours {
  [key: string]: {
    open?: string;
    close?: string;
    closed?: boolean;
    display: string;
  };
}

export interface LocationInfo {
  description: string;
  nearbyLandmarks: string[];
  googleMapsUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  education?: string[];
  barAdmission?: {
    year: number;
    description: string;
  };
  specializations?: string[];
  positions?: string[];
  description?: string;
  image?: string;
  email?: string;
  phone?: string;
  order: number;
}

export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
  icon?: string;
  order: number;
}

export interface NavigationItem {
  href: string;
  label: string;
  order: number;
  children?: NavigationItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  company?: string;
  text: string;
  rating: number;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Award {
  year: number;
  title: string;
  organization: string;
  description?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
}

export interface SEOConfig {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  url: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
  facebookPage?: string;
}