'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Menu } from 'lucide-react';
import { RiListCheck3, RiCodeBoxLine, RiTestTubeLine, RiEyeLine   } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import DifferentialsSection from './differentials-section';
import MethodologyTimeline from './methodology-timeline';
import dottedTexture from '@/assets/dotted-texture.jpg'; // Import the texture
import headerImage from '@/assets/header-image.png'; // Import your image from assets
import AnimatedWord from './animated-word'

const methodologyStages = [
	{
		id: 1,
		icon: RiListCheck3,
		title: 'Discovery & Planning',
		description: 'Análise dos processos e pontos de automação, definindo requisitos específicos e métricas de sucesso para a solução.',
	},
	{
		id: 2,
		icon: MdOutlineDesignServices,
		title: 'Design & Prototyping',
		description: 'Arquitetura do fluxo conversacional com definição de intents, entidades e contextos. Desenvolvimento de prompts eficientes para LLMs e criação de protótipos funcionais para validação rápida.',
	},
	{
		id: 3,
		icon: RiCodeBoxLine,
		title: 'Development & Integration',
		description: 'Implementação das integrações com APIs, sistemas (ex: CRM) e canais de comunicação. Desenvolvimento de mecanismos de fallback para lidar com exceções ou respostas inesperadas de APIs/LLMs e garantir a resiliência.',
	},
	{
		id: 4,
		icon: RiTestTubeLine,
		title: 'Testing & QA',
		description: 'Validação extensiva do agente com cenários reais de uso, testes de robustez para identificar edge cases conversacionais e testes de carga da arquitetura para garantir disponibilidade e performance do serviço',
	},
	{
		id: 5,
		icon: RiEyeLine,
		title: 'Deployment & Observability',
		description: 'Implantação da solução em ambiente de produção com monitoramento contínuo e análise de interações para identificar oportunidades de melhoria',
	},
];

const HeaderSection: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	const handleScrollToProjects = () => {
		document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
		setMobileMenuOpen(false);
	};
	const handleScrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setMobileMenuOpen(false);
	};

	return (
		<>
			<header
				className="min-h-screen flex flex-col bg-cover bg-center text-foreground"
				style={{ backgroundImage: `url(${dottedTexture.src})` }}
			>
				{/* Navigation Bar */}
				<nav className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex justify-between items-center border-b border-border/10 bg-background/60 backdrop-blur-[6px] fixed top-0 left-0 right-0 z-50">
					<div className="flex items-center gap-2">
						<Bot className="w-7 h-7 text-accent" />
					</div>
					{/* Desktop Nav */}
					<div className="hidden md:flex items-center space-x-6">
						<a
							href="#home"
							onClick={handleScrollToHome}
							className="hover:text-accent transition-colors"
						>
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
							Projetos
						</a>
						<a
							href="#footer"
							onClick={(e) => {
								e.preventDefault();
								document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
							}}
							className="hover:text-accent transition-colors"
						>
							Contato
						</a>
					</div>
					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background/40"
						onClick={() => setMobileMenuOpen((v) => !v)}
						aria-label="Abrir menu"
					>
						<Menu className="w-7 h-7" />
					</button>
					{/* Mobile Nav Drawer */}
					{mobileMenuOpen && (
						<>
							{/* Overlay */}
							<div className="fixed inset-0 z-[60] bg-black/60 md:hidden" onClick={() => setMobileMenuOpen(false)} />
							{/* Drawer */}
							<div
								className="fixed top-0 right-0 z-[70] w-3/4 max-w-xs h-screen shadow-lg flex flex-col pt-8 px-6 gap-6"
								style={{
									background: "rgba(16,22,40,0.97)",
									backdropFilter: "blur(8px)",
									WebkitBackdropFilter: "blur(8px)",
								}}
							>
								<button
									className="self-end mb-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
									onClick={() => setMobileMenuOpen(false)}
									aria-label="Fechar menu"
								>
									<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M18 6L6 18M6 6l12 12" />
									</svg>
								</button>
								<a
									href="#home"
									onClick={handleScrollToHome}
									className="py-2 text-lg font-semibold hover:text-accent transition-colors"
								>
									Home
								</a>
								<a
									href="#projects-section"
									onClick={(e) => {
										e.preventDefault();
										handleScrollToProjects();
									}}
									className="py-2 text-lg font-semibold hover:text-accent transition-colors"
								>
									Projetos
								</a>
								<a
									href="#footer"
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
										setMobileMenuOpen(false);
									}}
									className="py-2 text-lg font-semibold hover:text-accent transition-colors"
								>
									Contato
								</a>
							</div>
						</>
					)}
				</nav>

				{/* Main Content Area */}
				<div
					className="flex-grow container mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 py-10 md:py-24"
					style={{ minHeight: "calc(100vh - 80px)", paddingTop: "100px" }}
				>
					{/* Image Placeholder */}
					<div className="w-full md:w-1/2 flex justify-center md:justify-end mb-2 sm:mb-4 md:mb-0">
						<div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl aspect-[16/10] rounded-lg overflow-hidden bg-card shadow-lg">
							<Image
								src={headerImage}
								alt="Abstract code background"
								fill
								style={{ objectFit: "cover" }}
								data-ai-hint="abstract code"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
						</div>
					</div>

					{/* Text Content */}
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-12 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800">
							Automação Inteligente para Impulsionar Seu{" "}
							<AnimatedWord
								words={[
									"Negócio",
									"Desempenho",
									"Trabalho",
									"Potencial",
									"Objetivo",
								]}
								interval={3000}
							/>
						</h1>
						<p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6 max-w-xs xs:max-w-sm sm:max-w-xl mx-auto md:mx-0 leading-relaxed">
							Desenvolvendo soluções personalizadas com IA para otimizar seus processos e aumentar a eficiência.
						</p>
					</div>
				</div>

				{/* Centralized Button */}
				<div className="w-full flex justify-center mt-0 mb-10 md:mb-16">
					<Button
						size="lg"
						className="relative text-blue-500 border border-blue-500 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 hover:text-blue-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] group bg-transparent"
						onClick={handleScrollToProjects}
						aria-label="See my projects"
					>
						<span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></span>
						<span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Portfólio</span>
					</Button>
				</div>
			</header>
			<div className="w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-100"></div>

			<DifferentialsSection className="mb-16 sm:mb-24" />
			<div className="w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-100"></div>
			<MethodologyTimeline stages={methodologyStages} className="mb-16 sm:mb-24" />
			<div className="w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] opacity-100"></div>
		</>
	);
};

export default HeaderSection;
