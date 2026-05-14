import type { Locale } from "../i18n";

interface Bilingual {
  pt: string[];
  en: string[];
}

/** Parágrafos da narrativa "Sobre". */
export const aboutNarrative: Bilingual = {
  pt: [
    "Sou João Sidney Cassiano, Especialista em Dados no Porto Bank. Minha trajetória é incomum dentro do mundo de dados: comecei chão de fábrica, passei pela controladoria industrial, virei a chave pra análise de dados em banco, fundei meu próprio produto e voltei pra dados — desta vez com a cabeça de quem já operou cada camada do negócio.",
    "Por sete anos na Fresenius, aprendi a ler balanço, planejar produção, calcular NPV e defender orçamento em comitê. Isso me deu uma intuição rara num cientista de dados: a de saber, antes de modelar, qual decisão um dashboard vai apoiar.",
    "Em 2022 fundei a PodioSports, um SaaS para organização de torneios e ligas amadoras. Construí do banco ao Figma, do back-end ao deploy. A experiência me ensinou que produto bom é o que sobrevive ao contato com o cliente — não o que parece bonito no protótipo.",
    "Hoje no Porto Bank trabalho com Databricks, PySpark e Power BI em pipelines de produção, mas o que entrego é diferente: análise que conecta o dado à decisão de negócio, porque já estive nas duas pontas.",
  ],
  en: [
    "I'm João Sidney Cassiano, Data Specialist at Porto Bank. My path is unusual in the data world: I started on the factory floor, moved into industrial controllership, pivoted to data analytics in banking, founded my own product, and came back to data — this time with the mindset of someone who has operated every layer of the business.",
    "Across seven years at Fresenius, I learned to read financial statements, plan production, run NPV analyses and defend budgets in committee. That gave me an intuition rare among data scientists: knowing, before modeling anything, what decision a dashboard is meant to support.",
    "In 2022 I founded PodioSports, a SaaS for tournament and league management. I built it from the database to Figma, from backend to deploy. The experience taught me that a good product is the one that survives contact with customers — not the one that looks good in a prototype.",
    "Today at Porto Bank I work with Databricks, PySpark and Power BI on production pipelines, but what I deliver is different: analysis that connects data to business decisions, because I've stood at both ends.",
  ],
};

export interface Education {
  period: string;
  titlePt: string;
  titleEn: string;
  institution: string;
}

// TODO: João preenche com os dados reais. Os abaixo são placeholders inferidos
// da trajetória (engenharia de produção + interesse em controladoria/finanças)
// e DEVEM ser revisados antes de publicar.
export const education: Education[] = [
  {
    period: "Ano — Ano",
    titlePt: "MBA / Pós-graduação (a preencher)",
    titleEn: "MBA / Graduate degree (TBD)",
    institution: "Instituição (a preencher)",
  },
  {
    period: "Ano — Ano",
    titlePt: "Graduação em Engenharia de Produção (a confirmar)",
    titleEn: "Production Engineering degree (TBD)",
    institution: "Universidade (a preencher)",
  },
];

export interface Certification {
  year: string;
  titlePt: string;
  titleEn: string;
  issuer: string;
}

// TODO: placeholders — João preenche com certificações reais. Mantemos a
// estrutura pronta com exemplos comuns no perfil dele pra orientar a edição.
export const certifications: Certification[] = [
  {
    year: "Ano",
    titlePt: "Certificação Databricks (ex: DE Associate) — a confirmar",
    titleEn: "Databricks certification (e.g. DE Associate) — TBD",
    issuer: "Databricks",
  },
  {
    year: "Ano",
    titlePt: "Power BI Data Analyst (PL-300) — a confirmar",
    titleEn: "Power BI Data Analyst (PL-300) — TBD",
    issuer: "Microsoft",
  },
];

export interface Language {
  namePt: string;
  nameEn: string;
  levelPt: string;
  levelEn: string;
}

export const languages: Language[] = [
  { namePt: "Português", nameEn: "Portuguese", levelPt: "Nativo", levelEn: "Native" },
  { namePt: "Inglês", nameEn: "English", levelPt: "Avançado", levelEn: "Advanced" },
  { namePt: "Espanhol", nameEn: "Spanish", levelPt: "Intermediário", levelEn: "Intermediate" },
];

export function bilingualText<T extends { [k: string]: any }>(
  item: T,
  base: string,
  locale: Locale,
): string {
  const key = locale === "pt" ? `${base}Pt` : `${base}En`;
  return item[key];
}
