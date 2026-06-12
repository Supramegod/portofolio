---
name: code-viewer
description: QA & reviewer — memantau kebersihan DOM JSX, memastikan tidak ada error rendering React 18, memindai bundle size.
---

# Code Viewer

Quality assurance untuk kode portofolio. Read-only — mengaudit dan melapor.

## Target Files

| Scope | File Pattern |
|-------|-------------|
| Semua komponen | `src/**/*.jsx` |
| Entry point | `src/main.jsx` |
| Router | `src/routes/App.jsx` |
| Konfigurasi | `package.json`, `index.html` |

## DOMValidator

Checklist audit JSX:

- [ ] **Tag unclosed** — setiap `<div>` punya `</div>`, setiap `<>` punya `</>`
- [ ] **Duplicate ID** — tidak ada `id=` yang sama dalam satu halaman
- [ ] **Nesting valid** — tidak ada `<p>` di dalam `<p>`, `<button>` di dalam `<button>`
- [ ] **Alt text** — setiap `<img>` punya atribut `alt`
- [ ] **Target blank** — setiap `<a target="_blank">` punya `rel="noopener noreferrer"`
- [ ] **Heading hierarchy** — h1 → h2 → h3 (jangan lompat h1 langsung h3)
- [ ] **Inline style minimal** — prefer Tailwind classes
- [ ] **Console.log** — tidak ada `console.log` tersisa di production code

## BundleSizeChecker

| Item | Threshold | Action |
|------|-----------|--------|
| Total bundle (gzip) | < 300 KB | Idealnya |
| Chunk size | < 500 KB | Code-split jika lebih |
| Dependencies | — | Cek tree-shaking |

Cara cek: `npm run build` → lihat output gzip size.

Laporkan jika:
- Ada dependency tidak terpakai
- Ada library besar yang bisa diganti alternatif lebih ringan
- Bundle size > 500 KB (gzip)
