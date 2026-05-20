'use client';

const SUPPORTERS = [
  { name: 'BROski♾️ OG',    tier: 'Legend',    emoji: '👑' },
  { name: 'HyperDev_99',    tier: 'Architect', emoji: '🏗️' },
  { name: 'NeuroCoder',     tier: 'Agent',     emoji: '🤖' },
  { name: 'ADHDBuilder',    tier: 'Agent',     emoji: '🤖' },
  { name: 'FlowState_Dev',  tier: 'Spark',     emoji: '⚡' },
  { name: 'Lyndz Williams', tier: 'Builder',   emoji: '🧠' },
  { name: 'WelshTech',      tier: 'Spark',     emoji: '⚡' },
  { name: 'DyslexicDev',    tier: 'Agent',     emoji: '🤖' },
  { name: 'Z0neMaster',     tier: 'Architect', emoji: '🏗️' },
  { name: 'AgentSmith_AI',  tier: 'Spark',     emoji: '⚡' },
  { name: 'HyperfocusKing', tier: 'Agent',     emoji: '🤖' },
  { name: 'You?',           tier: 'TBD',       emoji: '✨' },
];

const TIER_COLOR: Record<string, string> = {
  Legend:    '#F59E0B',
  Architect: '#FF2D95',
  Agent:     '#00FFE1',
  Spark:     '#60A5FA',
  Builder:   '#7C3AED',
  TBD:       'rgba(255,255,255,0.3)',
};

export function SupportWall() {
  return (
    <section className="px-6 pb-20 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.35em] font-mono mb-3" style={{ color: '#FF2D95' }}>
          Hall of Fame
        </p>
        <h2 className="text-3xl md:text-4xl font-black mb-2">
          The <span style={{ color: '#00FFE1' }}>Empire Builders</span>
        </h2>
        <p className="text-sm" style={{ color: '#B8C1CC' }}>These legends keep the lights on and the agents running.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SUPPORTERS.map(s => (
          <div
            key={s.name}
            className="hz-card p-4 flex flex-col items-center text-center gap-2 group hover:scale-105 transition-transform duration-200"
            style={{ borderColor: `${TIER_COLOR[s.tier]}22` }}
          >
            <div className="text-2xl">{s.emoji}</div>
            <div className="font-bold text-sm text-white">{s.name}</div>
            <div
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ background: `${TIER_COLOR[s.tier]}18`, color: TIER_COLOR[s.tier] }}
            >
              {s.tier}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
