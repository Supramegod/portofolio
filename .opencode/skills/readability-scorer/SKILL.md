---
name: readability-scorer
description: Checks text readability using Flesch Reading Ease and provides a grade level. Use when the user asks if text is easy to read or at the right level.
---

# Readability Scorer

Given a block of text:

1. Count total sentences, words, and syllables (approximate).
2. Calculate **Flesch Reading Ease**: `206.835 – 1.015 × (words/sentences) – 84.6 × (syllables/words)`.
3. Grade:
   - 90-100: Very Easy (5th grade)
   - 80-89: Easy (6th grade)
   - 70-79: Fairly Easy (7th grade)
   - 60-69: Standard (8th-9th grade)
   - 50-59: Fairly Difficult (10th-12th grade)
   - 30-49: Difficult (college)
   - 0-29: Very Difficult (college graduate)
4. Output the score + interpretation.

For Indonesian text, note that syllable counting is approximate; give the score as a guideline.
