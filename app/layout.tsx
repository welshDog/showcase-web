import type { Metadata } from 'next';
import { HyperNav } from '../components/HyperNav';
import './globals.css';

export const metadata: Metadata = {
  title:       'Hyperfocus Z0ne | Built by @welshDog',
  description: 'A playground of agents, tools, games, and experiments built by neurodivergent devs for neurodivergent devs.',
  openGraph: {
    title:       'Hyperfocus Z0ne | Built by @welshDog',
    description: 'Neurodivergent dev playground — agents, tools, games, experiments.',
    url:         'https://showcase-web-omega.vercel.app',
    siteName:    'Hyperfocus Z0ne',
    locale:      'en_GB',
    type:        'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HyperNav />
        <div style={{ paddingTop: '70px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
