'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot } from 'lucide-react';
import DifferentialsSection from './differentials-section';
import MethodologyTimeline from './methodology-timeline';
import dottedTexture from '@/assets/dotted-texture.jpg'; // Import the texture
import headerImage from '@/assets/header-image.png'; // Import your image from assets

const methodologyStages = [
	{
		id: 1,
		icon: Bot,
		title: 'Discovery & Planning',
		description: 'Análise dos processos e pontos de automação, definindo requisitos específicos e métricas de sucesso para a solução.',
	},
	{
		id: 2,
		icon: ArrowRight,
		title: 'Design & Prototyping',
		description: 'Arquitetura do fluxo conversacional com definição de intents, entidades e contextos. Desenvolvimento de prompts eficientes para LLMs e criação de protótipos funcionais para validação rápida.',
	},
	{
		id: 3,
		icon: Bot,
		title: 'Development & Integration',
		description: 'Implementação das integrações com APIs, sistemas (ex: CRM) e canais de comunicação. Desenvolvimento de mecanismos de fallback para lidar com exceções ou respostas inesperadas de APIs/LLMs e garantir a resiliência.',
	},
	{
		id: 4,
		icon: ArrowRight,
		title: 'Testing & QA',
		description: 'Validação extensiva do agente com cenários reais de uso, testes de robustez para identificar edge cases conversacionais e testes de carga da arquitetura para garantir disponibilidade e performance do serviço',
	},
	{
		id: 5,
		icon: Bot,
		title: 'Deployment & Observability',
		description: 'Implantação da solução em ambiente de produção com monitoramento contínuo e análise de interações para identificar oportunidades de melhoria',
	},
];

const HeaderSection: React.FC = () => {
	const handleScrollToProjects = () => {
		document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<header
				className="min-h-screen flex flex-col bg-cover bg-center text-foreground"
				style={{ backgroundImage: `url(${dottedTexture.src})` }} // Use the imported texture
			>
				{/* Navigation Bar */}
				<nav className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-border/10">
					<div className="flex items-center gap-2">
						<Bot className="w-7 h-7 text-accent" /> {/* Using Bot icon as placeholder */}
						<span className="text-xl font-bold">FolioFlow</span>
					</div>
					<div className="hidden md:flex items-center space-x-6">
						<a href="#home" className="hover:text-accent transition-colors">
							Home
						</a>

						<a
							href="#projects-section"
							onClick={(e) => {
								e.preventDefault();
								handleScrollToProjects();
							}}
							className="hover:text-accent transition-colors"
						>
							Projects
						</a>
					
						<a
							href="#footer"
							onClick={(e) => {
								e.preventDefault();
								document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
							}}
							className="hover:text-accent transition-colors"
						>
							Contact
						</a>
					</div>
					{/* Add Mobile Menu Button Here if needed */}
				</nav>

				{/* Main Content Area */}
				<div className="flex-grow container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-20 py-16 md:py-24">
					{/* Image Placeholder */}
					<div className="w-full md:w-1/2 flex justify-center md:justify-end">
						<div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden bg-card shadow-lg">
							<Image
								src={headerImage} // Use the imported image
								alt="Abstract code background"
								layout="fill"
								objectFit="cover"
								data-ai-hint="abstract code"
								priority
							/>
							{/* Optional overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
						</div>
					</div>

					{/* Text Content */}
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800">
							Intelligent Automation to Boost Your Business
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
							Developing customized solutions with modern technologies and AI to optimize your processes and drive
							efficiency.
						</p>
					</div>
				</div>

				{/* Centralized Button */}
				<div className="w-full flex justify-center mt-0 mb-16">
					<Button
						size="lg"
						className="relative text-blue-500 border border-blue-500 px-8 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 hover:text-blue-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] group bg-transparent"
						onClick={handleScrollToProjects}
						aria-label="See my projects"
					>
						<span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></span> {/* Animated border */}
						<span className="relative z-10 group-hover:scale-105 transition-transform duration-300">See my Projects</span>
					</Button>
				</div>
			</header>
			<div className="w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-100"></div> {/* Consistent divider with soft glow */}

			<DifferentialsSection className="mb-24" /> {/* Consistent bottom margin */}
			<div className="w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-100"></div>
			<MethodologyTimeline stages={methodologyStages} className="mb-24" /> {/* Consistent bottom margin */}
			<div className="w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-100"></div>
		</>
	);
};

export default HeaderSection;
