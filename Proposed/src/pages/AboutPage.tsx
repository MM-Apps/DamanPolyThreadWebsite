import React from 'react';
import { ShieldCheck, Award, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { QuoteCTA } from '../components/ui/QuoteCTA';
import { companyData } from '../data/company';

export const AboutPage: React.FC = () => {
  const infraPhotos = [
    { title: '8 Compact European Spinning Lines', image: '/images/infra/Spinning/FS_001.jpg', tag: 'Extrusion & Drawing' },
    { title: 'Filament Cross-Section Control', image: '/images/infra/Spinning/FS_006.jpg', tag: 'Automated HMI' },
    { title: 'Precision Heavy-Duty Twisting', image: '/images/infra/Twisting/FS_070.jpg', tag: 'Single & Multi-Ply' },
    { title: 'High-Speed Twisting Banks', image: '/images/infra/Twisting/FS_080.jpg', tag: 'TPM Calibration' },
    { title: 'Electronic Tension Winding', image: '/images/infra/Winding/FS_098.jpg', tag: 'Snag-Free Cones' },
    { title: 'Multi-Spindle Coning Units', image: '/images/infra/Winding/FS_108.jpg', tag: 'Constant Density' },
    { title: 'Heavy-Duty Needle Weaving Looms', image: '/images/infra/Needle Looms/FS_169.jpg', tag: '10mm - 100mm Webbings' },
    { title: 'Webbing Tensile Inspection', image: '/images/infra/Needle Looms/FS_172.jpg', tag: 'TUFF & DPL' },
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 lg:py-20 border-b border-primary-light/40 relative">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold" size="md">
              MANUFACTURING HERITAGE SINCE 2000
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Pioneering High-Tenacity Polypropylene in India
            </h1>
            <p className="text-base sm:text-lg text-slate-light leading-relaxed">
              From introducing genuine European high-tenacity PPMF yarn extrusion to India in 2000, to becoming the nation’s largest manufacturer with 10,000 MT capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Milestones Section */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <SectionHeading
                eyebrow="ESTABLISHED CREDIBILITY"
                title="A Legacy of Industrial Firsts"
                subtitle="Daman Polythread Ltd. is an industrial corporation that has a lot of firsts to its name."
              />

              <div className="space-y-4 text-base text-slate leading-relaxed">
                <p>
                  In the year <strong>2000</strong>, Daman Polythread Ltd. became the <strong>first company in India</strong> to manufacture real High-Tenacity (HT) Polypropylene Multifilament Yarn utilizing advanced European machinery and extrusion technology.
                </p>
                <p>
                  Displaying further manufacturing prowess, we expanded into narrow woven fabrics, webbings, and value-added industrial bag closing threads under the recognized trademarks <strong>THREADLON</strong>, <strong>TUFF</strong>, and <strong>DPL</strong>.
                </p>
                <p>
                  In November <strong>2014</strong>, we achieved a landmark mission by commissioning our eighth compact spinning line, expanding annual production capacity from 6,000 MT to <strong>10,000 MT/annum of PP HT Yarn</strong>—solidifying our position as the largest PP HT yarn producer in India, with capacity exceeding domestic peers multiple times over.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-base p-4 rounded-lg border border-border">
                  <span className="text-2xl font-black font-heading text-primary block">2000</span>
                  <span className="text-xs text-slate mt-1 block">Founded as India’s 1st HT PPMF Producer</span>
                </div>
                <div className="bg-base p-4 rounded-lg border border-border">
                  <span className="text-2xl font-black font-heading text-accent block">10,000 MT</span>
                  <span className="text-xs text-slate mt-1 block">Annual PP Yarn Extrusion Capacity</span>
                </div>
                <div className="bg-base p-4 rounded-lg border border-border">
                  <span className="text-2xl font-black font-heading text-primary block">2,000 MT</span>
                  <span className="text-xs text-slate mt-1 block">Annual Narrow Woven Fabrics Output</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-border shadow-md">
                <img
                  src="/images/factory/factory.jpg"
                  alt="Daman Polythread Plant Exterior"
                  className="w-full h-80 object-cover"
                />
                <div className="bg-primary text-white p-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    MANUFACTURING BASE
                  </span>
                  <h4 className="text-xl font-bold font-heading text-white">
                    Daman Industrial Hub, Western India
                  </h4>
                  <p className="text-xs text-slate-light leading-relaxed">
                    Strategically located ~180 km north of Mumbai Port in Daman—India’s preeminent polymer processing region—providing streamlined logistics for international containerized exports and domestic transit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Matrix */}
      <section className="py-16 bg-base border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-border p-8 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-3">
                Our Corporate Mission
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                To maintain the highest levels of quality control and customer satisfaction, not compromising on trademark standards despite fierce market competition. We continue expanding capacity and modernizing all manufacturing units to lead technological advancements in polypropylene filaments.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-3">
                Our Corporate Vision
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                To be a recognized world leader in manufacturing and exporting superior-grade high-tenacity industrial yarns and narrow fabrics. We pledge to continuously advance our standards of honesty, quality, technology, and customer-aligned product customization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Machinery & Infrastructure Photo Gallery */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container-custom">
          <SectionHeading
            eyebrow="EQUIPMENT & CAPABILITIES"
            title="Authentic Plant Infrastructure Tour"
            subtitle="Take a look inside our high-tech manufacturing facility in Daman, equipped with European compact spinning lines, electronic twisters, constant-tension winders, and heavy-duty needle looms."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infraPhotos.map((photo, pIdx) => (
              <div
                key={pIdx}
                className="bg-base rounded-lg border border-border overflow-hidden group hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="aspect-4/3 bg-slate/10 overflow-hidden relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-white px-2 py-0.5 rounded">
                      {photo.tag}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex items-center">
                  <h4 className="text-sm font-bold font-heading text-primary group-hover:text-primary-light transition-colors leading-snug">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Locations */}
      <section className="py-20 bg-base border-b border-border">
        <div className="container-custom">
          <SectionHeading
            eyebrow="OPERATIONAL HUBS"
            title="Strategic Presence"
            subtitle="Operating our commercial headquarters in India's financial capital and heavy manufacturing units in Daman."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {companyData.locations.map((loc, lIdx) => (
              <div
                key={lIdx}
                className="bg-white rounded-xl border border-border p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate">
                      {loc.type === 'head-office' ? 'Corporate Headquarters' : 'Manufacturing Plant'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-primary">
                    {loc.title}
                  </h3>

                  <address className="not-italic text-sm text-slate mt-4 space-y-1 leading-relaxed">
                    {loc.address.map((line, aIdx) => (
                      <div key={aIdx}>{line}</div>
                    ))}
                  </address>
                </div>

                <div className="mt-6 pt-4 border-t border-border text-xs text-primary font-semibold space-y-1">
                  {loc.phone && <div>Tel: {loc.phone}</div>}
                  {loc.email && <div>Email: {loc.email}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCTA />
    </div>
  );
};
