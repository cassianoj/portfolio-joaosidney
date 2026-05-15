import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projetoSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.date(),
  empresa: z.string(),
  contexto: z.enum(["porto-bank", "banco-original", "podiosports", "fresenius", "pessoal", "outros"]),
  categoria: z.enum(["data-engineering", "bi", "analytics", "fullstack", "outros"]),
  tecnologias: z.array(z.string()),
  destaque: z.boolean().default(false),
  capa: z.string().optional(),
  imagens: z
    .array(z.object({ src: z.string(), alt: z.string() }))
    .default([]),
  powerbi_embed: z.string().url().nullable().default(null),
});

const dashboardSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.date(),
  contexto: z.string(),
  embed_url: z.string().url(),
  tecnologias: z.array(z.string()),
  capa: z.string().optional(),
});

// `entry` chega sem extensão (ex: "pt/databricks-pipeline"). Preservamos
// o caminho relativo como id pra não colidir entre as pastas pt/ e en/.
const keepPathAsId = ({ entry }: { entry: string }) => entry;

const projetos = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projetos",
    generateId: keepPathAsId,
  }),
  schema: projetoSchema,
});

const dashboards = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/dashboards",
    generateId: keepPathAsId,
  }),
  schema: dashboardSchema,
});

export const collections = { projetos, dashboards };
