import { Build } from '../types/build';

const statusColors: Record<string, string> = {
  live: 'bg-green-500/10 text-green-400 border-green-500/20',
  beta: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  wip: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  LIVE: 'bg-green-500/10 text-green-400 border-green-500/20',
  BETA: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  WIP: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
};

const statusLabels: Record<string, string> = {
  live: 'LIVE',
  beta: 'BETA',
  wip: 'WIP',
  LIVE: 'LIVE',
  BETA: 'BETA',
  WIP: 'WIP',
};

export function BuildCard({ build }: { build: Build }) {
  // Normalize status to lowercase to ensure lookup works
  const statusKey = (build.status || 'live').toLowerCase();
  
  return (
    <div className="border border-zinc-800 bg-zinc-900/50 rounded-xl p-6 hover:border-blue-500/50 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {build.title}
          </h3>
          <span className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2 py-1 rounded mt-1 inline-block border border-zinc-800">
            by @{build.author}
          </span>
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded border ${statusColors[statusKey] || statusColors.live}`}>
          {statusLabels[statusKey] || 'LIVE'}
        </span>
      </div>
      
      <p className="text-zinc-400 mb-6 text-sm leading-relaxed line-clamp-2">
        {build.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {build.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-zinc-800/50">
        <a 
          href={build.demo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-500/40"
        >
          Live Demo 🚀
        </a>
        <a 
          href={build.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg text-sm font-medium transition-colors bg-zinc-900"
        >
          Code 📦
        </a>
      </div>
    </div>
  )
}
