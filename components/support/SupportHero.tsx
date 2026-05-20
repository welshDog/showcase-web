'use client';
import { useEffect, useRef, useState } from 'react';

const TYPED_LINES = [
  'neurodivergent devs deserve better tools.',
  'ADHD brains build the future.',
  'hyperfocus is a superpower, not a bug.',
  'the empire needs YOU.',
];

export function SupportHero() {
  const [lineIdx, setLineIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TYPED_LINES[lineIdx];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 45);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setLineIdx((i) => (i + 1) % TYPED_LINES.length);
    }
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [displayed, deleting, lineIdx]);

  return (
    <section className="px-6 pt-20 pb-16 max-w-5xl mx-auto text-center">
      {/* Floating badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-mono uppercase tracking-widest"
        style={{ background: 'rgba(0,255,225,0.08)', border: '1px solid rgba(0,255,225,0.2)', color: '#00FFE1' }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
        Empire Status: Active
      </div>

      <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight">
        <span style={{
          background: 'linear-gradient(90deg, #fff 0%, #00FFE1 40%, #FF2D95 80%, #fff 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 4s linear infinite',
        }}>
          Support the
        </span>
        <br />
        <span style={{ color: '#fff' }}>Hyperfocus Empire</span>
      </h1>

      {/* Terminal typer */}
      <div className="inline-flex items-center gap-2 mb-8 px-5 py-3 rounded-xl font-mono text-sm md:text-base"
        style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(0,255,225,0.15)' }}
      >
        <span style={{ color: '#FF2D95' }}>$</span>
        <span style={{ color: '#00FFE1' }}>{displayed}</span>
        <span className="w-0.5 h-5 bg-cyan-400 animate-pulse inline-block" />
      </div>

      <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: '#B8C1CC' }}>
        Every contribution fuels the tools, courses, and agents that help
        <span style={{ color: '#00FFE1', fontWeight: 700 }}> ADHD & dyslexic builders</span> ship
        legendary projects. No VC. No corporate. Just community.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#tiers" className="btn-primary text-base px-8 py-4">Back the Empire ⚡</a>
        <a href="#stats" className="btn-secondary text-base px-8 py-4">See the Impact 📊</a>
      </div>
    </section>
  );
}
