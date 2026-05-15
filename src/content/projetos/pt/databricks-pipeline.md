---
title: "Pipeline Databricks para originação de crédito"
slug: "databricks-pipeline"
date: 2025-08-15
empresa: "Porto Bank"
contexto: "porto-bank"
categoria: "data-engineering"
tecnologias:
  - "Databricks"
  - "PySpark"
  - "Delta Lake"
  - "Airflow"
  - "AWS S3"
  - "SQL"
destaque: true
imagens: []
powerbi_embed: null
---

> **Placeholder** — este é um exemplo de estrutura. Substituir pelo case real quando puder publicar.

## O problema

A área de originação de crédito dependia de relatórios manuais consolidados em planilhas. O fechamento mensal levava 3 dias úteis e qualquer reprocessamento exigia retrabalho de ponta a ponta.

## A solução

Pipeline em Databricks com camadas **bronze → silver → gold** em Delta Lake, orquestrado por Airflow. Ingestão diária de dados transacionais, deduplicação na silver e modelo dimensional na gold consumido pelo BI.

## Impacto

- Fechamento mensal caiu de **3 dias → 4 horas**.
- Reprocessamento de qualquer partição sem efeito em downstream.
- Time de analytics passou a consumir tabelas gold versionadas, sem precisar pedir extração.

## O que aprendi

Modelagem dimensional bem feita na origem reduz drasticamente o atrito downstream. Investir tempo na silver paga dividendos em todo consumidor que vem depois.
