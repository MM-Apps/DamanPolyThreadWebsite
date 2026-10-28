import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, MapPin, ArrowRight, Building2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const featuredExpos = [
  {
    title: 'Techtextil Frankfurt',
    venue: 'Messe Frankfurt, Germany',
    city: 'Frankfurt am Main',
    country: 'Germany',
    year: '2017',
    image: '/images/events/eve13.jpg',
    description: 'Premier world trade fair for technical textiles and nonwovens. Benchmarking European PPMF quality standards.',
    category: 'germany-2017',
  },
  {
    title: 'Techtextil Russia',
    venue: 'Crocus Expo & Expocentre',
    city: 'Moscow',
    country: 'Russia',
    year: '2018',
    image: '/images/events/eve23.jpg',
    description: 'Direct consultation with Eurasian geo-textile, FIBC sling, and industrial bag closing manufacturers.',
    category: 'russia-2018',
  },
  {
    title: 'Colombiatex de las Américas',
    venue: 'Plaza Mayor Medellín',
    city: 'Medellín',
    country: 'Colombia',
    year: '2018',
    image: '/images/events/eve16.jpg',
    description: 'Expanding Latin American distribution networks with custom dope-dyed yarns and TUFF™ webbings.',
    category: 'colombia-2018',
  },
  {
    title: 'Trade Media Profile',
    venue: 'Global Circulation',
    city: 'International',
    country: 'Global',
    year: '2018',
    image: '/images/events/media1.jpeg',
    description: 'Feature editorial on Daman Polythread’s 10,000 MT capacity milestone and European technology adoption.',
    category: 'media',
  },
];

export const GlobalPresenceSection: React.FC = () => {
  return (
    <section className="py-20 bg-base/50 border-b border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="INTERNATIONAL EXPORT FOOTPRINT"
            title="Global Trade Delegations & Industry Exhibitions"
            subtitle="Regularly exhibiting across Europe, Eurasia, and Latin America. We connect in person with overseas converters, distributors, and OEM partners."
          />
          <Button
            to="/events"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            Explore All 25 Exhibits
          </Button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredExpos.map((expo, idx) => (
            <Link
              key={idx}
              to="/events"
              className="bg-white rounded-xl border border-border overflow-hidden group shadow-2xs hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-4/3 bg-slate/10 overflow-hidden relative">
                <img
                  src={expo.image}
                  alt={expo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-primary/90 text-white px-2 py-0.5 rounded">
                    {expo.year}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold bg-white/95 text-primary-dark px-2 py-0.5 rounded shadow-2xs flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-accent" />
                    <span>{expo.city}</span>
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                    {expo.country}
                  </span>
                  <h3 className="font-bold text-base font-heading text-primary group-hover:text-primary-light transition-colors line-clamp-1">
                    {expo.title}
                  </h3>
                  <p className="text-xs text-slate-light flex items-center gap-1 mt-1 mb-2.5">
                    <Building2 className="w-3 h-3 text-slate/60 shrink-0" />
                    <span className="truncate">{expo.venue}</span>
                  </p>
                  <p className="text-xs text-slate leading-relaxed line-clamp-2">
                    {expo.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-accent font-semibold group-hover:text-accent-hover transition-colors">
                  <span>View Documentation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Global Logistics Quick Strip */}
        <div className="mt-10 bg-primary text-white rounded-xl p-6 border border-primary-light/40 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                Exporting Worldwide via Dedicated Mumbai JNPT Port Corridor
              </h4>
              <p className="text-xs text-slate-light mt-0.5">
                Full-container-load (FCL) dispatch with moisture-barrier export packing, standardized palletization, and complete mill test certificates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <Button to="/contact" variant="gold" size="sm" className="w-full md:w-auto justify-center">
              Request Export Price List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
