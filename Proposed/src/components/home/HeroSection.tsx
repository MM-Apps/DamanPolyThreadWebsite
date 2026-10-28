import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Award,
  CheckCircle2,
  Send,
  FileSpreadsheet
} from 'lucide-react';
import { Button } from '../ui/Button';

interface Slide {
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    image: '/images/sliders/banner-1.jpg',
    badge: 'Pioneering HT PPMF Yarn in India • Est. 2000',
    title: 'Mastery in the Art of',
    highlight: 'Yarns, Threads & Fabrics',
    description:
      'India’s premier manufacturer and global exporter of high-tenacity polypropylene multifilament yarns, high-speed bag closing threads, and narrow woven technical fabrics. Operating 10,000 MT annual capacity in Daman.',
    ctaText: 'Explore Product Catalog',
    ctaLink: '/products',
  },
  {
    image: '/images/sliders/banner-2.jpg',
    badge: 'THREADLON® • High-Tenacity PPMF Yarn',
    title: 'Engineered Precision',
    highlight: 'PP Multifilament Yarns',
    description:
      'Comprehensive denier range from 200 to 6,000 Denier with exceptional tensile strength up to 8.0 g/d. Available in FDY flat, intermingled, and twisted formats across custom industrial colors.',
    ctaText: 'View Yarn Specifications',
    ctaLink: '/products',
  },
  {
    image: '/images/sliders/banner-3.jpg',
    badge: 'TUFF® & DPL® • Technical Narrow Fabrics',
    title: 'Heavy-Duty Industrial',
    highlight: 'Narrow Woven Webbings',
    description:
      'High-strength narrow woven technical webbings from 10mm to 100mm width. Engineered for FIBC lifting loops, automotive cargo tie-downs, safety harnesses, and marine rigging.',
    ctaText: 'Discover Webbing Solutions',
    ctaLink: '/products',
  },
  {
    image: '/images/sliders/banner-4.jpg',
    badge: 'THREADLON® • Bag Closing Sewing Thread',
    title: 'High-Speed Industrial',
    highlight: 'Bag Closing Threads',
    description:
      '100% virgin polypropylene sewing threads with specialized lubricant finish for jam-free high-speed stitching. Available in 50+ vibrant dope-dyed shades for sugar, rice, fertilizer, and grain bagging.',
    ctaText: 'Explore Sewing Threads',
    ctaLink: '/products',
  },
  {
    image: '/images/sliders/banner-5.jpg',
    badge: 'Testing Laboratory & Quality Assurance',
    title: 'Quality is an Integral',
    highlight: 'Part of Our Culture',
    description:
      'Every batch is verified through in-house computerized universal tensile testers, denier variance analysis, boiling water shrinkage measurement, and accelerated UV weatherometer testing.',
    ctaText: 'Tour Quality Infrastructure',
    ctaLink: '/about',
  },
  {
    image: '/images/sliders/banner-6.jpg',
    badge: '8 European Compact Spinning Lines',
    title: 'Backed by Advanced',
    highlight: 'Technology & Capacity',
    description:
      'World-class European compact spinning lines equipped with closed-loop computerized HMI monitoring, two-for-one (TFO) twisters, precision winding, and heavy-duty automatic needle looms.',
    ctaText: 'Explore Daman Plant',
    ctaLink: '/about',
  },
];

const highlights = [
  { value: 'Est. 2000', label: '1st in India', sub: 'Pioneered HT PPMF yarn extrusion' },
  { value: '10,000 MT', label: 'Annual PP Extrusion', sub: '8 European compact spinning lines' },
  { value: '200 – 6,000', label: 'Denier Range', sub: 'Up to 8.0 g/d tensile tenacity' },
  { value: '50+ Shades', label: 'Dope-Dyed Colors', sub: 'UV-stabilized & 100% colorfast' },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Quick RFQ Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'PPMF Yarn (200 - 6,000 Denier)',
    denier: 'Medium Denier (800 - 1500D)',
    needSample: true,
  });

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      className="relative text-white overflow-hidden border-b border-primary-light/40 min-h-[640px] lg:min-h-[720px] flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel Showcase"
    >
      {/* Background Slides with Ken Burns motion */}
      <div className="absolute inset-0 z-0 bg-primary-dark">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center ${
                  isActive ? 'animate-kenburns scale-105' : 'scale-100'
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Cinematic scrim: holds the left text column solidly dark, then opens up
            so the spool photography reads through behind the glass RFQ card. */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(10,23,38,0.97) 0%, rgba(10,23,38,0.90) 50%, rgba(10,23,38,0.42) 78%, rgba(10,23,38,0.10) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(10,23,38,0.78) 0%, rgba(10,23,38,0.22) 28%, rgba(10,23,38,0.42) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-20 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Main Slide Content: 2-Column Responsive Layout */}
      <div className="container-custom relative z-30 pt-16 sm:pt-20 lg:pt-24 pb-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Brand Story & Slide Data */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>{slides[currentSlide].badge}</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight sm:leading-none text-white drop-shadow-md">
              {slides[currentSlide].title}{' '}
              <span className="text-accent block mt-1 sm:mt-2">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            {/* Supporting Narrative */}
            <p className="text-sm sm:text-lg text-slate-light leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {slides[currentSlide].description}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                to={slides[currentSlide].ctaLink}
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {slides[currentSlide].ctaText}
              </Button>
              <Button
                to="/products"
                variant="outline"
                size="lg"
                icon={<FileSpreadsheet className="w-4 h-4" />}
                className="border-white/30 text-white bg-primary/40 backdrop-blur-md hover:bg-white hover:text-primary transition-all"
              >
                View Technical Specs
              </Button>
            </div>

            {/* Value Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-light">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>100% Virgin Polymer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>200 – 6,000 Denier</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>Tenacity up to 8.0 g/d</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>Global Direct Export</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Quick RFQ / Sample Spool Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent block">
                    Fast B2B Response
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white">
                    Request Quote & Sample Spool
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <Send className="w-4 h-4" />
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-slate-light leading-relaxed">
                    Our technical sales desk in Mumbai will respond with specifications, sample dispatch details, and volume pricing within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-accent hover:underline pt-2 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3.5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-light block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-slate-light/60 focus:outline-none focus:border-accent focus:bg-white/15"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-light block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-slate-light/60 focus:outline-none focus:border-accent focus:bg-white/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-light block mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-slate-light/60 focus:outline-none focus:border-accent focus:bg-white/15"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-light block mb-1">
                        Product Family
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full bg-primary border border-white/20 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-accent truncate"
                      >
                        <option>PPMF Yarn (200 - 6,000D)</option>
                        <option>Bag Closing Thread (THREADLON)</option>
                        <option>Narrow Woven Fabrics (TUFF / DPL)</option>
                        <option>Custom Spun Batch</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-light block mb-1">
                        Denier / Width Target
                      </label>
                      <select
                        value={formData.denier}
                        onChange={(e) => setFormData({ ...formData, denier: e.target.value })}
                        className="w-full bg-primary border border-white/20 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-accent truncate"
                      >
                        <option>Fine Denier (200 - 600D)</option>
                        <option>Medium Denier (800 - 1500D)</option>
                        <option>Heavy Denier (1800 - 6000D)</option>
                        <option>Webbing (10mm - 100mm)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="needSample"
                      checked={formData.needSample}
                      onChange={(e) => setFormData({ ...formData, needSample: e.target.checked })}
                      className="rounded border-white/30 text-accent focus:ring-accent"
                    />
                    <label htmlFor="needSample" className="text-xs text-slate-light cursor-pointer">
                      Include complimentary trial sample spool
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-md bg-accent hover:bg-accent-hover text-primary-dark font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
                  >
                    <span>Request Quotation & Samples</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-light">
                    <span>Direct: +91 22 6144 1900</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Dispatch Ready
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls & Active Indicators */}
      <div className="container-custom relative z-30 pb-4 flex items-center justify-between gap-4">
        {/* Navigation Arrows & Play/Pause */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent text-white hover:text-primary backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent text-white hover:text-primary backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent text-xs"
            title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 ml-0.5 text-accent" /> : <Pause className="w-3.5 h-3.5 text-slate-light" />}
          </button>
        </div>

        {/* Slide Selector Indicators with Progress Feedback */}
        <div className="flex items-center gap-2 sm:gap-3">
          {slides.map((s, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                className="group flex items-center gap-1.5 py-1 transition-all cursor-pointer focus:outline-none"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-6 sm:w-10 bg-accent' : 'w-2 sm:w-3 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
                <span
                  className={`hidden md:inline text-[10px] font-bold font-heading transition-colors ${
                    isActive ? 'text-accent' : 'text-slate-light/60 group-hover:text-white'
                  }`}
                >
                  0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Industrial Credibility Metric Cards anchored at bottom */}
      <div className="relative z-30 bg-primary-dark/85 backdrop-blur-md border-t border-white/10 py-4 sm:py-5">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg p-2.5 sm:p-4 hover:border-accent/40 transition-all group min-w-0"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent/80 group-hover:text-accent transition-colors shrink-0" />
                  <span className="text-base sm:text-xl lg:text-2xl font-black text-accent font-heading truncate">
                    {item.value}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider block mt-1 truncate">
                  {item.label}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-light block mt-0.5 truncate">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
