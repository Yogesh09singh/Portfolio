import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Offscreen canvas for static background grid pattern (massive performance speedup)
    const gridCanvas = document.createElement('canvas');
    const gridCtx = gridCanvas.getContext('2d');

    const setupGrid = () => {
      gridCanvas.width = width;
      gridCanvas.height = height;
      if (!gridCtx) return;
      gridCtx.clearRect(0, 0, width, height);
      gridCtx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      gridCtx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        gridCtx.beginPath();
        gridCtx.moveTo(x, 0);
        gridCtx.lineTo(x, height);
        gridCtx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        gridCtx.beginPath();
        gridCtx.moveTo(0, y);
        gridCtx.lineTo(width, y);
        gridCtx.stroke();
      }
    };

    setupGrid();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      setupGrid();
    };

    window.addEventListener('resize', handleResize);

    // Particle count optimized for 60fps+ rendering
    const particleCount = Math.min(Math.floor(width / 40), 25);
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.35 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw pre-rendered grid from offscreen canvas
      ctx.drawImage(gridCanvas, 0, 0);

      // Render & update particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw line connections
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 12000) {
            const dist = Math.sqrt(distSq);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Floating glowing background blobs with hardware acceleration */}
      <div className="glow-blob-indigo w-[600px] h-[600px] -top-32 -left-32 animate-pulse-glow" />
      <div className="glow-blob-cyan w-[650px] h-[650px] top-1/3 -right-48 animate-float" />
      <div className="glow-blob-purple w-[550px] h-[550px] bottom-0 left-1/4 animate-pulse-glow" />
    </div>
  );
};
