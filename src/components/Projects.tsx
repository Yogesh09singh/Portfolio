import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'AI/ML' | 'Full-Stack'>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filters: Array<'All' | 'AI/ML' | 'Full-Stack'> = ['All', 'AI/ML', 'Full-Stack'];

  const filteredProjects =
    selectedFilter === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-cardDark/20">
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
            <span>04. FEATURED PROJECTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            AI Engineering & <span className="gradient-text-primary">Full-Stack Showcase</span>
          </motion.h2>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-primaryIndigo to-secondaryCyan text-white shadow-glow-primary'
                  : 'bg-cardDark border border-white/10 text-textMuted hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-primaryIndigo/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div>
                  {/* Project Visual Image Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-cardDark">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 gpu-accelerate"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cardDark via-transparent to-transparent opacity-90" />

                    {/* Category & Year Tag */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="px-3 py-1 rounded-full bg-cardDark/90 border border-white/10 text-secondaryCyan font-mono text-[11px] font-semibold">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-cardDark/90 border border-white/10 text-textMuted font-mono text-[11px]">
                        {project.year}
                      </span>
                    </div>

                    {/* External GitHub Icon Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-cardDark/80 border border-white/10 text-textMuted hover:text-white hover:border-primaryIndigo transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h3 className="font-sora font-bold text-xl text-white mb-2 group-hover:text-secondaryCyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-textMuted font-inter text-xs leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Key Metrics Chips */}
                    <div className="space-y-1.5 mb-5">
                      {project.keyMetrics.map((metric, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] font-mono text-emerald-400">
                          <Zap className="w-3 h-3 shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-textLight"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-sora font-semibold text-primaryIndigo hover:text-secondaryCyan flex items-center space-x-1 transition-colors"
                  >
                    <span>View System Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-textMuted hover:text-white transition-colors"
                  >
                    GitHub Code &gt;
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
