import React from "react";
import { cn } from "@/lib/utils";

type Stage = {
  id: string | number;
  icon: React.ElementType;
  title: string;
  description: string;
};

interface MethodologyTimelineProps {
  stages: Stage[];
  className?: string;
}

const TimelineStage: React.FC<{
  stage: Stage;
  isLast: boolean;
}> = ({ stage, isLast }) => {
  return (
    <div className="relative flex items-start">
      {/* Linha vertical */}
      <div className="flex flex-col items-center">
        <div className="relative w-8 h-8 flex items-center justify-center rounded-full border-2 border-accent text-accent bg-background z-10">
          <stage.icon className="w-5 h-5" />
        </div>
        {!isLast && (
          <div
            className="w-1 flex-1 bg-muted"
            style={{ marginTop: '-4px', marginBottom: '-4px' }}
          />
        )}
      </div>
      {/* Conteúdo */}
      <div className="ml-2 sm:ml-3 flex-1">
        <div className="bg-card rounded-lg p-2 sm:p-3 shadow-md w-[90vw] max-w-xs sm:max-w-[350px] border border-border/30 hover:shadow-lg hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
          <h3 className="text-xs sm:text-sm md:text-base font-semibold">{stage.title}</h3>
          <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground">{stage.description}</p>
        </div>
      </div>
    </div>
  );
};

export const MethodologyTimeline: React.FC<MethodologyTimelineProps> = ({
  stages,
  className,
}) => {
  return (
    <section className={cn("w-full flex flex-col items-center mb-10 sm:mb-20", className)}>
      {/* Título da seção */}
      <h2 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-900 mt-8 sm:mt-20 mb-2 sm:mb-4 text-center">
        METODOLOGIA
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-16">
        Da concepção à entrega: o guia para desenvolvimento de projetos.
      </p>
      <div className="relative flex flex-col items-start space-y-6 sm:space-y-8">
        {/* Linha conectando todas as etapas */}
        <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-1 bg-muted" aria-hidden="true"></div>
        {stages.map((stage, idx) => (
          <TimelineStage
            key={stage.id}
            stage={stage}
            isLast={idx === stages.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default MethodologyTimeline;
