import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, MessageCircle, X, Compass, Lightbulb } from 'lucide-react';
import Button from '../common/Button.jsx';
import { portfolioConfig } from '../../data/portfolioData.js';

export default function HeroSection() {
  const [isThoughtOpen, setIsThoughtOpen] = useState(false);
  const bubbleRef = useRef(null);

  // Toggle thought bubble
  const toggleThought = () => {
    setIsThoughtOpen((prev) => !prev);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isThoughtOpen) {
        setIsThoughtOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isThoughtOpen]);

  // Close on clicking outside bubble
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bubbleRef.current && !bubbleRef.current.contains(e.target) && isThoughtOpen) {
        setIsThoughtOpen(false);
      }
    };
    if (isThoughtOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isThoughtOpen]);

  return (
    <section
      id="hero"
      className="relative pt-20 sm:pt-24 pb-12 overflow-hidden"
    >
      {/* Decorative Subtle Geometric Elements (NO PINK) */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-slate-100/70 dark:bg-white/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-orange-500/5 dark:bg-orange-500/5 blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Container with Interactive Portrait, Name & Subject */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative Subtle Glow */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-palette-sunset via-palette-peach to-amber-200 opacity-20 blur-xl" />

              {/* Main Card Frame */}
              <div className="relative rounded-[2rem] bg-white dark:bg-[#1c161b] border border-slate-200 dark:border-white/10 p-6 sm:p-7 shadow-card-hover text-center space-y-4">
                
                {/* Interactive Clickable Profile Photo */}
                <div className="relative group">
                  <button
                    type="button"
                    onClick={toggleThought}
                    aria-expanded={isThoughtOpen}
                    aria-haspopup="dialog"
                    aria-label={isThoughtOpen ? "Close thoughts bubble" : "Click to discover my thoughts and personal philosophy"}
                    className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-white/20 shadow-sunset-glow ring-4 ring-slate-100 dark:ring-white/15 cursor-pointer block focus:outline-none focus:ring-4 focus:ring-palette-sunset transition-transform duration-300 group-hover:scale-105 active:scale-95"
                  >
                    <img
                      src="/profile.jpg"
                      alt="Elizalde Jr. B. Pelaez"
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-palette-charcoal/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                      <Lightbulb className="w-7 h-7 text-palette-peach mb-1 animate-bounce" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-center">
                        {isThoughtOpen ? 'Click to Close' : 'Click for Thoughts'}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Profile Details Container */}
                <div className="pt-1">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-card-subtle text-center space-y-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-palette-charcoal dark:text-white tracking-tight">
                      Elizalde Jr. B. Pelaez
                    </h3>
                    <div className="space-y-0.5">
                      <p className="font-sans text-xs sm:text-sm font-semibold text-palette-charcoal dark:text-white">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="font-sans text-xs text-palette-charcoal/70 dark:text-white/70">
                        Biliran Province State University (BiPSU)
                      </p>
                    </div>
                    <div className="pt-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/15 font-mono text-[11px] text-palette-charcoal dark:text-white font-semibold">
                        Computer Programming NC-IV
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio Container & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Introduction Card & Bio */}
            <div className="bg-white dark:bg-[#1c161b] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-card-subtle space-y-4 max-w-2xl">
              <div className="space-y-4 text-palette-charcoal/90 dark:text-white/90 text-sm sm:text-base leading-relaxed font-sans">
                <p className="font-medium text-palette-charcoal dark:text-white text-base sm:text-lg">
                  Hello! I'm a fourth-year Bachelor of Science in Computer Science student at <span className="font-semibold text-palette-sunset">Biliran Province State University (BiPSU)</span>.
                </p>
                <p className="text-palette-charcoal/80 dark:text-white/80">
                  I'm interested in <strong className="font-bold text-palette-charcoal dark:text-white">UI design and frontend development</strong>, particularly in creating interfaces that are visually appealing, organized, and easy to use. I enjoy exploring different design ideas, experimenting with layouts and colors, and learning how to turn creative concepts into functional websites.
                </p>
                <p className="text-palette-charcoal/80 dark:text-white/80">
                  I'm still growing and developing my skills through academic projects and hands-on experience. I believe that every project brings a new opportunity to learn, improve, and discover what I'm capable of creating.
                </p>
              </div>
            </div>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
              >
                View Featured Projects
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
              >
                Contact Form
              </Button>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#certificates"
            className="flex flex-col items-center gap-2 text-xs font-mono text-palette-charcoal/50 hover:text-palette-sunset transition-colors"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-palette-sunset" />
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Interactive Thought Bubble Modal (Clean White & Slate, NO PINK)             */}
      {/* Designed so text NEVER overflows                                         */}
      {/* ========================================================================= */}
      {isThoughtOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="The Learning Journey Thoughts"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-palette-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div
            ref={bubbleRef}
            className="relative w-full max-w-2xl bg-white dark:bg-[#211a20] border-2 border-slate-200 dark:border-white/15 rounded-[2.5rem] sm:rounded-[3.2rem] p-6 sm:p-10 shadow-2xl text-center animate-in zoom-in-95 duration-200 overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsThoughtOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-slate-50 dark:bg-white/10 hover:bg-palette-sunset hover:text-white border border-slate-200 dark:border-white/10 text-palette-charcoal dark:text-white transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-palette-sunset"
              aria-label="Close thought bubble"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content Comfortably Contained Inside Bubble */}
            <div className="relative z-10 space-y-4 sm:space-y-5">
              
              {/* Small Label */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-palette-sunset bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/10 shadow-xs uppercase">
                <Compass className="w-3.5 h-3.5 text-palette-sunset" />
                <span>THE LEARNING JOURNEY</span>
              </div>

              {/* Main Heading */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-palette-charcoal dark:text-white tracking-tight">
                Every <span className="text-palette-sunset">Lesson</span> Has a{' '}
                <span className="text-gradient-sunset">Meaning.</span>
              </h3>

              {/* Main Quote */}
              <div className="py-1 px-2">
                <p className="font-display font-medium text-sm sm:text-base lg:text-lg leading-relaxed text-palette-charcoal/90 dark:text-white/90 italic">
                  &ldquo;Every <span className="text-palette-sunset font-bold">lesson</span>, every{' '}
                  <span className="text-palette-sunset font-bold">failure</span>, and every problem carries a deeper meaning in life. Each experience teaches us something, shapes who we become, and reminds us that{' '}
                  <span className="font-bold text-palette-charcoal dark:text-white">growth comes from the journey</span>, not just the destination.&rdquo;
                </p>
              </div>

              {/* Supporting Message */}
              <p className="font-sans text-xs sm:text-sm text-palette-charcoal/80 dark:text-white/80 leading-relaxed max-w-xl mx-auto px-2">
                I believe that every challenge is an <strong className="font-semibold text-palette-charcoal dark:text-white">opportunity to learn</strong>, every mistake is a <strong className="font-semibold text-palette-charcoal dark:text-white">chance to improve</strong>, and every experience is a step toward becoming a <strong className="font-semibold text-palette-sunset">better version of myself</strong>.
              </p>

              {/* Journey Progression Stepper */}
              <div className="pt-1 flex items-center justify-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-palette-charcoal dark:text-white font-semibold shadow-xs">
                  Experience
                </span>
                <span className="text-palette-sunset font-bold">&rarr;</span>
                <span className="px-3 py-1 rounded-full bg-palette-sunset/15 border border-palette-sunset/40 text-palette-sunset font-bold shadow-xs">
                  Growth
                </span>
                <span className="text-palette-sunset font-bold">&rarr;</span>
                <span className="px-3 py-1 rounded-full bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-palette-charcoal dark:text-white font-semibold shadow-xs">
                  Purpose
                </span>
              </div>

              {/* Closing Statement & Signature */}
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-0.5">
                <p className="font-display font-bold text-sm sm:text-base text-gradient-sunset tracking-tight">
                  &ldquo;Still learning. Still growing. Still becoming.&rdquo;
                </p>
                <p className="font-mono text-xs text-palette-charcoal/60 dark:text-white/60">
                  &mdash; Elizalde Jr. B. Pelaez
                </p>
              </div>

            </div>

            {/* Thought Tail at Bottom Left pointing towards Elizalde's head */}
            <div className="absolute -bottom-7 left-12 sm:left-20">
              <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
                <path d="M4 0 C12 16 22 26 38 32 C26 24 18 14 16 0 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" strokeLinejoin="round" />
              </svg>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
