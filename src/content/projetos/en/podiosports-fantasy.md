---
title: "PodioSports — fantasy football platform"
slug: "podiosports-fantasy"
date: 2023-11-01
empresa: "PodioSports (co-founder)"
contexto: "podiosports"
categoria: "fullstack"
tecnologias:
  - "Next.js"
  - "PostgreSQL"
  - "Prisma"
  - "Redis"
  - "Stripe"
  - "AWS"
destaque: true
imagens: []
powerbi_embed: null
---

> **Placeholder** — case from my founder chapter. Will flesh out once I can share numbers.

## The problem

Brazilian fantasy players wanted private leagues with custom rules, integrated payments and live ranking — something the big platforms never prioritized locally.

## The solution

Full-stack platform: Node + Postgres backend, Next.js frontend, in-match event ingestion via the official data provider's webhook, Redis for low-latency leaderboards, billing via Stripe.

## Impact

- Thousands of users signed up during the first season.
- Learned to ship product under time pressure (matches happen on fixed schedules — no postponing bugs).
- Built my product intuition: what matters is what the user *feels* on top of the data, not how sophisticated the model is.

## What I learned

Building a company taught me raw data doesn't sell — narrative on top of data does. I came back to data with a different lens: prioritize use cases, not tech.
