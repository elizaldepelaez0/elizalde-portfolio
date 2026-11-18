import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, X, ZoomIn, Sparkles, ShieldCheck } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioData.js';

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-20"
    >
      {/* Background Decorative Ambient Gradients (Clean subtle tones, NO PINK) */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-slate-100/70 dark:bg-white/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 rounded-full bg-orange-500/5 dark:bg-orange-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header (Cleaned as requested) */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-palette-charcoal dark:text-white tracking-tight">
            Certificates &amp; Accomplishments
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioConfig.certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-[#1c161b] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-card-subtle transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-palette-sunset/40 flex flex-col justify-between h-full group"
            >
              {/* Certificate Image Frame with Hover Overlay */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[16/10] bg-slate-100 dark:bg-black/30 overflow-hidden cursor-pointer select-none"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-palette-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
                  <span className="font-mono text-xs font-medium flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <ZoomIn className="w-3.5 h-3.5 text-palette-peach" /> Click to View Full
                  </span>
                  <span className="font-mono text-[11px] bg-palette-sunset/90 px-2.5 py-0.5 rounded-full font-semibold">
                    {cert.category}
                  </span>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 right-3 group-hover:opacity-0 transition-opacity">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/90 dark:bg-[#1a1419]/90 backdrop-blur-md text-palette-charcoal dark:text-white shadow-sm border border-slate-200 dark:border-white/10">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Issuer and Date */}
                  <div className="flex items-center justify-between text-xs font-mono text-palette-charcoal/60 dark:text-white/60">
                    <span className="flex items-center gap-1.5 text-palette-sunset font-semibold truncate max-w-[200px]">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      {cert.issuer.split('•')[0]}
                    </span>
                    <span className="flex items-center gap-1 shrink-0">
                      <Calendar className="w-3 h-3" />
                      {cert.date.split(',')[0]}
                    </span>
                  </div>

                  {/* Title with Symmetrical Height */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-palette-charcoal dark:text-white group-hover:text-palette-sunset transition-colors leading-snug line-clamp-2 min-h-[52px]">
                    {cert.title}
                  </h3>

                  {/* Recipient / Issuer text with Symmetrical Height */}
                  <p className="font-sans text-xs text-palette-charcoal/70 dark:text-white/70 leading-relaxed line-clamp-2 min-h-[34px]">
                    Awarded to <span className="font-medium text-palette-charcoal dark:text-white">{cert.recipient}</span> by {cert.issuer}.
                  </p>
                </div>

                {/* Skills tags and Action Button */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1.5 min-h-[52px]">
                    {cert.skillsCovered.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-100 dark:bg-white/10 border border-slate-200/80 dark:border-white/15 text-palette-charcoal/80 dark:text-white/80 font-medium h-fit"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID / Verification Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="w-full h-10 px-4 rounded-xl bg-slate-50 dark:bg-white/10 hover:bg-palette-sunset hover:text-white border border-slate-200 dark:border-white/20 hover:border-transparent text-palette-charcoal dark:text-white text-xs font-mono font-semibold transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-palette-sunset group-hover/btn:text-white" />
                    <span>Inspect Certificate Document</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Certificate Modal / Lightbox */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-palette-charcoal/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-[#211a20] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#1c161b] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-palette-sunset uppercase tracking-wider">
                  {selectedCert.category} &bull; {selectedCert.highlight}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-palette-charcoal dark:text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-palette-charcoal dark:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="p-4 sm:p-6 bg-slate-100 dark:bg-black/30 flex justify-center max-h-[70vh] overflow-auto">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[60vh] w-auto rounded-xl shadow-lg border border-slate-200 dark:border-white/10 object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-white dark:bg-[#1c161b] border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <div className="text-palette-charcoal/70 dark:text-white/70 text-center sm:text-left">
                <p><span className="font-bold text-palette-charcoal dark:text-white">Recipient:</span> {selectedCert.recipient}</p>
                <p><span className="font-bold text-palette-charcoal dark:text-white">Issuer:</span> {selectedCert.issuer}</p>
                {selectedCert.credentialId && (
                  <p><span className="font-bold text-palette-charcoal dark:text-white">Credential ID:</span> {selectedCert.credentialId}</p>
                )}
              </div>
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-palette-sunset text-white hover:bg-[#F2782B] transition-all font-semibold shadow-sunset-glow"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open Full Resolution
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
