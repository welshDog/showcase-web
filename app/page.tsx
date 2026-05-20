import buildsData from '../data/builds.json';
import { BuildsData, Build } from '../types/build';
import { BuildCard } from '../components/BuildCard';
import { SocialLinks } from '../components/SocialLinks';

const ECOSYSTEM = [
  { name: 'HyperCode V2.4',              desc: 'Neuro-friendly lang + 29-container IDE brain.',      status: 'LIVE',  github: 'https://github.com/welshDog/HyperCode-V2.4',                          live: 'https://showcase-web-omega.vercel.app' },
  { name: 'Hyper-Vibe-Coding-Course',    desc: 'Game-style AI course for neurodivergent devs.',      status: 'BETA',  github: 'https://github.com/welshDog/Hyper-Vibe-Coding-Course',               live: 'https://hyper-vibe-coding-course.vercel.app' },
  { name: 'BROski-Obsidian-Brain',       desc: 'AI-agent knowledge brain + workflow tools.',         status: 'LIVE',  github: 'https://github.com/welshDog/BROski-Obsidian-Brain-for-HyperFocus-z0ne', live: '#' },
  { name: 'BROskiPets-LLM-dNFT',        desc: 'NFT pets + AI agents + dynamic NFTs.',               status: 'WIP',   github: 'https://github.com/welshDog/BROskiPets-LLM-dNFT',                    live: '#' },
  { name: 'HyperAgent-SDK',             desc: 'npm agent toolkit for Hyperfocus builds.',           status: 'BETA',  github: 'https://github.com/welshDog/HyperAgent-SDK',                         live: 'https://www.npmjs.com/package/@w3lshdog/hyper-agent' },
];

const STATUS_STRIP = [
  { label: 'Course',        state: '🟢 online'  },
  { label: 'HyperCode',     state: '🟢 running'  },
  { label: 'Agents',        state: '🟡 testing'  },
  { label: 'BROskiPets',    state: '🟢 minting'  },
  { label: 'Obsidian-Brain',state: '🟢 active'   },
];

export default function Home() {
  const { featured, builds } = buildsData as BuildsData;

  return (
    <main
      className="min-h-screen text-white"
      style={{ background: 'linear-gradient(135deg, #07070A 0%, #0B1020 50%, #10152a 100%)' }}
    >

      {/* ── HERO ───────────────────────────────── */}
      <section className="px-6 py-14 md:py-24 max-w-6xl mx-auto">
        <p
          className="text-xs uppercase tracking-[0.35em] mb-4 font-mono"
          style={{ color: '#00FFE1' }}
        >
          HYPERFOCUS Z0NE ♾️ — Built by @welshDog
        </p>

        <h1
          className="text-4xl md:text-6xl font-bold mb-5 leading-tight"
          style={{
            background: 'linear-gradient(90deg, #fff 30%, #00FFE1 70%, #FF2D95 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Build your AI Brain 🧠
        </h1>

        <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-6" style={{ color: '#B8C1CC' }}>
          Tools, agents, games &amp; experiments for{' '}
          <span style={{ color: '#00FFE1', fontWeight: 700 }}>ADHD &amp; dyslexic devs</span>.
          Real builds, not tutorial toys.
        </p>

        {/* Hero bullets */}
        <div className="grid gap-3 md:grid-cols-3 max-w-3xl mb-8">
          {[
            '🌱 Start from real builds, not tutorial toys.',
            '🤝 Fork, remix, and ship your own flows.',
            '🚀 Turn hyperfocus bursts into legendary projects.',
          ].map(t => (
            <div
              key={t}
              className="rounded-xl px-4 py-3 text-sm hz-card"
              style={{ color: '#B8C1CC' }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a href="#builds" className="btn-primary">Explore Builds 🔥</a>
          <a href="#ecosystem" className="btn-secondary">View Ecosystem 🌐</a>
          <a
            href="https://discord.gg/A3aaRX8EM4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ borderColor: 'rgba(255,45,149,0.4)', color: '#FF2D95' }}
          >
            Join Discord z0ne 💬
          </a>
        </div>

        {/* Status strip */}
        <div className="status-strip">
          {STATUS_STRIP.map(s => (
            <span key={s.label} className="status-dot">
              <span style={{ color: '#00FFE1' }}>{s.label}</span>: {s.state}
            </span>
          ))}
        </div>
      </section>

      {/* ── ECOSYSTEM GRID ─────────────────────── */}
      <section id="ecosystem" className="px-6 pb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          The <span style={{ color: '#00FFE1' }}>Hyperfocus Z0ne</span> Ecosystem
        </h2>
        <p className="text-sm mb-8" style={{ color: '#B8C1CC' }}>
          5 active repos. One brain. Stop apologising. Build your empire.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM.map(proj => (
            <div key={proj.name} className="hz-card p-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-base leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {proj.name}
                </h3>
                <EcoStatusBadge status={proj.status} />
              </div>
              <p className="text-sm" style={{ color: '#B8C1CC' }}>{proj.desc}</p>
              <div className="flex gap-2 mt-auto pt-3" style={{ borderTop: '1px solid rgba(0,255,225,0.08)' }}>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs px-3 py-1.5">GitHub 📦</a>
                {proj.live !== '#' && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-3 py-1.5">Live 🚀</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED VIDEO ─────────────────────── */}
      <section id="hyper-station" className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[3fr,2fr] gap-8 items-start">
          <div
            className="aspect-video w-full overflow-hidden rounded-2xl shadow-2xl relative"
            style={{ border: '1px solid rgba(0,255,225,0.15)', background: '#07070A' }}
          >
            <iframe
              className="w-full h-full"
              src={`${featured.video_url}?modestbranding=1&rel=0&showinfo=0&controls=1`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xs uppercase tracking-[0.25em] font-mono" style={{ color: '#00FFE1' }}>
              FEATURED DEMO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">{featured.title}</h2>
            <p style={{ color: '#00FFE1' }} className="text-lg font-medium">{featured.subtitle}</p>
            <p style={{ color: '#B8C1CC' }} className="leading-relaxed">{featured.description}</p>
            <div className="flex flex-wrap gap-3">
              <a href={featured.primary_cta.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {featured.primary_cta.label}
              </a>
              <a href={featured.secondary_cta.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                {featured.secondary_cta.label}
              </a>
            </div>
            <p className="text-xs italic" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Pssst… try hovering over the 🐝 builds below.
            </p>
          </div>
        </div>
      </section>

      {/* ── BUILDS GALLERY ─────────────────────── */}
      <section id="builds" className="px-6 pb-16 max-w-6xl mx-auto">
        <div
          className="flex items-baseline justify-between mb-8 pb-4"
          style={{ borderBottom: '1px solid rgba(0,255,225,0.1)' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Builds <span style={{ color: '#00FFE1' }}>Gallery</span>
          </h2>
          <p className="text-sm font-mono" style={{ color: '#B8C1CC' }}>
            {builds.length} builds 🔥
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {builds.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      </section>

      {/* ── SUBMIT ─────────────────────────────── */}
      <section id="submit" className="px-6 pb-16 max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: 'rgba(11,16,32,0.85)',
            border:     '1px solid rgba(0,255,225,0.12)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
            style={{ background: 'rgba(0,255,225,0.07)' }}
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Submit Your Build <span style={{ color: '#00FFE1' }}>(soon)</span>
          </h2>
          <p className="mb-6" style={{ color: '#B8C1CC' }}>
            Add your own agents, tools, games, and experiments to the Hyperfocus gallery.
          </p>
          <ol className="space-y-4 text-sm mb-8">
            {[
              'Fork the showcase repo from GitHub.',
              <span key="2">Add your build to <code style={{ background: 'rgba(0,0,0,0.4)', padding: '0 6px', borderRadius: 4, color: '#00FFE1' }}>data/builds.json</code>.</span>,
              'Open a Pull Request. Once merged, you\'re live.',
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'rgba(0,255,225,0.12)', color: '#00FFE1' }}
                >{i + 1}</span>
                <span style={{ color: '#B8C1CC' }}>{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs italic" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Legend says entering the Konami code unlocks a secret Hyperfocus theme… (coming soon).
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer
        className="py-12 px-6"
        style={{ borderTop: '1px solid rgba(0,255,225,0.1)', background: 'rgba(7,7,10,0.6)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
          <div className="text-center md:text-left">
            <p className="mb-1 font-bold" style={{ color: '#00FFE1' }}>
              HYPERFOCUS Z0NE ♾️
            </p>
            <p className="text-xs" style={{ color: '#B8C1CC' }}>
              Built by Lyndz Williams (@welshDog) — Llanelli, Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁧
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Made by neurospicy devs for neurospicy devs. Stay weird. Build legendary.
            </p>
          </div>
          <SocialLinks />
        </div>
        <p className="mt-8 text-center font-mono" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.18)' }}>
          If you&apos;re reading this tiny line, you&apos;re officially a Hyperfocus lore enjoyer. Welcome to the crew, BROski♾️.
        </p>
      </footer>
    </main>
  );
}

function EcoStatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    LIVE: 'badge badge-live',
    BETA: 'badge badge-beta',
    WIP:  'badge badge-wip',
  };
  return <span className={map[status] ?? 'badge badge-live'}>{status}</span>;
}
