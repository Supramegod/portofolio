---
name: seo-score-calculator
description: Calculates an SEO score (1-100) from an on-page audit and returns a fix checklist. Use when the user wants a numeric SEO score or grading for a page.
---

# SEO Score Calculator

After running On-Page Analyzer, assign points across these weighted categories:

| Category | Max Points |
|---|---|
| Title tag quality | 15 |
| Meta description | 10 |
| H1 presence & relevance | 15 |
| Heading hierarchy | 10 |
| Open Graph tags | 10 |
| Canonical URL | 10 |
| Image alt attributes | 10 |
| Keyword in H1 + title | 10 |
| Content length (>300 words) | 10 |

**Scoring:**
- Sum points, divide by 100 → percentage, round to integer.
- 90-100: Excellent
- 70-89: Good (minor fixes)
- 50-69: Needs work
- Below 50: Poor

**Output:** Score + a prioritized checklist of what to fix, ordered by impact.
