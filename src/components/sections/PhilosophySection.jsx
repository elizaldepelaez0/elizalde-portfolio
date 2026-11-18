import React from 'react';
import { Compass, Sparkles, Quote, Heart, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';

export default function PhilosophySection() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-20"
    >
      <div id="philosophy" className="sr-only" />
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-palette-rose/15 via-palette-peach/20 to-palette-sunset/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-palette-soft-pink blur-2xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/80 border border-palette-rose/30 text-palette-charcoal shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-palette-sunset" />
            <span>MY PERSONAL PHILOSOPHY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-palette-charcoal tracking-tight">
            Every <span className="text-palette-sunset">Lesson</span> Has a{' '}
            <span className="text-gradient-sunset">Meaning.</span>
          </h2>
        </div>

        {/* Editorial Philosophy Statement Card */}
        <div className="relative">
          {/* Subtle Outer Glow Ring */}
          <div className="absolute -inset-2 sm:-inset-4 rounded-[2.5rem] bg-gradient-to-r from-palette-sunset/20 via-palette-rose/20 to-palette-peach/25 blur-xl pointer-events-none" />

          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-white/90 p-8 sm:p-12 lg:p-16 shadow-card-hover space-y-10">
            
            {/* Top Ornamental Badge */}
            <div className="flex items-center justify-between border-b border-palette-rose/20 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-palette-sunset to-palette-rose text-white flex items-center justify-center shadow-sunset-glow">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-palette-charcoal/60">
                <Compass className="w-4 h-4 text-palette-sunset animate-spin" style={{ animationDuration: '12s' }} />
                <span>The Learning Journey</span>
              </div>
            </div>

            {/* Main Message Typography */}
            <div className="space-y-6 text-palette-charcoal">
              <p className="font-display font-medium text-xl sm:text-2xl lg:text-3xl leading-relaxed text-palette-charcoal/90">
                &ldquo;Every <span className="text-palette-sunset font-bold underline decoration-palette-rose/40 decoration-wavy underline-offset-8">lesson</span>, every{' '}
                <span className="text-palette-rose font-bold">failure</span>, and every problem carries a deeper meaning in life. Each experience teaches us something, shapes who we become, and reminds us that{' '}
                <span className="font-bold text-gradient-sunset">growth comes from the journey</span>, not just the destination.&rdquo;
              </p>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-palette-charcoal/75 leading-relaxed pt-2">
                I believe that every challenge is an <span className="font-semibold text-palette-charcoal">opportunity to learn</span>, every mistake is a <span className="font-semibold text-palette-charcoal">chance to improve</span>, and every experience is a step toward becoming a <span className="font-semibold text-palette-sunset">better version of myself</span>.
              </p>
            </div>

            {/* Growth & Journey Decorative Graphic */}
            <div className="pt-6 border-t border-palette-rose/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Stepper Progress Graphic */}
              <div className="flex items-center gap-3 font-mono text-xs text-palette-charcoal/70">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-palette-soft-pink border border-palette-rose/30 font-semibold text-palette-charcoal">
                  <span className="w-2 h-2 rounded-full bg-palette-rose" /> Experience
                </span>
                <span className="text-palette-sunset font-bold">&rarr;</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-palette-sunset/10 border border-palette-sunset/30 font-semibold text-palette-sunset">
                  <span className="w-2 h-2 rounded-full bg-palette-sunset animate-pulse" /> Growth
                </span>
                <span className="text-palette-sunset font-bold">&rarr;</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-palette-peach/40 font-semibold text-palette-charcoal">
                  <span className="w-2 h-2 rounded-full bg-palette-peach" /> Purpose
                </span>
              </div>

              {/* Emotional Closing Statement */}
              <div className="text-center sm:text-right">
                <p className="font-display font-bold text-base sm:text-lg text-gradient-sunset tracking-tight">
                  &ldquo;Still learning. Still growing. Still becoming.&rdquo;
                </p>
                <p className="font-mono text-[11px] text-palette-charcoal/50 mt-0.5">
                  &mdash; Elizalde Jr. B. Pelaez
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
