import type { Project } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ListChecks, FileText, Package, Info, Zap } from 'lucide-react';
import Icon from './icon';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-card rounded-xl shadow-lg overflow-hidden border border-border/20 transition-all duration-300 hover:shadow-primary/10 hover:border-primary/20 group/card">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 p-6 md:p-8">

        {/* Left Column (Image) - Takes 2 columns on medium screens and up */}
        <div className="md:col-span-2 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md border border-border/30">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover/card:scale-105"
            data-ai-hint={project.imageAlt}
            priority // Load the first image faster if it's likely above the fold
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover/card:opacity-50 transition-opacity duration-300"></div>
        </div>

        {/* Right Column (Text Content) - Takes 3 columns on medium screens and up */}
        <div className="md:col-span-3 flex flex-col space-y-6">
          <CardHeader className="p-0">
            <CardTitle className="text-3xl md:text-4xl font-bold text-gradient-primary-accent mb-2">{project.title}</CardTitle>
          </CardHeader>

          <CardContent className="p-0 space-y-6">
            {/* Description Section */}
            <div className="space-y-2">
              <h3 className="flex items-center text-lg font-semibold text-primary">
                <FileText className="w-5 h-5 mr-2 flex-shrink-0" />
                Description
              </h3>
              <p className="text-sm text-foreground/80">{project.description}</p>
            </div>

            {/* Features Section */}
            <div className="space-y-2">
              <h3 className="flex items-center text-lg font-semibold text-primary">
                <ListChecks className="w-5 h-5 mr-2 flex-shrink-0" />
                 Key Features
              </h3>
              <ul className="space-y-1.5">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-foreground/80">
                     <Zap className="w-3.5 h-3.5 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

             {/* Impact Section */}
             <div className="space-y-2">
              <h3 className="flex items-center text-lg font-semibold text-primary">
                <Info className="w-5 h-5 mr-2 flex-shrink-0" />
                 Project Impact
              </h3>
              <p className="text-sm text-foreground/80">{project.impact}</p>
            </div>

             {/* Tech Stack Section */}
            <div className="space-y-2">
               <h3 className="flex items-center text-lg font-semibold text-primary">
                 <Package className="w-5 h-5 mr-2 flex-shrink-0" />
                 Tech Stack
               </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="secondary"
                    className={cn(
                      "group/badge flex items-center gap-1.5 px-2.5 py-1 hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default", // Changed cursor to default as it's not clickable
                      "bg-muted/60 text-foreground/80 border border-transparent hover:border-accent/50"
                    )}
                  >
                    <Icon icon={tech.icon} size={16} className="text-inherit group-hover/badge:text-accent-foreground" />
                    <span className="text-xs font-medium text-inherit group-hover/badge:text-accent-foreground">{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
