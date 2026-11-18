import React from 'react';
import { 
  Globe, 
  Server, 
  Palette, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  Layers,
  FileCode,
  Database,
  Layout,
  Terminal,
  GitBranch
} from 'lucide-react';

export default function SkillsSection() {
  const skillsCategories = [
    {
      id: 'web-dev',
      category: 'Web Development',
      icon: Globe,
      description: 'Building responsive and user-friendly web interfaces.',
      skills: [
        { name: 'HTML', icon: FileCode },
        { name: 'CSS', icon: Layout },
        { name: 'JavaScript', icon: Code2 },
        { name: 'Responsive Web Design', icon: Layers },
      ],
    },
    {
      id: 'backend',
      category: 'Programming & Backend',
      icon: Server,
      description: 'Developing web applications and working with databases.',
      skills: [
        { name: 'Python', icon: Code2 },
        { name: 'Django', icon: Layers },
        { name: 'MySQL', icon: Database },
        { name: 'Basic Database Management', icon: Server },
      ],
    },
    {
      id: 'ui-ux',
      category: 'UI/UX & Design',
      icon: Palette,
      description: 'Creating simple, functional, and visually appealing interfaces.',
      skills: [
        { name: 'Web Interface Design', icon: Layout },
        { name: 'Layout and Visual Design', icon: Palette },
        { name: 'Color and Typography', icon: Sparkles },
        { name: 'User-Friendly Design', icon: CheckCircle2 },
      ],
    },
    {
      id: 'tools',
      category: 'Tools & Platforms',
      icon: Cpu,
      description: 'Tools I use for development, version control, and productivity.',
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: Terminal },
        { name: 'Visual Studio Code', icon: FileCode },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-20 transition-colors duration-300 bg-white dark:bg-[#120e11]"
      aria-label="Technical Skills Section"
    >
      {/* Background Ambient Gradients (Clean subtle slate/orange tones, NO PINK) */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-slate-100/70 dark:bg-white/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-orange-500/5 dark:bg-orange-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-palette-charcoal dark:text-white tracking-tight">
            Technical <span className="text-palette-sunset">Skills</span>
          </h2>
        </div>

        {/* 4 Professional Symmetrical Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {skillsCategories.map((category) => {
            const IconComponent = category.icon;

            return (
              <div
                key={category.id}
                className="bg-white dark:bg-[#1c161b] rounded-[2rem] p-6 sm:p-7 border border-slate-200 dark:border-white/10 shadow-card-subtle flex flex-col justify-start transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-palette-sunset/40 group text-left h-full"
              >
                {/* Top: Category Icon & Title */}
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-white/10 border border-orange-100 dark:border-white/15 flex items-center justify-center text-palette-sunset shadow-xs group-hover:scale-105 group-hover:border-palette-sunset/50 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5 min-h-[76px]">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-palette-charcoal dark:text-white group-hover:text-palette-sunset transition-colors">
                      {category.category}
                    </h3>
                    <p className="font-sans text-xs text-palette-charcoal/70 dark:text-white/65 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List (Organized Badges, Starts immediately under the divider line so all items are 100% pantay) */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/10 space-y-2.5 flex-1">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-palette-charcoal dark:text-white/90 transition-all hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300"
                      >
                        <SkillIcon className="w-3.5 h-3.5 text-palette-sunset shrink-0" />
                        <span className="font-sans text-xs font-semibold">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Growth Statement */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/15 text-palette-charcoal dark:text-white shadow-card-subtle text-xs sm:text-sm font-sans font-medium text-center">
            <TrendingUp className="w-4 h-4 text-palette-sunset shrink-0" />
            <span>
              Always learning and exploring new tools to improve my skills and build better solutions.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
