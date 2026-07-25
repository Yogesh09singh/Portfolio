import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, GraduationCap, Briefcase, Award, Code, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown file representation of resume as instant download fallback
    const resumeText = `
YOGESH SINGH
Full-Stack Developer | Machine Learning Enthusiast
Email: ${PORTFOLIO_DATA.personal.email} | Phone: ${PORTFOLIO_DATA.personal.phone}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin} | GitHub: ${PORTFOLIO_DATA.personal.github}

CAREER OBJECTIVE
${PORTFOLIO_DATA.personal.objective}

EDUCATION
${PORTFOLIO_DATA.education.institution} (${PORTFOLIO_DATA.education.period})
${PORTFOLIO_DATA.education.degree} (Specialization in ${PORTFOLIO_DATA.education.specialization}) | CGPA: ${PORTFOLIO_DATA.education.cgpa}
${PORTFOLIO_DATA.education.location}

EXPERIENCE
${PORTFOLIO_DATA.experiences
  .map(
    (e) => `
* ${e.role} — ${e.company} (${e.period}) | ${e.location}
  - ${e.highlights.join('\n  - ')}
`
  )
  .join('')}

PROJECTS
${PORTFOLIO_DATA.projects
  .map(
    (p) => `
* ${p.title} (${p.year}) | Tech: ${p.techStack.join(', ')}
  - ${p.summary}
  - Metrics: ${p.keyMetrics.join(' | ')}
`
  )
  .join('')}

TECHNICAL SKILLS
${PORTFOLIO_DATA.skillCardCategories
  .map((c: any) => `${c.categoryName}: ${c.skills.map((s: any) => s.name).join(', ')}`)
  .join('\n')}

CERTIFICATIONS
${PORTFOLIO_DATA.certifications.map((c) => `* ${c.name} — ${c.issuer} (${c.date})`).join('\n')}
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Yogesh_Singh_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-bgDark/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-panel border border-white/10 rounded-3xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-6 bg-cardDark border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-primaryIndigo/20 text-primaryIndigo border border-primaryIndigo/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sora font-bold text-lg text-white">Yogesh Singh — Resume</h3>
                <span className="text-xs font-mono text-textMuted">ATS-Compliant Technical Resume</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-primaryIndigo text-white font-sora text-xs font-semibold flex items-center space-x-1.5 shadow-glow-primary hover:bg-primaryIndigo/90 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-cardDark/80 border border-white/10 text-textLight hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body Document Preview */}
          <div className="p-8 space-y-8 overflow-y-auto custom-scrollbar font-inter bg-cardDark/40">
            {/* Header section */}
            <div className="text-center pb-6 border-b border-white/10">
              <h1 className="font-sora text-3xl font-extrabold text-white mb-1">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="font-mono text-sm text-secondaryCyan font-medium mb-3">
                {PORTFOLIO_DATA.personal.title}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-textMuted">
                <span>📧 {PORTFOLIO_DATA.personal.email}</span>
                <span>📞 {PORTFOLIO_DATA.personal.phone}</span>
                <span>🔗 linkedin.com/in/yogeshsinghdev</span>
                <span>💻 github.com/Yogesh09singh</span>
              </div>
            </div>

            {/* Objective */}
            <div>
              <h4 className="font-sora font-bold text-xs uppercase tracking-wider text-primaryIndigo mb-2 border-b border-primaryIndigo/30 pb-1">
                CAREER OBJECTIVE
              </h4>
              <p className="text-xs text-textLight leading-relaxed">
                {PORTFOLIO_DATA.personal.objective}
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="font-sora font-bold text-xs uppercase tracking-wider text-secondaryCyan mb-3 border-b border-secondaryCyan/30 pb-1 flex items-center space-x-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>EDUCATION</span>
              </h4>
              <div className="flex justify-between items-start text-xs">
                <div>
                  <h5 className="font-sora font-bold text-white">
                    {PORTFOLIO_DATA.education.institution}
                  </h5>
                  <p className="text-textMuted">
                    {PORTFOLIO_DATA.education.degree} (Specialization in {PORTFOLIO_DATA.education.specialization}) | CGPA: {PORTFOLIO_DATA.education.cgpa}
                  </p>
                </div>
                <div className="text-right font-mono text-textMuted">
                  <span>{PORTFOLIO_DATA.education.period}</span>
                  <span className="block text-[11px]">{PORTFOLIO_DATA.education.location}</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="font-sora font-bold text-xs uppercase tracking-wider text-accentPurple mb-4 border-b border-accentPurple/30 pb-1 flex items-center space-x-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>EXPERIENCE</span>
              </h4>
              <div className="space-y-4">
                {PORTFOLIO_DATA.experiences.map((exp) => (
                  <div key={exp.id} className="text-xs">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <span className="font-sora font-bold text-white">{exp.company}</span>
                        <span className="text-textMuted ml-2">— {exp.role}</span>
                      </div>
                      <div className="font-mono text-textMuted text-right">
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-1 pl-4 list-disc text-textMuted">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="font-sora font-bold text-xs uppercase tracking-wider text-emerald-400 mb-4 border-b border-emerald-500/30 pb-1 flex items-center space-x-1.5">
                <Code className="w-3.5 h-3.5" />
                <span>PROJECTS</span>
              </h4>
              <div className="space-y-4">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-sora font-bold text-white">
                        {proj.title} <span className="font-mono font-normal text-textMuted">| {proj.techStack.join(', ')}</span>
                      </span>
                      <span className="font-mono text-textMuted">{proj.year}</span>
                    </div>
                    <ul className="space-y-1 pl-4 list-disc text-textMuted">
                      {proj.detailedHighlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="font-sora font-bold text-xs uppercase tracking-wider text-amber-400 mb-3 border-b border-amber-500/30 pb-1">
                TECHNICAL SKILLS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {PORTFOLIO_DATA.skillCardCategories.map((c: any) => (
                  <div key={c.categoryName}>
                    <span className="font-semibold text-white">{c.categoryName}: </span>
                    <span className="text-textMuted">{c.skills.map((s: any) => s.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-sora font-bold text-xs uppercase tracking-wider text-primaryIndigo mb-3 border-b border-primaryIndigo/30 pb-1 flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>CERTIFICATIONS</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {PORTFOLIO_DATA.certifications.map((cert) => (
                  <div key={cert.id} className="flex items-center space-x-2 text-textMuted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-white font-medium">{cert.name}</strong> — {cert.issuer} ({cert.date})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
