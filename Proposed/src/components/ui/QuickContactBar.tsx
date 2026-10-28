import React, { useState } from 'react';
import { Phone, MessageSquare, Send, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyData } from '../../data/company';

export const QuickContactBar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Floating Action Trigger Button on Desktop & Mobile */}
      <aside
        aria-label="Quick inquiry options"
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      >
        <button
          type="button"
          onClick={() => {
            setModalOpen(true);
            setSent(false);
          }}
          className="bg-accent hover:bg-accent-hover text-primary-dark font-extrabold text-xs px-4 py-3 rounded-full shadow-lg shadow-black/20 flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer border border-accent-light"
          aria-label="Open Quick RFQ Modal"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Instant RFQ / Sample</span>
          <span className="sm:hidden">RFQ</span>
        </button>

        <a
          href={`https://wa.me/912261441900?text=${encodeURIComponent(
            'Hello Daman Polythread, I would like to inquire about your High-Tenacity PPMF Yarn / Industrial Threads.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs p-3 rounded-full shadow-lg shadow-black/20 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          aria-label="Chat on WhatsApp with Technical Sales"
          title="Chat on WhatsApp with Technical Sales"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </aside>

      {/* Quick RFQ Modal Backdrop */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl border border-border shadow-2xl max-w-md w-full p-6 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate hover:text-primary hover:bg-base transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-1">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Direct Factory Dispatch</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-primary">
              Quick Technical RFQ
            </h3>
            <p className="text-xs text-slate mt-1 mb-5">
              Tell us your denier or application requirement. Our technical engineering team in Mumbai will respond with specs & quotation.
            </p>

            {sent ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-primary text-base">
                  Inquiry Received
                </h4>
                <p className="text-xs text-slate">
                  Thank you! Our technical sales department will contact you within 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="mt-2 text-xs font-bold text-accent hover:underline cursor-pointer"
                >
                  Close window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-primary block mb-1">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Reliance / Birla / Packaging Ltd."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-base border border-border rounded-lg px-3 py-2 text-xs text-primary placeholder-slate/50 focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-base border border-border rounded-lg px-3 py-2 text-xs text-primary placeholder-slate/50 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@co.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-base border border-border rounded-lg px-3 py-2 text-xs text-primary placeholder-slate/50 focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-primary block mb-1">
                    Denier & Requirement Notes *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g. 1000 Denier intermingled yarn, 5 MT monthly, for FIBC bag loop sewing..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full bg-base border border-border rounded-lg px-3 py-2 text-xs text-primary placeholder-slate/50 focus:outline-none focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-light text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Submit Inquiry for Immediate Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate pt-1">
                  <a href={`tel:${companyData.phones.primary}`} className="flex items-center gap-1 hover:text-primary">
                    <Phone className="w-3 h-3 text-accent" />
                    <span>{companyData.phones.primary}</span>
                  </a>
                  <span>Daman Plant Operational</span>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
