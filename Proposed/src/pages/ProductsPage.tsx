import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Download, Layers, Package, Scissors } from 'lucide-react';
import { products } from '../data/products';
import { SpecTable } from '../components/products/SpecTable';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { QuoteCTA } from '../components/ui/QuoteCTA';

export const ProductsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ppmf-yarn');

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

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 border-b border-primary-light/40 relative">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold" size="md">
              AUTHENTIC TECHNICAL CATALOG
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Industrial Product Specifications
            </h1>
            <p className="text-base sm:text-lg text-slate-light leading-relaxed">
              Engineered with 100% virgin polymer across European compact spinning lines, electronic twisters, and heavy-duty needle looms in Daman, India.
            </p>
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
                  <span className={`text-[11px] px-2 py-0.5 rounded ${isSelected ? 'bg-accent text-primary-dark font-extrabold' : 'bg-slate/15 text-slate'}`}>
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
              {/* Product Visual Gallery */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-4/3 bg-base rounded-lg border border-border p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold" size="md">
                      Brand: {selectedProduct.brand}
                    </Badge>
                  </div>
                </div>

                {/* Additional gallery snapshots */}
                <div className="grid grid-cols-3 gap-3">
                  {selectedProduct.gallery.map((imgSrc, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-base rounded border border-border p-2 flex items-center justify-center hover:border-accent transition-colors"
                    >
                      <img src={imgSrc} alt="" className="max-h-full max-w-full object-contain" />
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
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-sm font-semibold text-accent mt-1">
                    Registered Brand: {selectedProduct.brand}
                  </p>
                </div>

                <p className="text-base text-slate leading-relaxed">
                  {selectedProduct.fullDescription}
                </p>

                {/* Key Salient Points */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary font-heading">
                    Salient Technical Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate">
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    to={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                    variant="gold"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Technical RFQ
                  </Button>
                  <Button
                    to="/contact"
                    variant="secondary"
                    size="md"
                    icon={<Download className="w-4 h-4" />}
                  >
                    Request Sample Cones
                  </Button>
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-primary">
                    Certified Technical Parameters
                  </h3>
                  <p className="text-xs text-slate mt-0.5">
                    Verified through automated in-house tensile and twist testing equipment.
                  </p>
                </div>
                <Badge variant="primary" size="sm">
                  100% Tested
                </Badge>
              </div>

              <SpecTable specs={selectedProduct.specs} title={`${selectedProduct.name} - Specification Table`} />
            </div>

            {/* Application Showcase Grid */}
            <div className="space-y-6 pt-6 border-t border-border">
              <div>
                <h3 className="text-xl font-bold font-heading text-primary">
                  Industrial Applications for {selectedProduct.name}
                </h3>
                <p className="text-sm text-slate mt-1">
                  Validated in high-speed converted technical textile products across global markets.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {selectedProduct.applications.map((app, aIdx) => (
                  <div
                    key={aIdx}
                    className="bg-base/70 rounded-lg border border-border/80 overflow-hidden group hover:border-accent/40 transition-colors flex flex-col"
                  >
                    <div className="aspect-square bg-white overflow-hidden p-2 flex items-center justify-center">
                      {app.image ? (
                        <img
                          src={app.image}
                          alt={app.name}
                          className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-slate text-xs text-center p-2">Application Photo</div>
                      )}
                    </div>
                    <div className="p-2.5 flex-1 flex items-center justify-center text-center">
                      <span className="text-xs font-semibold text-primary leading-snug line-clamp-2">
                        {app.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCTA
        title="Need Technical Assistance or Custom Formulation?"
        subtitle="Contact our production specialists to discuss specific Denier counts, TPM twist values, or custom color matching for your machinery."
      />
    </div>
  );
};
