'use client';
import { useEffect, useRef, useState } from 'react';

// 🔴 REAL EMPIRE FIGURES — updated 20 May 2026
const STATS = [
  { value: 5,   label: 'Discord Members',   suffix: '',  color: '#00FFE1', icon: '💬' },
  { value: 42,  label: 'Live Containers',   suffix: '',  color: '#FF2D95', icon: '🐳' },
  { value: 7,   label: 'Active Repos',      suffix: '',  color: '#7C3AED', icon: '📦' },
  { value: 10,  label: 'Builds Shipped',    suffix: '',  color: '#F59E0B', icon: '🚀' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 50));
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target);
          setCount(cur);
          if (cur >= target) clearInterval(timer);
        }, 28);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function SupportStats() {
  return (
    <section id="stats" className="px-6 pb-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {STATS.map(s => (
          <div
            key={s.label}
            className="hz-card p-6 text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            style={{ borderColor: `${s.color}22` }}
          >
            {/* Background glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
              style={{ background: `radial-gradient(ellipse at 50% 50%, ${s.color}12, transparent 70%)` }}
            />
            <div className="text-2xl mb-2 relative z-10">{s.icon}</div>
            <div className="text-4xl md:text-5xl font-black mb-2 relative z-10" style={{ color: s.color }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs uppercase tracking-widest font-mono relative z-10" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Funding bar */}
      <div className="mt-8 hz-card p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold" style={{ color: '#00FFE1' }}>Q2 2026 Infrastructure Goal</span>
          <span className="text-sm font-mono" style={{ color: '#FF2D95' }}>Building 🔥</span>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div
            className="h-full rounded-full"
            style={{
              width: '18%',
              background: 'linear-gradient(90deg, #00FFE1 0%, #FF2D95 100%)',
              boxShadow: '0 0 12px rgba(0,255,225,0.4)',
              animation: 'progressPulse 2s ease-in-out infinite',
            }}
          />
        </div>
        <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Early days — every supporter pushes this bar. Funds: server costs, agent compute, course hosting &amp; BROski$ rewards.
        </p>
      </div>
    </section>
  );
}
