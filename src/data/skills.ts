import type { Locale } from "../i18n";

interface SkillGroup {
  id: "data" | "business" | "builder";
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "data",
    titlePt: "Data Stack",
    titleEn: "Data Stack",
    descriptionPt: "Engenharia, análise e visualização de dados em produção.",
    descriptionEn: "Production-grade data engineering, analytics and visualization.",
    items: [
      "Databricks",
      "PySpark",
      "Delta Lake",
      "Unity Catalog",
      "Power BI",
      "DAX",
      "SQL",
      "Python",
      "Pandas",
      "Power Query",
    ],
  },
  {
    id: "business",
    titlePt: "Negócio & Controladoria",
    titleEn: "Business & Controllership",
    descriptionPt: "Sete anos lendo balanço, fechando mês e tomando decisão com dado.",
    descriptionEn: "Seven years closing books, reading P&Ls and turning data into decisions.",
    items: [
      "Controladoria Industrial",
      "Orçamento & Forecast",
      "NPV / IRR",
      "Análise de Custos",
      "SAP",
      "PCP",
      "Engenharia de Processos",
    ],
  },
  {
    id: "builder",
    titlePt: "Builder Stack",
    titleEn: "Builder Stack",
    descriptionPt: "Stack de fundador — do banco de dados ao Figma, do back ao deploy.",
    descriptionEn: "Founder stack — from database to Figma, from backend to deploy.",
    items: [
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Jinja2",
      "REST APIs",
      "Figma",
      "Git",
      "Linux / VPS",
    ],
  },
];

export function skillGroupTitle(group: SkillGroup, locale: Locale): string {
  return locale === "pt" ? group.titlePt : group.titleEn;
}

export function skillGroupDescription(group: SkillGroup, locale: Locale): string {
  return locale === "pt" ? group.descriptionPt : group.descriptionEn;
}
