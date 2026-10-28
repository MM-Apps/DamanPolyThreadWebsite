import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, Send, AlertCircle, Info, Clock, MessageSquare, ShieldCheck, ExternalLink, Anchor, Factory, Truck, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { companyData } from '../data/company';
import type { EnquiryFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || 'Polypropylene Multifilament Yarn (PPMF)';

  const [formData, setFormData] = useState<EnquiryFormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    productInterest: preselectedProduct,
    estimatedVolume: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.company.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in all required fields marked with *');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid business email address');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    // Simulate server transmission for the prototype
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Atmospheric Industrial Parallax Header Banner */}
      <section className="relative text-white py-20 lg:py-24 border-b border-primary-light/40 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/parallax/parallax-nwf.jpg')",
          }}
        />
        {/* Scrim: the fabric roll is the brightest, most saturated asset on the site, so the left
            column goes near-opaque to carry white text while the colour arcs open up on the right. */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(10,23,38,0.96) 0%, rgba(10,23,38,0.90) 40%, rgba(10,23,38,0.58) 58%, rgba(10,23,38,0.20) 80%, rgba(10,23,38,0.06) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(10,23,38,0.58) 0%, rgba(10,23,38,0.04) 38%, rgba(10,23,38,0.30) 100%)',
          }}
        />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Commercial Channel</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
              Request a Quotation & Sample Spools
            </h1>
            <p className="text-base sm:text-lg text-slate-light leading-relaxed">
              Connect directly with our corporate sales headquarters in Mumbai and manufacturing engineers in Daman for pricing, technical datasheets, and free trial sample spools.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-light">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" />
                Response within 4 business hours
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-accent" />
                +91 22 6144 1900
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-accent" />
                info@damanpolythread.com
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form and Locations Grid */}
      <section className="py-20 bg-base">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Interactive RFQ Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-border p-6 sm:p-10 shadow-sm space-y-8 text-left">
                {/* Prototype Notice Banner */}
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs text-primary leading-relaxed">
                    <strong className="font-bold">Rapid Response Guarantee:</strong> All technical specifications and custom denier requests are routed directly to our Mumbai commercial sales desk and Daman production scheduling team.
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold font-heading text-primary">
                        Enquiry Recorded Successfully
                      </h3>
                      <p className="text-sm text-slate max-w-md mx-auto">
                        Thank you, {formData.firstName}. Your request for{' '}
                        <strong>{formData.productInterest}</strong> on behalf of{' '}
                        <strong>{formData.company}</strong> has been logged in this prototype session.
                      </p>
                      <p className="text-xs text-slate-light">
                        Our commercial office will contact you via email at {formData.email} and telephone at {formData.phone}.
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="gold"
                      size="md"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-4 rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          First Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="e.g. Mehboob"
                          className="w-full bg-base border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          Last Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="e.g. Meghani"
                          className="w-full bg-base border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          Company / Enterprise Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Technical Textiles Ltd."
                          className="w-full bg-base border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          Business Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="procurement@company.com"
                          className="w-full bg-base border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          Direct Telephone / WhatsApp <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91..."
                          className="w-full bg-base border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          Product Family of Interest
                        </label>
                        <select
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="w-full bg-base border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:bg-white transition-colors"
                        >
                          <option value="Polypropylene Multifilament Yarn (PPMF)">
                            PP Multifilament Yarn (THREADLON® 200–6,000D)
                          </option>
                          <option value="Industrial Bag Closing Thread">
                            Bag Closing Thread (THREADLON® Dope-Dyed)
                          </option>
                          <option value="Narrow Woven Fabrics / Webbings">
                            Narrow Woven Fabrics & Webbings (TUFF® / DPL®)
                          </option>
                          <option value="Custom Batch / Trial Spool Request">
                            Custom Spin Batch & Free Sample Spool
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        Estimated Monthly Volume / Target Denier
                      </label>
                      <input
                        type="text"
                        name="estimatedVolume"
                        value={formData.estimatedVolume}
                        onChange={handleChange}
                        placeholder="e.g. 5 MT monthly / 840 Denier / 50mm Webbing"
                        className="w-full bg-base border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        Application Details or Sample Delivery Address
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your sewing equipment, denier requirements, colorway, or destination port..."
                        className="w-full bg-base border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:bg-white transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      icon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Transmitting Request...' : 'Submit Quotation Request'}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Physical Facilities & Direct Contacts */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* WhatsApp Quick Connect Card */}
              <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-6 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-emerald-950 text-base">
                    Chat on WhatsApp Directly
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Have an urgent denier inquiry or need immediate container dispatch availability? Chat directly with technical sales.
                  </p>
                  <a
                    href="https://wa.me/912261441900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-700 hover:text-emerald-900 pt-1"
                  >
                    <span>Open WhatsApp Chat (+91 22 6144 1900)</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Commercial HQ Card */}
              <div className="bg-white rounded-xl border border-border p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Corporate Headquarters
                  </span>
                  <span className="text-xs text-slate font-medium">Mumbai, India</span>
                </div>

                <div className="space-y-3 text-sm text-slate">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <span className="text-xs leading-relaxed">
                      {companyData.locations[0].address.join(', ')}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <a href={`tel:${companyData.phones.primary}`} className="text-xs hover:text-primary">
                      {companyData.phones.primary}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <a href={`mailto:${companyData.emails.general}`} className="text-xs hover:text-primary">
                      {companyData.emails.general}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-border">
                    <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed">
                      <span className="block font-bold text-primary">Commercial Desk Hours</span>
                      <span>Mon – Sat · 9:00 – 18:00 IST (UTC+5:30)</span>
                      <span className="block text-slate-light">Quotations answered within 4 business hours</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Marathon+Icon+Lower+Parel+West+Mumbai+400013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate hover:text-primary pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Manufacturing Plant Card */}
              <div className="bg-white rounded-xl border border-border p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Manufacturing Works
                  </span>
                  <span className="text-xs text-slate font-medium">Daman, India</span>
                </div>

                <div className="space-y-3 text-sm text-slate">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <span className="text-xs leading-relaxed">
                      {companyData.locations[1].address.join(', ')}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-border">
                    <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed">
                      <span className="block font-bold text-primary">Plant Operations</span>
                      <span>Continuous production · 3 shifts, 24 hours</span>
                      <span className="block text-slate-light">Visitor walkthroughs by prior appointment</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Daman+Industrial+Area+Daman+396210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate hover:text-primary pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Supply Corridor: full-width band so the plant → port flow reads
              left to right, and the form/locations columns stay level. */}
          <div className="mt-12 bg-primary rounded-xl border border-primary-light/50 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 border-b border-primary-light/40">
              <h3 className="font-heading font-bold text-white text-lg">
                From Our Plant to Your Port
              </h3>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                180 km • Daman to JNPT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pt-6 text-left">
              <div className="flex items-start gap-4 md:pr-8">
                <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                  <Factory className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">Daman Manufacturing Works</span>
                  <span className="block text-xs text-slate-light leading-relaxed mt-1">
                    Spinning, twisting, weaving and lab release under one roof
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 md:px-8 md:border-x md:border-primary-light/40">
                <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">Overland Corridor</span>
                  <span className="block text-xs text-slate-light leading-relaxed mt-1">
                    Dedicated road freight north along the NH-48 industrial belt
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 md:pl-8">
                <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                  <Anchor className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">JNPT & Mumbai Port</span>
                  <span className="block text-xs text-slate-light leading-relaxed mt-1">
                    FCL and LCL container loading for export consignments
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 pt-5 border-t border-primary-light/40 text-xs text-slate-light flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-accent shrink-0" />
              <span>
                Single-point commercial desk in Mumbai, single-point production in Daman — no
                third-party agent between your purchase order and the shipment.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
