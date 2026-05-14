import type { Locale } from "../i18n";

export interface TimelineEvent {
  /** Período visível no card (mesmo em ambos idiomas). */
  period: string;
  /** Empresa / organização. */
  organization: string;
  /** Cargo em PT. */
  rolePt: string;
  /** Cargo em EN. */
  roleEn: string;
  /** Descrição curta em PT. */
  descriptionPt: string;
  /** Descrição curta em EN. */
  descriptionEn: string;
  /** Tags / tecnologias / temas. */
  tags?: string[];
  /** Marca como destaque visual (ex: PodioSports). */
  highlight?: boolean;
  /** Link externo opcional (ex: site do produto). */
  link?: { href: string; labelPt: string; labelEn: string };
}

export const timeline: TimelineEvent[] = [
  {
    period: "2025 — atual",
    organization: "Porto Bank",
    rolePt: "Especialista em Dados",
    roleEn: "Data Specialist",
    descriptionPt:
      "Engenharia e análise de dados em ambiente Databricks: pipelines bronze→silver→gold, modelos de Power BI e suporte a decisões de crédito e risco.",
    descriptionEn:
      "Data engineering and analytics on Databricks: bronze→silver→gold pipelines, Power BI models and decision support for credit and risk.",
    tags: ["Databricks", "PySpark", "Power BI", "Delta Lake"],
  },
  {
    period: "2022 — 2025",
    organization: "PodioSports",
    rolePt: "Fundador & Builder",
    roleEn: "Founder & Builder",
    descriptionPt:
      "Construí do zero um SaaS para organização de torneios e ligas amadoras: stack Flask + PostgreSQL + Figma, do banco ao deploy. Validação de produto, onboarding de clubes e operação completa.",
    descriptionEn:
      "Built a tournament & league management SaaS from scratch: Flask + PostgreSQL + Figma stack, from database to deploy. Product validation, club onboarding and full operations.",
    tags: ["Flask", "PostgreSQL", "Figma", "Product"],
    highlight: true,
  },
  {
    period: "2021 — 2022",
    organization: "Banco Original",
    rolePt: "Especialista de Dados",
    roleEn: "Data Specialist",
    descriptionPt:
      "Modelagem analítica e construção de dashboards executivos para áreas de produto e crédito. Primeira virada de chave da carreira: do chão de fábrica para o ecossistema de dados em escala financeira.",
    descriptionEn:
      "Analytical modeling and executive dashboards for product and credit teams. First major career pivot: from the factory floor to data at financial scale.",
    tags: ["SQL", "Power BI", "Python"],
  },
  {
    period: "2015 — 2021",
    organization: "Fresenius",
    rolePt: "Supervisor de Controladoria",
    roleEn: "Controllership Supervisor",
    descriptionPt:
      "Liderança da controladoria industrial: fechamento mensal, orçamento, análise de NPV, apuração de custos e parceria com áreas operacionais. Aqui aprendi a ler o negócio antes de modelar o dado.",
    descriptionEn:
      "Industrial controllership leadership: monthly close, budgeting, NPV analysis, cost accounting and partnership with operations. This is where I learned to read the business before modeling the data.",
    tags: ["SAP", "Controladoria", "NPV", "Orçamento"],
  },
  {
    period: "2014 — 2015",
    organization: "Fresenius",
    rolePt: "Analista de Engenharia de Processos",
    roleEn: "Process Engineering Analyst",
    descriptionPt:
      "Estudos de capacidade, otimização de fluxos produtivos e suporte a projetos de melhoria contínua.",
    descriptionEn:
      "Capacity studies, production flow optimization and continuous-improvement project support.",
    tags: ["Lean", "Processos"],
  },
  {
    period: "2011 — 2014",
    organization: "Fresenius",
    rolePt: "Analista de PCP",
    roleEn: "Production Planning Analyst",
    descriptionPt:
      "Planejamento e controle da produção: previsão de demanda, sequenciamento e indicadores de OEE.",
    descriptionEn:
      "Production planning and control: demand forecasting, scheduling and OEE indicators.",
    tags: ["PCP", "Indústria"],
  },
];

export function timelineRole(ev: TimelineEvent, locale: Locale): string {
  return locale === "pt" ? ev.rolePt : ev.roleEn;
}

export function timelineDescription(ev: TimelineEvent, locale: Locale): string {
  return locale === "pt" ? ev.descriptionPt : ev.descriptionEn;
}
