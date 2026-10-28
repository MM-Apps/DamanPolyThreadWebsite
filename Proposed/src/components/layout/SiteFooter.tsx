import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { companyData } from '../../data/company';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-primary-light/40">
      {/* Top Banner: Industrial Credibility Bar */}
      <div className="border-b border-primary-light/20 py-8 bg-primary-dark/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">First in India</h4>
                <p className="text-xs text-slate-light mt-0.5">
                  First Indian manufacturer of real High-Tenacity PPMF Yarn (Est. 2000)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">10,000 MT Annual Capacity</h4>
                <p className="text-xs text-slate-light mt-0.5">
                  8 European compact spinning lines with automated HMI control
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">Global Export Reach</h4>
                <p className="text-xs text-slate-light mt-0.5">
                  Supplying domestic & international technical textile converters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-extrabold font-heading text-white tracking-tight">
                DAMAN <span className="text-accent">POLYTHREAD</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-light font-bold">
                Precision Industrial Yarns • Est. 2000
              </span>
            </Link>

            <p className="text-sm text-slate-light leading-relaxed pr-6">
              Daman Polythread Ltd. is India’s largest manufacturer and global exporter of high-tenacity polypropylene multifilament yarns, industrial bag closing sewing threads, and narrow woven technical fabrics.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-light">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production Facilities Operational in Daman, India</span>
            </div>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4 pb-2 border-b border-primary-light/30">
              Product Lines
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-light">
              <li>
                <Link to="/products" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>PP Multifilament Yarn</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Bag Closing Thread</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Narrow Woven Fabrics</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Technical Webbings & Tapes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4 pb-2 border-b border-primary-light/30">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-light">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">Manufacturing Infrastructure</Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-accent transition-colors">Quality Control Lab</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors">Plant & Application Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Request a Quote (RFQ)</Link>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.emails.careers}`}
                  className="hover:text-accent transition-colors"
                >
                  Career Opportunities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4 pb-2 border-b border-primary-light/30">
              Corporate Office
            </h4>
            <address className="not-italic text-sm text-slate-light space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {companyData.locations[0].address.join(', ')}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${companyData.phones.primary}`} className="text-xs hover:text-white transition-colors">
                  {companyData.phones.primary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${companyData.emails.general}`} className="text-xs hover:text-white transition-colors">
                  {companyData.emails.general}
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Speculative Concept Notice */}
      <div className="border-t border-primary-light/20 py-6 bg-primary-dark">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-light">
          <p>
            © {currentYear} Daman Polythread Ltd. All rights reserved. Registered Trademarks: THREADLON, TUFF, DPL.
          </p>
          <p className="text-[11px] text-slate-light/70 text-center md:text-right">
            Redesign Pitch Concept & Prototype. Content and technical specifications verified from original company publications.
          </p>
        </div>
      </div>
    </footer>
  );
};
