import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/common/Navbar.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import SkillsSection from './components/sections/SkillsSection.jsx';
import CertificatesSection from './components/sections/CertificatesSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import Footer from './components/common/Footer.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#120e11] text-palette-charcoal dark:text-white transition-colors duration-300 selection:bg-palette-sunset/20">
        {/* Background Decorative Ambient Gradients (Clean subtle neutral tones, NO PINK) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-slate-100/70 dark:bg-white/5 blur-3xl" />
          <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-slate-50 dark:bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 dark:bg-orange-500/5 blur-3xl" />
        </div>

        {/* Official Sticky Glassmorphic Navbar with Theme Switcher */}
        <Navbar />

        {/* Main Website Content */}
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificatesSection />
          <ContactSection />
        </main>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
