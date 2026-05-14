# Portfólio — João Sidney Cassiano

Site portfólio profissional construído com **Astro 6 + Tailwind CSS v4 + React 19**.
Bilíngue (PT / EN), tema dark/light, conteúdo em Markdown via Content Collections,
formulário de contato integrado com n8n, deploy estático em VPS.

## Stack

- **Astro 6** — site gerador estático com ilhas React
- **Tailwind CSS v4** — tema CSS-based com paleta dark/light
- **React 19** — somente para componentes interativos (ilhas)
- **Sitemap + i18n nativos do Astro**

## Estrutura

```
src/
├── i18n/                # Strings de UI (pt.json, en.json) + helpers
├── content/
│   ├── projetos/{pt,en}/  # Markdown dos projetos por idioma
│   └── dashboards/{pt,en}/
├── content.config.ts    # Schemas Zod das collections
├── layouts/Base.astro   # Layout principal
├── components/          # Header, Footer, ThemeToggle, LangSwitcher
├── pages/
│   ├── index.astro      # Redirect / → /pt/
│   ├── pt/              # Páginas em português
│   └── en/              # Páginas em inglês
└── styles/global.css    # Tailwind import + design tokens
```

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Build estático em dist/
npm run preview    # Servir dist/ localmente
```

## Variáveis de ambiente

Copiar `.env.example` para `.env` e preencher:

- `PUBLIC_N8N_WEBHOOK_URL` — endpoint do n8n que recebe o formulário de contato

## Roadmap

- [x] Fase 1: setup (Astro, Tailwind, i18n, content collections, layout base, theme toggle)
- [ ] Fase 2: Home + Sobre (hero completo, skills, timeline)
- [ ] Fase 3: Projetos (listagem com filtros, template individual)
- [ ] Fase 4: Dashboards + Power BI embed
- [ ] Fase 5: Contato + integração n8n
- [ ] Fase 6: Deploy na VPS Hostinger
- [ ] Fase 7 (opcional): GitHub Actions
