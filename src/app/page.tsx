import ProjectCard from '@/components/project-card';
import { projects } from './data';
import HeaderSection from '@/components/header-section'; // Import the new client component
import Footer from '@/components/footer'; // Import the new footer component
import type { Metadata } from 'next';
import dottedTexture from '@/assets/dotted-texture.jpg'; // Import the texture

// Updated metadata specific to the Home page
export const metadata: Metadata = {
  title: 'FolioFlow - Home',
  description: 'Welcome to FolioFlow. Explore a collection of my projects showcasing skills in modern web development.',
};


export default function Home() {
  return (
    <div
      className="min-h-screen bg-repeat text-foreground" // Ensure bg-repeat is applied
      style={{ backgroundImage: `url(${dottedTexture.src})`, backgroundSize: 'contain' }} // Set backgroundSize to 'contain'
    >
      <HeaderSection /> {/* Use the new client component */}

      {/* Removed the explicit "My Projects" heading section */}
      <main id="projects-section" className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-800 mt-6 mb-4 text-center">
          MY PROJECTS
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-20 leading-relaxed">
          Explore os projetos que demonstram nossas habilidades e inovações.
        </p>
        <div className="space-y-20"> {/* Increased spacing between projects */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer /> {/* Use the new footer component */}
    </div>
  );
}
