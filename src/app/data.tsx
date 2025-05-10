import type { Project } from '@/types';
import { Cloud, Database, GitMerge, BarChart, Brain } from 'lucide-react';
import { IoLogoPython } from "react-icons/io5";

import { SiPubmed, SiOpenai, SiStreamlit, SiRedis, SiGoogle, SiSupabase, SiWhatsapp, SiN8N, SiDocker, SiRabbitmq, SiChatwoot } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa6";

import BioLitExplorerImage from '@/assets/BioLitExplorer.png';
import TutorReligiosoImage from '@/assets/TutorReligioso.png';
import AgenteConsorcioImage from '@/assets/AgenteConsorcio.png';
import ElisImage from '@/assets/Elis.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'BioLit Explorer 🧬🔬',
    imageUrl: BioLitExplorerImage.src, // Use imported image
    imageAlt: 'E-commerce Platform online store',
    link: 'https://github.com/Voctor-367/BioLitExplorer.git',
    description: 'Um co-piloto de pesquisa movido por IA que impulsiona a descoberta biomédica. O BioLit Explorer integra de forma inteligente a análise interativa de dados experimentais com a exploração da literatura científica, permitindo que pesquisadores formulem hipóteses robustas e acelerem seus avanços numa fração do tempo.',
    features: [
      "Interação com IA's especializados em análise de dados e exploração da literatura científica em um ambiente único e intuitivo.",
      'Através de perguntas em linguagem natural sobre datasets (CSV) de estudos carregados, a IA (GPT 4.1) executa código Python  para fornecer respostas, tabelas e visualizações gráficas.',
      'Capacidade de analisar imagens de gráficos e, combinando essa informação visual com conhecimento de domínio, fornecer interpretações e insights relevantes.',
      'Obtenção de artigos científicos relevantes do PubMed, com buscas direcionadas pelos seus dados e objetivos de pesquisa.',
      'Coleta contexto inicial do usuário (objetivo, tipo de dados) para adaptar dinamicamente os prompts e as estratégias de análise, tornando a ferramenta poderosa para diversos estudos biomédicos.',
    ],
    impacts: ['Acelera o ciclo da coleta de dados à formulação de hipóteses,  democratizando análises avançadas, capacitando uma gama mais ampla de cientistas.',
      'Conecta rapidamente achados experimentais à literatura científica mais pertinente do PubMed, elevando a qualidade e profundidade dos insights, permitindo a identificação de padrões sutis, a validação de resultados e a descoberta de novas linhas de investigação que poderiam ser perdidas manualmente.', 
      'Reduz a sobrecarga cognitiva e simplificando barreiras técnicas e temporais, onde mais hipóteses disruptivas podem ser exploradas e descobertas.',
    ],
    techStack: [
      { name: 'Python', icon: IoLogoPython },
      { name: 'LangGraph', icon: GitMerge },
      { name: 'Streamlit', icon: SiStreamlit  },
      { name: 'PubMed API', icon: SiPubmed },
      { name: 'GPT 4.1', icon: SiOpenai },
      { name: 'Azure', icon: VscAzure },

    ],
    imageBadgeText: 'Explorar documentação',
  },
  {
    id: '2',
    title: 'Agente de IA para Consultoria de Consórcios',
    imageUrl: AgenteConsorcioImage.src, // Use imported image
    imageAlt: 'Consulting AI Agent',
    link: 'https://kroki.io/mermaid/svg/eNq9WM1u20YQvvcpFgpSJAJd_1BSawUooNhOYiBGHCtID0YOK3IpLUJylSWpuKl76KMkOQQo0FPRS696sc7MLsklxaSWi1QGLHFnd-bb-flml3PNlwv24vgbBp-7d9mRSpYqFWkuMhYKdpLmmod8d8rXf4ScJv0kZgulXl_2rGxcjrAddiECMRMsEWnG5_CPhYoVWbF-r6XqvWI7Oz-yCz6byfzsOekqrZaDbMk1Z3OhRRpIDmpyhSgiGfMM1B_LlczWHxVbKs1yuSShNZaQrlLRZa_fL3_3-7D0cbdOwZZCZzLL17-j1NGXZhbwI5j4Qlzl6rKHP8fszBpkNNp71TBcLZkUodxcsv4Nhz-35jTBSRuLzLBdVLlMhDJjgUoUmxVRJLTxXQAR6XZNtQ8y95DWkJLLez36HtvBhhPAdUc8WAiWC0gMbSJ5_1WlkbbZ1lhJDfJOcbmPZ_pNITLMJIjpkcCcitlSq0BkGWccd5VLjYlUr3V0kW5XB0a-DDaqdDfTyARwFe5LsIzHK85StYJ8-EzmNhBPdMLfibRKpUimMpcrBSrYucryuRbT509pdmNziNTKsyeQckrLQIHz-_1pMeMznokxw_H1nyjYBN62C8FPV5C9PCsDsqHdZJaChTmvTYLFc-NgNcaSLaAGuGOarL3QsKYytWjgKg2blOPp-n0sM9Fy01SAVEim2NOnZ1OhVzIQZkEGOZZwzF4bbsGgrgseoznQHnOtSEu98B65CX-vPwFoEBDIZ0uRTk53H4sEYtC7f78G0N40eWIyRwP7NMH-RmeYn2OgFx6reSHYGU_B7ZpMnIYglJEMOINIQiAZFFjlAFGRFewziosrZbYYCtogJ80lk9Tbae1uA5yLkITTtzIPFr8A2GMREAdCtULGIB5Iu5MK2ZFFRtgvVC5sDAlVCZGH4k0BC3q_NiL2iIQ9UJHLtOBQjioWOZHiaRqhQ9ef1n_BdmiBgYTorv91xTV7KTQ5EQqBfO48E9SXPJYAH5J3CUkMUAsGbuUQ1wW3ieWquIE_3end60_SleR6ArlHNWF6HLSzBc-zyXK5e7JScZFLlRJCml0BhNh-liCsH4_Xf69gTxvesuPXGzl6XOD4Vy7PbqNOBh44yXfglsdUcA1bOAelicihhk-uoHoDUDM2_JRCDNGq0NBcWQMVIalLiZrV-gOo0SrbhS_oWqGiE8esyAK-RcEctAvmgITA8vwkmYkwlOm86dKHaIEONwmQrnGiyUGBLnmHOfuxLPOsiHPrSEIG5JWsP8A2kA_wEAEuwBaHJ5JqH9bVDQymjIslET1ZIuo_fjgGu-hENoV_goBgZdtALqDcTZih1TN0kQoKGiBvUbtHmODnoO7MDTtuEzhaFOnrrOkPK7K7Br1mEqS6ST0YIlTnGhm9msdE7T7joLI23HJo2HXC5jsR890se44NE2oO0il7CxULniMRQTjSTgmyGREgtu4y5wBVEEtU5MEoNBhjVpR87EToxgnmtxPMb9OL_98Jzd-O0Pzu9Q6h7X8NRgMyUhDv0OTABrE1xZv8RvL_md7IphPNgRPIgZt3gAkySNSkZlyET5I1GGoj17ZIpkE7mQaNY-F5zCFtgRiQFswDWjyqCpxYQKRawrmyJAY6KJZ53ToJWh0OA1gTHYyIFGbnT-wBwRT-UUWDMKOmPIRChhU5RnU5ZoMIHEDGAUPHGcNGQGAm9ZSf30Gv-ZZRJDG97MGs1W5qq3ipM1YM1u3KfdiO0NARjpzxkQv2AosozYS5P2cWot1zTQJwVYDjLjoOuYulbvreGOGojXDUpofRFwgpctn-y6Q02o6URt3rXVLqIBVwRpHYewFexHR966GJznLTQnHS5PQsa3V1Gq_uzOb4K-YSL1_VPRh7-ukE-8WMp4ZM3H7tIm3ZMlRXPXbf5Rq7O4XA6JVIjaOfFAncKUhWCgKuzOhl42rTta7f7zwCfwecO4UsEugCou3rTe0dneJW60bbrCudAPcSGVcnqkTEC4WvjEgM17wsOxYRhCCnwwqWazy-Ew2CIIo8CJx6LcZ3Dg99Pwjs485bGeaL8cHyygtUDAfPO77ve1oVwArhONeFeNDUrekdgVUczUbBfqU4ikb-D4PbKqabnVU888NDB7HvH9aPWyvObHGVmAG172AOgr29pmr_xqqhfRitwX6053hiEPBouHdbwCFeSPHAViIOgipe-DiEz411e9mCL8U4lDxRadiyZN8KWUNihH-VoRF9bruJFSW60FY3xPP7mah0Dw-CwT6_rW5o1UUdT7HXiOfh4d62nq-1b1KQ12z8XvMiUFaaA7DxLo2qxRXaVxCevVnZb99-D-z30Cv7EFWFq6DuFt4GU5Sp7s63r5I9h4q9Bi1L5U63h88yBV1R-yDodV98vc4Do9e4unmNS4zXOMl4TlOw-emicAnbc1nYa1BrmX7u0vLtsFe9uPWqF66e83KV0uvBP4ok_Ac',
    description: 'Um Agente de IA conversacional projetado para simplificar e personalizar a jornada de escolha de consórcios. Focada em oferecer orientação precisa 24/7, qualificar leads e otimizar a eficiência das equipes de vendas, utilizando lógica de recomendação baseada em regras de negócio, documentos internos e perfil de cada lead.',
    features: [
      'Coleta informações do perfil do cliente de forma conversacional e natural (via WhatsApp/outros).',
      'Responde perguntas específicas sobre regras, taxas e processos utilizando a documentação oficial dos planos como fonte (via RAG por ranqueamento semântico e filtragem por metadados)',
      'Analisa o perfil do cliente e compara com os planos disponíveis (filtrados por regras de negócio) para sugerir a opção mais adequada.',
      'Sistema composto por agentes especializados (diálogo, extração, análise, resposta), facilitando manutenção e evolução.',
      'Permite uma transição suave para atendimento humano em casos complexos ou a pedido, utilizando integração com CRM para fornecer contexto completo ao agente humano. ',
      'Permite incluir módulos como follow-ups inteligentes em conversas pausadas e ações focadas em aumentar o valor do ciclo de vida do cliente (LTV).',
    ],
    impacts: [
      'Para Clientes: Simplifica um processo de decisão tipicamente complexo e demorado. O cliente recebe orientação personalizada instantânea (24/7), respostas precisas às suas dúvidas e recomendações alinhadas ao seu perfil, resultando em maior confiança e satisfação na escolha do consórcio ideal',
      'Para o Negócio (Administradoras): Libera consultores humanos para focarem em vendas complexas e relacionamento, enquanto a IA qualifica leads e responde a perguntas frequentes. Isso aumenta a eficiência operacional, acelera o ciclo de vendas e eleva as taxas de conversão.',
    ],
    techStack: [
      { name: 'N8N', icon: SiN8N },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Docker', icon: SiDocker },
      { name: 'Supabase', icon: SiSupabase },
      { name: "LLM's (GPT, Gemini e DeepSeek)", icon: FaRobot },
      { name: 'Redis', icon: SiRedis },
      { name: 'Whatsapp API', icon: SiWhatsapp },
      { name: 'Chatwoot', icon: SiChatwoot },
    ],
    imageBadgeText: 'Visualizar arquitetura',
  },
  {
    id: '3',
    title: 'Elis - Automação Inteligente para Atendimento Farmacêutico',
    imageUrl: ElisImage.src, // Use imported image
    imageAlt: 'Elis - Intelligent Automation for Pharmaceutical Sales',
    link: '',
    description: 'Elis é uma solução de automação desenvolvida para agilizar o ciclo de vendas B2B e aumentar a capacidade de processamento de pedidos para distribuidoras e fabricantes de produtos farmacêuticos, com foco em otimizar o processo de cotação e fechamento de pedidos junto a seus clientes diretos: prescritores, farmácias e manipuladores. A Elis é projetada com a capacidade crucial de integração com sistemas ERP (Enterprise Resource Planning), o que permite consultas de estoque em tempo real e a automatização de etapas subsequentes do processamento de pedidos.',
    features: [
      'Integração com plataformas de mensagens (ChatWoot) e API do WhatsApp para comunicação.',
      'A ElisO agente de IA avalia o contexto da conversa, os produtos de interesse do cliente e as regras de negócio pré-definidas, e com base nessa análise, identifica e oferece, no momento certo da interação, produtos complementares relevantes, apresentações com melhor custo-benefício (ex: embalagens maiores), ou alternativas de maior valor agregado.',
      'Identifica oportunidades e realiza acompanhamento proativo para fechar pedidos no mesmo dia, garantindo que nenhuma solicitação seja perdida.',
      'Análise de comportamento da Elis com IA para acionar suporte humano quando necessário.',
    ],
    impacts: [
      'Reduz o tempo médio de atendimento e o custo por interação, permitindo escalar a operação sem um aumento proporcional nos custos.',
      'Automatiza o atendimento de um alto volume de consultas e pedidos rotineiros, liberando a equipe humana para focar em negociações complexas, relacionamento estratégico e resolução de problemas críticos.',
      'Aumento das receitas através do upsell inteligente e contextual',
      'Padrão de qualidade e informação em todas as interações automatizadas.',
    ],
    techStack: [
      { name: 'N8N', icon: SiN8N },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Docker', icon: SiDocker },
      { name: 'Supabase', icon: SiSupabase },
      { name: "LLM's (GPT, Gemini e DeepSeek)", icon: FaRobot },
      { name: 'Redis', icon: SiRedis },
      { name: 'Whatsapp API', icon: SiWhatsapp },
      { name: 'Chatwoot', icon: SiChatwoot },
    ], 
    imageBadgeText: 'Teste a Elis',
  },

   {
    id: '4',
    title: 'AI Agent - Tutor Religioso',
    imageUrl: TutorReligiosoImage.src, // Use imported image
    imageAlt: 'AI Agent for Religious Tutoring',
    link: 'https://github.com/Voctor-367/BioLitExplorer.git',
    description: 'Um Agente de IA construído como um assistente dedicado aos mentores do serviço de ensino religioso em igrejas. O agente tem como objetivo otimizar o gerenciamento do ensino, automatizar tarefas administrativas, facilitar o acesso rápido e interativo a conteúdos bíblicos e fornecer insights sobre o progresso dos alunos.',
    features: [
      'Lembretes Automatizados: Geração e envio programado de lembretes aos alunos sobre atividades, ajudando a manter o engajamento e a disciplina no programa de ensino.',
      'Recuperação de Informações: Utiliza Naive RAG para extrair respostas e informações relevantes diretamente de arquivos PDF (como materiais de estudo, comentários bíblicos) carregados no sistema. Isso permite que mentores e alunos obtenham rapidamente informações específicas.',
      'Suporte Interativo a Dúvidas: O agente responde a perguntas sobre passagens bíblicas, doutrinas e outros tópicos específicos do conteúdo estudado, agindo como uma primeira linha de suporte informativo.',
      'Geração de Relatórios de Desempenho: Consolida informações sobre a participação dos alunos, conclusão de tarefas ou outros indicadores de progresso e gera relatórios para o mentor.',
      'Conexão com Planilhas e Bancos de Dados: Capacidade de se integrar com planilhas (ex: Google Sheets) ou bancos de dados para buscar informações dos estudos, alunos e para registrar dados de progresso/interações.',
    ],
    impacts: [
      'Reduz significativamente o tempo gasto em tarefas administrativas e repetitivas (envio de lembretes, busca manual por informações em materiais extensos, compilação de dados de progresso).',
      'Recurso para consultas, especialmente útil para mentores que podem ter muitas demandas ou para alunos que precisam de esclarecimentos imediatos.',
      'Os relatórios de desempenho permitem que os mentores identifiquem rapidamente alunos que estão progredindo bem ou aqueles que podem estar enfrentando dificuldades, possibilitando intervenções mais direcionadas e eficazes.',
      'Funciona como uma ferramenta de apoio que capacita os mentores, especialmente aqueles com menos tempo disponível ou que gerenciam múltiplos grupos, a exercerem seu papel com maior eficácia e menor sobrecarga.',
    ],
    techStack: [
      { name: 'N8N', icon: SiN8N },
      { name: 'Google Services', icon: SiGoogle },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Docker', icon: SiDocker },
      { name: 'Supabase', icon: SiSupabase },
      { name: "LLM's (GPT, Gemini e DeepSeek)", icon: FaRobot },
      { name: 'Redis', icon: SiRedis },
      { name: 'Whatsapp API', icon: SiWhatsapp },
      { name: 'Chatwoot', icon: SiChatwoot },
    ],
    imageBadgeText: '',
  },
];
