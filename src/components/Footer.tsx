import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-bgDark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Mark & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="font-sora font-extrabold text-xl text-white tracking-tight mb-1">
              Yogesh <span className="gradient-text-primary">Singh</span>
            </a>
            <p className="text-xs font-mono text-textMuted">
              © {new Date().getFullYear()} Yogesh Singh. All rights reserved.
            </p>
          </div>

          {/* Core Tech Stack Note */}
          <div className="text-center">
            <span className="text-xs font-mono text-textMuted flex items-center space-x-1.5 justify-center">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-primaryIndigo fill-primaryIndigo" />
              <span>React, TypeScript & Tailwind CSS</span>
            </span>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center space-x-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-cardDark border border-white/10 text-textMuted hover:text-white hover:border-primaryIndigo transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-cardDark border border-white/10 text-textMuted hover:text-white hover:border-secondaryCyan transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2.5 rounded-full bg-cardDark border border-white/10 text-textMuted hover:text-white hover:border-accentPurple transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-gradient-to-r from-primaryIndigo to-secondaryCyan text-white shadow-glow-primary hover:scale-105 transition-transform"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
