'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  color: string;
  alpha: number;
  baseX: number; baseY: number;
}

const COLORS = ['#00FFE1', '#FF2D95', '#7C3AED', '#60A5FA', '#F59E0B'];

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const scrollY = useRef(0);
  const particles = useRef<Particle[]>([]);
  const animId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.current = Array.from({ length: 120 }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x, y, baseX: x, baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.8 + 0.6,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.5 + 0.2,
        };
      });
    };

    const REPEL_RADIUS = 120;
    const REPEL_STRENGTH = 6;
    const CONNECT_DIST = 140;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const sy = scrollY.current * 0.08;

      const ps = particles.current;

      // Draw connecting lines first (below dots)
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,255,225,${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(ps[i].x, ps[i].y + sy);
            ctx.lineTo(ps[j].x, ps[j].y + sy);
            ctx.stroke();
          }
        }
      }

      // Draw + update particles
      ps.forEach(p => {
        // Scroll parallax
        const drawY = p.y + sy;

        // Mouse repel
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          p.vx += (dx / dist) * force * REPEL_STRENGTH * 0.05;
          p.vy += (dy / dist) * force * REPEL_STRENGTH * 0.05;
        }

        // Drift back to base
        p.vx += (p.baseX - p.x) * 0.002;
        p.vy += (p.baseY - p.y) * 0.002;

        // Dampen
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.x  += p.vx;
        p.y  += p.vy;

        // Draw glow dot
        const grd = ctx.createRadialGradient(p.x, drawY, 0, p.x, drawY, p.radius * 3);
        grd.addColorStop(0, p.color);
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(p.x, drawY, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.globalAlpha = p.alpha * 0.4;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll);
    draw();

    return () => {
      cancelAnimationFrame(animId.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
      aria-hidden
    />
  );
}
