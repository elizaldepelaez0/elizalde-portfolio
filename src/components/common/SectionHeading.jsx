import React from 'react';

/**
 * SectionHeading Component
 * Standardized editorial header for all portfolio sections.
 * 
 * @param {string} badge - Eyebrow category tag (e.g. "// 01. ABOUT ME")
 * @param {string} title - Main section headline
 * @param {string} subtitle - Optional descriptive subtitle
 * @param {string} align - 'left' | 'center'
 */
export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-4 bg-white/80 border border-palette-rose/30 text-palette-charcoal shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-palette-sunset animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-palette-charcoal">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-palette-charcoal/70 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
