import React from 'react';
import { Phone, ArrowRight, Mail } from 'lucide-react';
import { Button } from './Button';

export interface QuoteCTAProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const QuoteCTA: React.FC<QuoteCTAProps> = ({
  title = 'Require Custom Denier, Tenacity, or Webbing Width?',
  subtitle = 'Our engineering team works closely with technical textile converters to formulate exact polymer formulations, twist rates, and colorways.',
  className = '',
}) => {
  return (
    <section className={`py-16 bg-primary text-white relative overflow-hidden border-y border-primary-light/30 ${className}`}>
      {/* Decorative Background Accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent/5 pointer-events-none skew-x-12 transform origin-top-right" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent px-3 py-1 rounded bg-accent/10 border border-accent/20">
            RAPID RFQ & SAMPLE DISPATCH
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-light leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Quotation & Samples
            </Button>

            <a
              href="tel:+912261441900"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-white/20 text-white font-medium hover:bg-white/10 transition-colors text-base"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Head Office: +91 22 6144 1900</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-light">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>Direct RFQ: info@damanpolythread.com</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Dispatch within 24-48 business hours for standard samples</span>
          </div>
        </div>
      </div>
    </section>
  );
};
