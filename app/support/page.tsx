import { SupportHero } from '../../components/support/SupportHero';
import { SupportTiers } from '../../components/support/SupportTiers';
import { SupportStats } from '../../components/support/SupportStats';
import { SupportWall } from '../../components/support/SupportWall';
import { SupportCTA } from '../../components/support/SupportCTA';
import { ParticleCanvas } from '../../components/ParticleCanvas';

export const metadata = {
  title: 'Support the Empire | Hyperfocus Z0ne',
  description: 'Fuel the neurodivergent dev revolution. Back the Hyperfocus Z0ne ecosystem.',
};

export default function SupportPage() {
  return (
    <main
      className="min-h-screen text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #07070A 0%, #0B1020 50%, #10152a 100%)' }}
    >
      {/* Live particle neural network */}
      <ParticleCanvas />

      {/* Aurora orbs */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div className="aurora-1" />
        <div className="aurora-2" />
        <div className="aurora-3" />
        <div className="scanlines" />
      </div>

      <div className="relative z-10">
        <SupportHero />
        <SupportStats />
        <SupportTiers />
        <SupportWall />
        <SupportCTA />
      </div>
    </main>
  );
}
