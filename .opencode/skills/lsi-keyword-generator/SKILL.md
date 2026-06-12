---
name: lsi-keyword-generator
description: Generates Latent Semantic Indexing (LSI) / contextual keyword variations for a seed keyword. Use when the user wants related keywords to enrich content.
---

# LSI Keyword Generator

Given a seed keyword:

## 4 Kategori LSI

### Synonyms
Direct alternatives / sinonim langsung.
> Contoh untuk "backend developer": *backend engineer, server-side developer, API engineer, systems programmer*

### Related Concepts
Topik lebih luas yang berhubungan.
> Contoh: *server architecture, database design, API integration, microservices, cloud infrastructure*

### Long-tail Variations
Frasa 3-4 kata berbasis pertanyaan atau spesifik.
> Contoh: *how to become a backend developer, backend developer salary 2026, best backend framework for enterprise*

### Entity-based
Brands, tools, people, technologies terkait.
> Contoh: *Laravel, PHP, Node.js, PostgreSQL, Docker, AWS, Kubernetes*

## Output Format

| Keyword | Category | Search Intent |
|---------|----------|--------------|
| backend engineer | Synonym | Informational |
| server architecture | Related concept | Informational |
| best backend framework 2026 | Long-tail | Commercial |
| Laravel | Entity | Commercial/Navigational |

Brainstorm 8-15 terms minimum.
