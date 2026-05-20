'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home',      href: '/'          },
  { label: 'Builds',    href: '/#builds'   },
  { label: 'Ecosystem', href: '/#ecosystem'},
  { label: 'Support',   href: '/support'   },
  { label: 'Discord',   href: 'https://discord.gg/A3aaRX8EM4', external: true },
];

export function HyperNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('/');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    setActive(window.location.pathname);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(7,7,10,0.82)'
          : 'rgba(7,7,10,0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(0,255,225,0.12)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        padding: scrolled ? '0.6rem 1.5rem' : '1rem 1.5rem',
      }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span
            className="font-black text-base md:text-lg tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #00FFE1, #FF2D95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            HYPERFOCUS Z0NE
          </span>
          <span className="text-base">♾️</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => {
            const isActive = active === link.href;
            return link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{ color: '#FF2D95', borderColor: 'rgba(255,45,149,0.3)' }}
              >
                {link.label} 💬
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA button desktop */}
        <a
          href="/support"
          className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
        >
          ⚡ Support
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors"
          style={{ background: open ? 'rgba(0,255,225,0.1)' : 'transparent' }}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span className="hamburger-line" style={{ opacity: open ? 0 : 1 }} />
          <span className="hamburger-line" style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '320px' : '0',
          opacity: open ? 1 : 0,
        }}
      >
        <div className="flex flex-col gap-1 pt-3 pb-4 px-2">
          {NAV_LINKS.map(link =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-mobile"
                style={{ color: '#FF2D95' }}
                onClick={() => setOpen(false)}
              >
                {link.label} 💬
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link-mobile"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a href="/support" className="btn-primary text-center mt-2" onClick={() => setOpen(false)}>
            ⚡ Support the Empire
          </a>
        </div>
      </div>
    </header>
  );
}
