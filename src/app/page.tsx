import ProjectCard from '@/components/project-card';
import { projects } from './data';
import { Briefcase } from 'lucide-react';
import HeaderSection from '@/components/header-section'; // Import the new client component

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderSection /> {/* Use the new client component */}

      <main id="projects-section" className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex items-center mb-12 md:mb-16">
          <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-primary mr-4" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-primary-accent">My Projects</h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
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
