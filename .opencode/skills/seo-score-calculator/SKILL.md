---
name: seo-score-calculator
description: Calculates an SEO score (1-100) from an on-page audit and returns a fix checklist. Use when the user wants a numeric SEO score or grading for a page.
---

# SEO Score Calculator

After running On-Page Analyzer, assign points across these weighted categories:

## Bobot Penilaian

| Category | Max Points | Cara Nilai |
|---|---|---|
| Title tag quality | 15 | Ada(5) + mengandung keyword(5) + length ideal(5) |
| Meta description | 10 | Ada(5) + length ideal(5) |
| H1 presence & relevance | 15 | Tepat 1 H1(10) + mengandung keyword(5) |
| Heading hierarchy | 10 | H1→H2→H3 rapi(10), lompat level(5), acak(0) |
| Open Graph tags | 10 | og:title(3), og:desc(3), og:image(4) |
| Canonical URL | 10 | Ada & self-referencing(10), ada(5), tidak ada(0) |
| Image alt attributes | 10 | Semua gambar punya alt deskriptif(10), sebagian(5), tidak ada(0) |
| Keyword in H1 + title | 10 | Keduanya(10), salah satu(5), tidak ada(0) |
| Content length (>300 words) | 10 | ≥300 kata(10), 150-299(5), <150(0) |

## Scoring

- Sum points, divide by 100 → percentage, round to integer.
- 90-100: Excellent (🔵)
- 70-89: Good (minor fixes 🟢)
- 50-69: Needs work (🟡)
- Below 50: Poor (🔴)

**Output:** Score + a prioritized checklist of what to fix, ordered by impact.
