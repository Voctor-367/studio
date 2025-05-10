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
  index: number;
  total: number;
}> = ({ stage, isLast, index, total }) => {
  // Não precisa mais de lógica de linha, apenas renderiza o card normalmente
  return (
    <div className="relative flex items-start">
      {/* Linha vertical (mobile) */}
      <div className="flex flex-col items-center">
        <div className="relative w-8 h-8 flex items-center justify-center rounded-full border-2 border-accent text-accent bg-background z-10">
          <stage.icon className="w-5 h-5" />
        </div>
        {!isLast && (
          <div
            className="w-1 flex-1 bg-muted lg:hidden"
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
  // Divide os tópicos em duas linhas: 3 em cima, 2 embaixo
  const firstRow = stages.slice(0, 3);
  const secondRow = stages.slice(3);

  return (
    <section className={cn("w-full flex flex-col items-center mb-10 sm:mb-20", className)}>
      {/* Título da seção */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-900 mt-16 sm:mt-20 mb-2 sm:mb-4 text-center">
        METODOLOGIA
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-20 sm:mb-16">
        Da concepção à entrega: o guia para desenvolvimento de projetos.
      </p>
      {/* Mobile: vertical timeline. Desktop: grid 3+2 */}
      <div className="relative w-full">
        {/* Linha vertical para mobile */}
        <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-1 bg-muted lg:hidden" aria-hidden="true"></div>
        {/* Desktop: grid */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:w-full">
          {/* Primeira linha (3 cards) */}
          <div className="relative flex flex-row gap-8 w-full justify-center">
            {/* Linha horizontal conectando os cards */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-muted z-0"
              style={{
                marginLeft: '44px',
                marginRight: '44px',
                left: 'calc(44px + 170px)',
                right: 'calc(44px + 170px)'
              }}
            />
            {firstRow.map((stage, idx) => (
              <div key={stage.id} className="relative flex flex-col items-start z-10">
                <div className="flex flex-row items-start mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-accent text-accent bg-background mr-3"
                    style={{ alignSelf: 'flex-start', marginTop: 0 }}
                  >
                    <stage.icon className="w-5 h-5" />
                  </div>
                  <div className="bg-card rounded-lg p-3 shadow-md w-[320px] max-w-xs border border-border/30 hover:shadow-lg hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <h3 className="text-sm md:text-base font-semibold">{stage.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Segunda linha (2 cards) */}
          <div className="relative flex flex-row gap-8 w-full justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-6">
            {/* Linha horizontal conectando os cards */}
            <div
              className="absolute top-20 h-1 bg-muted z-0"
              style={{
                left: 'calc(50% - 240px)',
                width: '320px',
                right: 'auto'
              }}
            />
            {secondRow.map((stage, idx) => (
              <div key={stage.id} className="relative flex flex-col items-start z-10">
                <div className="flex flex-row items-start mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-accent text-accent bg-background mr-3"
                    style={{ alignSelf: 'flex-start', marginTop: 0 }}
                  >
                    <stage.icon className="w-5 h-5" />
                  </div>
                  <div className="bg-card rounded-lg p-3 shadow-md w-[320px] max-w-xs border border-border/30 hover:shadow-lg hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <h3 className="text-sm md:text-base font-semibold">{stage.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile: vertical timeline */}
        <div className="flex flex-col space-y-6 sm:space-y-8 lg:hidden">
          {stages.map((stage, idx) => (
            <TimelineStage
              key={stage.id}
              stage={stage}
              isLast={idx === stages.length - 1}
              index={idx}
              total={stages.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyTimeline;
