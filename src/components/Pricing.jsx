import React, { useState } from 'react';

export default function Pricing({ onOpenDemo }) {
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: 'Suborbital Testbed',
      tagline: 'For sounding rockets, payload validation & university research.',
      monthlyPrice: '$2,400',
      annualPrice: '$1,920',
      period: '/ month',
      popular: false,
      features: [
        'Up to 5 autonomous flight trajectory simulations / mo',
        'Standard 10 Hz telemetry streaming pipeline',
        '2 polar ground station downlink windows',
        'Basic collision risk notification',
        'Community flight engineer support (24h response)',
      ],
      ctaText: 'Start Testbed Tier',
      ctaStyle: 'secondary',
    },
    {
      name: 'Orbital Pro',
      tagline: 'For commercial rideshares, cubesat swarms & launch operators.',
      monthlyPrice: '$8,900',
      annualPrice: '$7,120',
      period: '/ month',
      popular: true,
      features: [
        'Unlimited n-body trajectory & delta-V optimization',
        'High-rate 100 Hz real-time telemetry streaming',
        'Full 48 ground station global mesh access with auto-handover',
        'Automated multi-manifest rideshare dispenser sequencer',
        'Autonomous orbital collision avoidance co-pilot',
        'Dedicated mission support engineer & 99.99% SLA',
      ],
      ctaText: 'Deploy Orbital Pro',
      ctaStyle: 'primary',
    },
    {
      name: 'Deep Space Enterprise',
      tagline: 'Custom constellation architecture & sovereign orbital networks.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      period: '',
      popular: false,
      features: [
        'Dedicated on-premise mission control flight software node',
        'Cislunar, Lagrange points (L1/L2) & interplanetary trajectory engine',
        'Inter-satellite laser link (ISL) mesh routing protocols',
        'Custom cryptographic avionics hardware security module (HSM)',
        'Classified/ITAR data residency with dedicated clearance support',
        '24/7/365 flight operations center hotline',
      ],
      ctaText: 'Contact Flight Team',
      ctaStyle: 'secondary',
    },
  ];

  return (
    <section id="pricing" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-md text-label-md text-secondary uppercase font-semibold tracking-wider">
          Transparent, Mission-Ready Pricing
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mt-3">
          Scale seamlessly from suborbital testbeds to orbital constellations
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
          All tiers include cryptographic packet signing, telemetry dashboards, and compliance exports.
        </p>

        {/* Billing Interval Toggle */}
        <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-surface-container-low border border-outline-variant/30 mt-8">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all ${
              !annual
                ? 'bg-surface-container-high text-on-surface font-semibold shadow-md'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 transition-all ${
              annual
                ? 'bg-primary text-on-primary font-semibold shadow-[0_0_15px_rgba(183,109,255,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span>Annual</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20 text-white font-bold">
              SAVE 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, idx) => {
          const isPop = tier.popular;
          const price = annual ? tier.annualPrice : tier.monthlyPrice;

          return (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-2xl ${
                isPop
                  ? 'bg-surface-container-low/95 border-2 border-primary shadow-[0_0_40px_rgba(183,109,255,0.25)] lg:-translate-y-2'
                  : 'bg-surface-container-low/60 hover:bg-surface-container-low/90 border border-outline-variant/30 hover:border-outline-variant/60 shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {isPop && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-surface-tint to-secondary text-on-primary font-label-sm text-label-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(183,109,255,0.6)]">
                  MOST POPULAR ORBIT
                </div>
              )}

              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  {tier.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant min-h-[40px] mb-6">
                  {tier.tagline}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-outline-variant/20">
                  <span className="font-headline-xl text-headline-xl font-mono font-extrabold text-on-surface tracking-tight">
                    {price}
                  </span>
                  {tier.period && (
                    <span className="text-on-surface-variant font-label-md text-label-md">
                      {tier.period}
                    </span>
                  )}
                </div>

                {/* Feature List */}
                <div className="space-y-3.5 mb-8">
                  <div className="text-xs font-mono text-on-surface-variant uppercase tracking-wider font-semibold">
                    Flight Capabilities Included:
                  </div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm">
                      <span className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${
                        isPop ? 'text-primary' : 'text-secondary'
                      }`}>
                        check_circle
                      </span>
                      <span className="text-on-surface-variant leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <button
                onClick={() => onOpenDemo(`${tier.name} Tier`)}
                className={`w-full py-3.5 rounded-xl font-label-md text-label-md font-semibold transition-all flex items-center justify-center gap-2 active:scale-95 ${
                  isPop
                    ? 'bg-gradient-to-r from-primary-container via-tertiary-container to-primary-container text-on-primary hover:brightness-110 shadow-[0_0_25px_rgba(183,109,255,0.45)]'
                    : 'bg-surface-container-high/60 hover:bg-surface-container-highest text-on-surface hover:text-secondary border border-outline-variant/40'
                }`}
              >
                <span>{tier.ctaText}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
