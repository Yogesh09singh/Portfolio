import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-nav' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center space-x-3 text-white focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primaryIndigo via-secondaryCyan to-accentPurple p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-cardDark rounded-[11px] flex items-center justify-center font-sora font-bold text-lg text-white">
                YS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sora font-bold text-base tracking-tight group-hover:text-secondaryCyan transition-colors">
                Yogesh Singh
              </span>
              <span className="font-mono text-[10px] text-textMuted tracking-wider uppercase">
                Full-Stack & ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-cardDark/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white'
                      : 'text-textMuted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primaryIndigo/30 to-secondaryCyan/30 rounded-full border border-primaryIndigo/50 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Status Pill */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available</span>
            </div>

            <button
              onClick={onOpenResumeModal}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-medium bg-cardDark border border-white/10 hover:border-primaryIndigo/50 text-textLight hover:text-white transition-all duration-200 hover:shadow-glow-primary"
            >
              <FileText className="w-3.5 h-3.5 text-primaryIndigo" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-primaryIndigo to-secondaryCyan text-white hover:opacity-95 transition-all duration-200 shadow-glow-primary hover:scale-105"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResumeModal}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-cardDark border border-white/10 text-textLight flex items-center space-x-1"
            >
              <FileText className="w-3 h-3 text-primaryIndigo" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-cardDark border border-white/10 text-textLight hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel border-b border-white/10 overflow-hidden mt-3"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-emerald-400 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-cardDark/80 border border-white/5 text-sm font-medium text-textLight hover:text-white hover:border-primaryIndigo/40 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col space-y-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl font-sora font-semibold text-sm text-center bg-gradient-to-r from-primaryIndigo to-secondaryCyan text-white shadow-glow-primary"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
