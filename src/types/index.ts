import type { LucideIcon } from 'lucide-react';

export interface TechStackItem {
  name: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; // Allow both Lucide icons and custom SVGs
}

export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  imageBadgeText: string;
  link: string;
  description: string;
  features: string[];
  impacts: string[];
  techStack: TechStackItem[];
}