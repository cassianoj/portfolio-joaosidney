---
title: "Dashboard de Performance Mensal"
slug: "performance-mensal"
date: 2025-08-01
contexto: "Exemplo Power BI"
embed_url: "https://app.powerbi.com/view?r=eyJrIjoiMzg5MjkzNTQtZDgzMC00ODE4LTk0MmEtNDhmYzMzZGYwYjVjIiwidCI6IjFmMjE5N2NmLTdjNTAtNDViMy1iNzgxLTYwMzMzOWMzNDBlYSIsImMiOjl9"
tecnologias: ["Power BI", "DAX", "Power Query", "Star Schema"]
---

## Sobre o dashboard

Painel demonstrativo cobrindo **performance mensal** de receita, ticket médio e
volumetria por canal. Foi modelado com **star schema** (1 fato + 3 dimensões),
medidas DAX para variação MoM/YoY e segmentações com sincronização entre
páginas.

## O que mostra

- **Página 1** — visão executiva (KPIs principais + tendência 12M)
- **Página 2** — drill por canal de aquisição
- **Página 3** — análise de coorte por mês de entrada

## Decisões técnicas

- Modelagem em star schema com `dim_data`, `dim_canal`, `dim_produto`
- Time intelligence baseada em `dim_data` marcada como tabela de datas
- Variações calculadas com `CALCULATE + DATEADD` para evitar contexto quebrado
- Tema visual customizado em JSON para padronizar cor de marca

## Observação

Este é um dashboard **público de exemplo** usado para demonstrar o template de
embed. Dashboards de projetos reais (com dados sanitizados) entram aqui ao longo
da Fase 4.
