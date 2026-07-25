import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Cpu, Zap, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-bgDark/80 backdrop-blur-md"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel border border-white/10 rounded-3xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header image preview */}
          <div className="relative h-60 sm:h-72 w-full bg-cardDark overflow-hidden shrink-0">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover gpu-accelerate"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cardDark via-cardDark/40 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-cardDark/80 border border-white/10 text-textLight hover:text-white hover:bg-cardDark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-primaryIndigo/30 border border-primaryIndigo/50 text-secondaryCyan font-mono text-xs font-semibold uppercase mb-2 inline-block">
                {project.category} • {project.year}
              </span>
              <h2 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Scrollable Body Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
            {/* Short Summary */}
            <p className="text-textLight font-inter text-base leading-relaxed">
              {project.summary}
            </p>

            {/* Metrics Chips */}
            <div>
              <h4 className="font-sora font-semibold text-xs text-textMuted uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-secondaryCyan" />
                <span>Performance & Key Metrics</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.keyMetrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold"
                  >
                    ⚡ {metric}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Architecture Highlights */}
            <div>
              <h4 className="font-sora font-semibold text-xs text-textMuted uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-accentPurple" />
                <span>System Architecture & Features</span>
              </h4>
              <ul className="space-y-2.5">
                {project.detailedHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-textLight">
                    <CheckCircle2 className="w-4 h-4 text-primaryIndigo shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h4 className="font-sora font-semibold text-xs text-textMuted uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                <Cpu className="w-4 h-4 text-primaryIndigo" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-cardDark border border-white/10 font-mono text-xs text-textLight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cardDark border border-white/10 hover:border-primaryIndigo text-white font-sora text-xs font-semibold flex items-center space-x-2 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primaryIndigo to-secondaryCyan text-white font-sora text-xs font-semibold"
              >
                Close Modal
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
