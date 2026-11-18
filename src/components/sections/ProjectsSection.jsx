import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Trophy, 
  BookOpen, 
  BarChart3, 
  Swords, 
  RefreshCw, 
  X, 
  CheckCircle2, 
  Gamepad2, 
  GraduationCap,
  ShoppingBag,
  Truck,
  Users,
  CreditCard,
  Database,
  Code
} from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioData.js';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Map feature icons
  const featureIcons = [
    BookOpen,
    Trophy,
    Gamepad2,
    BarChart3,
    RefreshCw,
    ShoppingBag,
    Users,
    CreditCard,
    Truck,
    Database,
  ];

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-20"
      aria-label="Featured Projects Section"
    >
      {/* Background Decorative Ambient Gradients (Clean subtle tones, NO PINK) */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-slate-100/70 dark:bg-white/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 rounded-full bg-orange-500/5 dark:bg-orange-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-palette-charcoal dark:text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Project Cards: Horizontal Side-by-Side Grid with Exact 450px x 420px Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 justify-items-center max-w-5xl mx-auto">
          {portfolioConfig.projects.map((project) => {
            const isNumify = project.id === 'numify';
            const mockUrl = isNumify ? 'gamified-system.onrender.com' : '127.0.0.1:8000';

            return (
              <div 
                key={project.id}
                style={{ width: '100%', maxWidth: '450px' }}
                className="bg-white dark:bg-[#1c161b] rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-card-subtle flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover hover:border-palette-sunset/40 group text-left w-full max-w-[450px] min-h-[445px] pb-4"
              >
                {/* Top Section: Clickable Browser Frame with Screenshot (Click picture to view description) */}
                <div className="p-4 pb-0">
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-card-subtle bg-white dark:bg-[#1a1419] cursor-pointer transition-all duration-300 group-hover:border-palette-sunset/50 group-hover:shadow-card-hover"
                    title="Click picture to view full description and features"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedProject(project);
                      }
                    }}
                  >
                    {/* Browser Header Bar */}
                    <div className="bg-slate-100/95 dark:bg-[#1c161b] px-3.5 py-1.5 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/30" />
                        <div className="ml-2 px-2.5 py-0.5 rounded bg-white dark:bg-white/10 text-[10px] font-mono text-slate-500 dark:text-white/70 truncate max-w-[170px] sm:max-w-[210px] border border-slate-200/60 dark:border-white/10">
                          {mockUrl}
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-palette-sunset font-semibold uppercase tracking-wider">
                        {isNumify ? 'Live System' : 'Web App'}
                      </span>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative overflow-hidden h-[160px] w-full bg-slate-100 dark:bg-slate-900">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Hover Overlay Prompter */}
                      <div className="absolute inset-0 bg-palette-charcoal/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                        <span className="bg-white/95 dark:bg-[#251e24]/95 backdrop-blur-sm text-palette-charcoal dark:text-white font-mono text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Sparkles className="w-3.5 h-3.5 text-palette-sunset" />
                          Click picture to view description
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Content Area: Category, Title, Subtitle & Action Buttons */}
                <div className="px-5 pt-3.5 pb-2 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-palette-sunset">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-100 dark:bg-white/10 text-palette-charcoal/80 dark:text-white/80">
                        {isNumify ? 'Grades 7–10' : 'Farmers & Buyers'}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-palette-charcoal dark:text-white tracking-tight group-hover:text-palette-sunset transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs font-medium text-palette-charcoal/70 dark:text-white/70 leading-snug min-h-[32px] line-clamp-2 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Technology Badges */}
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-100 dark:bg-white/10 border border-slate-200/80 dark:border-white/10 text-palette-charcoal/80 dark:text-white/80 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row (Identical Symmetrical Two-Button Layout) */}
                  <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 gap-2.5">
                    {project.liveUrl ? (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-9 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full bg-palette-sunset text-white text-xs font-semibold hover:bg-[#F2782B] transition-all shadow-sunset-glow cursor-pointer"
                        >
                          <span>View Live</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="h-9 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full bg-white dark:bg-[#1a1419] border border-slate-200 dark:border-white/20 text-palette-charcoal dark:text-white text-xs font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-xs cursor-pointer"
                        >
                          <Layers className="w-3.5 h-3.5 text-palette-sunset" />
                          <span>View Description</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="h-9 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full bg-palette-sunset text-white text-xs font-semibold hover:bg-[#F2782B] transition-all shadow-sunset-glow cursor-pointer"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>View Description</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="h-9 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full bg-white dark:bg-[#1a1419] border border-slate-200 dark:border-white/20 text-palette-charcoal dark:text-white text-xs font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-xs cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-palette-sunset" />
                          <span>System Details</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Detailed Project Modal (Contains Longer Comprehensive Description & Key Features) */}
      {/* ========================================================================= */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} Project Details`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-palette-charcoal/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white dark:bg-[#211a20] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 dark:bg-[#1c161b] border-b border-slate-200 dark:border-white/10 flex items-center justify-between shrink-0">
              <div className="text-left">
                <span className="font-mono text-xs font-semibold text-palette-sunset uppercase tracking-wider">
                  {selectedProject.category} &bull; {selectedProject.targetAudience}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-palette-charcoal dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-medium text-palette-charcoal/70 dark:text-white/70">
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-palette-charcoal dark:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-left">
              
              {/* Full Screenshot Preview Card */}
              {selectedProject.image && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-card-subtle bg-white dark:bg-[#1a1419]">
                  <div className="bg-slate-100/90 dark:bg-[#1c161b] px-3.5 py-2 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/30" />
                      <span className="ml-2 font-mono text-[11px] text-slate-600 dark:text-white/70 truncate max-w-[200px] sm:max-w-none">
                        {selectedProject.liveUrl || 'http://127.0.0.1:8000/ (Local Development)'}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider hidden sm:inline">
                      System Interface
                    </span>
                  </div>
                  
                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative group cursor-pointer overflow-hidden bg-slate-50 dark:bg-[#161015]"
                      title="Open live system in new tab"
                    >
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.title} Interface Preview`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-palette-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-white text-palette-charcoal font-sans font-bold text-xs shadow-lg flex items-center gap-2">
                          <ExternalLink className="w-3.5 h-3.5 text-palette-sunset" />
                          Open Live System in New Tab
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="relative overflow-hidden bg-slate-50 dark:bg-[#161015]">
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.title} Interface Preview`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Comprehensive Description (Longer Version) */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-lg text-palette-charcoal dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-palette-sunset" />
                  System Overview &amp; Background
                </h4>
                <div className="font-sans text-sm sm:text-base text-palette-charcoal/80 dark:text-white/80 leading-relaxed bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 whitespace-pre-line">
                  {selectedProject.description}
                </div>
              </div>

              {/* Key Features Section */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-lg text-palette-charcoal dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-palette-sunset" />
                  Key Features &amp; Capabilities
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, index) => {
                    const IconComponent = featureIcons[index % featureIcons.length] || CheckCircle2;
                    return (
                      <div
                        key={index}
                        className="p-4 rounded-2xl bg-white dark:bg-[#251e24] border border-slate-200 dark:border-white/10 shadow-xs flex items-start gap-3.5 transition-all hover:border-palette-sunset/40"
                      >
                        <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/10 text-palette-sunset flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10 mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5 text-left">
                          <h5 className="font-sans font-bold text-sm text-palette-charcoal dark:text-white">
                            {feat.title}
                          </h5>
                          <p className="font-sans text-xs sm:text-sm text-palette-charcoal/70 dark:text-white/70 leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technologies Section */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-palette-charcoal dark:text-white flex items-center gap-2">
                  <Code className="w-4 h-4 text-palette-sunset" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-palette-charcoal dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <span className="font-mono text-xs text-palette-charcoal/60 dark:text-white/60 text-center sm:text-left">
                {selectedProject.liveUrl ? 'Deployed live on Render cloud infrastructure' : 'Full-Stack Project: Python • Django • MySQL'}
              </span>
              
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-palette-sunset text-white hover:bg-[#F2782B] transition-all font-semibold shadow-sunset-glow text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Live System
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-palette-charcoal dark:bg-white/15 text-white hover:bg-palette-charcoal/90 dark:hover:bg-white/25 transition-all font-semibold text-sm shadow-sm"
                >
                  Close Details
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
