import React from 'react';
import { ArrowRight, ShieldCheck, Factory, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary via-primary-dark to-primary text-white overflow-hidden py-16 lg:py-24 border-b border-primary-light/40">
      {/* Background Industrial Overlay Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>India’s Pioneer in High-Tenacity PPMF Yarn • Est. 2000</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight text-white">
              Engineered Threads.{' '}
              <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">
                Built for Industry.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-light leading-relaxed max-w-2xl">
              Daman Polythread Ltd. is a frontrunner in high-tenacity polypropylene multifilament yarns, industrial bag closing threads, and technical webbings. Powered by 8 compact European spinning lines with 10,000 MT annual production capacity.
            </p>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Tenacity reaching up to 8.0 g/d</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Denier range from 200 to 6,000 D</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>European machinery with automated HMI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Prompt domestic & worldwide export</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
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
                className="border-white/40 text-white hover:bg-white hover:text-primary"
              >
                Request Quotation & Samples
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-primary-dark/80 rounded-xl border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-xs relative overflow-hidden">
              {/* Product Imagery Composite */}
              <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-4/3 bg-primary-light/40 flex items-center justify-center p-4">
                <img
                  src="/images/factory/factory.jpg"
                  alt="Daman Polythread Manufacturing Plant"
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent flex items-end p-4">
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent block">
                      Production Facility
                    </span>
                    <h3 className="text-base font-bold text-white font-heading">
                      Daman, Western India Hub
                    </h3>
                  </div>
                </div>
              </div>

              {/* Stat Matrix Below Image */}
              <div className="grid grid-cols-2 gap-3 mt-4 text-left">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <span className="text-xl sm:text-2xl font-black text-accent font-heading block">
                    10,000 MT
                  </span>
                  <span className="text-xs text-slate-light block mt-0.5">
                    Annual PPMF Output
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <span className="text-xl sm:text-2xl font-black text-white font-heading block">
                    2,000 MT
                  </span>
                  <span className="text-xs text-slate-light block mt-0.5">
                    Narrow Woven Fabrics
                  </span>
                </div>
              </div>

              {/* Plant Tag */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-light">
                <span className="flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-accent" />
                  <span>8 Compact Spinning Lines</span>
                </span>
                <span className="font-semibold text-accent">100% Virgin Polymer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
