import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioData.js';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme, isDark } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  // Detect scroll to apply glassmorphic backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracker
      const sections = ['hero', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#1c161b]/90 backdrop-blur-md shadow-card-subtle border-b border-slate-200/80 dark:border-white/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Personal EP Monogram Logo & Brand Name */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-palette-sunset rounded-xl"
          aria-label="Elizalde Pelaez Portfolio Homepage"
        >
          <img
            src="/images/elizalde_ep_logo_hd.png"
            alt="Elizalde Pelaez EP Monogram Logo"
            className="w-[42px] h-[42px] object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0"
            width="42"
            height="42"
          />
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-sm tracking-tight text-palette-charcoal dark:text-white group-hover:text-palette-sunset transition-colors">
              ELIZALDE PELAEZ
            </span>
            <span className="font-mono text-[10px] text-palette-charcoal/50 dark:text-white/50 tracking-wider">
              PROGRAMMING NC-IV
            </span>
          </div>
        </a>

        {/* Right Section: Desktop Navigation Links + Dark/Light Theme Switcher */}
        <div className="hidden lg:flex items-center gap-3">
          <nav className="flex items-center gap-1 bg-white/90 dark:bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-palette-sunset text-white shadow-sm font-semibold'
                      : 'text-palette-charcoal/80 dark:text-white/80 hover:text-palette-charcoal dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle Button (Desktop) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/15 text-palette-charcoal dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-palette-sunset"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-palette-peach animate-in spin-in-90 duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-palette-sunset animate-in spin-in-90 duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Right Controls: Theme Toggle + Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Theme Toggle Button (Mobile) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/15 text-palette-charcoal dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-palette-peach" />
            ) : (
              <Moon className="w-4 h-4 text-palette-sunset" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/15 text-palette-charcoal dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-palette-sunset" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#211A20]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                    isActive
                      ? 'bg-palette-sunset text-white font-semibold'
                      : 'text-palette-charcoal dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
