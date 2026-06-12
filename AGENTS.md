# AGENTS.md

## Multi-Agent Workspace

This project uses specialized agents to perform analysis, planning, implementation, review, SEO, and design tasks.

---

# Agent Authority Matrix

| Agent | Read | Review | Propose | Modify |
|---------|---------|---------|---------|---------|
| @design-coordinator | ✅ | ✅ | ✅ | ✅ |
| @ui-designer | ✅ | ✅ | ✅ | ❌ |
| @motion-expert | ✅ | ✅ | ✅ | ❌ |
| @code-viewer | ✅ | ✅ | ✅ | ❌ |
| @seo-master | ✅ | ✅ | ✅ | ❌ |
| @keyword-strategist | ✅ | ✅ | ✅ | ❌ |
| @content-writer | ✅ | ✅ | ✅ | ❌ |
| @link-builder | ✅ | ✅ | ✅ | ❌ |
| @social-media-strategist | ✅ | ✅ | ✅ | ❌ |
| @ad-copywriter | ✅ | ✅ | ✅ | ❌ |
| @conversion-rate-expert | ✅ | ✅ | ✅ | ❌ |
| @analytics-translator | ✅ | ✅ | ✅ | ❌ |
| @frontend-seo | ✅ | ✅ | ✅ | ❌ |
| @project-manager-marketing | ✅ | ✅ | ✅ | ❌ |
| @hrd-tester | ✅ | ✅ | ❌ | ❌ |
| @techlead-tester | ✅ | ✅ | ❌ | ❌ |

Only **@design-coordinator** may approve and execute source code modifications.

---

# Available Agents

## Design Team

### @design-coordinator
Role:
- Technical Lead
- Architecture Coordinator
- Final Decision Maker

Responsibilities:
- Coordinate all design agents.
- Merge recommendations.
- Approve implementation strategy.
- Execute code modifications.

---

### @ui-designer

Responsibilities:
- Layout Design
- Tailwind CSS v4
- Typography
- Responsive Design
- Design System Consistency

---

### @motion-expert

Responsibilities:
- Framer Motion
- Lottie Animation
- Loading States
- Hover Effects
- Scroll Animations
- Micro Interactions

---

### @code-viewer

Responsibilities:
- React 18 Audit
- JSX Review
- Accessibility Review
- Localization Review
- Bundle Size Audit
- Code Quality Validation

---

### @hrd-tester

Responsibilities:
- Simulate HR screening.
- Evaluate first impression.
- Review portfolio presentation.

---

### @techlead-tester

Responsibilities:
- Simulate CTO review.
- Evaluate architecture quality.
- Evaluate maintainability.

---

## Marketing Team

### @project-manager-marketing

Responsibilities:
- Coordinate all marketing agents.
- Consolidate SEO strategy.
- Prioritize execution roadmap.

---

### @seo-master
Technical SEO specialist.

### @keyword-strategist
Keyword research specialist.

### @content-writer
SEO content specialist.

### @link-builder
Backlink specialist.

### @social-media-strategist
Social media strategist.

### @ad-copywriter
Advertising copy specialist.

### @conversion-rate-expert
CRO specialist.

### @analytics-translator
GA4 and Search Console specialist.

### @frontend-seo
Core Web Vitals and frontend SEO specialist.

---

# Required Workflow

Every task must follow:

1. Analyze
2. Identify impacted files
3. Create implementation plan
4. Wait for approval
5. Implement changes
6. Review results
7. Report summary

Never skip planning unless explicitly requested.

---

# Design System Ownership

| Area | Primary Agent |
|--------|--------|
| Layout | @ui-designer |
| Animation | @motion-expert |
| React Audit | @code-viewer |
| SEO | @seo-master |
| Marketing | @project-manager-marketing |
| Architecture | @design-coordinator |

---

# Restrictions

Agents must not:

- Remove LanguageContext.
- Break React Router structure.
- Remove SEO components.
- Remove HelmetProvider.
- Change deployment configuration without approval.
- Introduce unnecessary dependencies.
- Hardcode multilingual content.