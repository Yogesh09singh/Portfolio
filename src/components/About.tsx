import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Languages, CheckCircle2, Cloud, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-primaryIndigo/10 border border-primaryIndigo/20 text-primaryIndigo text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering <span className="gradient-text-primary">Scalable AI & Web Solutions</span>
          </motion.h2>
        </div>

        {/* Top Grid: Bio & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Executive Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-primaryIndigo/20 border border-primaryIndigo/40 flex items-center justify-center text-primaryIndigo">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-sora text-2xl font-bold text-white">Professional Journey</h3>
              </div>

              <p className="text-textLight font-inter text-base leading-relaxed mb-6">
                {PORTFOLIO_DATA.personal.objective}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-cardDark/90 border border-white/5">
                  <span className="text-xs font-mono text-secondaryCyan block mb-1">CURRENT STATUS</span>
                  <span className="font-sora text-sm font-semibold text-white">B.Tech CS Student & Intern</span>
                </div>
                <div className="p-4 rounded-2xl bg-cardDark/90 border border-white/5">
                  <span className="text-xs font-mono text-accentPurple block mb-1">CORE FOCUS</span>
                  <span className="font-sora text-sm font-semibold text-white">Full-Stack & Applied ML</span>
                </div>
              </div>
            </div>

            {/* Languages Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-textMuted text-xs font-mono">
                <Languages className="w-4 h-4 text-secondaryCyan" />
                <span>Spoken Languages:</span>
              </div>
              <div className="flex items-center space-x-3">
                {PORTFOLIO_DATA.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-textLight"
                  >
                    {lang.name} <span className="text-textMuted font-normal">({lang.proficiency})</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondaryCyan/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-secondaryCyan/20 border border-secondaryCyan/40 flex items-center justify-center text-secondaryCyan">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sora text-xl font-bold text-white">Education</h3>
                    <span className="text-xs font-mono text-textMuted">{PORTFOLIO_DATA.education.period}</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold">
                  CGPA: {PORTFOLIO_DATA.education.cgpa}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-sora font-semibold text-lg text-white mb-1">
                  {PORTFOLIO_DATA.education.institution}
                </h4>
                <p className="text-sm text-secondaryCyan font-medium">
                  {PORTFOLIO_DATA.education.degree}
                </p>
                <div className="inline-flex items-center space-x-1.5 mt-2 px-3 py-1 rounded-lg bg-cardDark border border-accentPurple/30 text-accentPurple text-xs font-mono">
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Specialization: {PORTFOLIO_DATA.education.specialization}</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {PORTFOLIO_DATA.education.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-textMuted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-textMuted">
              <span>Location:</span>
              <span className="font-medium text-white">{PORTFOLIO_DATA.education.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {PORTFOLIO_DATA.achievements.map((achieve, i) => (
            <div
              key={i}
              className="glass-card p-5 rounded-2xl flex items-start space-x-3 hover:border-primaryIndigo/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-accentPurple/20 border border-accentPurple/40 flex items-center justify-center text-accentPurple shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <p className="text-xs text-textLight font-inter leading-relaxed">
                {achieve}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
