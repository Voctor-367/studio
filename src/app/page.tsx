import ProjectCard from '@/components/project-card';
import { projects } from './data';
import HeaderSection from '@/components/header-section'; // Import the new client component
import Footer from '@/components/footer'; // Import the new footer component
import dottedTexture from '@/assets/dotted-texture.jpg'; // Import the texture

export default function Home() {
  return (
    <>
      <style>
        {`
          @media (min-width: 1024px) {
            .bg-repeat {
              background-size: 45% !important;
            }
          }
        `}
      </style>
      <div
        className="min-h-screen bg-repeat text-foreground"
        style={{ backgroundImage: `url(${dottedTexture.src})`, backgroundSize: 'contain' }}
      >
        <HeaderSection /> {/* Use the new client component */}

        {/* Removed the explicit "My Projects" heading section */}
        <main id="projects-section" className="container mx-auto px-4 py-12 md:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-800 mt-2 mb-2 sm:mb-4 text-center">
            PORTFÓLIO
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-20 sm:mb-12 leading-relaxed">
            Soluções construídas para múltiplos setores e desafios.
          </p>
          <div className="space-y-20"> {/* Increased spacing between projects */}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>

        <Footer /> {/* Use the new footer component */}
      </div>
    </>
  );
}
