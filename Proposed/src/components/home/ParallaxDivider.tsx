import React from 'react';
import { ShieldCheck, ArrowRight, Award, Factory, Cpu } from 'lucide-react';
import { Button } from '../ui/Button';
import { assetUrl } from '../../utils/assetUrl';

export const ParallaxDivider: React.FC = () => {
  const brands = [
    {
      name: 'THREADLON®',
      tagline: 'High-Tenacity PPMF Yarn & Bag Closing Threads',
      image: assetUrl('/images/brands/threadlon.png'),
      desc: 'Industry benchmark for high-speed automated sewing and heavy-duty technical synthetic filaments.',
    },
    {
      name: 'TUFF®',
      tagline: 'Technical Narrow Woven Fabrics & Webbings',
      image: assetUrl('/images/brands/tuff.png'),
      desc: 'Engineered for maximum tensile integrity, abrasion endurance, and UV resistance in FIBC & cargo restraint.',
    },
    {
      name: 'DPL®',
      tagline: 'Precision Narrow Fabrics & Custom Tapes',
      image: assetUrl('/images/brands/dpl.png'),
      desc: 'Custom engineered widths from 10mm to 100mm woven from our own high-tenacity multifilament yarns.',
    },
  ];

  return (
    <section className="relative text-white overflow-hidden py-24 lg:py-32 border-y border-primary-light/40">
      {/* Background with Atmospheric Industrial Parallax Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('${assetUrl('/images/parallax/parallax-ppmf.jpg')}')`,
        }}
      />

      {/* Dark Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary/95" />
      <div className="absolute inset-0 z-10 bg-primary-dark/40 backdrop-blur-[2px]" />

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Cpu className="w-4 h-4 text-accent" />
            <span>Industrial Manufacturing Core</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight drop-shadow-md">
            Technology is Our Backbone.
          </h2>

          <p className="text-base sm:text-xl text-slate-light leading-relaxed max-w-3xl mx-auto">
            Operating India’s most technologically advanced European compact spinning infrastructure in Daman. From computerized polymer gravimetric dosing to automated winding and computerized tensiometer testing, our facility ensures zero-compromise precision.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/about"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Tour Daman Infrastructure
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-primary"
            >
              Consult with Technical Team
            </Button>
          </div>
        </div>

        {/* Registered Brands Showcase Grid */}
        <div className="border-t border-white/15 pt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Official Registered Trademarks of Daman Polythread Ltd.</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {brands.map((b, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-6 hover:bg-white/15 hover:border-accent/50 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Brand Logo Container */}
                <div className="h-20 w-full flex items-center justify-center bg-white rounded-lg p-3 shadow-sm mb-5 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold font-heading text-white">
                  {b.name}
                </h3>
                <span className="text-xs font-bold text-accent uppercase tracking-wider mt-1 block">
                  {b.tagline}
                </span>
                <p className="text-xs text-slate-light mt-3 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Facility Highlights */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-light">
            <div className="flex items-center gap-2">
              <Factory className="w-4 h-4 text-accent" />
              <span>Daman Industrial Estate, UT of DNH & Daman, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>ISO-Aligned Standardized Production Cycles</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Direct Domestic & Containerized Port Dispatches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
