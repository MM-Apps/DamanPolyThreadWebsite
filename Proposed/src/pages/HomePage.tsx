import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { QualityBanner } from '../components/home/QualityBanner';
import { ProductGrid } from '../components/products/ProductGrid';
import { SectionHeading } from '../components/ui/SectionHeading';
import { QuoteCTA } from '../components/ui/QuoteCTA';
import { Button } from '../components/ui/Button';
import { companyData } from '../data/company';

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
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Key Metrics Bar */}
      <section className="bg-white border-b border-border py-10 shadow-2xs">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {companyData.stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-accent pl-4 sm:pl-6 text-left">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-primary block tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mt-1 block">
                  {stat.label}
                </span>
                {stat.subtext && (
                  <p className="text-xs text-slate mt-1 line-clamp-2">
                    {stat.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Products Showcase */}
      <section className="py-20 bg-base border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="TECHNICAL PRODUCT CATALOG"
              title="Engineered Synthetic Thread & Yarns"
              subtitle="Manufactured using 100% virgin polymer across high-tenacity multifilament yarns, industrial sewing threads, and custom webbings."
            />
            <Button
              to="/products"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="self-start md:self-auto shrink-0"
            >
              Full Specifications
            </Button>
          </div>

          <ProductGrid />
        </div>
      </section>

      {/* 4. Manufacturing Capabilities */}
      <CapabilitiesSection />

      {/* 5. Industries Served Grid */}
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

      {/* 6. Quality & Lab Testing */}
      <QualityBanner />

      {/* 7. Why Daman Polythread Strip */}
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

      {/* 8. Conversion Quote CTA */}
      <QuoteCTA />
    </div>
  );
};
