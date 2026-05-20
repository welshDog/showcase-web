'use client';
import { useState } from 'react';

export function SupportCTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hyperfocuslyndz@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 pb-24 max-w-4xl mx-auto">
      {/* One-time support banner */}
      <div
        className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden mb-10"
        style={{
          background: 'linear-gradient(135deg, rgba(0,255,225,0.05) 0%, rgba(255,45,149,0.05) 100%)',
          border: '1px solid rgba(0,255,225,0.15)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,225,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative">
          <div className="text-4xl mb-4">☕</div>
          <h3 className="text-2xl md:text-3xl font-black mb-3">
            Not ready to commit? <span style={{ color: '#00FFE1' }}>Buy a coffee.</span>
          </h3>
          <p className="mb-8" style={{ color: '#B8C1CC' }}>
            One-time support helps just as much. Every coffee = more agent compute, more modules, more tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://ko-fi.com/welshdog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-base"
            >
              Ko-fi ☕
            </a>
            <a
              href="https://github.com/sponsors/welshDog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 text-base"
            >
              GitHub Sponsors 🖤
            </a>
          </div>
        </div>
      </div>

      {/* Sponsor the course */}
      <div
        className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          background: 'rgba(124,58,237,0.08)',
          border: '1px solid rgba(124,58,237,0.25)',
        }}
      >
        <div>
          <p className="text-xs uppercase tracking-widest font-mono mb-1" style={{ color: '#7C3AED' }}>Enterprise / Brand</p>
          <h4 className="text-xl font-black text-white mb-1">Want to sponsor the course?</h4>
          <p className="text-sm" style={{ color: '#B8C1CC' }}>
            Get your brand in front of 2,400+ neurodivergent devs.
            Logo placement, shoutouts, and bespoke partnership packages available.
          </p>
        </div>
        <button
          onClick={copyEmail}
          className="flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200"
          style={{
            background: copied ? 'rgba(0,255,225,0.2)' : 'rgba(124,58,237,0.2)',
            border: `1px solid ${copied ? '#00FFE1' : '#7C3AED'}`,
            color: copied ? '#00FFE1' : '#7C3AED',
          }}
        >
          {copied ? '✓ Copied!' : 'Copy Email 📋'}
        </button>
      </div>

      {/* Bottom nav back */}
      <div className="text-center mt-12">
        <a href="/" className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
          ← Back to Hyperfocus Z0ne
        </a>
      </div>
    </section>
  );
}
