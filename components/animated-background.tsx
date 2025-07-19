"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated data visualization elements
    const elements = [
      { x: 100, y: 100, type: 'chart', opacity: 0.1 },
      { x: 300, y: 200, type: 'formula', opacity: 0.08 },
      { x: 500, y: 150, type: 'arrow', opacity: 0.12 },
      { x: 700, y: 300, type: 'code', opacity: 0.09 },
      { x: 200, y: 400, type: 'chart', opacity: 0.11 },
      { x: 600, y: 450, type: 'formula', opacity: 0.07 },
    ];

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      elements.forEach((element, index) => {
        const time = Date.now() * 0.001;
        const x = element.x + Math.sin(time + index) * 20;
        const y = element.y + Math.cos(time + index * 0.5) * 15;
        
        ctx.save();
        ctx.globalAlpha = element.opacity;
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--muted-foreground');
        ctx.font = '14px monospace';
        
        switch (element.type) {
          case 'chart':
            // Draw simple bar chart
            for (let i = 0; i < 4; i++) {
              const height = 20 + Math.sin(time + i) * 10;
              ctx.fillRect(x + i * 8, y - height, 6, height);
            }
            break;
          case 'formula':
            ctx.fillText('=SUM()', x, y);
            break;
          case 'arrow':
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 20, y - 10);
            ctx.lineTo(x + 15, y - 5);
            ctx.lineTo(x + 20, y);
            ctx.lineTo(x + 15, y + 5);
            ctx.lineTo(x + 20, y + 10);
            ctx.lineTo(x, y);
            ctx.fill();
            break;
          case 'code':
            ctx.fillText('SQL', x, y);
            break;
        }
        ctx.restore();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30 dark:opacity-20"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/50" />
    </div>
  );
}