import React from 'react';
import { Facebook, Mail, ArrowUp } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioData.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#120e11] py-12 px-6 sm:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Monogram */}
        <div className="flex items-center gap-3">
          <img
            src="/images/elizalde_ep_logo_hd.png"
            alt="Elizalde Pelaez EP Monogram Logo"
            className="w-9 h-9 object-contain rounded-full shadow-xs shrink-0"
            width="36"
            height="36"
          />
          <div className="text-left">
            <p className="font-display font-bold text-sm text-palette-charcoal dark:text-white tracking-tight">
              {portfolioConfig.personal.name}
            </p>
            <p className="font-mono text-[10px] text-palette-charcoal/50 dark:text-white/50">
              Computer Programming NC-IV &bull; BiPSU
            </p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <nav className="flex flex-wrap justify-center gap-6 font-mono text-xs text-palette-charcoal/70 dark:text-white/70">
          <a href="#hero" className="hover:text-palette-sunset transition-colors">Home</a>
          <a href="#projects" className="hover:text-palette-sunset transition-colors">Projects</a>
          <a href="#skills" className="hover:text-palette-sunset transition-colors">Skills</a>
          <a href="#certificates" className="hover:text-palette-sunset transition-colors">Certificates</a>
          <a href="#contact" className="hover:text-palette-sunset transition-colors">Contact</a>
        </nav>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61577365681852"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-palette-charcoal dark:text-white hover:bg-palette-sunset hover:text-white transition-colors"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioConfig.contact.email}`}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-palette-charcoal dark:text-white hover:bg-palette-sunset hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-palette-charcoal dark:text-white hover:bg-palette-sunset hover:text-white hover:border-transparent transition-colors shadow-xs cursor-pointer"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Dynamic Copyright */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 text-center font-mono text-[11px] text-palette-charcoal/50 dark:text-white/50">
        &copy; {currentYear} Elizalde Jr. B. Pelaez. All rights reserved.
      </div>
    </footer>
  );
}
