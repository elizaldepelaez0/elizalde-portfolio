import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, MessageCircle, X, Compass, Lightbulb, Heart } from 'lucide-react';

/**
 * LearningJourneyBubble Component
 * Interactive Personal Philosophy section featuring Elizalde's portrait.
 * Clicking the portrait triggers a custom SVG pink thought bubble revealing "The Learning Journey".
 */
export default function LearningJourneyBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const portraitButtonRef = useRef(null);

  // Toggle thought bubble
  const toggleBubble = () => {
    setIsOpen((prev) => !prev);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        portraitButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close on clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-6 sm:px-8 overflow-hidden scroll-mt-20"
      aria-label="Personal Philosophy and The Learning Journey"
    >
      <div id="philosophy" className="sr-only" />

      {/* Decorative Ambient Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-palette-rose/15 via-palette-peach/20 to-palette-sunset/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/80 border border-palette-rose/30 text-palette-charcoal shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-palette-sunset" />
            <span>MY PERSONAL PHILOSOPHY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-palette-charcoal tracking-tight">
            The <span className="text-gradient-sunset">Learning Journey</span>
          </h2>
          
          <p className="max-w-xl mx-auto font-sans text-sm sm:text-base text-palette-charcoal/70">
            Click on my portrait below to explore the core beliefs, mindset, and thoughts that guide my journey as an aspiring web developer.
          </p>
        </div>

        {/* Interactive Center Stage Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14">
          
          {/* Portrait Trigger Container */}
          <div className="flex flex-col items-center text-center space-y-4 shrink-0">
            
            {/* Interactive Portrait Button */}
            <div className="relative group">
              {/* Outer Pulsing Glow Ring */}
              <div
                className={`absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-palette-sunset via-palette-rose to-palette-peach opacity-60 blur-xl transition-all duration-500 ${
                  isOpen ? 'opacity-90 scale-105' : 'group-hover:opacity-80 group-hover:scale-105 animate-pulse'
                }`}
              />

              <button
                ref={portraitButtonRef}
                type="button"
                onClick={toggleBubble}
                aria-expanded={isOpen}
                aria-haspopup="dialog"
                aria-label={isOpen ? "Close thought bubble" : "Click to discover my thoughts and personal philosophy"}
                className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-palette-rose/50 focus:outline-none focus:ring-4 focus:ring-palette-sunset focus:ring-offset-4 cursor-pointer transition-all duration-300 transform group-hover:scale-105 active:scale-95 block"
              >
                <img
                  src="/profile.jpg"
                  alt="Elizalde Jr. B. Pelaez"
                  className="w-full h-full object-cover object-top"
                />

                {/* Hover overlay hint */}
                <div className={`absolute inset-0 bg-palette-charcoal/40 backdrop-blur-[2px] flex flex-col items-center justify-center text-white transition-opacity duration-300 p-4 ${
                  isOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <Lightbulb className="w-8 h-8 text-palette-peach mb-1 animate-bounce" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-center">
                    Click to Discover Thoughts
                  </span>
                </div>
              </button>

              {/* Status Indicator Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold shadow-md transition-all duration-300 ${
                  isOpen
                    ? 'bg-palette-sunset text-white ring-2 ring-white'
                    : 'bg-white text-palette-charcoal border border-palette-rose/40 group-hover:border-palette-sunset'
                }`}>
                  <MessageCircle className="w-3.5 h-3.5 text-palette-rose" />
                  {isOpen ? 'Thoughts Revealed (Click to Close)' : 'Click to discover my thoughts'}
                </span>
              </div>
            </div>

            {/* Name / Academic Tag */}
            <div className="pt-3">
              <h3 className="font-display font-bold text-xl text-palette-charcoal">
                Elizalde Jr. B. Pelaez
              </h3>
              <p className="font-mono text-xs text-palette-sunset font-medium">
                Computer Programming NC-IV &bull; BiPSU
              </p>
            </div>
          </div>

          {/* Ascending Floating Thought Bubbles (connector between head and main cloud) */}
          {isOpen && (
            <div className="hidden lg:flex flex-col items-center gap-2 absolute top-20 left-[26%] z-20 pointer-events-none animate-in fade-in duration-300">
              <div className="w-3 h-3 rounded-full bg-palette-soft-pink border-2 border-palette-rose shadow-sm animate-pulse" />
              <div className="w-5 h-5 rounded-full bg-palette-soft-pink border-2 border-palette-rose shadow-md animate-pulse" style={{ animationDelay: '150ms' }} />
            </div>
          )}

          {/* The Thought Bubble Container */}
          {isOpen ? (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="The Learning Journey Philosophy"
              className="relative w-full max-w-2xl lg:max-w-2xl animate-in zoom-in-95 fade-in duration-300"
            >
              {/* Close Button on Bubble Corner */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-white/90 hover:bg-palette-sunset hover:text-white border border-palette-rose/30 text-palette-charcoal/80 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-palette-sunset"
                aria-label="Close thought bubble"
                title="Close (or press Esc)"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Thought Bubble SVG Background Frame */}
              <div className="relative w-full filter drop-shadow-[0_20px_40px_rgba(247,141,167,0.38)]">
                
                {/* SVG Cloud Shape with Scalable Non-Scaling Stroke and Curved Tail */}
                <svg
                  viewBox="0 0 820 620"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                >
                  <defs>
                    <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF0F3" />
                      <stop offset="100%" stopColor="#FFE8EE" />
                    </linearGradient>
                  </defs>
                  
                  {/* Cloud Body + Tail Path */}
                  <path
                    vectorEffect="non-scaling-stroke"
                    d="
                      M 240 520
                      C 195 550 155 595 140 615
                      C 170 575 220 545 275 528
                      C 325 540 380 540 430 525
                      C 480 538 540 530 585 500
                      C 635 470 675 425 685 365
                      C 725 320 725 250 690 195
                      C 710 140 675 85 615 60
                      C 555 35 495 48 450 70
                      C 405 40 345 40 300 65
                      C 255 40 195 48 150 80
                      C 100 70 50 105 25 155
                      C -5 215 5 280 40 325
                      C 10 375 25 440 70 480
                      C 115 518 180 515 225 502
                      C 230 508 235 514 240 520
                      Z
                    "
                    fill="url(#bubbleGradient)"
                    stroke="#F78DA7"
                    strokeWidth="5"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Content Inside Thought Bubble */}
                <div className="relative z-10 p-8 sm:p-12 lg:p-14 text-center space-y-5">
                  
                  {/* Small Label */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-palette-sunset bg-white/80 border border-palette-rose/30 shadow-xs uppercase">
                    <Compass className="w-3 h-3 text-palette-sunset" />
                    <span>THE LEARNING JOURNEY</span>
                  </div>

                  {/* Main Heading */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-palette-charcoal tracking-tight">
                    Every <span className="text-palette-sunset">Lesson</span> Has a{' '}
                    <span className="text-gradient-sunset">Meaning.</span>
                  </h3>

                  {/* Main Quote */}
                  <div className="relative py-1">
                    <p className="font-display font-medium text-base sm:text-lg lg:text-xl leading-relaxed text-palette-charcoal/90 italic">
                      &ldquo;Every <span className="text-palette-sunset font-bold">lesson</span>, every{' '}
                      <span className="text-palette-rose font-bold">failure</span>, and every problem carries a deeper meaning in life. Each experience teaches us something, shapes who we become, and reminds us that{' '}
                      <span className="font-bold text-palette-charcoal">growth comes from the journey</span>, not just the destination.&rdquo;
                    </p>
                  </div>

                  {/* Supporting Message */}
                  <p className="font-sans text-xs sm:text-sm lg:text-base text-palette-charcoal/80 leading-relaxed max-w-xl mx-auto">
                    I believe that every challenge is an <strong className="font-semibold text-palette-charcoal">opportunity to learn</strong>, every mistake is a <strong className="font-semibold text-palette-charcoal">chance to improve</strong>, and every experience is a step toward becoming a <strong className="font-semibold text-palette-sunset">better version of myself</strong>.
                  </p>

                  {/* Journey Progression Stepper */}
                  <div className="pt-2 flex items-center justify-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-white border border-palette-rose/30 text-palette-charcoal font-semibold shadow-xs">
                      Experience
                    </span>
                    <span className="text-palette-sunset font-bold">&rarr;</span>
                    <span className="px-2.5 py-1 rounded-full bg-palette-sunset/15 border border-palette-sunset/40 text-palette-sunset font-bold shadow-xs">
                      Growth
                    </span>
                    <span className="text-palette-sunset font-bold">&rarr;</span>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-palette-peach/40 text-palette-charcoal font-semibold shadow-xs">
                      Purpose
                    </span>
                  </div>

                  {/* Closing Statement & Signature */}
                  <div className="pt-3 border-t border-palette-rose/25 space-y-0.5">
                    <p className="font-display font-bold text-sm sm:text-base text-gradient-sunset tracking-tight">
                      &ldquo;Still learning. Still growing. Still becoming.&rdquo;
                    </p>
                    <p className="font-mono text-xs text-palette-charcoal/60">
                      &mdash; Elizalde Jr. B. Pelaez
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ) : (
            /* Prompt banner when closed */
            <div className="max-w-md p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-dashed border-palette-rose/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-palette-soft-pink border border-palette-rose/30 text-palette-sunset flex items-center justify-center mx-auto shadow-sm">
                <Lightbulb className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-display font-bold text-lg text-palette-charcoal">
                Thoughts &amp; Philosophy Hidden
              </h4>
              <p className="font-sans text-xs text-palette-charcoal/70 leading-relaxed">
                Click on the portrait of Elizalde to reveal the pink thought bubble containing the personal philosophy behind his learning journey.
              </p>
              <button
                type="button"
                onClick={toggleBubble}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-palette-sunset text-white text-xs font-mono font-semibold hover:bg-[#F2782B] transition-all shadow-sunset-glow"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open Thought Bubble</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
