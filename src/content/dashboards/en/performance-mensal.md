---
title: "Monthly Performance Dashboard"
slug: "performance-mensal"
date: 2025-08-01
contexto: "Power BI sample"
embed_url: "https://app.powerbi.com/view?r=eyJrIjoiMzg5MjkzNTQtZDgzMC00ODE4LTk0MmEtNDhmYzMzZGYwYjVjIiwidCI6IjFmMjE5N2NmLTdjNTAtNDViMy1iNzgxLTYwMzMzOWMzNDBlYSIsImMiOjl9"
tecnologias: ["Power BI", "DAX", "Power Query", "Star Schema"]
---

## About this dashboard

Demo panel showing **monthly performance** for revenue, average ticket and
channel volumes. Modeled as a **star schema** (1 fact + 3 dimensions), with DAX
measures for MoM/YoY variation and slicers synchronized across pages.

## What it shows

- **Page 1** — executive view (key KPIs + 12-month trend)
- **Page 2** — drilldown by acquisition channel
- **Page 3** — cohort analysis by entry month

## Technical choices

- Star schema with `dim_date`, `dim_channel`, `dim_product`
- Time intelligence rooted in `dim_date` marked as the date table
- Variations computed via `CALCULATE + DATEADD` to keep filter context intact
- Custom JSON theme to enforce brand colors

## Note

This is a **public sample dashboard** used to demonstrate the embed template.
Real project dashboards (with sanitized data) will be added here as Phase 4
progresses.
