import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="IN-HOUSE PRODUCTION CONTROL"
            title="Complete Manufacturing Infrastructure"
            subtitle="Equipped with automated European machinery and HMI controls. We oversee every stage from raw polymer extrusion to final packaged spool."
          />
          <Button
            to="/about"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            Tour Infrastructure
          </Button>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {companyData.processes.map((proc, index) => (
            <div
              key={proc.id}
              className="bg-base/50 rounded-lg border border-border p-6 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg bg-white border border-border flex items-center justify-center p-2.5 shadow-2xs group-hover:border-accent/40 transition-colors">
                    <img
                      src={proc.image}
                      alt={proc.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="text-2xl font-black font-heading text-slate-light/40 group-hover:text-accent transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-primary group-hover:text-primary-light transition-colors">
                  {proc.title}
                </h3>
                <p className="text-sm text-slate mt-2.5 leading-relaxed">
                  {proc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-slate font-medium">
                <span className="uppercase tracking-wider">In-House Quality Gate</span>
                <span className="text-accent font-semibold">100% Tested</span>
              </div>
            </div>
          ))}

          {/* Sixth Card: Factory Capacity Highlight */}
          <div className="bg-primary text-white rounded-lg p-6 flex flex-col justify-between border border-primary-light/40 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                EXPANSION & SCALE
              </span>
              <h3 className="text-2xl font-bold font-heading leading-tight text-white">
                12,000 MT Combined Capacity
              </h3>
              <p className="text-sm text-slate-light mt-3 leading-relaxed">
                Operating 8 compact spinning lines and specialized downstream finishing in Daman, providing high batch uniformity and rapid turnaround for bulk OEM contracts.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-primary-light/30">
              <Button
                to="/contact"
                variant="gold"
                size="sm"
                className="w-full justify-center"
              >
                Inquire for Bulk Capacity
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
