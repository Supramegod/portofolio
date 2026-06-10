---
name: campaign-workflow-generator
description: Creates a step-by-step campaign workflow with task assignments to specialist agents. Use when the user needs a structured marketing campaign plan with agent delegation.
---

# Campaign Workflow Generator

Given a campaign goal and target audience:

1. Break the campaign into phases: Research → Strategy → Creation → Execution → Analysis.
2. For each phase, list concrete tasks.
3. Assign each task to the appropriate agent using `@agent-name`:
   - `@seo-master` — technical audits and on-page checks
   - `@keyword-strategist` — keyword research
   - `@content-writer` — article/copy creation
   - `@link-builder` — outreach and backlinks
   - `@social-media-strategist` — social content
   - `@ad-copywriter` — ad copy
   - `@conversion-rate-expert` — CRO audits
   - `@analytics-translator` — data analysis
   - `@frontend-seo` — technical fixes
4. Add timeline estimates per phase.

Output: A table with Phase | Task | Assigned Agent | Estimated Duration
