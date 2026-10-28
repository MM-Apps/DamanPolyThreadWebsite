import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Camera,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { QuoteCTA } from '../components/ui/QuoteCTA';

// Twenty photographs of the actual Daman works, grouped by the process stage they
// show. Every caption describes machinery the plant genuinely runs — nothing here
// is a stock image, which is the whole point of putting them on a page.
const plantPhotos = [
  { src: '/images/infra/Spinning/FS_001.jpg', title: '8 Compact European Spinning Lines', tag: 'Extrusion & Drawing', category: 'Spinning' },
  { src: '/images/infra/Spinning/FS_006.jpg', title: 'Filament Cross-Section Control', tag: 'Automated HMI', category: 'Spinning' },
  { src: '/images/infra/Spinning/FS_010.jpg', title: 'Continuous Extrusion Hall', tag: 'Melt Spinning', category: 'Spinning' },
  { src: '/images/infra/Spinning/FS_032.jpg', title: 'Spin Line Operator Station', tag: 'Draw Ratio Control', category: 'Spinning' },
  { src: '/images/infra/Spinning/FS_033.jpg', title: 'Filament Bundle Formation', tag: 'Quench & Spin Finish', category: 'Spinning' },
  { src: '/images/infra/Spinning/FS_041.jpg', title: 'Spinning Line Instrumentation', tag: 'Closed-Loop HMI', category: 'Spinning' },
  { src: '/images/infra/Spinning/FS_131.jpg', title: 'Winding Take-Up on Spin Line', tag: 'Take-Up Section', category: 'Spinning' },

  { src: '/images/infra/Twisting/FS_070.jpg', title: 'Precision Heavy-Duty Twisting', tag: 'Single & Multi-Ply', category: 'Twisting' },
  { src: '/images/infra/Twisting/FS_080.jpg', title: 'High-Speed Twisting Banks', tag: 'TPM Calibration', category: 'Twisting' },
  { src: '/images/infra/Twisting/FS_083.jpg', title: 'Ring Twister Spindles', tag: 'Ply Assembly', category: 'Twisting' },
  { src: '/images/infra/Twisting/FS_092.jpg', title: 'Twisting Hall, Daman Works', tag: 'Continuous Operation', category: 'Twisting' },
  { src: '/images/infra/Twisting/FS_134.jpg', title: 'Multi-Ply Assembly', tag: 'Two- and Three-Ply', category: 'Twisting' },
  { src: '/images/infra/Twisting/FS_137.jpg', title: 'Twisted Yarn Take-Off', tag: 'Package Build', category: 'Twisting' },
  { src: '/images/infra/Twisting/FS_148.jpg', title: 'Twisting Hall Overview', tag: 'High-Volume Output', category: 'Twisting' },

  { src: '/images/infra/Winding/FS_098.jpg', title: 'Electronic Tension Winding', tag: 'Snag-Free Cones', category: 'Winding' },
  { src: '/images/infra/Winding/FS_108.jpg', title: 'Multi-Spindle Coning Units', tag: 'Constant Density', category: 'Winding' },

  { src: '/images/infra/Needle Looms/FS_169.jpg', title: 'Heavy-Duty Needle Weaving Looms', tag: '10mm – 100mm Webbings', category: 'Needle Looms' },
  { src: '/images/infra/Needle Looms/FS_172.jpg', title: 'Webbing Tensile Inspection', tag: 'TUFF & DPL', category: 'Needle Looms' },
  { src: '/images/infra/Needle Looms/FS_175.jpg', title: 'Narrow Fabric Loom Room', tag: 'Woven Tape Range', category: 'Needle Looms' },
  { src: '/images/infra/Needle Looms/FS_184.jpg', title: 'Webbing Roll Take-Off', tag: 'Finished Rolls', category: 'Needle Looms' },
];

const categories = ['All', 'Spinning', 'Twisting', 'Winding', 'Needle Looms'];

// The application library is the part a procurement team actually scans: "do you
// already supply my industry?" Each tile is a real converted end-use, filed under
// the product line that goes into it.
const applicationGroups = [
  {
    line: 'PP Multifilament Yarn',
    desc: 'High-tenacity yarns feeding woven sacks, FIBC loops, ropes, nets and geotextiles.',
    photos: [
      { src: '/images/products/ppmf/FIBC bag.jpg', title: 'FIBC Bulk Bags' },
      { src: '/images/products/ppmf/Industrialfabricbags.jpg', title: 'Industrial Fabric Bags' },
      { src: '/images/products/ppmf/pp-woven-sacks.jpg', title: 'PP Woven Sacks' },
      { src: '/images/products/ppmf/Ropes.jpg', title: 'Industrial Ropes' },
      { src: '/images/products/ppmf/FishingNets.jpg', title: 'Fishing Nets' },
      { src: '/images/products/ppmf/SafetyNets.jpg', title: 'Safety Nets' },
      { src: '/images/products/ppmf/Geo-textilewovenfabric.jpg', title: 'Geotextile Fabrics' },
      { src: '/images/products/ppmf/PPslings.jpg', title: 'Lifting Slings' },
      { src: '/images/products/ppmf/SafetyBelts.jpg', title: 'Safety Belts' },
      { src: '/images/products/ppmf/PPmats.jpg', title: 'PP Mats & Matting' },
      { src: '/images/products/ppmf/PVChosepipes.jpg', title: 'PVC Hose Reinforcement' },
      { src: '/images/products/ppmf/Narrow-WovenFabric.jpg', title: 'Narrow Woven Fabric' },
    ],
  },
  {
    line: 'Narrow Woven Fabrics & Webbings',
    desc: 'TUFF and DPL webbings for load-bearing, safety and consumer hardware.',
    photos: [
      { src: '/images/products/nwf/Safetyjackets.jpg', title: 'Safety Jackets' },
      { src: '/images/products/nwf/CartridgeBelts.jpg', title: 'Cartridge Belts' },
      { src: '/images/products/nwf/Waistbelt.jpg', title: 'Waist Belts' },
      { src: '/images/products/nwf/Helmet.jpg', title: 'Helmet Strapping' },
      { src: '/images/products/nwf/LuggageIndustries.jpg', title: 'Luggage Webbing' },
      { src: '/images/products/nwf/SchoolBags.jpg', title: 'School Bag Straps' },
      { src: '/images/products/nwf/DogLeashes.jpg', title: 'Dog Leashes' },
      { src: '/images/products/nwf/saddler.jpg', title: 'Saddlery & Harness' },
      { src: '/images/products/nwf/Footwear.jpg', title: 'Footwear Reinforcement' },
      { src: '/images/products/nwf/automobile.jpg', title: 'Automotive Webbing' },
      { src: '/images/products/nwf/gardenchair.jpg', title: 'Furniture Webbing' },
      { src: '/images/products/nwf/Soft Furnishing Fabrics.jpg', title: 'Soft Furnishing' },
    ],
  },
  {
    line: 'Industrial Bag Closing Thread',
    desc: 'THREADLON sewing threads for high-speed sack closure lines.',
    photos: [
      { src: '/images/products/bct/Mouth Closing of Cement Sacks.jpg', title: 'Cement Sacks' },
      { src: '/images/products/bct/Mouth Closing of Fertilizer Bags.jpg', title: 'Fertilizer Bags' },
      { src: '/images/products/bct/Mouth Closing of Sugar Bags.jpg', title: 'Sugar Bags' },
      { src: '/images/products/bct/Mouth Closing of Granules Bags.jpg', title: 'Granules Bags' },
      { src: '/images/products/bct/Mouth Closing of chemical Bags.jpg', title: 'Chemical Bags' },
      { src: '/images/products/bct/Flour Mills.jpg', title: 'Flour Mills' },
      { src: '/images/products/bct/Grain Industries.jpg', title: 'Grain Industries' },
      { src: '/images/products/bct/anybag.jpg', title: 'General Sack Closure' },
    ],
  },
];

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(
    () =>
      activeCategory === 'All'
        ? plantPhotos
        : plantPhotos.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const totalPhotos =
    plantPhotos.length + applicationGroups.reduce((n, g) => n + g.photos.length, 0);

  // Lightbox keyboard control. Escape closes; arrows step through the *filtered*
  // set so the gallery behaves the way the visitor is currently looking at it.
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((i) => (i === null ? i : (i + 1) % filteredPhotos.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) =>
          i === null ? i : (i - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex, filteredPhotos.length]);

  const activePhoto = lightboxIndex === null ? null : filteredPhotos[lightboxIndex];

  return (
    <div className="w-full">
      {/* Atmospheric Industrial Parallax Header Banner */}
      <section className="relative text-white py-20 lg:py-24 border-b border-primary-light/40 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/parallax/parallax-infrastructure.jpg')",
          }}
        />
        {/* Scrim: the plant hall is mid-key and busy, so the copy column runs near-opaque
            while the loom rows stay readable on the right. */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(10,23,38,0.96) 0%, rgba(10,23,38,0.86) 44%, rgba(10,23,38,0.44) 74%, rgba(10,23,38,0.10) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(10,23,38,0.64) 0%, rgba(10,23,38,0.05) 35%, rgba(10,23,38,0.28) 100%)',
          }}
        />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Images className="w-3.5 h-3.5" />
              <span>Inside the Daman Works</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
              No Stock Photography. This Is the Plant.
            </h1>
            <p className="text-base sm:text-lg text-slate-light leading-relaxed">
              Every image below was taken on the floor in Daman — the spinning lines, the twisting banks, the winders and the needle looms that run your order. {totalPhotos} photographs across four process stages and three product lines.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-light">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Photographed on site, not licensed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Four process stages documented
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Live production, not a showroom
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Gallery — filterable by process stage */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="PLANT & MACHINERY"
              title="Follow the Yarn Through the Works"
              subtitle="Polymer arrives at one end and leaves as a palletised cone at the other. These are the stages in between."
            />

            {/* Category filter — process order, not alphabetical, so it reads as a flow */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      setLightboxIndex(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-slate border-border hover:border-accent hover:text-primary'
                    }`}
                    aria-pressed={isActive}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, idx) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group relative bg-base rounded-lg border border-border overflow-hidden text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <div className="aspect-4/3 overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Scrim only on hover, so the grid stays bright at rest */}
                  <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/45 transition-colors duration-300" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-white px-2 py-0.5 rounded">
                      {photo.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-9 h-9 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-lg">
                      <Camera className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-3.5 bg-white">
                  <h4 className="text-xs font-bold font-heading text-primary leading-snug line-clamp-2">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-slate mt-1">{photo.tag}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Application Library — grouped by product line */}
      <section className="py-20 bg-base border-b border-border">
        <div className="container-custom">
          <SectionHeading
            eyebrow="CONVERTED END-USE LIBRARY"
            title="Where This Yarn Ends Up"
            subtitle="A procurement team usually wants to know one thing first: have we already supplied your industry? These are the converted products our material goes into."
            align="center"
            className="mb-14"
          />

          <div className="space-y-14">
            {applicationGroups.map((group) => (
              <div key={group.line}>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5 pb-3 border-b border-border">
                  <div className="text-left">
                    <h3 className="text-xl font-bold font-heading text-primary">{group.line}</h3>
                    <p className="text-xs text-slate mt-1">{group.desc}</p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent shrink-0">
                    {group.photos.length} applications
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {group.photos.map((photo) => (
                    <figure
                      key={photo.src}
                      className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <figcaption className="px-2.5 py-2 text-[11px] font-semibold text-primary leading-snug text-left">
                        {photo.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof strip before the CTA */}
      <section className="py-14 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4 text-left">
              <div className="w-11 h-11 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm">Every Image On Site</h4>
                <p className="text-xs text-slate-light mt-0.5">
                  Daman Industrial Area, Western India
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-left">
              <div className="w-11 h-11 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm">{totalPhotos} Photographs</h4>
                <p className="text-xs text-slate-light mt-0.5">
                  Four process stages, three product lines
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-left">
              <Link
                to="/products"
                className="flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors group"
              >
                <span>See the full specification matrix</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Want to See a Line Running Before You Order?"
        subtitle="Send us the denier and application. We will return the batch test record, a sample spool, and — if you are visiting India — a plant walkthrough slot in Daman."
      />

      {/* Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[60] bg-primary-dark/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex! - 1 + filteredPhotos.length) % filteredPhotos.length
              );
            }}
            className="absolute left-3 sm:left-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <figure
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="w-full max-h-[76vh] object-contain rounded-lg shadow-2xl bg-primary-dark"
            />
            <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-white">
              <div className="text-left">
                <h3 className="font-heading font-bold text-base">{activePhoto.title}</h3>
                <p className="text-xs text-slate-light mt-0.5">{activePhoto.tag}</p>
              </div>
              <span className="text-xs font-bold text-accent shrink-0">
                {lightboxIndex! + 1} / {filteredPhotos.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex! + 1) % filteredPhotos.length);
            }}
            className="absolute right-3 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
