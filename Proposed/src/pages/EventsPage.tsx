import React, { useEffect, useMemo, useState } from 'react';
import {
  Globe2,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Building2,
  Search,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { QuoteCTA } from '../components/ui/QuoteCTA';
import { eventsData, eventCategories } from '../data/events';
import { assetUrl } from '../utils/assetUrl';
import type { EventItem } from '../types';

export const EventsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'all') return eventsData;
    return eventsData.filter((ev) => ev.category === activeCategory);
  }, [activeCategory]);

  // Lightbox keyboard controls
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((idx) =>
          idx === null ? null : (idx + 1) % filteredEvents.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((idx) =>
          idx === null ? null : (idx - 1 + filteredEvents.length) % filteredEvents.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredEvents.length]);

  const activeEvent: EventItem | null =
    lightboxIndex !== null ? filteredEvents[lightboxIndex] ?? null : null;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white py-20 lg:py-24 overflow-hidden border-b border-primary-light/40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('${assetUrl('/images/events/eve13.jpg')}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary-dark/95 via-primary-dark/85 to-primary-dark/95" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Global Trade Presence • 3 Continents</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight mb-5">
              International Exhibitions & Trade Delegations
            </h1>

            <p className="text-base sm:text-lg text-slate-light leading-relaxed mb-8">
              Authentic photographic documentation from premier global textile expos across Frankfurt, Moscow, and Medellín. Daman Polythread regularly presents its 10,000 MT high-tenacity yarn and narrow fabric capabilities directly to international technical converters.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-light">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Messe Frankfurt Exhibitor</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-accent" />
                <span>Expocentre Moscow Participant</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-accent" />
                <span>Plaza Mayor Medellín Partner</span>
              </span>
            </div>
          </div>
        </div>

        {/* Credibility Stats Bar */}
        <div className="container-custom relative z-10 mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <span className="text-2xl sm:text-3xl font-black font-heading text-accent block">5 Major</span>
              <span className="text-xs uppercase tracking-wider text-slate-light font-bold mt-1 block">Global Expos</span>
              <span className="text-[11px] text-slate-light/70 mt-0.5 block">Germany, Russia & Colombia</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <span className="text-2xl sm:text-3xl font-black font-heading text-accent block">25 Records</span>
              <span className="text-xs uppercase tracking-wider text-slate-light font-bold mt-1 block">Verified Exhibits</span>
              <span className="text-[11px] text-slate-light/70 mt-0.5 block">Authentic booth photography</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <span className="text-2xl sm:text-3xl font-black font-heading text-accent block">10,000 MT</span>
              <span className="text-xs uppercase tracking-wider text-slate-light font-bold mt-1 block">Export Capacity</span>
              <span className="text-[11px] text-slate-light/70 mt-0.5 block">Represented at international forums</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <span className="text-2xl sm:text-3xl font-black font-heading text-accent block">50+ Nations</span>
              <span className="text-xs uppercase tracking-wider text-slate-light font-bold mt-1 block">Converter Footprint</span>
              <span className="text-[11px] text-slate-light/70 mt-0.5 block">Direct supply & port corridors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Content Grid */}
      <section className="py-16 bg-base/40 border-b border-border">
        <div className="container-custom">
          {/* Header and Filter Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="GLOBAL ARCHIVE"
              title="Trade Fair Gallery & Media Coverage"
              subtitle="Browse through our verified exhibition booths, product showcase counters, and international client delegations."
            />

            <div className="text-xs text-slate font-medium shrink-0 bg-white px-3.5 py-2 rounded-lg border border-border shadow-2xs self-start lg:self-auto">
              Showing <span className="font-bold text-primary">{filteredEvents.length}</span> of {eventsData.length} records
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
            {eventCategories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    active
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-white text-slate border border-border hover:border-slate/40 hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Exhibition Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                onClick={() => setLightboxIndex(index)}
                className="bg-white rounded-xl border border-border overflow-hidden group shadow-2xs hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Photo Container */}
                <div className="aspect-4/3 bg-slate/10 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-accent" />
                      <span>Click to view full photograph</span>
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-primary/90 text-white px-2 py-0.5 rounded shadow-xs">
                      {event.year}
                    </span>
                  </div>

                  {/* City Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold bg-white/90 text-primary-dark backdrop-blur-xs px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-accent" />
                      <span>{event.city}</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                      {event.categoryLabel}
                    </span>
                    <h3 className="font-bold text-sm text-primary group-hover:text-primary-light transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate mt-2 line-clamp-2 leading-relaxed">
                      {event.caption}
                    </p>
                  </div>

                  {event.stand && (
                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-slate-light">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-slate/70" />
                        <span className="truncate max-w-[180px]">{event.stand}</span>
                      </span>
                      <span className="text-accent font-semibold">{event.country}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-primary-dark/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white border-b border-white/10 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs text-accent font-bold uppercase tracking-wider block">
                {activeEvent.categoryLabel} • {activeEvent.year}
              </span>
              <h4 className="text-sm sm:text-base font-bold font-heading text-white mt-0.5">
                {activeEvent.title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-light hidden sm:inline">
                Photo {lightboxIndex! + 1} of {filteredEvents.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image Container */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeEvent.image}
              alt={activeEvent.title}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            />

            {/* Prev Button */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((idx) =>
                  idx === null ? null : (idx - 1 + filteredEvents.length) % filteredEvents.length
                )
              }
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-primary-dark/70 hover:bg-primary-dark text-white border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((idx) =>
                  idx === null ? null : (idx + 1) % filteredEvents.length
                )
              }
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-primary-dark/70 hover:bg-primary-dark text-white border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div
            className="bg-primary-dark/80 border border-white/10 rounded-lg p-3 sm:p-4 text-center max-w-3xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs sm:text-sm text-slate-light leading-relaxed">
              {activeEvent.caption}
            </p>
            {activeEvent.stand && (
              <span className="text-[11px] text-accent/80 mt-1 block">
                {activeEvent.stand} • {activeEvent.city}, {activeEvent.country}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Quote & Trade Inquiry CTA */}
      <QuoteCTA
        title="Schedule a Meeting at Our Next Trade Delegation"
        subtitle="Planning to visit upcoming technical textile expos in Europe, Eurasia, or Latin America? Contact our export team to schedule a technical consultation or request product samples in advance."
      />
    </div>
  );
};
