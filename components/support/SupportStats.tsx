'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 2400, label: 'Community Members', suffix: '+', color: '#00FFE1' },
  { value: 29,   label: 'Active Containers',  suffix: '',  color: '#FF2D95' },
  { value: 5,    label: 'Live Repos',          suffix: '',  color: '#7C3AED' },
  { value: 100,  label: 'Builds Shipped',      suffix: '+', color: '#F59E0B' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start = Math.min(start + step, target);
          setCount(start);
          if (start >= target) clearInterval(timer);
        }, 24);
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
          <div key={s.label}
            className="hz-card p-6 text-center group hover:scale-105 transition-transform duration-300"
            style={{ borderColor: `${s.color}22` }}
          >
            <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: s.color }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs uppercase tracking-widest font-mono" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Funding progress bar */}
      <div className="mt-8 hz-card p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold" style={{ color: '#00FFE1' }}>Q2 2026 Infrastructure Goal</span>
          <span className="text-sm font-mono" style={{ color: '#FF2D95' }}>67% funded</span>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div
            className="h-full rounded-full"
            style={{
              width: '67%',
              background: 'linear-gradient(90deg, #00FFE1 0%, #FF2D95 100%)',
              boxShadow: '0 0 12px rgba(0,255,225,0.4)',
              animation: 'progressPulse 2s ease-in-out infinite',
            }}
          />
        </div>
        <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Funding covers: server costs, agent compute, course hosting & BROski$ token rewards
        </p>
      </div>
    </section>
  );
}
