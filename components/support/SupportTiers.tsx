'use client';
import { useState } from 'react';

const TIERS = [
  {
    id: 'spark',
    name: 'Spark',
    emoji: '⚡',
    price: '£3',
    period: '/mo',
    color: '#60A5FA',
    glow: 'rgba(96,165,250,0.15)',
    border: 'rgba(96,165,250,0.25)',
    xp: '50 BROski$ XP / mo',
    perks: [
      'Discord Spark role',
      'Monthly supporter shoutout',
      'Early build previews',
      'Access to BROski brain updates',
    ],
    cta: 'Ignite',
    href: 'https://ko-fi.com/welshdog',
  },
  {
    id: 'agent',
    name: 'Agent',
    emoji: '🤖',
    price: '£10',
    period: '/mo',
    color: '#00FFE1',
    glow: 'rgba(0,255,225,0.12)',
    border: 'rgba(0,255,225,0.3)',
    xp: '200 BROski$ XP / mo',
    perks: [
      'Everything in Spark',
      'Agent role in Discord',
      'Vote on next features',
      'Monthly Q&A session access',
      'Name in SUPPORTERS.md',
    ],
    cta: 'Deploy',
    href: 'https://ko-fi.com/welshdog',
    featured: true,
  },
  {
    id: 'architect',
    name: 'Architect',
    emoji: '🏗️',
    price: '£25',
    period: '/mo',
    color: '#FF2D95',
    glow: 'rgba(255,45,149,0.12)',
    border: 'rgba(255,45,149,0.3)',
    xp: '600 BROski$ XP / mo',
    perks: [
      'Everything in Agent',
      'Meta-Architect Discord role',
      'Direct 1:1 build review (monthly)',
      'Listed on showcase homepage',
      'Custom BROski$ badge',
      'Co-create a feature with Lyndz',
    ],
    cta: 'Build the Empire',
    href: 'https://ko-fi.com/welshdog',
  },
  {
    id: 'legend',
    name: 'Legend',
    emoji: '👑',
    price: '£100',
    period: '/mo',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.3)',
    xp: '2500 BROski$ XP / mo',
    perks: [
      'Everything in Architect',
      'Permanent Legend Hall of Fame',
      'Your logo / name on the course',
      'Quarterly strategy session',
      'First access to all new tools',
      'You ARE the empire now',
    ],
    cta: 'Ascend',
    href: 'https://ko-fi.com/welshdog',
  },
];

export function SupportTiers() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="tiers" className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.35em] font-mono mb-3" style={{ color: '#00FFE1' }}>
          Choose your level
        </p>
        <h2 className="text-3xl md:text-5xl font-black mb-3">
          Pick Your <span style={{ color: '#00FFE1' }}>Power Tier</span>
        </h2>
        <p className="text-sm" style={{ color: '#B8C1CC' }}>
          One-time support also available via Ko-fi. Every penny goes directly into the build.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TIERS.map(tier => (
          <div
            key={tier.id}
            onMouseEnter={() => setHovered(tier.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex flex-col rounded-2xl p-6 transition-all duration-300"
            style={{
              background: hovered === tier.id
                ? `linear-gradient(145deg, ${tier.glow}, rgba(7,7,10,0.95))`
                : 'rgba(11,16,32,0.7)',
              border: `1px solid ${hovered === tier.id ? tier.border : 'rgba(255,255,255,0.06)'}`,
              boxShadow: hovered === tier.id ? `0 0 40px ${tier.glow}, 0 0 80px ${tier.glow}` : 'none',
              transform: hovered === tier.id ? 'translateY(-6px)' : 'none',
              backdropFilter: 'blur(12px)',
            }}
          >
            {tier.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                style={{ background: 'linear-gradient(90deg, #00FFE1, #FF2D95)', color: '#07070A' }}
              >
                Most Popular
              </div>
            )}

            <div className="text-3xl mb-3">{tier.emoji}</div>
            <div className="text-xs uppercase tracking-widest font-mono mb-1" style={{ color: tier.color }}>
              {tier.name}
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-black text-white">{tier.price}</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{tier.period}</span>
            </div>
            <div className="text-xs font-mono mb-5 px-2 py-1 rounded-lg inline-block"
              style={{ background: `${tier.color}18`, color: tier.color }}
            >
              +{tier.xp}
            </div>

            <ul className="space-y-2 mb-8 flex-1">
              {tier.perks.map(p => (
                <li key={p} className="flex items-start gap-2 text-sm" style={{ color: '#B8C1CC' }}>
                  <span style={{ color: tier.color, flexShrink: 0 }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200"
              style={{
                background: hovered === tier.id
                  ? `linear-gradient(135deg, ${tier.color}, ${tier.color}cc)`
                  : `${tier.color}18`,
                color: hovered === tier.id ? '#07070A' : tier.color,
                border: `1px solid ${tier.color}44`,
                boxShadow: hovered === tier.id ? `0 0 20px ${tier.color}66` : 'none',
              }}
            >
              {tier.cta} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
