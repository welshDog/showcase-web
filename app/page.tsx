import { BuildCard } from '../components/BuildCard';
import buildsData from '../data/builds.json';
import { Build } from '../types/build';

// Force dynamic rendering if we were fetching from DB, but for JSON import it's static.
// We'll treat it as static for now for max speed.

export default function Home() {
  const builds = buildsData as Build[];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-0 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase animate-pulse">
            HyperCode Community
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-blue-100 to-zinc-500">
            Build. Ship. <span className="text-blue-500">Share.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            A playground for neurodivergent devs, tinkerers, and agent builders.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium text-zinc-400">
            <span className="flex items-center bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
              🌱 Start from templates
            </span>
            <span className="flex items-center bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
              🤝 Fork & remix builds
            </span>
            <span className="flex items-center bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
              🚀 Showcase your work
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#builds" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
              Explore Community Builds
            </a>
            <a href="#submit" className="px-8 py-3 rounded-full border border-zinc-700 text-white hover:border-blue-500 hover:text-blue-400 transition-colors bg-zinc-900/50 backdrop-blur-sm">
              Submit Your Build
            </a>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="builds" className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Builds</h2>
              <p className="text-zinc-500">Fresh from the HyperCode labs.</p>
            </div>
            <div className="text-zinc-500 font-mono text-sm">
              Showing {builds.length} builds
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build) => (
              <BuildCard key={build.id} build={build} />
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guide */}
      <section id="submit" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Submit Your Build in 3 Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold border border-blue-500/20 mb-4 text-xl">1</div>
              <h3 className="text-lg font-bold text-white mb-2">Fork & Clone</h3>
              <p className="text-zinc-400 text-sm">
                Fork <code className="text-blue-400 bg-blue-500/10 px-1 rounded">hypercode-lab/showcase-web</code> and clone it locally.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold border border-blue-500/20 mb-4 text-xl">2</div>
              <h3 className="text-lg font-bold text-white mb-2">Add Your Data</h3>
              <p className="text-zinc-400 text-sm">
                Open <code className="text-blue-400 bg-blue-500/10 px-1 rounded">data/builds.json</code> and add your project details.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold border border-blue-500/20 mb-4 text-xl">3</div>
              <h3 className="text-lg font-bold text-white mb-2">Open a PR</h3>
              <p className="text-zinc-400 text-sm">
                Push changes and open a Pull Request. Once merged, it&apos;s live!
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://github.com/hypercode-lab/showcase-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              <span>Go to GitHub Repo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <p className="mt-4 text-zinc-500 text-xs">
              No Next.js knowledge required – just edit the JSON file.
            </p>
          </div>
        </div>
      </section>
      
      <footer className="py-10 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-zinc-950">
        <div className="flex items-center justify-center gap-2">
          <span>Built with HyperCode Flow ♾️</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>Made by neurospicy devs for neurospicy devs 🧠</span>
        </div>
      </footer>
    </main>
  );
}
