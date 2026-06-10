---
name: task-delegator
description: Automatically routes a user's request to the best-suited agent using @mentions. Use when the user gives a task that fits one of the specialist agents.
---

# Task Delegator

Map user requests to the correct agent:

| If the user asks about... | Delegate to... |
|---|---|
| SEO audit, meta tags, heading structure, on-page issues | `@seo-master` |
| Keyword research, keyword density, related keywords | `@keyword-strategist` |
| Writing articles, blog posts, copy, readability | `@content-writer` |
| Backlinks, guest posts, outreach emails, link building | `@link-builder` |
| Social media content, hooks, hashtags, viral strategy | `@social-media-strategist` |
| Paid ads, Google Ads, Meta Ads, TikTok Ads, ad copy | `@ad-copywriter` |
| Conversion rate, landing page audit, UX friction, CRO | `@conversion-rate-expert` |
| Analytics, GA4, Search Console, metrics, ROI | `@analytics-translator` |
| HTML fixes, image alt, Core Web Vitals, page speed | `@frontend-seo` |
| Campaign planning, coordination, workflow | `@project-manager-marketing` |

When delegating:
1. Summarize the user's request briefly.
2. Mention the agent with `@agent-name`.
3. Include any relevant context or files.
4. Ask the agent to report back with findings/recommendations.
