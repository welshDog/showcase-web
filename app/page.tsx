import buildsData from '../data/builds.json';
import { BuildsData, Build } from '../types/build';

export default function Home() {
  const { featured, builds } = buildsData as BuildsData;

  return (
    <main className="min-h-screen bg-linear-to-br from-[#050510] via-[#0c1020] to-[#15162b] text-white selection:bg-emerald-400/30">
      {/* HERO */}
      <section className="px-6 py-12 md:py-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70 font-mono">
            HYPERFOCUS ZONE
          </p>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-emerald-100 to-emerald-300/50">
            HYPERFOCUS Zone Builds &amp; Demos
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            A playground of agents, tools, games, and experiments built by Lyndz
            (aka <span className="font-mono text-emerald-300">@welshDog</span>) for neurodivergent devs, tinkerers, and creators.
          </p>
          <div className="grid gap-3 md:grid-cols-3 max-w-3xl">
            <HeroBullet text="🌱 Start from real builds, not tutorial toys." />
            <HeroBullet text="🤝 Fork, remix, and ship your own flows." />
            <HeroBullet text="🚀 Turn hyperfocus bursts into legendary projects." />
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#builds"
              className="px-6 py-3 rounded-full bg-emerald-400 text-black font-bold hover:bg-emerald-300 transition shadow-lg shadow-emerald-400/20"
            >
              Explore Community Builds
            </a>
            <a
              href="#submit"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-emerald-300 hover:text-emerald-200 transition backdrop-blur-sm bg-white/5"
            >
              Submit Your Build (soon)
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED HYPER STATION VIDEO */}
      <section
        id="hyper-station"
        className="px-6 pb-12 md:pb-20 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-[3fr,2fr] gap-8 items-start">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/60 relative group">
            <iframe
              className="w-full h-full"
              src={`${featured.video_url}?modestbranding=1&rel=0&showinfo=0&controls=1`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/70 mb-2 font-mono">
                FEATURED DEMO
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {featured.title}
              </h2>
              <p className="text-emerald-200/80 text-lg font-medium">{featured.subtitle}</p>
            </div>
            
            <p className="text-white/70 leading-relaxed">{featured.description}</p>
            
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={featured.primary_cta.url}
                target="_blank"
                className="px-5 py-2.5 rounded-full bg-emerald-400 text-black font-bold hover:bg-emerald-300 transition shadow-lg shadow-emerald-400/10"
              >
                {featured.primary_cta.label}
              </a>
              <a
                href={featured.secondary_cta.url}
                target="_blank"
                className="px-5 py-2.5 rounded-full border border-white/20 text-sm hover:border-emerald-300 hover:text-emerald-200 transition bg-white/5"
              >
                {featured.secondary_cta.label}
              </a>
            </div>

            {/* Easter egg #1: hover hint */}
            <p className="mt-4 text-xs text-white/30 italic">
              Pssst… try hovering over the 🐝 builds below. One of them reveals a secret BROski♾️ message.
            </p>
          </div>
        </div>
      </section>

      {/* BUILDS GRID */}
      <section id="builds" className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-8 border-b border-white/10 pb-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Builds Gallery</h2>
          <p className="text-sm text-white/60 font-mono">
            Showing {builds.length} builds
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {builds.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      </section>

      {/* SUBMIT SECTION (FUTURE) */}
      <section
        id="submit"
        className="px-6 pb-16 max-w-4xl mx-auto pt-10"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Submit Your Build (soon)
          </h2>
          <p className="text-white/75 mb-6">
            Soon you&apos;ll be able to add your own agents, tools, games, and
            experiments to the Hyperfocus gallery. The plan:
          </p>
          <ol className="space-y-4 text-white/80 text-sm mb-8">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">1</span>
              <span>Fork the showcase repo from GitHub.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">2</span>
              <span>Add your build to <code className="bg-black/30 px-1.5 py-0.5 rounded text-emerald-200 font-mono">data/builds.json</code>.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">3</span>
              <span>Open a Pull Request. Once merged, you&apos;re live.</span>
            </li>
          </ol>

          {/* Easter egg #2: Konami code hint */}
          <p className="text-xs text-white/30 italic">
            Legend says that if you enter the Konami code on this page, a secret
            Hyperfocus theme unlocks… (coming in a future version).
          </p>
        </div>
      </section>

      {/* FOOTER / SOCIALS */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-white/70">
          <div className="text-center md:text-left">
            <p className="mb-1">
              Built with <span className="text-emerald-300 font-bold">HyperCode Flow</span> ♾️
            </p>
            <p className="text-xs text-white/50">
              Made by neurospicy devs for neurospicy devs. Stay weird. Build legendary.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <SocialLink label="GitHub" href="https://github.com/welshDog" />
            <SocialLink label="Discord" href="https://discord.gg/YOUR_INVITE" />
            <SocialLink label="TikTok" href="https://www.tiktok.com/@xdwelshdog" />
            <SocialLink label="X / Twitter" href="https://twitter.com/DeFiIsTheFuture" />
            <SocialLink label="Substack" href="https://hyperfocuslyndz.substack.com" />
            <SocialLink label="Website" href="https://hyperfocus.zone" />
          </div>
        </div>

        {/* Easter egg #3: tiny copyright */}
        <p className="mt-8 text-center text-[10px] text-white/20 font-mono">
          If you&apos;re reading this tiny line, you&apos;re officially a Hyperfocus
          lore enjoyer. Welcome to the crew, BROski♾️.
        </p>
      </footer>
    </main>
  );
}

function HeroBullet({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm flex items-center gap-2 hover:bg-white/10 transition cursor-default">
      {text}
    </div>
  );
}

function BuildCard({ build }: { build: Build }) {
  const isBee = build.id === 'bee-colony';
  return (
    <article
      className={`group rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg flex flex-col ${
        isBee ? 'hover:border-amber-300/80' : 'hover:border-emerald-300/80'
      } transition hover:-translate-y-1 duration-300`}
      title={isBee ? '🐝 You found a hidden bee. Hyperfocus swarms unlocked.' : undefined}
    >
      <div className="h-48 w-full bg-black/40 overflow-hidden relative">
        <img
          src={build.image}
          alt={build.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <StatusBadge status={build.status} />
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-xl group-hover:text-emerald-300 transition leading-tight">{build.title}</h3>
          <StatusBadge status={build.status} />
        </div>
        
        <p className="text-xs text-white/50 font-mono -mt-1">by @{build.author}</p>
        
        <p className="text-sm text-white/80 line-clamp-3 leading-relaxed">{build.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {build.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-white/60 border border-white/5 group-hover:border-white/20 transition"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href={build.demo_url}
            target="_blank"
            className="flex-1 px-3 py-2 rounded-lg bg-emerald-400 text-black text-sm font-bold text-center hover:bg-emerald-300 transition shadow-lg shadow-emerald-400/10"
          >
            Play Demo
          </a>
          <a
            href={build.source_url}
            target="_blank"
            className="flex-1 px-3 py-2 rounded-lg border border-white/20 text-sm text-center font-medium hover:border-emerald-300 hover:text-emerald-200 transition bg-white/5"
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    LIVE: 'bg-emerald-400 text-black shadow-lg shadow-emerald-400/20',
    BETA: 'bg-amber-300 text-black shadow-lg shadow-amber-300/20',
    WIP: 'bg-pink-500 text-white shadow-lg shadow-pink-500/20'
  };
  const label = status.toUpperCase();
  return (
    <span
      className={`px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider ${colors[status] ?? 'bg-slate-500 text-white'}`}
    >
      {label}
    </span>
  );
}

function SocialLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-emerald-300 hover:text-emerald-200 transition bg-white/5 hover:bg-emerald-400/10"
    >
      {label}
    </a>
  );
}
