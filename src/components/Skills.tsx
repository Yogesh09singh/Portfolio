import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Database, Sparkles, Server, Layout, Wrench } from 'lucide-react';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiFlask,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiPostman,
  SiOpencv,
  SiPandas,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';
import { FaAws, FaCss3Alt, FaJava } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...PORTFOLIO_DATA.skillCardCategories.map((c) => c.categoryName)];

  const skillTechIcons: Record<string, React.ReactNode> = {
    Python: <SiPython className="text-[#3776AB]" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    Java: <FaJava className="text-[#007396]" />,
    'React.js': <SiReact className="text-[#61DAFB]" />,
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    Flask: <SiFlask className="text-white" />,
    FastAPI: <SiFastapi className="text-[#009688]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    MySQL: <SiMysql className="text-[#4479A1]" />,
    'AWS (Cloud Architecting)': <FaAws className="text-[#FF9900]" />,
    Docker: <SiDocker className="text-[#2496ED]" />,
    'Git & GitHub': <SiGit className="text-[#F05032]" />,
    Postman: <SiPostman className="text-[#FF6C37]" />,
    'NumPy & Pandas': <SiPandas className="text-[#150458]" />,
    OpenCV: <SiOpencv className="text-[#5C3EE8]" />,
    'HTML5 / CSS3': <FaCss3Alt className="text-[#1572B6]" />,
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code2 className="w-5 h-5 text-primaryIndigo" />,
    'Frontend & UI': <Layout className="w-5 h-5 text-secondaryCyan" />,
    'Backend & Web APIs': <Server className="w-5 h-5 text-accentPurple" />,
    'AI / ML & Computer Vision': <Cpu className="w-5 h-5 text-emerald-400" />,
    'Databases & Storage': <Database className="w-5 h-5 text-amber-400" />,
    'Cloud & Developer Tools': <Wrench className="w-5 h-5 text-sky-400" />,
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.skillCardCategories
      : PORTFOLIO_DATA.skillCardCategories.filter((cat) => cat.categoryName === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-cardDark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-secondaryCyan/10 border border-secondaryCyan/20 text-secondaryCyan text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Capabilities & <span className="gradient-text-accent">Technology Stack</span>
          </motion.h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primaryIndigo to-secondaryCyan text-white shadow-glow-primary'
                    : 'bg-cardDark border border-white/10 text-textMuted hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Premium Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.categoryName}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-7 rounded-3xl flex flex-col justify-between hover:border-primaryIndigo/60 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-3 rounded-2xl bg-cardDark border border-white/10 group-hover:border-primaryIndigo/40 transition-colors">
                      {categoryIcons[category.categoryName] || <Code2 className="w-5 h-5 text-primaryIndigo" />}
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-lg text-white group-hover:text-secondaryCyan transition-colors">
                        {category.categoryName}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-textMuted font-inter leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3 py-2 rounded-xl bg-cardDark/90 border border-white/10 hover:border-primaryIndigo/50 flex items-center space-x-2 transition-all hover:scale-105"
                      >
                        {skillTechIcons[skill.name] ? (
                          <span className="text-base">{skillTechIcons[skill.name]}</span>
                        ) : (
                          <Sparkles className="w-3.5 h-3.5 text-secondaryCyan" />
                        )}
                        <span className="font-sora text-xs font-semibold text-white">{skill.name}</span>
                        <span className="text-[10px] font-mono text-secondaryCyan px-1.5 py-0.5 rounded bg-white/5">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
