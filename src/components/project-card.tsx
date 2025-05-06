import type { Project } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ListChecks, FileText, Package, Briefcase, Zap } from 'lucide-react'; // Removed unused 'Info'
import Icon from './icon';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="mb-16 md:mb-20">
       {/* Project Title - Full Width */}
       <h2 className="text-3xl md:text-4xl font-bold text-glow-primary mb-8 text-center md:text-left">{project.title}</h2>

       {/* Changed grid columns to lg:grid-cols-5 for 60/40 split */}
       <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

         {/* Left Column (Description, Features, Tech Stack) - Now wider (lg:col-span-3 ~ 60%) */}
         <div className="lg:col-span-3 flex flex-col space-y-6">
            {/* Description Card */}
            <Card className="bg-card/80 border-border/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"> {/* Adjusted background opacity */}
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

            {/* Features Card */}
            <Card className="bg-card/80 border-border/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"> {/* Adjusted background opacity */}
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

             {/* Tech Stack Card */}
            <Card className="bg-card/80 border-border/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"> {/* Adjusted background opacity */}
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
                        "bg-muted/60 text-foreground/80 border border-transparent hover:border-accent/50" // Ensured badge background is muted and slightly transparent
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

         {/* Right Column (Image, Details/Impact) - Now narrower (lg:col-span-2 ~ 40%) */}
        <div className="lg:col-span-2 flex flex-col space-y-6">
            {/* Image Card */}
            <Card className="bg-card/80 border-border/20 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 group/card"> {/* Adjusted background opacity */}
               <CardContent className="p-0">
                <div className="relative w-full aspect-[16/10] rounded-t-lg overflow-hidden border-b border-border/30"> {/* Slightly adjusted aspect ratio maybe */}
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover/card:scale-105"
                    data-ai-hint={project.imageAlt}
                    priority={project.id === '1'} // Prioritize first image
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5 opacity-60 group-hover/card:opacity-40 transition-opacity duration-300"></div>
                </div>
               </CardContent>
             </Card>

             {/* Project Details/Impact Card */}
            <Card className="bg-card/80 border-border/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"> {/* Adjusted background opacity */}
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
