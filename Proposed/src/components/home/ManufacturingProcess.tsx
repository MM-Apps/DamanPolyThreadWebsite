import React, { useState } from 'react';
import { Layers, Flame, Wind, Maximize2, Repeat, Disc, Microscope, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  technicalHighlight: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    step: '01',
    title: 'Virgin Polymer Dosing',
    subtitle: 'Gravimetric Additive Blending',
    description:
      'High-grade 100% virgin polypropylene resin granules are pneumatically conveyed into gravimetric dosing systems with UV stabilizers and certified dope pigments.',
    technicalHighlight: 'Zero regrind polymer • Precise ±0.1% masterbatch consistency',
    icon: <Layers className="w-5 h-5 text-accent" />,
  },
  {
    step: '02',
    title: 'European Melt Extrusion',
    subtitle: 'Multi-Capillary Spinnerets',
    description:
      'Molten polymer is metered through closed-loop heated extruders and filtered through fine micron packs before discharge through multi-hole precision spinnerets.',
    technicalHighlight: 'Closed-loop computerized HMI thermal profiles',
    icon: <Flame className="w-5 h-5 text-accent" />,
  },
  {
    step: '03',
    title: 'Controlled Air Quenching',
    subtitle: 'Laminar Filament Cooling',
    description:
      'Continuous extruded filaments enter an air-conditioned cross-flow quench chimney with controlled humidity to solidify molecular structure uniformly.',
    technicalHighlight: 'Prevents filament variance and diameter fluctuations',
    icon: <Wind className="w-5 h-5 text-accent" />,
  },
  {
    step: '04',
    title: 'Hot Godet Drawing',
    subtitle: 'High Tenacity Orientation',
    description:
      'Filaments travel across multi-stage heated godet roll duos with differential speed ratios, aligning molecular polymer chains to achieve high tensile tenacity.',
    technicalHighlight: 'Yields up to 8.0 g/denier tensile strength',
    icon: <Maximize2 className="w-5 h-5 text-accent" />,
  },
  {
    step: '05',
    title: 'Intermingling & Twisting',
    subtitle: 'Interlaced Air-Jets & TFO Twisters',
    description:
      'Yarns are passed through supersonic air-jets for cohesive intermingled nodes, or processed on Two-for-One (TFO) twisters for multi-ply balanced sewing threads.',
    technicalHighlight: 'Custom knots/meter count & balanced torque',
    icon: <Repeat className="w-5 h-5 text-accent" />,
  },
  {
    step: '06',
    title: 'Precision Take-Up Winding',
    subtitle: 'Lubricant Finish & Auto Doffing',
    description:
      'Filaments are treated with emulsion or silicone lubricants and wound onto high-speed automatic precision traverse winders producing knot-free industrial packages.',
    technicalHighlight: 'Electronic tension control • 200g to 4kg cones',
    icon: <Disc className="w-5 h-5 text-accent" />,
  },
  {
    step: '07',
    title: 'Computerized Lab QA',
    subtitle: 'Tensile, Shrinkage & UV Testing',
    description:
      'Every finished lot is sampled and tested on computerized universal tensile testers for breaking tenacity, elongation, denier variation, and boiling water shrinkage.',
    technicalHighlight: 'Full batch traceability & test certificates issued',
    icon: <Microscope className="w-5 h-5 text-accent" />,
  },
];

export const ManufacturingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white border-b border-border" id="manufacturing-process">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="ENGINEERED MANUFACTURING"
            title="Controlled Process: From Resin to Yarn"
            subtitle="Explore how our 8 European compact spinning lines in Daman convert 100% virgin polymer into high-tenacity yarns, technical webbings, and bag closing threads."
          />
          <Button
            to="/about"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            Plant Infrastructure Tour
          </Button>
        </div>

        {/* Desktop Interactive Stepper Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {steps.map((st, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md scale-[1.03]'
                    : 'bg-white text-primary border-border hover:border-accent hover:shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-black font-heading ${
                      isActive ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    Stage {st.step}
                  </span>
                  <div className={`p-1.5 rounded-md ${isActive ? 'bg-white/10' : 'bg-base'}`}>
                    {st.icon}
                  </div>
                </div>
                <div>
                  <h4
                    className={`text-xs font-extrabold font-heading line-clamp-1 ${
                      isActive ? 'text-white' : 'text-primary'
                    }`}
                  >
                    {st.title}
                  </h4>
                  <span
                    className={`text-[10px] font-medium block line-clamp-1 mt-0.5 ${
                      isActive ? 'text-slate-light' : 'text-slate'
                    }`}
                  >
                    {st.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Focused Step Card */}
        <div className="bg-base rounded-2xl border border-border p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-accent font-heading">
                  Stage {steps[activeStep].step}
                </span>
                <div className="h-6 w-px bg-border" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-primary bg-white px-4 py-2.5 rounded-lg border border-border inline-flex">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Technical Benchmark: {steps[activeStep].technicalHighlight}</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-border space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary font-heading pb-2 border-b border-border">
                Daman Plant Quality Assurance
              </h4>
              <ul className="space-y-2 text-xs text-slate">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>Closed-loop computerized HMI oversight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>ISO-aligned batch testing records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>Zero recycled adulteration policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>Traceable lot numbers on every box</span>
                </li>
              </ul>
              <Button
                to="/about"
                variant="gold"
                size="sm"
                className="w-full justify-center mt-3"
              >
                Inspect Factory Equipment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
