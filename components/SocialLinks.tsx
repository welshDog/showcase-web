'use client';

const SOCIALS = [
  { label: 'GitHub',    href: 'https://github.com/welshDog' },
  { label: 'Discord',   href: 'https://discord.gg/A3aaRX8EM4' },
  { label: 'TikTok',   href: 'https://www.tiktok.com/@xdwelshdog' },
  { label: 'X',        href: 'https://twitter.com/DeFiIsTheFuture' },
  { label: 'Substack', href: 'https://hyperfocuslyndz.substack.com' },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      {SOCIALS.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 rounded-full transition-colors duration-200"
          style={{
            border:     '1px solid rgba(0,255,225,0.15)',
            color:      '#B8C1CC',
            background: 'rgba(0,255,225,0.04)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = '#00FFE1';
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,255,225,0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = '#B8C1CC';
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,255,225,0.15)';
          }}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
