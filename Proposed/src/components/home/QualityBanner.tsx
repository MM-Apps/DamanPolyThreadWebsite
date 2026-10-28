import React from 'react';
import { ShieldCheck, Cpu, PackageCheck, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const QualityBanner: React.FC = () => {
  const qualityPillars = [
    {
      title: 'Automated Lab Testing',
      desc: 'Our testing lab houses electronic Tensile Testing Machines and digital Twist Testers. Denier count is verified rapidly in hank form for weight accuracy.',
      icon: <Cpu className="w-6 h-6 text-accent" />,
      features: ['Tensile break test (g/d)', 'Turns per meter (TPM) verification', 'Denier count consistency'],
    },
    {
      title: 'Continuous Quality Control',
      desc: 'Dedicated QC technicians continuously sample production runs across all 8 spinning lines to guarantee zero variation in filament diameter or shade.',
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      features: ['In-line temperature & melt index', 'Evenness & interlace inspection', 'UV & weathering validation'],
    },
    {
      title: 'Precision Packaging & Export',
      desc: 'Every spool and carton undergoes physical inspection prior to dispatch. Moisture-barrier shrink-wrapping and palletization ensure defect-free overseas transit.',
      icon: <PackageCheck className="w-6 h-6 text-accent" />,
      features: ['Zero transit fraying or scuffing', 'Standardized cone weights', 'Global freight compliance'],
    },
  ];

  return (
    <section className="py-20 bg-base border-b border-border">
      <div className="container-custom">
        <SectionHeading
          eyebrow="ZERO DEFECT PHILOSOPHY"
          title="Engineered with Technical Precision"
          subtitle="Industrial sewing and technical weaving require consistent tensile strength and knot-free feeding. Our testing regime guarantees performance under extreme mechanical stress."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-border p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/15 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-primary">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate mt-3 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-2">
                {pillar.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-primary font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
