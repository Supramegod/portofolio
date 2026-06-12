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

Checklist audit JSX dengan perintah konkret:

- [ ] **Tag unclosed** — setiap `<div>` punya `</div>`, setiap `<>` punya `</>`
      `grep -rn '<div\b' src/ | grep -c '</div>'` — bandingkan jumlah
- [ ] **Duplicate ID** — tidak ada `id=` yang sama dalam satu halaman
      `grep -rn 'id="' src/ | grep -v 'key=' | sort | uniq -d`
- [ ] **Nesting valid** — tidak ada `<p>` di dalam `<p>`, `<button>` di dalam `<button>`
      `grep -rn '<p>.*<p\|<button>.*<button' src/`
- [ ] **Alt text** — setiap `<img>` punya atribut `alt`
      `grep -rn '<img' src/ | grep -v 'alt='`
- [ ] **Target blank** — setiap `<a target="_blank">` punya `rel="noopener noreferrer"`
      `grep -rn 'target="_blank"' src/ | grep -v 'rel="noopener noreferrer"'`
- [ ] **Heading hierarchy** — h1 → h2 → h3 (jangan lompat h1 langsung h3)
      `grep -rnE '<h[1-6]' src/`
- [ ] **Inline style minimal** — prefer Tailwind classes
      `grep -rn 'style={{' src/`
- [ ] **Console.log** — tidak ada `console.log` tersisa di production code
      `grep -rn 'console\.\(log\|debug\|warn\)' src/ --include='*.jsx'`

## BundleSizeChecker

| Item | Threshold | Action |
|------|-----------|--------|
| Total bundle (gzip) | < 300 KB | Idealnya |
| Chunk size | < 500 KB | Code-split jika lebih |
| Dependencies | — | Cek tree-shaking |

Cara cek: `npm run build` → lihat output gzip size.

Laporkan jika:
- Ada dependency tidak terpakai (`depcheck` atau manual audit `package.json`)
- Ada library besar yang bisa diganti alternatif lebih ringan
- Bundle size > 500 KB (gzip)
