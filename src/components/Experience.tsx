import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-accentPurple/10 border border-accentPurple/20 text-accentPurple text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>03. WORK EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Industry <span className="gradient-text-primary">Internships & Impact</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primaryIndigo via-secondaryCyan to-accentPurple transform md:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-cardDark border-2 border-primaryIndigo flex items-center justify-center shadow-glow-primary z-20">
                    <Briefcase className="w-3.5 h-3.5 text-secondaryCyan" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-[45%] w-full">
                    <div className="glass-card p-7 rounded-3xl relative overflow-hidden group hover:border-primaryIndigo/50 transition-all duration-300">
                      {/* Top Bar with Period & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-cardDark border border-white/10 text-secondaryCyan text-xs font-mono flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="text-xs font-mono text-textMuted flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-accentPurple" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-sora font-bold text-xl text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-primaryIndigo mb-4">
                        {exp.company}
                      </div>

                      {/* Impact Badge */}
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Key Impact: {exp.impactMetric}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5 mb-6">
                        {exp.highlights.map((bullet, idx) => (
                          <li key={idx} className="flex items-start space-x-2.5 text-xs text-textMuted leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-primaryIndigo shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-textLight"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
