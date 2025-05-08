'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface DifferentialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const getRandomPosition = () => {
  // Retorna valores aleatórios para left e top em porcentagem, mantendo o glow dentro do card
  const left = 20 + Math.random() * 60; // 20% a 80%
  const top = 20 + Math.random() * 60;  // 20% a 80%
  return { left: `${left}%`, top: `${top}%` };
};

const DifferentialCard: React.FC<DifferentialCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  const [glowPos, setGlowPos] = React.useState({ left: '50%', top: '50%' });

  React.useEffect(() => {
    setGlowPos(getRandomPosition());
  }, []);

  return (
    <div
      className={cn(
        // Fundo azul bem escuro com borda superior azul clara
        "relative flex flex-row items-center rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(20,40,120,0.25)] bg-[#0a1224] px-4 py-6 min-h-[190px] max-w-[480px] mx-auto border-t-4 border-t-[#2c83c9]", // Reduced lateral margin
        "transition-all duration-300 ease-in-out hover:shadow-[0_12px_40px_rgba(40,100,220,0.35)] hover:scale-[1.02]",
        className
      )}
    >
      {/* Glow effect - azul vibrante, ainda mais intenso e maior */}
      <span
        className="
          absolute w-[280px] h-[280px] rounded-full
          bg-[radial-gradient(circle,rgba(0,200,255,0.85)_0%,rgba(0,120,255,0.55)_60%,transparent_100%)]
          blur-[100px] opacity-100 pointer-events-none
        "
        style={{
          left: glowPos.left,
          top: glowPos.top,
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      {/* Icon Column */}
      <div className="relative flex items-center justify-center min-w-[90px] w-[64px] h-[64px] mr-6 z-10"> {/* Reduced width */}
        <div className="relative z-10 flex items-center justify-center w-[64px] h-[64px] rounded-xl">
          {React.cloneElement(icon as React.ReactElement, {
            className: "w-10 h-10 md:w-12 md:h-12",
          })}
        </div>
      </div>
      {/* Text Column */}
      <div className="flex flex-col justify-center text-left flex-1 min-w-0 z-10 ">
        <h3 className="text-md font-bold text-white mb-1 leading-tight mb-4">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default DifferentialCard;

