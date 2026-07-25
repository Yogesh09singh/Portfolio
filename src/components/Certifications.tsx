import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Calendar, CheckCircle2, Sparkles, Cloud, Network, Code, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getCertIcon = (id: string) => {
    switch (id) {
      case 'aws-cloud':
        return <Cloud className="w-6 h-6 text-amber-400" />;
      case 'cisco-network':
        return <Network className="w-6 h-6 text-secondaryCyan" />;
      case 'infosys-java':
        return <Code className="w-6 h-6 text-primaryIndigo" />;
      case 'hackerrank-sql':
        return <Database className="w-6 h-6 text-emerald-400" />;
      default:
        return <Award className="w-6 h-6 text-accentPurple" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. CERTIFICATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Industry Standard <span className="gradient-text-accent">Credentials</span>
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-7 rounded-3xl flex flex-col justify-between group hover:border-secondaryCyan/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3.5 rounded-2xl bg-cardDark border border-white/10 group-hover:border-secondaryCyan/40 transition-colors">
                    {getCertIcon(cert.id)}
                  </div>

                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.credentialBadge}</span>
                  </div>
                </div>

                <h3 className="font-sora font-bold text-xl text-white mb-1 group-hover:text-secondaryCyan transition-colors">
                  {cert.name}
                </h3>
                <div className="flex items-center justify-between text-xs font-mono text-textMuted mb-5">
                  <span className="text-primaryIndigo font-semibold">{cert.issuer}</span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-secondaryCyan" />
                    <span>Issued: {cert.date}</span>
                  </span>
                </div>

                {/* Skills tags */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-textMuted uppercase tracking-wider block">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-cardDark border border-white/5 text-xs text-textLight flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
