import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId: number;

    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const animateCursor = () => {
      // Smooth lerp loop
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.2;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.2;

      if (cursorRef.current) {
        const offset = isHovered ? 24 : 16;
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x - offset}px, ${currentPos.current.y - offset}px, 0)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px, 0)`;
      }

      rafId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    rafId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible, isHovered]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-primaryIndigo/60 hidden md:block transition-all duration-150 ease-out gpu-accelerate ${
          isHovered ? 'w-12 h-12 bg-primaryIndigo/20 border-secondaryCyan' : 'w-8 h-8 bg-primaryIndigo/5'
        }`}
      />
      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-secondaryCyan hidden md:block gpu-accelerate transition-transform duration-100 ${
          isHovered ? 'scale-150' : 'scale-100'
        }`}
      />
    </>
  );
};
