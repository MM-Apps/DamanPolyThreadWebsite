import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Download, Layers, Package, Scissors, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { products } from '../data/products';
import { SpecTable } from '../components/products/SpecTable';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { QuoteCTA } from '../components/ui/QuoteCTA';

export const ProductsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ppmf-yarn');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const selectedProduct = products.find((p) => p.id === activeTab) || products[0];

  const getProductIcon = (category: string) => {
    switch (category) {
      case 'ppmf':
        return <Layers className="w-5 h-5 text-accent" />;
      case 'bct':
        return <Package className="w-5 h-5 text-accent" />;
      case 'nwf':
        return <Scissors className="w-5 h-5 text-accent" />;
      default:
        return <Layers className="w-5 h-5 text-accent" />;
    }
  };

  const getBrandLogo = (brand: string) => {
    if (brand.includes('THREADLON')) {
      return ['/images/brands/threadlon.png'];
    }
    if (brand.includes('TUFF') || brand.includes('DPL')) {
      return ['/images/brands/tuff.png', '/images/brands/dpl.png'];
    }
    return ['/images/brands/threadlon.png'];
  };

  const handleDownloadSpec = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      window.print();
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Atmospheric Industrial Parallax Header Banner */}
      <section className="relative text-white py-20 lg:py-24 border-b border-primary-light/40 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/parallax/parallax-ppmf.jpg')",
          }}
        />
        {/* Scrim: keeps the headline column solid, lets the bright cone photography read through on the right. */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(10,23,38,0.95) 0%, rgba(10,23,38,0.88) 45%, rgba(10,23,38,0.52) 75%, rgba(10,23,38,0.18) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(10,23,38,0.72) 0%, rgba(10,23,38,0.08) 35%, rgba(10,23,38,0.32) 100%)',
          }}
        />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Authentic Manufacturing Specifications</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
              Industrial Product Catalog
            </h1>
            <p className="text-base sm:text-lg text-slate-light leading-relaxed">
              Engineered with 100% virgin polymer across 8 European compact spinning lines, electronic twisters, and heavy-duty needle looms in Daman, India. Comprehensive range from 200 to 6,000 Denier.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-light">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Tenacity Up to 8.0 g/d
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                10,000 MT Annual Capacity
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Registered Trademarks: THREADLON®, TUFF®, DPL®
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Selection Tab Bar */}
      <section className="sticky top-20 z-40 bg-white border-b border-border shadow-xs">
        <div className="container-custom">
          <div className="flex overflow-x-auto no-scrollbar gap-2 py-3">
            {products.map((p) => {
              const isSelected = p.id === activeTab;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveTab(p.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-md text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-base text-slate hover:text-primary hover:bg-base/80 border border-border/80'
                  }`}
                >
                  {getProductIcon(p.category)}
                  <span>{p.name}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-accent text-primary-dark font-extrabold'
                        : 'bg-slate/15 text-slate'
                    }`}
                  >
                    {p.brand}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Selected Product Deep-Dive */}
      <section className="py-16 bg-base">
        <div className="container-custom">
          <div className="bg-white rounded-xl border border-border p-6 sm:p-10 shadow-sm space-y-12">
            {/* Top Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Product Visual Gallery with Brand Badge */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-4/3 bg-base rounded-xl border border-border p-6 flex items-center justify-center overflow-hidden group shadow-inner">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold" size="md">
                      Brand: {selectedProduct.brand}
                    </Badge>
                  </div>

                  {/* Brand Logo Floating Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-lg p-2 border border-border shadow-xs flex items-center gap-2">
                    {getBrandLogo(selectedProduct.brand).map((logo, lIdx) => (
                      <img key={lIdx} src={logo} alt="Brand" className="h-7 object-contain" />
                    ))}
                  </div>
                </div>

                {/* Additional gallery snapshots */}
                <div className="grid grid-cols-3 gap-3">
                  {selectedProduct.gallery.map((imgSrc, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-base rounded-lg border border-border p-2 flex items-center justify-center hover:border-accent transition-colors shadow-2xs"
                    >
                      <img src={imgSrc} alt="Gallery item" className="max-h-full max-w-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Narrative & Highlights */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate block mb-1">
                    {selectedProduct.categoryLabel}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-primary leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-sm font-bold text-accent">
                      Registered Trademark: {selectedProduct.brand}
                    </p>
                    <span className="text-slate/40">•</span>
                    <span className="text-xs text-slate font-medium">100% Virgin Polymer</span>
                  </div>
                </div>

                <p className="text-base text-slate leading-relaxed">
                  {selectedProduct.fullDescription}
                </p>

                {/* Key Salient Points */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary font-heading">
                    Engineered Material Advantages
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate">
                    {selectedProduct.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center gap-4">
                  <Button
                    to="/contact"
                    variant="gold"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Sample Spool / RFQ
                  </Button>
                  <button
                    type="button"
                    onClick={handleDownloadSpec}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border text-xs font-bold text-primary hover:bg-base transition-colors cursor-pointer"
                  >
                    {downloadSuccess ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Download className="w-4 h-4 text-accent" />
                    )}
                    <span>{downloadSuccess ? 'Preparing Spec Sheet...' : 'Download Data Sheet (PDF)'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Technical Parameter Specification Matrix */}
            <div className="pt-8 border-t border-border text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                    Certified Technical Parameters
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary">
                    Manufacturing Specification Matrix
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate">
                  <FileSpreadsheet className="w-4 h-4 text-accent" />
                  <span>Tested per ISO & ASTM standards</span>
                </div>
              </div>

              <SpecTable specs={selectedProduct.specs} />
            </div>

            {/* Industrial Applications & Convertibility */}
            <div className="pt-8 border-t border-border text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                Field Usage & Converters
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary mb-6">
                Recommended Downstream Applications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedProduct.applications.map((app, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border overflow-hidden bg-base/50 flex flex-col justify-between p-5 hover:border-accent transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 text-accent font-bold text-xs">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-heading text-primary">
                          {app.name}
                        </h4>
                        <span className="text-[11px] text-slate mt-1 block">
                          Engineered technical conversion grade
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-accent">
                      <span>Suitable Grade Available</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Callout */}
      <QuoteCTA />
    </div>
  );
};
