import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * PlaceholderBadge Component
 * Elegant, intentional placeholders that honor the "DESIGN FIRST. PERSONAL CONTENT LATER" rule.
 * 
 * @param {string} label - Placeholder description text (e.g. "Profile Photo Placeholder")
 * @param {string} variant - 'box' | 'pill' | 'text' | 'image'
 * @param {string} dimensions - Optional hint like "400 x 400px"
 * @param {ReactNode} icon - Optional custom icon
 */
export default function PlaceholderBadge({
  label = 'Content Placeholder',
  variant = 'pill',
  dimensions,
  icon: Icon = Sparkles,
  className = '',
}) {
  if (variant === 'pill') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-palette-soft-pink/80 border border-palette-rose/40 text-palette-charcoal/80 select-none ${className}`}>
        {Icon && <Icon className="w-3 h-3 text-palette-sunset shrink-0" />}
        <span>{label}</span>
      </span>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`p-4 rounded-xl border border-dashed border-palette-rose/40 bg-white/50 text-palette-charcoal/70 text-sm font-mono flex items-center gap-2 select-none ${className}`}>
        <span className="w-2 h-2 rounded-full bg-palette-peach shrink-0" />
        <span>{label}</span>
      </div>
    );
  }

  if (variant === 'image') {
    return (
      <div className={`relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-palette-rose/50 bg-gradient-to-br from-white/80 via-palette-soft-pink/40 to-palette-peach/20 p-8 text-center overflow-hidden transition-all duration-300 hover:border-palette-sunset/70 select-none ${className}`}>
        {/* Subtle decorative background circles */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-palette-rose/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-palette-peach/20 blur-2xl pointer-events-none" />

        <div className="w-14 h-14 rounded-2xl bg-white shadow-card-subtle flex items-center justify-center text-palette-sunset mb-3 border border-palette-rose/20">
          <Icon className="w-7 h-7" />
        </div>
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-palette-charcoal">
          {label}
        </p>
        {dimensions && (
          <p className="mt-1 font-mono text-[11px] text-palette-charcoal/50">
            {dimensions}
          </p>
        )}
      </div>
    );
  }

  // Default box
  return (
    <div className={`flex items-center justify-center p-6 rounded-2xl border border-dashed border-palette-rose/40 bg-white/60 font-mono text-xs text-palette-charcoal/70 select-none ${className}`}>
      <span className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-palette-sunset" />}
        {label}
        {dimensions && <span className="text-palette-charcoal/40">({dimensions})</span>}
      </span>
    </div>
  );
}
