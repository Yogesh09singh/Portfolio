import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence font-sora>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bgDark text-white selection:bg-none pointer-events-auto"
      >
        {/* Glowing ambient background blob */}
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-primaryIndigo/20 via-secondaryCyan/20 to-accentPurple/20 rounded-full blur-3xl animate-pulse" />

        {/* Brand Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mb-8 flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primaryIndigo via-secondaryCyan to-accentPurple p-[1.5px] shadow-glow-primary mb-4 animate-float">
            <div className="w-full h-full bg-cardDark rounded-[14px] flex items-center justify-center font-sora font-extrabold text-3xl text-white">
              YS
            </div>
          </div>
          <h2 className="font-sora font-extrabold text-2xl tracking-tight gradient-text-primary">
            Yogesh Singh
          </h2>
          <span className="font-mono text-xs text-textMuted tracking-widest uppercase mt-1">
            Full-Stack Developer & ML Enthusiast
          </span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 relative z-10">
          <div className="w-full h-1.5 rounded-full bg-cardDark border border-white/10 overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-primaryIndigo via-secondaryCyan to-accentPurple rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="flex justify-between items-center font-mono text-xs text-textMuted">
            <span>Loading Experience...</span>
            <span className="text-secondaryCyan font-semibold">{Math.min(progress, 100)}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
