---
name: on-page-analyzer
description: Scrapes a URL and checks meta tags, title, H1-H4 headings, and Open Graph tags. Use when the user asks to audit, analyze, or check on-page SEO of a URL.
---

# On-Page Analyzer

Use `webfetch` to retrieve the page content (HTML or markdown), then inspect:

## Checklist Audit

1. **Title tag** — present? length (30-60 chars)?
   - `grep -oP '<title>[^<]+</title>'` — ideal: 50-60 chars
2. **Meta description** — present? length (120-160 chars)?
   - `grep -oP '<meta name="description" content="[^"]*"'` — ideal: 150-160 chars
3. **H1 tag** — exactly one? keyword in it?
   - `grep -oP '<h1[^>]*>[^<]+</h1>'` — harus tepat satu
4. **H2–H4 structure** — logical hierarchy? missing levels?
   - `grep -oP '<h[2-4][^>]*>[^<]+</h[2-4]>'` — cek urutan
5. **Open Graph tags** — `og:title`, `og:description`, `og:image` present?
   - `grep -oP '<meta property="og:[^"]*" content="[^"]*"'`
6. **Canonical URL** — set? self-referencing?
   - `grep -oP '<link rel="canonical" href="[^"]*"'`
7. **robots meta** — index/noindex, follow/nofollow?
   - `grep -oP '<meta name="robots" content="[^"]*"'`

## Format Output untuk SEO Score Calculator

```
Title: "[value]" — [N]/60 chars — ✅/❌
Meta Description: "[value]" — [N]/160 chars — ✅/❌
H1: "[value]" — [count] — ✅/❌
...dst
```

Return a structured report with findings per category.
