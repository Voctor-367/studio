import ProjectCard from '@/components/project-card';
import { projects } from './data';
// import { Briefcase } from 'lucide-react'; // Removed unused icon import
import HeaderSection from '@/components/header-section'; // Import the new client component
import type { Metadata } from 'next';

// Updated metadata specific to the Home page
export const metadata: Metadata = {
  title: 'FolioFlow - Home',
  description: 'Welcome to FolioFlow. Explore a collection of my projects showcasing skills in modern web development.',
};


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderSection /> {/* Use the new client component */}

      {/* Removed the explicit "My Projects" heading section */}
      <main id="projects-section" className="container mx-auto px-4 py-16 md:py-20">
        {/* <div className="flex items-center mb-12 md:mb-16">
          <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-accent mr-4" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-glow-accent">My Projects</h1>
        </div> */}

        {/* Map directly over projects, ProjectCard handles its own spacing */}
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}

      </main>

      <footer className="py-12 bg-muted/30 text-center text-muted-foreground border-t border-border/50">
        <div className="container mx-auto px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} FolioFlow. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Built with Next.js and Tailwind CSS. Designed with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
