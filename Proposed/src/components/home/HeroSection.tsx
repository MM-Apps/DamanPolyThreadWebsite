import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Pause, Play, Award, CheckCircle2 } from 'lucide-react';
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
  { value: '10,000 MT', label: 'Annual PP Extrusion Capacity', sub: 'Largest manufacturer in India' },
  { value: '8.0 g/d', label: 'Maximum Tensile Tenacity', sub: 'High-tenacity filament engineering' },
  { value: '200 – 6,000', label: 'Comprehensive Denier Range', sub: 'Customizable count & filaments' },
  { value: '8 European Lines', label: 'Compact Spinning Plant', sub: 'Closed-loop automated HMI' },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

        {/* Multi-layered cinematic contrast gradients */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/50" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/70" />
        <div
          className="absolute inset-0 z-20 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Main Slide Content */}
      <div className="container-custom relative z-30 pt-16 sm:pt-20 lg:pt-28 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
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
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 text-white bg-primary/40 backdrop-blur-md hover:bg-white hover:text-primary transition-all"
            >
              Request Quote & Samples
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
              <span>Dope-Dyed (50+ Colors)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>UV & Weather Resistant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>Direct Global Export</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls & Active Indicators */}
      <div className="container-custom relative z-30 pb-6 flex items-center justify-between gap-4">
        {/* Navigation Arrows & Play/Pause */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent text-white hover:text-primary backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent text-white hover:text-primary backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent text-xs"
            title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
          >
            {isPaused ? <Play className="w-4 h-4 ml-0.5 text-accent" /> : <Pause className="w-4 h-4 text-slate-light" />}
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
                className={`group flex items-center gap-2 py-1 transition-all cursor-pointer focus:outline-none`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 sm:w-12 bg-accent' : 'w-2 sm:w-3 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
                <span
                  className={`hidden md:inline text-[11px] font-bold font-heading transition-colors ${
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
      <div className="relative z-30 bg-primary-dark/85 backdrop-blur-md border-t border-white/10 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg p-3.5 sm:p-4 hover:border-accent/40 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent/80 group-hover:text-accent transition-colors" />
                  <span className="text-xl sm:text-2xl font-black text-accent font-heading">
                    {item.value}
                  </span>
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block mt-1 line-clamp-1">
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-light block mt-0.5 line-clamp-1">
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
