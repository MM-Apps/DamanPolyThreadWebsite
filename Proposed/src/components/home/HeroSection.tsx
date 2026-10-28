import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const highlights = [
    { value: '10,000 MT', label: 'Annual PP Extrusion Capacity', sub: 'Largest manufacturer in India' },
    { value: '8.0 g/d', label: 'Maximum Tensile Tenacity', sub: 'High-tenacity filament engineering' },
    { value: '200 – 6,000', label: 'Comprehensive Denier Range', sub: 'Customizable count & filaments' },
    { value: '8 European Lines', label: 'Compact Spinning Plant', sub: 'Closed-loop automated HMI' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-primary via-primary-dark to-primary text-white overflow-hidden py-20 lg:py-28 border-b border-primary-light/40">
      {/* Subtle Industrial Precision Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow Badge - Text Only */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Pioneering High-Tenacity PPMF Yarn In India • Est. 2000</span>
          </div>

          {/* Grand Industrial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-tight sm:leading-none text-white">
            Engineered Threads.{' '}
            <span className="text-accent block mt-2 sm:mt-3">
              Built for Industry.
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-base sm:text-xl text-slate-light leading-relaxed max-w-3xl mx-auto font-normal">
            Daman Polythread Ltd. is India’s foremost manufacturer and global exporter of high-tenacity polypropylene multifilament yarns, high-strength industrial bag closing sewing threads, and technical webbings. Operating 10,000 MT annual capacity across 8 state-of-the-art European compact spinning lines in Daman.
          </p>

          {/* Core CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/products"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Product Catalog
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Request Quotation & Samples
            </Button>
          </div>

          {/* Technical Metric Row */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-accent/40 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-accent font-heading block">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block mt-1">
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-light block mt-0.5">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Subtle Industrial Quality Checklist */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-light">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>100% Virgin Polymer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>FDY Flat, Intermingled & Twisted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>UV & Chemical Resistant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>Global Containerized Export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
