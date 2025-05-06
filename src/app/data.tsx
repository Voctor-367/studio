import type { Project } from '@/types';
import { Code, Database, Cloud, Activity, BarChart, Users, Briefcase, Brain, Settings, GitMerge, Bot, Aperture, Type, Feather, Package, PackagePlus } from 'lucide-react';
import type React from 'react';

// Custom SVG Icons
const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.48m-8.48 0a6 6 0 0 1 0-8.48m5.65-2.83a10 10 0 0 1 0 14.14m-11.3 0a10 10 0 0 1 0-14.14"></path>
  </svg>
);
const NextJsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path><path d="M12 12L12 12"></path>
  </svg>
);
const TailwindIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.5 19.5c-1.5-1.5-2-4-2.5-6 .5-2 1-4.5 2.5-6 .5 2 1.5 4.5 4 6.5-2.5 2-3.5 4.5-4 6.5zM7.5 4.5C9 6 9.5 8.5 10 10.5c-.5 2-1 4.5-2.5 6-.5-2-1.5-4.5-4-6.5 2.5-2 3.5-4.5 4-6.5z"></path>
  </svg>
);
const NodeJsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.05 4.05L4.05 10.05c-2.73 2.73-2.73 7.17 0 9.9l9.9-9.9c2.73-2.73 2.73-7.17 0-9.9zM13.95 19.95l9.9-9.9c2.73-2.73 2.73-7.17 0-9.9l-9.9 9.9c-2.73 2.73-2.73 7.17 0 9.9z"></path>
  </svg>
);
const VueJsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 10l6 8 6-8-3-5H5zM16 10l6 8"></path>
  </svg>
);
const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
   <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.64,17.56,7.75,14.67a1,1,0,0,1,0-1.41h0a1,1,0,0,1,1.41,0L12,16.12V5a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1V16.12l2.83-2.86a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41l-2.89,2.89A3,3,0,0,1,10.64,17.56Z"></path><path d="M17,6H7"></path>
  </svg>
);


export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform "ShopSphere"',
    imageUrl: 'https://picsum.photos/seed/shopsphere/800/600',
    imageAlt: 'E-commerce Platform online store',
    description: 'A modern e-commerce platform with a focus on user experience and scalability. Built with cutting-edge technologies for optimal performance and seamless integrations.',
    features: [
      'Product catalog management with advanced filtering and search capabilities.',
      'Secure payment gateway integration supporting multiple providers (Stripe, PayPal).',
      'Robust user authentication, profiles, and order history.',
      'Real-time order tracking system with notifications.',
      'Comprehensive admin dashboard for analytics, inventory, and customer management.',
      'Fully responsive design ensuring optimal viewing on all devices.',
    ],
    impact: 'Empowers businesses to establish a robust online presence, reach a wider customer base, and streamline sales operations, leading to increased revenue and customer satisfaction.',
    techStack: [
      { name: 'React', icon: ReactIcon },
      { name: 'Next.js', icon: NextJsIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'Node.js', icon: NodeJsIcon },
      { name: 'PostgreSQL', icon: Database },
      { name: 'AWS', icon: Cloud },
      { name: 'TypeScript', icon: Type },
    ],
  },
  {
    id: '2',
    title: 'Project Management Tool "TaskMaster"',
    imageUrl: 'https://picsum.photos/seed/taskmaster/800/600',
    imageAlt: 'Project Management Tool dashboard',
    description: 'A collaborative project management tool designed to help teams organize tasks, track progress, and improve productivity. Features intuitive UI and real-time updates.',
    features: [
      'Intuitive task creation, assignment, and prioritization.',
      'Multiple project views: Kanban boards, Gantt charts, and list views.',
      'Real-time collaboration features including comments, file sharing, and @mentions.',
      'Advanced progress tracking with burn-down charts and custom reporting.',
      'Customizable workflows and project templates to fit various team needs.',
      'Seamless integration with calendars (Google Calendar, Outlook) and communication tools (Slack, Microsoft Teams).',
    ],
    impact: 'Enhances team collaboration, improves project visibility, and boosts overall efficiency by providing a centralized platform for managing projects from initiation to completion.',
    techStack: [
      { name: 'Vue.js', icon: VueJsIcon },
      { name: 'Firebase', icon: Cloud },
      { name: 'Express.js', icon: Settings },
      { name: 'MongoDB', icon: Database },
      { name: 'GraphQL', icon: GitMerge },
      { name: 'Jest', icon: Activity },
      { name: 'Cypress', icon: Aperture },
    ],
  },
  {
    id: '3',
    title: 'AI-Powered Analytics Dashboard "InsightAI"',
    imageUrl: 'https://picsum.photos/seed/insightai/800/600',
    imageAlt: 'AI Analytics Dashboard charts',
    description: 'An intelligent analytics dashboard that leverages machine learning to provide deep insights from complex datasets. Helps businesses make data-driven decisions.',
    features: [
      'Dynamic data visualization with interactive charts, graphs, and heatmaps.',
      'Suite of predictive analytics models for forecasting and trend analysis.',
      'Natural Language Processing (NLP) for querying data using plain English.',
      'Automated report generation and scheduling with customizable templates.',
      'Real-time anomaly detection and alert system for critical metrics.',
      'Role-based access control and customizable dashboards for different user roles.',
    ],
    impact: 'Transforms raw data into actionable intelligence, enabling organizations to identify trends, predict outcomes, and optimize strategies for growth and operational excellence.',
    techStack: [
      { name: 'Python', icon: PythonIcon },
      { name: 'Flask', icon: Feather },
      { name: 'TensorFlow', icon: Brain },
      { name: 'D3.js', icon: BarChart },
      { name: 'Apache Kafka', icon: PackagePlus },
      { name: 'Elasticsearch', icon: Database },
      { name: 'Docker & Kubernetes', icon: Package },
    ],
  },
   {
    id: '4',
    title: 'Social Networking App "ConnectHub"',
    imageUrl: 'https://picsum.photos/seed/connecthub/800/600',
    imageAlt: 'Social Networking App user profiles',
    description: 'A dynamic social networking application designed to connect users with shared interests. Features real-time chat, content sharing, and community building.',
    features: [
      'Rich user profiles with customizable sections and privacy settings.',
      'Real-time messaging (one-on-one and group chats) with multimedia support.',
      'Advanced content posting capabilities (text, images, videos, polls).',
      'AI-driven recommendations for interest-based groups and connections.',
      'Integrated event scheduling, RSVPs, and calendar synchronization.',
      'Push notification system for important updates and interactions.',
    ],
    impact: 'Facilitates community building and fosters connections by providing a platform for users to interact, share experiences, and engage with like-minded individuals.',
    techStack: [
      { name: 'React Native', icon: ReactIcon },
      { name: 'GraphQL', icon: GitMerge },
      { name: 'Apollo Server', icon: Settings },
      { name: 'AWS Amplify', icon: Cloud },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Redis', icon: Bot },
      { name: 'WebSockets', icon: Users },
    ],
  },
];
