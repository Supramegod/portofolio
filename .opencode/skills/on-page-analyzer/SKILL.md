---
name: on-page-analyzer
description: Scrapes a URL and checks meta tags, title, H1-H4 headings, and Open Graph tags. Use when the user asks to audit, analyze, or check on-page SEO of a URL.
---

# On-Page Analyzer

Use `webfetch` to retrieve the page content (HTML or markdown), then inspect:

1. **Title tag** — present? length (30-60 chars)?
2. **Meta description** — present? length (120-160 chars)?
3. **H1 tag** — exactly one? keyword in it?
4. **H2–H4 structure** — logical hierarchy? missing levels?
5. **Open Graph tags** — `og:title`, `og:description`, `og:image` present?
6. **Canonical URL** — set? self-referencing?
7. **robots meta** — index/noindex, follow/nofollow?

Return a structured report with findings per category.
