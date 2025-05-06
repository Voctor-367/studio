import type { Project } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ListChecks, FileText, Package, Info, Zap } from 'lucide-react';
import Icon from './icon';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border/20 transition-all duration-300 hover:shadow-primary/10">
       <h2 className="text-3xl md:text-4xl font-bold p-6 md:p-8 text-gradient-primary-accent">{project.title}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8 pt-0">

        {/* Left Column (Description, Features, Tech Stack) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Description Card */}
          <Card className="bg-background/50 border-border/30 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg text-primary">
                <FileText className="w-5 h-5 mr-2" />
                Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-foreground/80">{project.description}</CardDescription>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card className="bg-background/50 border-border/30 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg text-primary">
                <ListChecks className="w-5 h-5 mr-2" />
                 Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-foreground/80">
                     <Zap className="w-3.5 h-3.5 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

           {/* Tech Stack Card */}
          <Card className="bg-background/50 border-border/30 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg text-primary">
                <Package className="w-5 h-5 mr-2" />
                Tech Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="secondary"
                    className={cn(
                      "group/badge flex items-center gap-1.5 px-2.5 py-1 hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-pointer",
                      "bg-muted/60 text-foreground/80 border border-transparent hover:border-accent/50" // Subtle gray background, brighter on hover
                    )}
                  >
                    <Icon icon={tech.icon} size={16} className="text-inherit group-hover/badge:text-accent-foreground" />
                    <span className="text-xs font-medium text-inherit group-hover/badge:text-accent-foreground">{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Image, Project Details) */}
        <div className="lg:col-span-2 space-y-6">
           {/* Image Card */}
           <Card className="overflow-hidden shadow-md border-border/30">
             <div className="relative w-full aspect-[16/9]">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint={project.imageAlt}
                priority // Load the first image faster
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
             </div>
           </Card>

           {/* Project Details Card */}
          <Card className="bg-background/50 border-border/30 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg text-primary">
                <Info className="w-5 h-5 mr-2" />
                 Project Details / Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-foreground/80">{project.impact}</CardDescription>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
