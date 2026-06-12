---
name: readability-scorer
description: Checks text readability using Flesch Reading Ease and provides a grade level. Use when the user asks if text is easy to read or at the right level.
---

# Readability Scorer

Given a block of text:

## Cara Hitung Manual

1. **Hitung jumlah kalimat** — pisahkan berdasarkan `.`, `!`, `?`
2. **Hitung jumlah kata** — gunakan `echo "$text" | wc -w`
3. **Hitung suku kata** — tiap grup vokal dalam kata (approximate: jumlah suku kata ≈ jumlah karakter / 3)
4. **Rumus Flesch Reading Ease**: `206.835 - 1.015 × (kata/kalimat) - 84.6 × (suku kata/kata)`

## Perintah Bantuan

```bash
# Hitung kata dalam file JSX (strip HTML tags first)
grep -oP '>[^<]+<' path/to/file.jsx | tr -d '<>' | wc -w
```

## Grade

| Score | Level | Target Audience |
|-------|-------|-----------------|
| 90-100 | Very Easy (5th grade) | Anak-anak |
| 80-89 | Easy (6th grade) | Umum |
| 70-79 | Fairly Easy (7th grade) | Remaja |
| 60-69 | Standard (8th-9th grade) | Dewasa umum |
| 50-59 | Fairly Difficult (10th-12th) | Pelajar SMA |
| 30-49 | Difficult (college) | Akademik |
| 0-29 | Very Difficult (graduate) | Spesialis |

For Indonesian text, syllable counting is approximate; give the score as a guideline.
