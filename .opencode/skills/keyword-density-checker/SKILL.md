---
name: keyword-density-checker
description: Checks keyword density in a given text. Use when the user wants to know how often a target keyword appears relative to total word count.
---

# Keyword Density Checker

Given a target keyword and text content:

1. Count total words in the text.
2. Count occurrences of the exact keyword (single word) or phrase (multi-word).
3. Calculate: `(keyword occurrences / total words) × 100`.
4. Compare against:
   - **0.5% – 2.5%**: Ideal range
   - **>3%**: Risk of keyword stuffing
   - **<0.5%**: Too low, consider adding more mentions
5. Include the exact keyword count and density percentage in the output.

For multi-word keywords, check the exact phrase match count.
