import React from 'react';
import { ShieldCheck, Cpu, PackageCheck, CheckCircle2, FlaskConical, FileCheck2, Boxes, ScanLine } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { QuoteCTA } from '../components/ui/QuoteCTA';
import { companyData } from '../data/company';
import { assetUrl } from '../utils/assetUrl';

export const QualityPage: React.FC = () => {
  // The four gates every lot passes before it can be invoiced. This is a real
  // sequence — polymer arrives, runs, gets sampled, then ships — so the numbering
  // carries information rather than decorating a list of unrelated features.
  const gates = [
    {
      title: 'Polymer Intake',
      desc: 'Virgin polymer lots are verified for melt index and moisture before they reach an extruder. A rejected lot never enters the spinning hall.',
      meta: 'Incoming material',
    },
    {
      title: 'In-Line Monitoring',
      desc: 'Closed-loop HMI control on all eight compact spinning lines holds filament cross-section, denier and evenness through the run — not just at the end of it.',
      meta: 'During extrusion',
    },
    {
      title: 'Laboratory Verification',
      desc: 'Sampled hanks from each production run are broken, twisted and weighed in the QC lab. Results are recorded against the batch before the lot is released.',
      meta: 'Per production lot',
    },
    {
      title: 'Dispatch Clearance',
      desc: 'Physical inspection of every package, moisture-barrier wrapping and palletised export packing. Nothing leaves Daman without a signed-off test record.',
      meta: 'Before shipment',
    },
  ];

  // Every instrument named here appears in the company's own quality documentation.
  // Deliberately no invented tolerances or certificates — the plant manager will be
  // in the room, and an overstated test method costs more credibility than it buys.
  const testMatrix = [
    {
      parameter: 'Tenacity & breaking load',
      method: 'Tensile break test on sampled yarn from each run',
      instrument: 'Automated Tensile Testing Machine',
      standard: 'Up to 8.0 g/d',
    },
    {
      parameter: 'Denier / linear density',
      method: 'Count determination by weighing accurate hank lengths',
      instrument: 'Denier Tester + precision balance',
      standard: '200 – 6,000 Denier',
    },
    {
      parameter: 'Twist level (TPM)',
      method: 'Turns per metre verified on single and multi-ply yarns',
      instrument: 'Digital Twist Tester',
      standard: 'Calibrated to customer spec',
    },
    {
      parameter: 'Shade consistency',
      method: 'Dope-dyed lots compared against the approved standard',
      instrument: 'Visual shade assessment',
      standard: 'Grade 4–5 fastness',
    },
    {
      parameter: 'Filament evenness',
      method: 'Interlace and cross-section uniformity through the run',
      instrument: 'In-line HMI monitoring',
      standard: 'FDY flat / intermingled / twisted',
    },
    {
      parameter: 'Package integrity',
      method: 'Knot-free cone, winding density and net weight check',
      instrument: 'Electronic tension winder + inspection',
      standard: 'Standard cone weights',
    },
  ];

  // Spread the copy first, then override the icon: qualityPillars stores the icon
  // as a string name, and spreading after would put that string back in place.
  const pillars = [
    { ...companyData.qualityPillars[0], icon: ShieldCheck },
    { ...companyData.qualityPillars[1], icon: Cpu },
    { ...companyData.qualityPillars[2], icon: PackageCheck },
  ];

  const dispatchDocs = [
    {
      icon: FileCheck2,
      title: 'Mill Test Certificate',
      desc: 'Batch-coded record of tenacity, denier and twist for the lot you received.',
    },
    {
      icon: ScanLine,
      title: 'Batch Traceability',
      desc: 'Every cone traces back to its polymer lot and spinning line.',
    },
    {
      icon: FlaskConical,
      title: 'Shade Reference Swatch',
      desc: 'Physical standard retained so repeat orders match the original dye lot.',
    },
    {
      icon: Boxes,
      title: 'Palletised Packing List',
      desc: 'Cone count, net weight and export wrapping specified per shipment.',
    },
  ];

  return (
    <div className="w-full">
      {/* Atmospheric Industrial Parallax Header Banner */}
      <section className="relative text-white py-20 lg:py-24 border-b border-primary-light/40 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('${assetUrl('/images/parallax/parallax-quality.jpg')}')`,
          }}
        />
        {/* Scrim: this is a bright, evenly lit winding hall, so the left column runs near-opaque
            to hold white type while the machine rows stay legible on the right. */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(10,23,38,0.96) 0%, rgba(10,23,38,0.88) 44%, rgba(10,23,38,0.46) 74%, rgba(10,23,38,0.10) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(10,23,38,0.66) 0%, rgba(10,23,38,0.06) 36%, rgba(10,23,38,0.28) 100%)',
          }}
        />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero Defect Philosophy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
              Quality Is Verified, Not Claimed
            </h1>
            <p className="text-base sm:text-lg text-slate-light leading-relaxed">
              A dedicated Quality Control department sits inside each manufacturing unit in Daman — not in an office downstream. Every lot is sampled, tested and signed off against the batch record before it can be invoiced.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-light">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Dedicated QC at every unit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Tensile, twist & denier testing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Batch traceability to polymer lot
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Charter + Headline Numbers */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="AN INTEGRAL PART OF OUR CULTURE"
                title="Assurance Built Into the Process"
                subtitle="Daman Polythread gives utmost priority to quality. Processes are set up to measure and assure every product against the specified requirements of the client — across all eight spinning lines, three shifts a day."
              />

              <div className="mt-8 space-y-4 text-base text-slate leading-relaxed text-left">
                <p>
                  Our testing labs are equipped with automated <strong>Tensile Testing Machines</strong> and <strong>Twist Testers</strong>. Denier Testers prepare accurate lengths of yarn in hank form for subsequent weighing and determination of count — so linear density is confirmed by measurement, not assumption.
                </p>
                <p>
                  Packaging receives the same scrutiny as the yarn. A team of experts physically checks every package before dispatch, and palletised packing is supplied to the customer's specification for both domestic and international freight.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '100%', label: 'Batches sampled before dispatch' },
                  { value: '8', label: 'Spinning lines under continuous QC' },
                  { value: '3', label: 'Shifts of round-the-clock coverage' },
                  { value: '200–6,000', label: 'Denier range verified in lab' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-base rounded-lg border border-border p-5 text-left hover:border-accent/60 transition-colors"
                  >
                    <span className="text-2xl sm:text-3xl font-black font-heading text-primary block leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate mt-2 block leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Gates — a genuine sequence, so the numbers carry meaning */}
      <section className="py-20 bg-base border-b border-border">
        <div className="container-custom">
          <SectionHeading
            eyebrow="THE RELEASE CHAIN"
            title="Four Gates Between Polymer and Pallet"
            subtitle="A lot cannot skip a stage. Each gate produces a record, and the batch does not move until the previous one clears."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gates.map((gate, i) => (
              <div
                key={i}
                className="relative bg-white rounded-lg border border-border p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col text-left"
              >
                <span className="text-4xl font-black font-heading text-primary/10 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent mt-3">
                  {gate.meta}
                </span>
                <h3 className="text-base font-bold font-heading text-primary mt-1">
                  {gate.title}
                </h3>
                <p className="text-xs text-slate mt-2 leading-relaxed flex-1">
                  {gate.desc}
                </p>
                {i < gates.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Matrix */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container-custom">
          <SectionHeading
            eyebrow="LABORATORY TEST MATRIX"
            title="What We Measure, and With What"
            subtitle="Parameters checked on production lots, the instrument used, and the specification each result is held against."
            className="mb-12"
          />

          <div className="w-full bg-white rounded-lg border border-border overflow-hidden shadow-2xs">
            <div className="hidden md:grid grid-cols-12 gap-4 bg-primary px-5 py-3 border-b border-primary-light/40">
              <span className="col-span-3 text-[11px] font-bold uppercase tracking-wider text-white">
                Parameter
              </span>
              <span className="col-span-4 text-[11px] font-bold uppercase tracking-wider text-white">
                Method
              </span>
              <span className="col-span-3 text-[11px] font-bold uppercase tracking-wider text-white">
                Instrument
              </span>
              <span className="col-span-2 text-[11px] font-bold uppercase tracking-wider text-accent">
                Held To
              </span>
            </div>

            <div className="divide-y divide-border">
              {testMatrix.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 text-left transition-colors hover:bg-accent-light/40 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-base/40'
                  }`}
                >
                  <span className="md:col-span-3 text-sm font-bold text-primary font-heading">
                    {row.parameter}
                  </span>
                  <span className="md:col-span-4 text-xs text-slate leading-relaxed">
                    {row.method}
                  </span>
                  <span className="md:col-span-3 text-xs text-slate leading-relaxed">
                    {row.instrument}
                  </span>
                  <span className="md:col-span-2 text-xs font-semibold text-primary">
                    {row.standard}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Quality Pillars */}
      <section className="py-20 bg-base border-b border-border">
        <div className="container-custom">
          <SectionHeading
            eyebrow="HOW THE DEPARTMENT IS ORGANISED"
            title="Assurance, Testing, Packaging"
            subtitle="Three functions, each with its own sign-off — so no single team is both the producer and the judge of its own output."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-border p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/15 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Ships With Every Order */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-base/60 rounded-xl border border-border p-8 md:p-12">
            <div className="text-left mb-8">
              <Badge variant="gold" size="md">
                Dispatch Documentation
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary leading-tight mt-4">
                Every Consignment Leaves With Its Own Paper Trail
              </h2>
              <p className="text-sm sm:text-base text-slate leading-relaxed mt-3">
                Procurement teams should not have to ask twice for a test result. The records that matter travel with the material.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dispatchDocs.map((doc, i) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-border p-5 flex items-start gap-4 text-left hover:border-accent/60 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-md bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-heading text-primary">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-slate mt-1 leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Need Test Results Before You Place the Order?"
        subtitle="Send us the parameters your process runs on. We will return the batch test record, the denier and tenacity figures, and a sample spool so your own lab can verify it."
      />
    </div>
  );
};
