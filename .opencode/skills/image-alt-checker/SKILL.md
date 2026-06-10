---
name: image-alt-checker
description: Scans HTML or a URL for images missing alt text and suggests fixes. Use when the user wants to audit image accessibility or SEO.
---

# Image Alt Checker

Given HTML content or a URL (use `glob` + `read` for local files, `webfetch` for URLs):

1. Find all `<img>` tags.
2. Check for `alt` attribute:
   - **Missing** — no alt attribute at all (critical).
   - **Empty** — `alt=""` (decorative — acceptable if truly decorative).
   - **Generic** — `alt="image"`, `alt="photo"` (needs improvement).
   - **Good** — descriptive, includes keyword where relevant.
3. For each missing/generic image, suggest a proper alt text.

Output summary: total images, missing count, empty count, generic count, good count. Plus a table of images needing fixes.
