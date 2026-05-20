import { Build } from '../types/build';

const statusConfig: Record<string, { badge: string; label: string }> = {
  live: { badge: 'badge badge-live',    label: 'LIVE' },
  LIVE: { badge: 'badge badge-live',    label: 'LIVE' },
  beta: { badge: 'badge badge-beta',    label: 'BETA' },
  BETA: { badge: 'badge badge-beta',    label: 'BETA' },
  wip:  { badge: 'badge badge-wip',     label: 'WIP'  },
  WIP:  { badge: 'badge badge-wip',     label: 'WIP'  },
};

export function BuildCard({ build }: { build: Build }) {
  const cfg = statusConfig[build.status] ?? statusConfig.live;

  return (
    <div className="hz-card p-6 flex flex-col h-full group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3
            className="text-xl font-bold text-white transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <span className="group-hover:text-[#00FFE1] transition-colors duration-200">
              {build.title}
            </span>
          </h3>
          <span
            className="text-xs font-mono mt-1 inline-block px-2 py-0.5 rounded"
            style={{
              background: 'rgba(7,7,10,0.8)',
              border: '1px solid rgba(0,255,225,0.1)',
              color: '#B8C1CC',
            }}
          >
            @{build.author}
          </span>
        </div>
        <span className={cfg.badge}>{cfg.label}</span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed line-clamp-2 mb-5" style={{ color: '#B8C1CC' }}>
        {build.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {build.tags.map(tag => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors duration-200"
            style={{
              background: 'rgba(0,255,225,0.07)',
              border:     '1px solid rgba(0,255,225,0.15)',
              color:      '#00FFE1',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* XP badge */}
      <div className="mb-4">
        <span className="badge badge-xp">+200 BROk XP 🧠</span>
      </div>

      {/* Actions */}
      <div
        className="flex gap-3 pt-4"
        style={{ borderTop: '1px solid rgba(0,255,225,0.08)' }}
      >
        <a
          href={build.demo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-center text-sm"
        >
          Live Demo 🚀
        </a>
        <a
          href={build.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary px-4 text-sm"
        >
          Code 📦
        </a>
      </div>
    </div>
  );
}
