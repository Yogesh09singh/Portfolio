import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: boolean;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  width = '100%',
  delay = 0,
  duration = 0.7,
  yOffset = 35,
  blur = true,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: yOffset,
            scale: 0.98,
            filter: blur ? 'blur(8px)' : 'none',
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
          },
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Apple-style crisp ease-out
        }}
        className="gpu-accelerate"
      >
        {children}
      </motion.div>
    </div>
  );
};
