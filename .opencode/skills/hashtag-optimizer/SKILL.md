---
name: hashtag-optimizer
description: Researches relevant hashtags for a topic and ranks them by volume and competition. Use when the user needs hashtag suggestions for social media posts.
---

# Hashtag Optimizer

Given a topic/keyword, generate:

1. **3 high-volume hashtags** — broad, millions of posts (use `websearch` to gauge popularity).
2. **5 medium-volume hashtags** — niche-specific, 100k-1M posts.
3. **3 low-competition hashtags** — highly targeted, <100k posts.

Rules:
- Mix broad + niche hashtags (total 10-15 for Instagram, 3-5 for LinkedIn, 2-3 for TikTok).
- Include 1-2 branded hashtags.
- No banned or shadowbanned hashtags.
- Group by category: content, audience, location, brand.

Output as: `#Hashtag` — volume estimate — competition level
