import React from 'react';
import DifferentialCard from './differential-card';
import { Brain, Database, Eye, Puzzle } from 'lucide-react'; // Placeholder icons

const differentialsData = [
	{
		id: 1,
		icon: <Brain />,
		title: 'Personalização Inteligente com Análise de Histórico',
		description:
			'Identificação do perfil do cliente pela análise do histórico de conversas para fornecer respostas precisas, recomendações relevantes e uma experiência verdadeiramente personalizada.',
	},
	{
		id: 2,
		icon: <Database />,
		title: 'Persistência e Confiabilidade de Dados',
		description:
			'Infraestrutura projetada para a persistência segura de dados, garantindo que informações cruciais e históricos de interações estejam acessíveis e protegidos.',
	},
	{
		id: 3,
		icon: <Eye />,
		title: 'Monitoramento Ativo',
		description:
			'Observalidade para controle de qualidade do funcionamento da solução e da infraestrutura,  assegurando  controle e otimização contínua.',
	},
	{
		id: 4,
		icon: <Puzzle />,
		title: 'Alta Capacidade de Integração com Ferramentas e APIs',
		description:
			'Soluções que se integram com uma vasta gama de ferramentas e APIs, adaptando-se a um ecossistema tecnológico existente.',
	},
];

const DifferentialsSection: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<section className={`w-full pt-8 pb-12 ${className}`}>
			<div className="container mx-auto px-8 md:px-32">
				<h2 className="text-3xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-900 mt-12 mb-4 text-center">
					ABORDAGENS FUNDAMENTAIS
				</h2>
				<p className="text-lg md:text-xl text-muted-foreground text-center mb-16 leading-relaxed">
        Personalização, integração abrangente, robustez e evolução contínua.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
					{/* Reduced gap between cards */}
					{differentialsData.map((diff) => (
						<DifferentialCard
							key={diff.id}
							icon={diff.icon}
							title={diff.title}
							description={diff.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default DifferentialsSection;
