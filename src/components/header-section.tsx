'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot } from 'lucide-react';

const HeaderSection: React.FC = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-border/10">
        <div className="flex items-center gap-2">
           <Bot className="w-7 h-7 text-accent" /> {/* Using Bot icon as placeholder */}
          <span className="text-xl font-bold">FolioFlow</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#projects-section" onClick={(e) => { e.preventDefault(); handleScrollToProjects(); }} className="hover:text-accent transition-colors">Projects</a>
          <a href="#technologies" className="hover:text-accent transition-colors">Technologies</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
         {/* Add Mobile Menu Button Here if needed */}
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 py-16 md:py-24">
        {/* Image Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden bg-card shadow-lg">
            <Image
              src="https://picsum.photos/seed/headercode/640/360"
              alt="Abstract code background"
              layout="fill"
              objectFit="cover"
              data-ai-hint="abstract code"
              priority
            />
            {/* Optional overlay */}
             <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-glow-foreground">
            Intelligent Automation to Boost Your Business
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Developing customized solutions with modern technologies and AI to optimize your processes and drive efficiency.
          </p>
          <Button
            size="lg"
            className="group bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            onClick={handleScrollToProjects}
            aria-label="See my projects"
          >
            See my Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
