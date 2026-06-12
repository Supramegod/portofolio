---
name: html-structure-validator
description: Checks DOM cleanliness — validates heading hierarchy, semantic tags, and proper nesting. Use when the user wants to audit HTML structure for SEO or accessibility.
---

# HTML Structure Validator

Given HTML content (read from file or fetched from URL):

## Perintah Cepat

```bash
# Cek heading hierarchy
grep -rnE '<h[1-6]' src/ | sed 's/.*<\(h[1-6]\).*/\1/' | sort | uniq -c

# Cek semantic tags
grep -rnE '<(div|section|article|nav|header|footer|main|aside)>' src/

# Cek duplicate IDs
grep -rn 'id="' src/ | grep -v 'key=' | sed 's/.*id="\([^"]*\)".*/\1/' | sort | uniq -d

# Cek render-blocking scripts di head
grep -rn '<script' index.html | grep -v 'defer\|async'
```

## Checklist

1. **Doctype & charset** — present?
2. **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` used appropriately?
3. **Heading hierarchy** — H1 → H2 → H3 descending without skipping levels?
4. **Duplicate IDs** — any `id` attributes reused?
5. **Nesting** — block elements inside inline? Proper tag closure?
6. **Scripts & styles** — render-blocking resources in `<head>`? Defer/async used?

Output: Pass/Fail per category, with file:line references to issues found.
