import { BuildCard } from '../components/BuildCard';
import buildsData from '../data/builds.json';
import { Build } from '../types/build';

// Force dynamic rendering if we were fetching from DB, but for JSON import it's static.
// We'll treat it as static for now for max speed.

export default function Home() {
  const builds: Build[] = buildsData;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-0 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase animate-pulse">
            HyperCode Community
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-zinc-500">
            Build. Ship. <span className="text-blue-500">Share.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            The central hub for HyperCode experiments. Explore what the community is building, 
            fork their code, and ship your own masterpieces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#builds" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
              Explore Builds
            </a>
            <a href="#submit" className="px-8 py-3 rounded-full border border-zinc-700 text-white hover:border-blue-500 hover:text-blue-400 transition-colors">
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
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6">🚀 How to Submit Your Build</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-none w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">1</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Fork & Clone</h3>
                <p className="text-zinc-400">Fork the repository and clone it to your local machine.</p>
                <code className="block bg-black p-3 rounded-lg mt-2 text-sm text-zinc-300 font-mono">
                  git clone https://github.com/hypercode-lab/showcase-web.git
                </code>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-none w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">2</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Add Your Data</h3>
                <p className="text-zinc-400">
                  Open <code className="text-blue-400">data/builds.json</code> and append your project details to the list.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-none w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">3</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Open a Pull Request</h3>
                <p className="text-zinc-400">Commit your changes and open a PR. Once merged, your build goes live instantly!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-10 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>Built with HyperCode Flow ♾️</p>
      </footer>
    </main>
  );
}
