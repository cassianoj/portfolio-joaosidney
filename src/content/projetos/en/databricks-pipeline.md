---
title: "Databricks pipeline for credit origination"
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

> **Placeholder** — example structure. Replace with the real case once it can be published.

## The problem

The credit origination team relied on manual reports stitched together in spreadsheets. Month-end close took 3 business days and any reprocessing meant redoing the work end to end.

## The solution

A Databricks pipeline with **bronze → silver → gold** layers on Delta Lake, orchestrated by Airflow. Daily ingestion of transactional data, dedup on silver, and a dimensional model on gold consumed by BI.

## Impact

- Month-end close went from **3 days → 4 hours**.
- Any partition can be reprocessed with no downstream side effects.
- Analytics team now consumes versioned gold tables — no more ad-hoc extract requests.

## What I learned

Good dimensional modeling at the source dramatically reduces friction downstream. Time spent on silver pays dividends for every consumer that follows.
