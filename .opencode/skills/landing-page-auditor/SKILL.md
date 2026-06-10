---
name: landing-page-auditor
description: Audits a landing page for CTA clarity, form friction, value proposition, and trust signals. Use when the user wants to improve conversion rate of a page.
---

# Landing Page Auditor

Use `webfetch` to retrieve the page content, then evaluate:

1. **Value proposition** — is it clear within 5 seconds? Above the fold?
2. **Primary CTA** — is there exactly one main action? Text is action-oriented?
3. **CTA visibility** — contrasting color? Above the fold? Repeated?
4. **Form friction** — how many fields? Is it asking for too much?
5. **Trust signals** — testimonials, logos, security badges, guarantees?
6. **Mobile responsiveness** — does the page break on small screens?
7. **Loading speed** — perceived: is there heavy media above the fold?

Output: Issues found (per category) + specific fix recommendations ranked by conversion impact (high/medium/low).
