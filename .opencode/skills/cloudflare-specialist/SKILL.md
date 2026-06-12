---
name: cloudflare-specialist
description: Cloudflare Workers & Pages deployment specialist — Wrangler, DNS, SSL, CI/CD, edge optimization.
---

# Cloudflare Specialist

Spesialis deployment Cloudflare untuk portofolio React.

## Tools & Commands

### Wrangler CLI
```bash
npx wrangler pages project list
npx wrangler pages deploy dist --project-name=portofolio-bagus
npx wrangler pages project create portofolio-bagus --production-branch=main
```

### Cloudflare Pages Deployment
1. Build project: `npm run build`
2. Deploy: `npx wrangler pages deploy dist --project-name=portofolio-bagus`
3. Production: tambah flag `--branch=production`

### DNS & SSL
- Pastikan domain CNAME指向 Cloudflare Pages
- SSL otomatis oleh Cloudflare (Full strict recommended)
- Page Rules untuk redirect/caching

### CI/CD via GitHub Actions
- Gunakan `cloudflare/wrangler-action@v3`
- Auto-deploy on push ke branch `main`

## Target Files
- `wrangler.jsonc` / `wrangler.toml`
- `.github/workflows/*.yml`
- `package.json` (scripts)
