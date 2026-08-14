import React from "react";

import { Navbar } from "../assets/components/navbar/Navbar";
import { Footer } from "../assets/components/navbar/Footer";
import { HeroSection } from "../assets/components/home/HeroSection";
import { WorkSection } from "../assets/components/home/WorkSection";
import { AboutStrip } from "../assets/components/home/AboutStrip";
import { ContactSection } from "../assets/components/home/ContactSection";
import { HomeSEO } from "../assets/components/seo/HomeSEO";

/**
 * Home. Four sections, in reading order: who / what / why / how to reach.
 * Each section owns its own `id` and copy — this file only sequences them.
 *
 * Anchor links (#work, #about, #contact) rely on native scrolling. No
 * `scroll-behavior: smooth` and no scrollIntoView: smooth scrolling fights
 * `prefers-reduced-motion` and adds nothing for a three-stop page.
 */
export const Homepage = () => (
  <div className="min-h-screen bg-paper text-ink">
    <HomeSEO />
    <div className="grain" aria-hidden="true" />

    <Navbar />

    <main id="main">
      <HeroSection />
      <WorkSection />
      <AboutStrip />
      <ContactSection />
    </main>

    <Footer />
  </div>
);
