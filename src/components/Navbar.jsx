import React, { useState } from 'react';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Telemetry', href: '#telemetry' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090D16]/90 backdrop-blur-xl border-b border-[#2E1065]/70 transition-all">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <img 
              alt="LaunchPad Logo" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
              src="/assets/logo.svg" 
            />
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold flex items-center gap-1.5">
              LaunchPad
              <span className="inline-block w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#38bdf8] animate-pulse"></span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-label-lg text-label-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors py-2 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenDemo('Mission Control')}
            className="hidden sm:inline-flex items-center justify-center font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-lg bg-surface-container-low/80 hover:bg-surface-container border border-outline-variant/30 hover:border-primary/40 transition-all"
          >
            <span className="material-symbols-outlined text-[16px] mr-1.5 text-secondary">terminal</span>
            Mission Control
          </button>
          
          <button
            onClick={() => onOpenDemo('Flight Slot Booking')}
            className="inline-flex items-center justify-center font-label-md text-label-md text-on-primary bg-gradient-to-r from-primary-container via-tertiary-container to-primary-container hover:brightness-110 px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(183,109,255,0.4)] transition-all font-semibold active:scale-95 group"
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined text-[16px] ml-1 transition-transform group-hover:translate-x-0.5">arrow_forward</span>
          </button>

          {/* User Status Avatar */}
          <div className="hidden md:flex w-8 h-8 rounded-full bg-primary/20 border border-primary/40 items-center justify-center ml-1">
            <span className="material-symbols-outlined text-primary text-[18px]">satellite_alt</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface bg-surface-container-low"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface hover:text-primary font-label-lg py-2 border-b border-surface-container/50"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo('Mission Control');
              }}
              className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">terminal</span>
              Mission Control
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
