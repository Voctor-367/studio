import type { Project } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ListChecks, FileText, Package, Briefcase, Zap, GitMerge, LucideIcon } from 'lucide-react';
import { IoLogoPython } from "react-icons/io5";
import type { SVGProps } from 'react';
import { SiPubmed, SiOpenai, SiStreamlit, SiRedis, SiGoogle, SiSupabase, SiWhatsapp, SiN8N, SiDocker, SiRabbitmq, SiChatwoot } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa6";


import Icon from './icon';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const techDisplayConfig: Record<string, { icon: LucideIcon | React.FC<SVGProps<SVGSVGElement>>; className: string; iconClassName: string }> = {
  'LangGraph': { icon: GitMerge, className: 'bg-[#007ACC]/20 text-[#007ACC] border-[#007ACC]/30 hover:bg-[#007ACC]/30 hover:border-[#007ACC]/60', iconClassName: 'text-[#007ACC]' },
  'Streamlit': { icon: SiStreamlit, className: 'bg-[#FF4B4B]/20 text-[#FF4B4B] border-[#FF4B4B]/30 hover:bg-[#FF4B4B]/30 hover:border-[#FF4B4B]/60', iconClassName: 'text-[#FF4B4B]' },
  'PubMed API': { icon: SiPubmed, className: 'bg-[#2C63BC]/20 text-[#2C63BC] border-[#2C63BC]/30 hover:bg-[#2C63BC]/30 hover:border-[#2C63BC]/60', iconClassName: 'text-[#2C63BC]' },
  'GPT 4.1': { icon: SiOpenai, className: 'bg-[#10A37F]/20 text-[#10A37F] border-[#10A37F]/30 hover:bg-[#10A37F]/30 hover:border-[#10A37F]/60', iconClassName: 'text-[#10A37F]' },
  'Azure': { icon: VscAzure, className: 'bg-[#0078D4]/20 text-[#0078D4] border-[#0078D4]/30 hover:bg-[#0078D4]/30 hover:border-[#0078D4]/60', iconClassName: 'text-[#0078D4]' },
  'Python': { icon: IoLogoPython, className: 'bg-[#3776AB]/20 text-[#3776AB] border-[#3776AB]/30 hover:bg-[#3776AB]/30 hover:border-[#3776AB]/60', iconClassName: 'text-[#3776AB]' },
  'Redis': { icon: SiRedis, className: 'bg-[#DC382D]/20 text-[#DC382D] border-[#DC382D]/30 hover:bg-[#DC382D]/30 hover:border-[#DC382D]/60', iconClassName: 'text-[#DC382D]' },
  'Google': { icon: SiGoogle, className: 'bg-[#4285F4]/20 text-[#4285F4] border-[#4285F4]/30 hover:bg-[#4285F4]/30 hover:border-[#4285F4]/60', iconClassName: 'text-[#4285F4]' },
  'Supabase': { icon: SiSupabase, className: 'bg-[#3ECF8E]/20 text-[#3ECF8E] border-[#3ECF8E]/30 hover:bg-[#3ECF8E]/30 hover:border-[#3ECF8E]/60', iconClassName: 'text-[#3ECF8E]' },
  'Whatsapp API': { icon: SiWhatsapp, className: 'bg-[#95D366]/20 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366]/30 hover:border-[#25D366]/60', iconClassName: 'text-[#25D366]' },
  'N8N': { icon: SiN8N, className: 'bg-[#F76A8C]/20 text-[#F76A8C] border-[#F76A8C]/30 hover:bg-[#F76A8C]/30 hover:border-[#F76A8C]/60', iconClassName: 'text-[#F76A8C]' },
  'Docker': { icon: SiDocker, className: 'bg-[#2496ED]/20 text-[#2496ED] border-[#2496ED]/30 hover:bg-[#2496ED]/30 hover:border-[#2496ED]/60', iconClassName: 'text-[#2496ED]' },
  'RabbitMQ': { icon: SiRabbitmq, className: 'bg-[#FF6600]/20 text-[#FF6600] border-[#FF6600]/30 hover:bg-[#FF6600]/30 hover:border-[#FF6600]/60', iconClassName: 'text-[#FF6600]' },
  'Chatwoot': { icon: SiChatwoot, className: 'bg-[#1F93FF]/20 text-[#1F93FF] border-[#1F93FF]/30 hover:bg-[#1F93FF]/30 hover:border-[#1F93FF]/60', iconClassName: 'text-[#1F93FF]' },
  'AI Agents (GPT, Gemini e DeepSeek)': { icon: FaRobot, className: 'bg-[#4F93FF]/20 text-[#1F93FF] border-[#1F93FF]/30 hover:bg-[#1F93FF]/30 hover:border-[#1F93FF]/60', iconClassName: 'text-[#1F93FF]' },
  'Google Services': { icon: SiGoogle, className: 'bg-[#f2f3f5]/20 text-[#1F93FF] border-[#1F93FF]/30 hover:bg-[#1F93FF]/30 hover:border-[#1F93FF]/60', iconClassName: 'text-[#1F93FF]' },
  
  'default': { icon: Zap, className: 'bg-muted/40 text-foreground/80 border border-transparent hover:border-accent/50 backdrop-blur-sm', iconClassName: 'text-inherit' }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div>
      {/* Removido o título e subtítulo da seção */}
      <div className="mb-10 md:mb-12 px-6 md:px-10 lg:px-16">
        {/* Project Title */}
        <h2 className="text-xl sm:text-2xl md:text-xl font-bold text-foreground mb-4 text-center md:text-left">
          {project.title}
        </h2>
        {/* Grid layout for 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Column (Description, Features, Tech Stack) - lg:col-span-3 (60%) */}
          <div className="lg:col-span-3 flex flex-col space-y-3 z-[5]">
             {/* Description Card */}
             <Card className="border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 backdrop-blur-sm bg-card/80">
               <CardHeader className="pb-2 pt-3 px-4">
                 <CardTitle className="flex items-center text-base sm:text-lg font-semibold text-primary mb-2">
                   <FileText className="w-4 h-4 mr-1.5 flex-shrink-0" />
                   Descrição
                 </CardTitle>
               </CardHeader>
               <CardContent className="pb-3 pt-0 px-4">
                 <p className="text-xs sm:text-sm text-foreground/80">{project.description}</p>
               </CardContent>
             </Card>

             {/* Features Card */}
             <Card className="border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 backdrop-blur-sm bg-card/80">
               <CardHeader className="pb-2 pt-3 px-4">
                  <CardTitle className="flex items-center text-base sm:text-lg font-semibold text-primary mb-2">
                   <ListChecks className="w-4 h-4 mr-1.5 flex-shrink-0" />
                   Funcionalidades Principais
                 </CardTitle>
               </CardHeader>
               <CardContent className="pb-3 pt-0 px-4">
                  <ul className="list-disc list-inside space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-xs sm:text-sm text-foreground/80">
                        {feature}
                      </li>
                    ))}
                  </ul>
               </CardContent>
             </Card>

             {/* Tech Stack Card */}
             <Card className="border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 backdrop-blur-sm bg-card/80">
               <CardHeader className="pb-2 pt-3 px-4">
                 <CardTitle className="flex items-center text-base sm:text-lg font-semibold text-primary">
                    <Package className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    Tech Stack
                  </CardTitle>
                </CardHeader>
               <CardContent className="pb-3 pt-0 px-4">
                  <div className="flex flex-wrap gap-1.5">
                   {project.techStack.map((tech) => {
                     const displayInfo = techDisplayConfig[tech.name] || techDisplayConfig.default;
                     const iconColorClass = (tech.name === 'JavaScript' && displayInfo.iconClassName === 'text-[#F7DF1E]') ? 'text-black' : displayInfo.iconClassName;

                     return (
                       <Badge
                         key={tech.name}
                         className={cn(
                           "group/badge flex items-center gap-1 px-2 py-0.5 transition-all duration-200 cursor-default backdrop-blur-sm border",
                           displayInfo.className 
                         )}
                       >
                         <Icon icon={displayInfo.icon} size={13} className={iconColorClass} />
                         <span className={cn("text-[10px] sm:text-[11px] font-medium", tech.name === 'JavaScript' ? 'text-black' : 'text-inherit')}>{tech.name}</span>
                       </Badge>
                     );
                   })}
                 </div>
                </CardContent>
             </Card>
          </div>

          {/* Right Column (Image, Details/Impact) - lg:col-span-2 (40%) */}
         <div className="lg:col-span-2 flex flex-col space-y-3 z-[4]">
             {/* Image Card */}
             <Card className="border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 group/card backdrop-blur-sm mb-4 bg-card/80">
                <CardContent className="p-0">
                  {/* Link wrapping the image */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative w-full aspect-[16/10] rounded-lg border-b border-border/30
                    before:content-[''] before:absolute before:w-full before:h-full before:left-[40%] before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2
                    before:bg-accent/50 before:rounded-lg before:blur-[50px] before:opacity-95
                    group-hover/card:before:opacity-100 group-hover/card:before:scale-115 before:transition-all before:duration-500 before:z-[0]">
                      <Image
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover/card:scale-105 relative z-[1] rounded-lg overflow-hidden"
                        data-ai-hint={project.imageAlt}
                        priority={project.id === '1'}
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover/card:opacity-50 transition-opacity duration-300 z-[2]"></div>
                      {/* Badge/Button in bottom-left */}
                      {project.imageBadgeText && (
                        <span
                          className="absolute left-3 bottom-3 z-[3] px-3 py-1 rounded-md bg-gray-800/90 text-[10px] sm:text-xs font-semibold text-white shadow pointer-events-none select-none"
                        >
                          {project.imageBadgeText}
                        </span>
                      )}
                    </div>
                  </a>
                </CardContent>
              </Card>

             {/* Project Details/Impact Card */}
             <Card className="border-border/30 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 backdrop-blur-sm bg-card/80">
               <CardHeader className="pb-2 pt-3 px-4">
                 <CardTitle className="flex items-center text-base sm:text-lg font-semibold text-primary">
                   <Briefcase className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    Benefícios Principais
                  </CardTitle>
                </CardHeader>
               <CardContent className="pb-3 pt-0 px-4">
                <ul className="list-disc list-inside space-y-2">
                    {project.impacts.map((impact: string, index: number) => (
                      <li key={index} className="text-xs sm:text-sm text-foreground/80">
                      {impact}
                      </li>
                    ))}
                  </ul>
               </CardContent>
             </Card>
          </div>
       </div>
     </div>
    </div>
   );
};

export default ProjectCard;
