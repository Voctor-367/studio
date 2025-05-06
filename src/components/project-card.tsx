import type { Project } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ListChecks, FileText, Package, Briefcase, Zap } from 'lucide-react';
import Icon from './icon';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="mb-16 md:mb-20">
       {/* Project Title - Changed glow effect to foreground (white) */}
       <h2 className="text-3xl md:text-4xl font-bold text-glow-foreground mb-8 text-center md:text-left">{project.title}</h2>

       {/* Grid layout for 60/40 split */}
       <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

         {/* Left Column (Description, Features, Tech Stack) - lg:col-span-3 (60%) */}
         <div className="lg:col-span-3 flex flex-col space-y-6">
            {/* Description Card - Adjusted background and border */}
            <Card className="bg-card/50 border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-xl font-semibold text-primary">
                  <FileText className="w-5 h-5 mr-2 flex-shrink-0" />
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{project.description}</p>
              </CardContent>
            </Card>

            {/* Features Card - Adjusted background and border */}
            <Card className="bg-card/50 border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                 <CardTitle className="flex items-center text-xl font-semibold text-primary">
                  <ListChecks className="w-5 h-5 mr-2 flex-shrink-0" />
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

             {/* Tech Stack Card - Adjusted background and border */}
            <Card className="bg-card/50 border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-xl font-semibold text-primary">
                   <Package className="w-5 h-5 mr-2 flex-shrink-0" />
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
                        "group/badge flex items-center gap-1.5 px-2.5 py-1 hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default",
                        "bg-muted/40 text-foreground/80 border border-transparent hover:border-accent/50 backdrop-blur-sm" // Adjusted muted background transparency
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

         {/* Right Column (Image, Details/Impact) - lg:col-span-2 (40%) */}
        <div className="lg:col-span-2 flex flex-col space-y-6">
            {/* Image Card - Adjusted background and border */}
            <Card className="bg-card/50 border-border/30 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 group/card backdrop-blur-sm">
               <CardContent className="p-0">
                 {/* Added pseudo-element for circular glow */}
                <div className="relative w-full aspect-[16/10] rounded-t-lg overflow-hidden border-b border-border/30
                                before:content-[''] before:absolute before:w-full before:h-full before:left-[-25%] before:top-1/2 before:-translate-y-1/2
                                before:bg-accent/15 before:rounded-full before:blur-3xl before:-z-10 before:opacity-70
                                group-hover/card:before:opacity-90 group-hover/card:before:scale-110 transition-all duration-500">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover/card:scale-105"
                    data-ai-hint={project.imageAlt}
                    priority={project.id === '1'} // Prioritize first image
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover/card:opacity-50 transition-opacity duration-300"></div>
                </div>
               </CardContent>
             </Card>

             {/* Project Details/Impact Card - Adjusted background and border */}
            <Card className="bg-card/50 border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 backdrop-blur-sm">
               <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-xl font-semibold text-primary">
                  <Briefcase className="w-5 h-5 mr-2 flex-shrink-0" />
                   Potential Impact
                 </CardTitle>
               </CardHeader>
              <CardContent>
                 <p className="text-sm text-foreground/80">{project.impact}</p>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
};

export default ProjectCard;
