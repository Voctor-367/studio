'use client';

import React from 'react';
import { Award, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeaderSection: React.FC = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex flex-col justify-center items-center py-16 md:py-24 bg-gradient-to-br from-background via-muted/50 to-background relative border-b border-border/20">
      <div className="container mx-auto px-4 text-center">
        <Award className="w-20 h-20 md:w-24 md:h-24 text-primary mx-auto mb-6 animate-bounce" /> {/* Changed color to primary */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight">
          <span className="text-gradient-primary-accent">
            FolioFlow
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          A curated collection of my projects, showcasing skills and passion for building innovative digital solutions.
        </p>
        <div className="flex justify-center space-x-4 md:space-x-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
            <Github size={30} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
            <Linkedin size={30} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
            <Mail size={30} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="group bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
          onClick={handleScrollToProjects}
          aria-label="Scroll to projects"
        >
          View My Work
          <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
        <ArrowDown className="w-8 h-8 text-muted-foreground/50" />
      </div>
    </header>
  );
};

export default HeaderSection;
