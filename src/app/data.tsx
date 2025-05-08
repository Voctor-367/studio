import type { Project } from '@/types';
import { Cloud, Database, GitMerge, BarChart, Brain } from 'lucide-react';
import { IoLogoPython } from "react-icons/io5";

import { SiPubmed, SiOpenai, SiStreamlit, SiRedis, SiGoogle, SiSupabase, SiWhatsapp, SiN8N, SiDocker, SiRabbitmq, SiChatwoot  } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa6";

import shopSphereImage from '@/assets/BioLitExplorer.png';
import taskMasterImage from '@/assets/BioLitExplorer.png';
import insightAIImage from '@/assets/BioLitExplorer.png';
import connectHubImage from '@/assets/BioLitExplorer.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'BioLit Explorer 🧬🔬',
    imageUrl: shopSphereImage.src, // Use imported image
    imageAlt: 'E-commerce Platform online store',
    link: 'https://github.com/Voctor-367/BioLitExplorer.git',
    description: 'Um co-piloto de pesquisa movido por IA que impulsiona a descoberta biomédica. O BioLit Explorer integra de forma inteligente a análise interativa de dados experimentais com a exploração profunda e contextualizada da literatura científica, permitindo que pesquisadores formulem hipóteses robustas e acelerem seus avanços numa fração do tempo.',
    features: [
      'Interface Conversacional Integrada: Interaja com agentes de IA especializados em análise de dados e exploração da literatura científica em um ambiente único e intuitivo.',
      'Análise de Dados com IA Generativa: Faça perguntas em linguagem natural sobre seus datasets (CSV); a IA (GPT 4.1) executa código Python  para fornecer respostas, tabelas e visualizações gráficas.',
      'Interpretação Multimodal de Gráficos: Capacidade de analisar imagens de gráficos (ex: plots de expressão, curvas de sobrevida) e, combinando essa informação visual com conhecimento de domínio, fornecer interpretações e insights relevantes.',
      'Busca Contextualizada na Literatura (PubMed): Obtenha artigos científicos relevantes do PubMed, com buscas direcionadas pelos seus dados e objetivos de pesquisa.',
      'Especialidade Fluida" para Análises: Coleta contexto inicial do usuário (objetivo, tipo de dados) para adaptar dinamicamente os prompts e as estratégias de análise, tornando a ferramenta poderosa para diversos estudos biomédicos.',
    ],
    impacts: ['O BioLit Explorer redefine o fluxo de trabalho do pesquisador biomédico, acelerando o ciclo da coleta de dados à formulação de hipóteses,  democratizando análises avançadas – incluindo a interpretação de gráficos – através da linguagem natural com suporte de IA, capacitando assim uma gama mais ampla de cientistas. Ao conectar rapidamente achados experimentais à literatura científica mais pertinente do PubMed, a plataforma eleva a qualidade e profundidade dos insights, permitindo a identificação de padrões sutis, a validação de resultados e a descoberta de novas linhas de investigação que poderiam ser perdidas manualmente. Adicionalmente, ao filtrar o ruído de um volume imenso de publicações científicas, o BioLit Explorer reduz a sobrecarga cognitiva e, ao simplificar barreiras técnicas e temporais, fomenta um ambiente de inovação, onde mais hipóteses podem ser exploradas e descobertas disruptivas tornam-se mais prováveis.',],
    techStack: [
      { name: 'Python', icon: IoLogoPython },
      { name: 'LangGraph', icon: GitMerge },
      { name: 'Streamlit', icon: SiStreamlit  },
      { name: 'PubMed API', icon: SiPubmed },
      { name: 'GPT 4.1', icon: SiOpenai },
      { name: 'Azure', icon: VscAzure },

    ],
  },
  {
    id: '2',
    title: 'Agente de IA para Consultoria de Consórcios',
    imageUrl: taskMasterImage.src, // Use imported image
    imageAlt: 'Project Management Tool dashboard',
    link: 'https://github.com/Voctor-367/BioLitExplorer.git',
    description: 'Um Agente de IA conversacional projetado para simplificar e personalizar a jornada de escolha de consórcios. Focada em oferecer orientação precisa 24/7, qualificar leads e otimizar a eficiência das equipes de vendas, utilizando lógica de recomendação baseada em regras de negócio, documentos internos e perfil de cada lead.',
    features: [
      'Gestão de Diálogo Inteligente: Coleta informações do perfil do cliente de forma conversacional e natural (via WhatsApp/outros).',
      'Resposta a Dúvidas com Base em Documentos (RAG): Responde perguntas específicas sobre regras, taxas e processos utilizando a documentação oficial dos planos como fonte (via RAG por ranqueamento semântico e filtragem por metadados)',
      'Motor de Recomendação Personalizado: Analisa o perfil do cliente e compara com os planos disponíveis (filtrados por regras de negócio) para sugerir a opção mais adequada.',
      'Arquitetura Multiagente Modular: Sistema composto por agentes especializados (diálogo, extração, análise, resposta), facilitando manutenção e evolução.',
      'Monitoramento para Intervenção Humana: Permite uma transição suave para atendimento humano em casos complexos ou a pedido, utilizando integração com CRM para fornecer contexto completo ao agente humano. ',
      'Integrações com Estratégias de Prospecção: Permite incluir módulos como follow-ups inteligentes em conversas pausadas e ações focadas em aumentar o valor do ciclo de vida do cliente (LTV).',
    ],
    impacts: [
      'Para Clientes: Simplifica um processo de decisão tipicamente complexo e demorado. O cliente recebe orientação personalizada instantânea (24/7), respostas precisas às suas dúvidas e recomendações alinhadas ao seu perfil, resultando em maior confiança e satisfação na escolha do consórcio ideal',
      'Para o Negócio (Administradoras): Libera consultores humanos para focarem em vendas complexas e relacionamento, enquanto a IA qualifica leads e responde a perguntas frequentes. Isso aumenta a eficiência operacional, acelera o ciclo de vendas e eleva as taxas de conversão.',
      'Potencial no Setor de Consórcios: A capacidade da IA de analisar perfis, comparar planos complexos e fornecer informações precisas baseadas em documentos oficiais resolve gargalos específicos da indústria, oferecendo um potencial expressivo para otimizar a aquisição de clientes e a eficiência das vendas neste mercado.',
    ],
    techStack: [
      { name: 'N8N', icon: SiN8N },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Docker', icon: SiDocker },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'AI Agents (GPT, Gemini e DeepSeek)', icon: FaRobot },
      { name: 'Redis', icon: SiRedis },
      { name: 'Whatsapp API', icon: SiWhatsapp },
      { name: 'Chatwoot', icon: SiChatwoot },
    ],
    
  },
  {
    id: '3',
    title: 'ElizIA - Automação Inteligente para Atendimento Farmacêutico',
    imageUrl: insightAIImage.src, // Use imported image
    imageAlt: 'AI Analytics Dashboard charts',
    link: 'https://github.com/Voctor-367/BioLitExplorer.git',
    description: 'ElizIA é uma solução de automação desenvolvida para agilizar o ciclo de vendas B2B, aumentar a capacidade de processamento de pedidos e melhorar a acurácia das informações para distribuidoras e fabricantes de produtos farmacêuticos, com foco em otimizar o processo de cotação e fechamento de pedidos junto a seus clientes diretos: prescritores, farmácias e manipuladores. A ElizIA é projetada com a capacidade crucial de integração com sistemas ERP (Enterprise Resource Planning). Essa integração permite consultas de estoque em tempo real e a automatização de etapas subsequentes do processamento de pedidos, desde a verificação de disponibilidade até o encaminhamento para faturamento e logística.',
    features: [
      'Integração com plataformas de mensagens (ChatWoot) e API do WhatsApp para comunicação.',
      'Recomendação Personalizada e Oportuna (UpSell Estratégico): O agente de IA avalia o contexto da conversa, os produtos de interesse do cliente e as regras de negócio pré-definidas, e com base nessa análise, a IA identifica e oferece, no momento certo da interação, produtos complementares relevantes, apresentações com melhor custo-benefício (ex: embalagens maiores), ou alternativas de maior valor agregado.',
      'Follow-Up Automatizado: Identifica oportunidades e realiza acompanhamento proativo para fechar pedidos no mesmo dia, garantindo que nenhuma solicitação seja perdida.',
      'Análise de Comportamento: Utiliza IA (DeepSeek) para analisar o comportamento do atendente e acionar suporte humano quando necessário.',
    ],
    impacts: [
      'Reduz o tempo médio de atendimento e o custo por interação, permitindo escalar a operação sem um aumento proporcional nos custos.',
      'Automatiza o atendimento de um alto volume de consultas e pedidos rotineiros, liberando a equipe humana para focar em negociações complexas, relacionamento estratégico e resolução de problemas críticos.',
      'Maximização do Ticket Médio: Através do upsell inteligente e contextual, a ElizIA identifica e aproveita oportunidades para oferecer produtos adicionais ou de maior valor, aumentando diretamente a receita por pedido.',
      'Consistência no Atendimento: Garante um padrão de qualidade e informação em todas as interações automatizadas.',
    ],
    techStack: [
      { name: 'N8N', icon: SiN8N },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Docker', icon: SiDocker },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'AI Agents (GPT, Gemini e DeepSeek)', icon: FaRobot },
      { name: 'Redis', icon: SiRedis },
      { name: 'Whatsapp API', icon: SiWhatsapp },
      { name: 'Chatwoot', icon: SiChatwoot },
    ], 
  },

   {
    id: '4',
    title: 'AI Agent - Tutor Religioso',
    imageUrl: connectHubImage.src, // Use imported image
    imageAlt: 'Social Networking App user profiles',
    link: 'https://github.com/Voctor-367/BioLitExplorer.git',
    description: 'Um Agente de IA construído como um assistente dedicado aos mentores do serviço de ensino religioso de uma igreja. O agente tem como objetivo otimizar o gerenciamento do ensino, automatizar tarefas administrativas, facilitar o acesso rápido e interativo a conteúdos bíblicos e fornecer insights sobre o progresso dos alunos.',
    features: [
      'Lembretes Automatizados: Geração e envio programado de lembretes semanais aos alunos sobre leituras e atividades de estudo, ajudando a manter o engajamento e a disciplina no programa de ensino.',
      'Recuperação de Informações: Utiliza Naive RAG para extrair respostas e informações relevantes diretamente de arquivos PDF (como materiais de estudo, comentários bíblicos) carregados no sistema. Isso permite que mentores e alunos obtenham rapidamente informações específicas.',
      'Suporte Interativo a Dúvidas: O agente responde a perguntas sobre passagens bíblicas, doutrinas e outros tópicos específicos do conteúdo estudado, agindo como uma primeira linha de suporte informativo.',
      'Geração de Relatórios de Desempenho: Consolida informações sobre a participação dos alunos, conclusão de tarefas ou outros indicadores de progresso e gera relatórios para o mentor.',
      'Conexão com Planilhas e Bancos de Dados: Capacidade de se integrar com planilhas (ex: Google Sheets) ou bancos de dados para buscar informações dos estudos, alunos e para registrar dados de progresso/interações, centralizando informações e facilitando a gestão do mentor.',
    ],
    impacts: [
      'Reduz significativamente o tempo gasto em tarefas administrativas e repetitivas (envio de lembretes, busca manual por informações em materiais extensos, compilação de dados de progresso).',
      'Recurso para consultas, especialmente útil para mentores que podem ter muitas demandas ou para alunos que precisam de esclarecimentos imediatos.',
      'Os relatórios de desempenho permitem que os mentores identifiquem rapidamente alunos que estão progredindo bem ou aqueles que podem estar enfrentando dificuldades, possibilitando intervenções mais direcionadas e eficazes.',
      'Funciona como uma ferramenta de apoio que capacita os mentores, especialmente aqueles com menos tempo disponível ou que gerenciam múltiplos grupos, a exercerem seu papel com maior eficácia e menor sobrecarga.',
    ],
    techStack: [
      { name: 'N8N', icon: SiN8N },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Docker', icon: SiDocker },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'AI Agents (GPT, Gemini e DeepSeek)', icon: FaRobot },
      { name: 'Redis', icon: SiRedis },
      { name: 'Whatsapp API', icon: SiWhatsapp },
      { name: 'Chatwoot', icon: SiChatwoot },
    ],
  },
];
