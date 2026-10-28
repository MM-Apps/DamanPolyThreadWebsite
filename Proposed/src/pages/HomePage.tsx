import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { InteractiveProductShowcase } from '../components/home/InteractiveProductShowcase';
import { ParallaxDivider } from '../components/home/ParallaxDivider';
import { ManufacturingProcess } from '../components/home/ManufacturingProcess';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { QualityBanner } from '../components/home/QualityBanner';
import { SectionHeading } from '../components/ui/SectionHeading';
import { QuoteCTA } from '../components/ui/QuoteCTA';
import { Button } from '../components/ui/Button';

export const HomePage: React.FC = () => {
  const industries = [
    {
      name: 'Bulk Packaging & FIBC',
      desc: 'High-tenacity yarns engineered for sewing jumbo bags, loops, and heavy-duty woven sacks.',
      image: '/images/products/ppmf/FIBC bag.jpg',
      tag: 'THREADLON PPMF',
    },
    {
      name: 'Grain & Agro Industries',
      desc: 'Fast-running lubricated bag closing threads for high-speed wheat, flour, and sugar bagging.',
      image: '/images/products/bct/Grain Industries.jpg',
      tag: 'Bag Closing Thread',
    },
    {
      name: 'Automotive & Safety Restraints',
      desc: 'Tested narrow woven fabrics for seat belts, child safety seats, and vehicle tie-downs.',
      image: '/images/products/nwf/automobile.jpg',
      tag: 'TUFF Webbings',
    },
    {
      name: 'Geotextiles & Civil Engineering',
      desc: 'Chemically inert yarns for erosion control fabrics, canal liners, and soil stabilization.',
      image: '/images/products/ppmf/Geo-textilewovenfabric.jpg',
      tag: 'High-Tenacity PPMF',
    },
    {
      name: 'Industrial Lifting & Slings',
      desc: 'Abrasion-resistant multi-ply twisted yarns for flat slings, cargo nets, and mooring ropes.',
      image: '/images/products/ppmf/PPslings.jpg',
      tag: 'Up to 8.0 g/d',
    },
    {
      name: 'Cement & Chemical Sacks',
      desc: 'Acid and alkali-resistant threads that maintain seam strength through transport & storage.',
      image: '/images/products/bct/Mouth Closing of Cement Sacks.jpg',
      tag: 'Rot & Chemical Resistant',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section with Ken Burns Cinematic Slider.
          The hero already anchors four metric cards to its bottom edge, so a
          second stat band directly beneath it only repeated the same numbers
          ("10,000 MT" twice within one screen). The page now opens on the
          hero and goes straight into the product showcase. */}
      <HeroSection />

      {/* 2. Interactive Product Showcase (Tabbed with cycling spool carousels) */}
      <InteractiveProductShowcase />

      {/* 3. Atmospheric Industrial Parallax Divider & Registered Brands */}
      <ParallaxDivider />

      {/* 4. Manufacturing Capabilities Tour */}
      <CapabilitiesSection />

      {/* 5. Step-by-Step Manufacturing Process Pipeline */}
      <ManufacturingProcess />

      {/* 6. Industries Served Grid */}
      <section className="py-20 bg-base border-b border-border">
        <div className="container-custom">
          <SectionHeading
            eyebrow="APPLICATIONS & MARKETS"
            title="Trusted Across Demanding Sectors"
            subtitle="Supplying technical textile converters, bag packaging facilities, and OEMs throughout India, Europe, the Americas, and Southeast Asia."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-border overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-16/10 bg-base overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-white px-2.5 py-1 rounded">
                      {ind.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-primary group-hover:text-primary-light transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-slate mt-2 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-primary font-semibold">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover"
                    >
                      <span>Explore Suitable Grades</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quality & Lab Testing Banner */}
      <QualityBanner />

      {/* 8. Technical Partnership & Sample Spool Offer */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-base/60 rounded-xl border border-border p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  TECHNICAL PARTNERSHIP
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary leading-tight">
                  Looking for Exact Denier, Custom Colorways, or Slit Tape Alternatives?
                </h3>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  Our Daman plant specializes in tailored spin batches. We supply FDY flat, intermingled, and twisted configurations with custom elongation and heat-setting parameters.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Free sample spools available for qualifying B2B converters</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>OEM technical consultation</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                <Button to="/contact" variant="gold" size="lg" className="w-full justify-center">
                  Request Sample Spool
                </Button>
                <Button to="/products" variant="outline" size="md" className="w-full justify-center">
                  View Data Sheets
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Conversion Quote CTA */}
      <QuoteCTA />
    </div>
  );
};
