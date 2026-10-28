import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck, Factory } from 'lucide-react';
import { Button } from '../ui/Button';

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products & Specs', path: '/products' },
    { name: 'About & Infrastructure', path: '/about' },
    { name: 'Contact & RFQ', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-xs">
      {/* Top Corporate Strip */}
      <div className="bg-primary text-white text-xs py-2 border-b border-primary-light/30">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-light font-medium">
              <Factory className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">Plants:</span> Daman, India
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-light font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              10,000 MT Annual Capacity
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <a
              href="tel:+912261441900"
              className="flex items-center gap-1.5 text-slate-light hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-accent" />
              <span>+91 22 6144 1900</span>
            </a>
            <a
              href="mailto:info@damanpolythread.com"
              className="hidden sm:flex items-center gap-1.5 text-slate-light hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-accent" />
              <span>info@damanpolythread.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity - Text Only */}
          <Link to="/" className="flex flex-col group">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight font-heading text-primary leading-tight group-hover:text-primary-light transition-colors">
              DAMAN <span className="text-accent">POLYTHREAD</span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate">
              Precision Industrial Yarns • Est. 2000
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors py-2 border-b-2 ${
                    isActive
                      ? 'text-primary border-accent'
                      : 'text-slate border-transparent hover:text-primary hover:border-border'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              to="/contact"
              variant="gold"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary hover:bg-base rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-primary hover:bg-base'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-slate-light'}`} />
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-border space-y-3">
            <Button
              to="/contact"
              variant="gold"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote / Samples
            </Button>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate">
              <a href="tel:+912261441900" className="flex items-center gap-2 p-1 hover:text-primary">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 22 6144 1900</span>
              </a>
              <a href="mailto:info@damanpolythread.com" className="flex items-center gap-2 p-1 hover:text-primary">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@damanpolythread.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
