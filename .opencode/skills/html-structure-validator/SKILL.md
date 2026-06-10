---
name: html-structure-validator
description: Checks DOM cleanliness — validates heading hierarchy, semantic tags, and proper nesting. Use when the user wants to audit HTML structure for SEO or accessibility.
---

# HTML Structure Validator

Given HTML content (read from file or fetched from URL):

1. **Doctype & charset** — present?
2. **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` used appropriately?
3. **Heading hierarchy** — H1 → H2 → H3 descending without skipping levels?
4. **Duplicate IDs** — any `id` attributes reused?
5. **Nesting** — block elements inside inline? Proper tag closure?
6. **Scripts & styles** — render-blocking resources in `<head>`? Defer/async used?

Output: Pass/Fail per category, with line-level references to issues found.
