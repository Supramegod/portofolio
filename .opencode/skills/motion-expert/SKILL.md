---
name: motion-expert
description: Animator — mikro-interaksi hover, Framer Motion stagger, Lottie animation di HeroSection.
---

# Motion Expert

Spesialis animasi untuk pengalaman pengguna yang hidup. Mengelola Framer Motion dan Lottie.

## Target Files

| File | Animasi |
|------|---------|
| `src/assets/components/home/HeroSection.jsx` | Stagger entrance, Lottie, hover CTA |
| `src/assets/components/home/ServiceSection.jsx` | Stagger card, hover scale + glow |
| `src/assets/components/home/IntroOverlay.jsx` | Typewriter, fade out |
| `src/assets/components/home/ContactSection.jsx` | Stagger icon + fade up |
| `src/assets/components/portofolio/ProjectContent.jsx` | Card hover, tab transition |
| `src/pages/profile/AboutMe.jsx` | Section reveal whileInView |

## FramerMotionArchitect

Pattern standar:

```jsx
import { motion } from "framer-motion";

// Per-item animation
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Stagger container
<motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
  initial="hidden" whileInView="show" viewport={{ once: true }}>
  
  <motion.div variants={item}>...</motion.div>
  <motion.div variants={item}>...</motion.div>
</motion.div>
```

## TransitionOptimizer

| Efek | Duration | Easing | Trigger |
|------|----------|--------|---------|
| Page enter | 0.5s | easeOut | mount |
| Card hover | 0.3s | spring | whileHover |
| Stagger antar item | 0.08-0.12s delay | — | whileInView |
| Typewriter | 50ms per char | — | mount |
| Hover glow | 0.3s | easeOut | whileHover |

## Lottie

- File JSON di `src/assets/animation/`
- Import: `import Lottie from "lottie-react"`
- Position absolute di HeroSection sebagai background dekoratif
- Jangan block interaksi user (pointer-events-none)
