import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, Send, AlertCircle, Info, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
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
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 border-b border-primary-light/40 relative">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold" size="md">
              DIRECT COMMERCIAL CHANNEL
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Request a Quotation & Technical Consultation
            </h1>
            <p className="text-base sm:text-lg text-slate-light leading-relaxed">
              Connect directly with our sales headquarters in Mumbai and manufacturing engineers in Daman for pricing, technical datasheets, and sample spools.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Locations Grid */}
      <section className="py-20 bg-base">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Interactive RFQ Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-border p-6 sm:p-10 shadow-sm space-y-8">
                {/* Prototype Notice Banner */}
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs text-primary leading-relaxed">
                    <strong className="font-bold">Prototype Concept Demo:</strong> This form demonstrates the proposed customer enquiry workflow for the redesign pitch. Submissions simulate real-time processing and validation without executing external mail server scripts.
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
                    </div>

                    <div className="p-4 bg-base rounded-lg text-xs text-slate text-left max-w-md mx-auto space-y-1">
                      <div><strong>Contact:</strong> {formData.email} | {formData.phone}</div>
                      {formData.estimatedVolume && <div><strong>Estimated Volume:</strong> {formData.estimatedVolume}</div>}
                      {formData.message && <div><strong>Notes:</strong> {formData.message}</div>}
                    </div>

                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          company: '',
                          email: '',
                          phone: '',
                          productInterest: 'Polypropylene Multifilament Yarn (PPMF)',
                          estimatedVolume: '',
                          message: '',
                        });
                      }}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-primary">
                        Commercial & Technical Inquiry
                      </h3>
                      <p className="text-xs text-slate mt-1">
                        Fields marked with <span className="text-red-500 font-bold">*</span> are required.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh"
                          className="w-full px-3.5 py-2.5 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                          required
                        />
                      </div>

                      <div className="space-y-1 text-left">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="e.g. Sharma"
                          className="w-full px-3.5 py-2.5 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                          required
                        />
                      </div>
                    </div>

                    {/* Company & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                          Company / Organization <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Apex Packaging Corp"
                          className="w-full px-3.5 py-2.5 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                          required
                        />
                      </div>

                      <div className="space-y-1 text-left">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone & Product Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98200 00000"
                          className="w-full px-3.5 py-2.5 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                          required
                        />
                      </div>

                      <div className="space-y-1 text-left">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                          Product Line Interest <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        >
                          <option value="Polypropylene Multifilament Yarn (PPMF)">
                            Polypropylene Multifilament Yarn (PPMF)
                          </option>
                          <option value="Industrial Bag Closing Thread">
                            Industrial Bag Closing Thread
                          </option>
                          <option value="Narrow Woven Fabrics & Webbings">
                            Narrow Woven Fabrics & Webbings
                          </option>
                          <option value="Custom Denier / Special Formulation">
                            Custom Denier / Special Formulation
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Volume Estimate */}
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                        Estimated Monthly or Order Volume (Optional)
                      </label>
                      <input
                        type="text"
                        name="estimatedVolume"
                        value={formData.estimatedVolume}
                        onChange={handleChange}
                        placeholder="e.g. 5 Metric Tons / Trial Sample Spools"
                        className="w-full px-3.5 py-2.5 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                        Detailed Technical Requirements / Spool Type
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify target denier (e.g. 1000D), tenacity, TPM twist, color shade, or destination port..."
                        className="w-full px-3.5 py-2.5 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full justify-center"
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Simulating Dispatch...' : 'Transmit Request for Quotation'}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Direct Contact & Office Details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Corporate Head Office Card */}
              <div className="bg-white rounded-xl border border-border p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <Badge variant="primary" size="sm">
                    COMMERCIAL HQ
                  </Badge>
                  <h3 className="text-xl font-bold font-heading text-primary mt-2">
                    Corporate & Sales Office
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-slate">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary">Daman Polythread Ltd.</p>
                      <p>603/604, Marathon Icon</p>
                      <p>Marathon Next Gen Complex, Off G.K. Marg</p>
                      <p>Lower Parel (West), Mumbai - 400013, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-xs text-slate">Telephone & Fax</p>
                      <a href="tel:+912261441900" className="font-semibold text-primary hover:text-accent">
                        +91 22 6144 1900
                      </a>
                      <span className="text-xs text-slate ml-2">(Fax: +91 22 6144 1901)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-xs text-slate">Direct Business Email</p>
                      <a href="mailto:info@damanpolythread.com" className="font-semibold text-primary hover:text-accent">
                        info@damanpolythread.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-xs text-slate">Operating Hours</p>
                      <p className="font-medium text-primary">Monday – Saturday: 09:30 – 18:30 IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing Facilities Card */}
              <div className="bg-white rounded-xl border border-border p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <Badge variant="gold" size="sm">
                    PRODUCTION COMPLEX
                  </Badge>
                  <h3 className="text-xl font-bold font-heading text-primary mt-2">
                    Daman Manufacturing Plant
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-slate">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary">Main Extrusion & Weaving Works</p>
                      <p>Daman Industrial Area, Pin: 396210</p>
                      <p>UT of Dadra & Nagar Haveli and Daman & Diu, India</p>
                      <p className="text-xs text-slate-light mt-1">~180 km North of Mumbai (JNPT Port Corridor)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="text-xs text-slate">Career Inquiries</p>
                      <a href="mailto:jobs@damanpolythread.com" className="font-semibold text-primary hover:text-accent">
                        jobs@damanpolythread.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
