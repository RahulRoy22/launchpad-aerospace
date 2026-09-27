import React from 'react';

export default function CallToAction({ onOpenDemo }) {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 mb-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-surface-container via-surface-container-low to-surface-container-lowest p-8 lg:p-16 border border-primary/40 shadow-[0_0_50px_rgba(183,109,255,0.25)] text-center flex flex-col items-center">
        {/* Radial Nebula Accent */}
        <div className="absolute inset-0 bg-radial from-primary/15 via-transparent to-transparent pointer-events-none"></div>

        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_12px_rgba(183,109,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          <span>FLIGHT SLOTS AVAILABLE FOR Q3/Q4 2026</span>
        </span>

        <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold max-w-3xl mb-4 tracking-tight leading-tight">
          Ready to schedule your <br />
          <span className="bg-gradient-to-r from-primary via-surface-tint to-secondary bg-clip-text text-transparent">
            orbital insertion?
          </span>
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
          Join leading aerospace pioneers launching payloads with LaunchPad OS.2. Speak with our flight engineers and reserve your launch corridor today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenDemo('Flight Slot Reservation')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-lg text-label-lg text-on-primary bg-gradient-to-r from-primary-container via-tertiary-container to-primary-container hover:brightness-110 px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(183,109,255,0.5)] transition-all font-semibold active:scale-95 group"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
              calendar_month
            </span>
            <span>Schedule Launch Window</span>
          </button>

          <a
            href="#docs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-lg text-label-lg text-on-surface hover:text-secondary bg-surface-container-high/70 hover:bg-surface-container-highest backdrop-blur-xl border border-outline-variant/40 px-8 py-4 rounded-xl transition-all font-medium"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">code</span>
            <span>Explore Developer SDK &amp; APIs</span>
          </a>
        </div>
      </div>
    </section>
  );
}
