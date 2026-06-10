---
name: ux-friction-identifier
description: Analyzes visual elements on a page that disrupt conversion flow — layout, color contrast, button placement, and cognitive load. Use when the user asks about UX issues hurting conversions.
---

# UX Friction Identifier

Given a page description or URL (via `webfetch`):

1. **Layout clarity** — is the visual hierarchy clear? Is there unnecessary clutter?
2. **Color & contrast** — do CTAs stand out? Is text readable against backgrounds?
3. **Button placement** — are CTAs where users expect them (end of content, sticky, etc.)?
4. **Cognitive load** — too many options? Too much text? Decision paralysis risk?
5. **Distraction audit** — autoplay videos, pop-ups, flashing banners, excessive animations.
6. **Form UX** — clear labels? Error messages visible? Progress indicator for multi-step?

Output: A ranked list of friction points with the specific element, why it hurts conversion, and a fix suggestion.
