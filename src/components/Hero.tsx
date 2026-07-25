import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Send,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Sparkles,
  Globe,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse 3D tilt for profile image
  const photoCardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const titles = [
    'Full Stack Developer',
    'Machine Learning Engineer',
    'Building AI Powered Products',
    'Cloud Computing Specialist',
  ];

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  // 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoCardRef.current) return;
    const rect = photoCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / rect.height) * -20,
      y: (x / rect.width) * 20,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Sub-header badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cardDark/90 border border-primaryIndigo/30 shadow-glow-primary mb-6"
            >
              <Sparkles className="w-4 h-4 text-secondaryCyan" />
              <span className="font-sora text-xs font-semibold text-textLight">
                Hello, I'm
              </span>
            </motion.div>

            {/* Main Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3"
            >
              <span className="gradient-text-primary">{PORTFOLIO_DATA.personal.name}</span>
            </motion.h1>

            {/* Titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sora font-semibold text-xl sm:text-2xl lg:text-3xl text-white mb-2"
            >
              Full Stack Developer & <span className="text-secondaryCyan">Machine Learning Engineer</span>
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="h-10 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="font-mono text-base sm:text-lg text-accentPurple font-medium">
                &gt; {displayText}
              </span>
              <span className="w-0.5 h-5 bg-primaryIndigo ml-1 animate-pulse" />
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-textMuted max-w-xl font-inter leading-relaxed mb-8"
            >
              {PORTFOLIO_DATA.personal.objective}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <MagneticButton href="#contact">
                <span className="px-7 py-3.5 rounded-full font-sora font-semibold text-sm bg-gradient-to-r from-primaryIndigo via-secondaryCyan to-accentPurple text-white shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Hire Me</span>
                </span>
              </MagneticButton>

              <MagneticButton onClick={onOpenResumeModal}>
                <span className="px-7 py-3.5 rounded-full font-sora font-semibold text-sm bg-cardDark border border-white/10 text-white hover:border-primaryIndigo/50 hover:bg-cardDarkHover transition-all duration-300 flex items-center space-x-2 shadow-glass">
                  <FileText className="w-4 h-4 text-primaryIndigo" />
                  <span>Download Resume</span>
                </span>
              </MagneticButton>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <MagneticButton href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer">
                <span className="w-11 h-11 rounded-full bg-cardDark/80 border border-white/10 flex items-center justify-center text-textMuted hover:text-white hover:border-primaryIndigo hover:bg-cardDark transition-all duration-200 shadow-glass">
                  <Github className="w-5 h-5" />
                </span>
              </MagneticButton>

              <MagneticButton href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="w-11 h-11 rounded-full bg-cardDark/80 border border-white/10 flex items-center justify-center text-textMuted hover:text-white hover:border-secondaryCyan hover:bg-cardDark transition-all duration-200 shadow-glass">
                  <Linkedin className="w-5 h-5" />
                </span>
              </MagneticButton>

              <MagneticButton href={`mailto:${PORTFOLIO_DATA.personal.email}`}>
                <span className="w-11 h-11 rounded-full bg-cardDark/80 border border-white/10 flex items-center justify-center text-textMuted hover:text-white hover:border-accentPurple hover:bg-cardDark transition-all duration-200 shadow-glass">
                  <Mail className="w-5 h-5" />
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Floating Professional Photo with 3D Tilt & Gradient Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div
              ref={photoCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] animate-float"
              style={{
                perspective: 1000,
              }}
            >
              {/* Glowing background orb behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primaryIndigo via-secondaryCyan to-accentPurple rounded-[3rem] blur-2xl opacity-40 animate-pulse-glow" />

              {/* Gradient Ring Frame */}
              <motion.div
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative w-full h-full p-1.5 rounded-[2.5rem] bg-gradient-to-b from-primaryIndigo/60 via-secondaryCyan/40 to-accentPurple/60 border border-white/20 glass-card shadow-glass flex flex-col overflow-hidden"
              >
                {/* Photo Container */}
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-gradient-to-b from-cardDark/90 to-bgDark">
                  <img
                    src={PORTFOLIO_DATA.personal.profilePhoto}
                    alt={PORTFOLIO_DATA.personal.name}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] gpu-accelerate"
                  />
                  {/* Subtle bottom vignette gradient to blend seamlessly into dark card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </motion.div>

              {/* Status Card Below Image */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] glass-panel px-4 py-3 rounded-2xl border border-white/10 shadow-glass flex items-center justify-between text-xs font-mono"
              >
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-white font-medium">Open To Work</span>
                </div>
                <div className="flex items-center space-x-2 text-textMuted">
                  <Globe className="w-3.5 h-3.5 text-secondaryCyan" />
                  <span>India</span>
                </div>
                <div className="px-2 py-0.5 rounded-md bg-primaryIndigo/20 text-primaryIndigo text-[11px] font-semibold">
                  Internships
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-textMuted hover:text-white transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase mb-1">Scroll</span>
        <ArrowDown className="w-4 h-4 text-secondaryCyan" />
      </motion.a>
    </section>
  );
};
