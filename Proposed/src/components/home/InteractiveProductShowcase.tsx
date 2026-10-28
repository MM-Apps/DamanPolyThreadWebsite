import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Layers, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProductTab {
  id: string;
  name: string;
  brandName: string;
  brandLogos: string[];
  tag: string;
  images: string[];
  headline: string;
  description: string;
  specs: { label: string; value: string }[];
  applications: string[];
  link: string;
}

const productTabs: ProductTab[] = [
  {
    id: 'ppmf',
    name: 'Polypropylene Multifilament Yarn',
    brandName: 'THREADLON®',
    brandLogos: ['/images/brands/threadlon.png'],
    tag: 'Flagship Extrusion Line • Est. 2000',
    images: ['/images/products/py1.png', '/images/products/py2.png', '/images/products/py3.png'],
    headline: 'High-Tenacity PPMF Filament Yarns',
    description:
      'Threadlon® is India’s foremost brand of High-Tenacity Polypropylene Multifilament Yarns. Manufactured on 8 European compact spinning lines with closed-loop computerized HMI control, Threadlon delivers up to 8.0 g/d tensile strength, chemical inertness, and exceptional abrasion resistance.',
    specs: [
      { label: 'Denier Range', value: '200 – 6,000 Denier' },
      { label: 'Tenacity', value: '6.5 – 8.0 g/denier' },
      { label: 'Filament Count', value: '48 to 200 Filaments' },
      { label: 'Form Factor', value: 'Intermingled, Twisted & Flat FDY' },
      { label: 'Polymer Purity', value: '100% Virgin PP + UV Additives' },
    ],
    applications: [
      'FIBC Jumbo Bags & Lifting Loops',
      'Woven Geotextiles & Ground Covers',
      'Industrial Filter Fabrics & Felts',
      'Braided Cords & Marine Mooring Ropes',
      'Agriculture Shade & Construction Safety Nets',
    ],
    link: '/products',
  },
  {
    id: 'nwf',
    name: 'Narrow Woven Fabrics & Webbings',
    brandName: 'TUFF® & DPL®',
    brandLogos: ['/images/brands/tuff.png', '/images/brands/dpl.png'],
    tag: 'Integrated In-House Weaving • 2,000 MT/Yr',
    images: ['/images/products/nwf1.png', '/images/products/nwf2.png', '/images/products/nwf3.png'],
    headline: 'Heavy-Duty Technical Webbings & Tapes',
    description:
      "'TUFF' and 'DPL' are the industry-standard brand names for high-strength technical webbings manufactured by Daman Polythread Ltd. Because we extrude our own high-tenacity yarns, our narrow fabrics deliver peerless tensile consistency, minimal elongation, and superior durability.",
    specs: [
      { label: 'Width Range', value: '10mm to 100mm Width' },
      { label: 'Annual Capacity', value: '2,000 Metric Tons' },
      { label: 'Weaving Tech', value: 'High-Speed Automated Needle Looms' },
      { label: 'Resistance', value: 'Acid, Alkali, Mildew & UV Proof' },
      { label: 'Finishing', value: 'Heat-set, Ultrasonic cut, Custom spools' },
    ],
    applications: [
      'FIBC Bulk Bag Cross-Corner Lifting Loops',
      'Automotive Cargo Lashing & Tie-Downs',
      'Industrial Fall-Protection Harnesses',
      'Military Webbings & Tactical Gear',
      'Marine Rigging & Heavy Material Handling',
    ],
    link: '/products',
  },
  {
    id: 'bct',
    name: 'Industrial Bag Closing Thread',
    brandName: 'THREADLON®',
    brandLogos: ['/images/brands/threadlon.png'],
    tag: '50+ Dope-Dyed Shades • High-Speed Stitching',
    images: ['/images/products/bct1.png', '/images/products/bct2.png', '/images/products/bct3.png'],
    headline: 'High-Speed Industrial Bag Sewing Threads',
    description:
      'Engineered specifically for continuous automated bagging operations in sugar, rice, fertilizer, and grain mills. Formulated with a specialized silicone/paraffin lubricant finish, Threadlon ensures jam-free stitching on Fischbein, Newlong, and Union Special heads.',
    specs: [
      { label: 'Plys & Twist', value: '2-Ply, 3-Ply, 4-Ply Balanced Twist' },
      { label: 'Color Range', value: '50+ Brilliant Dope-Dyed Colors' },
      { label: 'Colorfastness', value: '100% Bleed & Fade Proof' },
      { label: 'Spool Packages', value: '200g, 1kg, 2kg, 4kg Industrial Cones' },
      { label: 'Knot-Free', value: 'Continuous Spliced Length' },
    ],
    applications: [
      'High-Speed Sugar & Flour Mill Bag Closing',
      'Corrosive Fertilizer & Chemical Sack Seaming',
      'Rice, Wheat, and Seed Storage Bags',
      'Mouth Closing of Cement & Polymer Sacks',
      'Charcoal, Animal Feed & Mineral Bagging',
    ],
    link: '/products',
  },
];

export const InteractiveProductShowcase: React.FC = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const currentTab = productTabs[activeTabIdx];

  const handleTabChange = (idx: number) => {
    setActiveTabIdx(idx);
    setActiveImageIdx(0);
  };

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % currentTab.images.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + currentTab.images.length) % currentTab.images.length);
  };

  return (
    <section className="py-20 bg-white border-b border-border" id="product-showcase">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Product Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-heading tracking-tight">
            Precision Threads & Woven Fabrics
          </h2>
          <p className="text-slate text-base sm:text-lg">
            Explore our authentic product families, certified registered brands, and technical performance benchmarks.
          </p>
        </div>

        {/* Tab Selection Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {productTabs.map((tab, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(idx)}
                className={`px-5 py-3.5 rounded-lg font-heading text-sm sm:text-base font-bold transition-all cursor-pointer flex items-center gap-2.5 border-2 ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                    : 'bg-white border-border text-primary hover:border-accent shadow-2xs'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-accent' : 'bg-accent'}`} />
                <span className={isActive ? 'text-white font-extrabold' : 'text-primary font-bold'}>
                  {tab.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Product Showcase Card */}
        <div className="bg-base rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Interactive Image Carousel */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white to-base p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
              {/* Product Badge & Brand Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-bold tracking-wider uppercase text-primary bg-accent/20 px-3 py-1 rounded-full">
                  {currentTab.tag}
                </span>

                {/* Brand Logo Badges */}
                <div className="flex items-center gap-2">
                  {currentTab.brandLogos.map((logo, lIdx) => (
                    <img
                      key={lIdx}
                      src={logo}
                      alt={currentTab.brandName}
                      className="h-9 object-contain drop-shadow-xs"
                      title={currentTab.brandName}
                    />
                  ))}
                </div>
              </div>

              {/* Main Spool Carousel Display */}
              <div className="relative aspect-square max-w-sm mx-auto w-full rounded-xl bg-white border border-border/80 p-4 flex items-center justify-center overflow-hidden shadow-inner group">
                <img
                  src={currentTab.images[activeImageIdx]}
                  alt={`${currentTab.name} Spool Sample ${activeImageIdx + 1}`}
                  className="max-h-full max-w-full object-contain transition-all duration-300 transform group-hover:scale-105 drop-shadow-md"
                />

                {/* Carousel Controls */}
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous product image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next product image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Selector */}
              <div className="mt-6 flex items-center justify-center gap-3">
                {currentTab.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImageIdx(i)}
                    aria-label={`Select sample ${i + 1}`}
                    className={`w-16 h-16 rounded-lg bg-white border-2 p-1.5 flex items-center justify-center overflow-hidden transition-all cursor-pointer ${
                      activeImageIdx === i
                        ? 'border-accent shadow-xs scale-105'
                        : 'border-border opacity-70 hover:opacity-100 hover:border-slate'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Technical Details & Specifications */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                {/* Brand & Headline */}
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Official Registered Trademark: {currentTab.brandName}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-primary font-heading leading-tight">
                  {currentTab.headline}
                </h3>

                <p className="text-sm sm:text-base text-slate mt-3 leading-relaxed">
                  {currentTab.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentTab.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-white rounded-md p-2.5 border border-border flex items-center justify-between text-xs"
                      >
                        <span className="text-slate font-medium">{spec.label}:</span>
                        <span className="font-bold text-primary font-heading">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industrial Applications Checklist */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Key Industrial Applications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentTab.applications.map((app, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-border flex flex-wrap items-center gap-4">
                <Button
                  to="/products"
                  variant="gold"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  View Full Technical Data Sheet
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Request Sample Spool (Free for Converters)
                </Button>
                <Link
                  to="/about"
                  className="text-xs text-slate hover:text-primary transition-colors font-medium ml-auto"
                >
                  Learn About Manufacturing Process →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
