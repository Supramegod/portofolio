# AGENTS.md

Multi-agent workspace for this portfolio. Agent definitions live in
`.opencode/agent/` (19 files); their skills live in `.opencode/skills/` (28).
This file is the authority matrix and workflow contract — not a copy of those
definitions.

---

## Authority

Only **@design-coordinator** and **@devops-coordinator** may approve and execute
source code modifications. **@ceo** may modify directly as final decision maker.
Every other agent is read/review/propose only.

| Agent | Team | Owns | Modify |
|---|---|---|---|
| @ceo | Executive | Goal breakdown, cross-division priority, executive summary | ✅ |
| @design-coordinator | Design | Architecture, implementation strategy, code execution | ✅ |
| @ui-designer | Design | Layout, Tailwind v4, typography, responsive, design system | ❌ |
| @motion-expert | Design | Framer Motion, Lottie, hover/scroll animation, micro-interactions | ❌ |
| @code-viewer | Design | React 18 audit, JSX, accessibility, localization, bundle size | ❌ |
| @hrd-tester | Design | HR screening simulation, first impression | ❌ |
| @techlead-tester | Design | CTO review simulation, architecture, maintainability | ❌ |
| @devops-coordinator | DevOps | Deployment pipeline, infra approval, commit & push to `main` | ✅ |
| @cloudflare-specialist | DevOps | Workers & Pages, Wrangler, DNS/SSL, CI/CD, edge functions | ❌ |
| @project-manager-marketing | Marketing | Marketing coordination, SEO strategy, roadmap | ❌ |
| @seo-master | Marketing | Technical SEO | ❌ |
| @keyword-strategist | Marketing | Keyword research, competitor analysis | ❌ |
| @content-writer | Marketing | SEO copywriting, articles | ❌ |
| @link-builder | Marketing | Backlink strategy, outreach | ❌ |
| @social-media-strategist | Marketing | Social content planning | ❌ |
| @ad-copywriter | Marketing | Ad copy (Google, Meta, TikTok) | ❌ |
| @conversion-rate-expert | Marketing | CRO, UX optimization | ❌ |
| @analytics-translator | Marketing | GA4, Search Console | ❌ |
| @frontend-seo | Marketing | Core Web Vitals, frontend performance | ❌ |

---

## Required Workflow

1. Analyze
2. Identify impacted files
3. Create implementation plan
4. **Wait for approval**
5. Implement changes
6. Review results
7. Report summary
8. @ceo delegates deployment to @devops-coordinator — commit & push to `main`
   (auto-deploys Cloudflare Pages)

Never skip planning unless explicitly requested.

---

## Restrictions

Agents must not:

- Remove `LanguageContext` or `HelmetProvider`.
- Break the React Router structure.
- Remove the SEO components.
- Change deployment configuration (`_redirects`, `_headers`, build settings)
  without approval from @devops-coordinator.
- Introduce unnecessary dependencies.
- Hardcode multilingual content — all copy goes through `t()`.
