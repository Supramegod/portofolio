---
name: image-alt-checker
description: Scans HTML or a URL for images missing alt text and suggests fixes. Use when the user wants to audit image accessibility or SEO.
---

# Image Alt Checker

Given HTML content or a URL (use `glob` + `read` for local files, `webfetch` for URLs):

## Perintah Cepat

```bash
# Semua <img> tanpa alt text
grep -rn '<img' src/ | grep -v 'alt='

# Semua <img> dengan alt kosong
grep -rn 'alt=""' src/

# Semua <img> dengan alt generik
grep -rn 'alt="image"\|alt="photo"\|alt="gambar"\|alt="foto"' src/
```

## Checklist Audit

1. Find all `<img>` tags.
2. Check for `alt` attribute:
   - **Missing** — no alt attribute at all (critical).
   - **Empty** — `alt=""` (decorative — acceptable if truly decorative).
   - **Generic** — `alt="image"`, `alt="photo"` (needs improvement).
   - **Good** — descriptive, includes keyword where relevant.
3. For each missing/generic image, suggest a proper alt text.

Output summary: total images, missing count, empty count, generic count, good count. Plus a table of images needing fixes with suggested alt text.
