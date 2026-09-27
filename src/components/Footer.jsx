import React from 'react';

export default function Footer({ onOpenDemo }) {
  const footerLinks = {
    Platform: [
      { name: 'Constellation Mesh', href: '#capabilities' },
      { name: 'Orbital Tracking', href: '#telemetry' },
      { name: 'Trajectory Solver', href: '#capabilities' },
      { name: 'Avionics Bridge', href: '#platform' },
    ],
    Solutions: [
      { name: 'Deep Space Logistics', href: '#capabilities' },
      { name: 'Defense & Space Recon', href: '#capabilities' },
      { name: 'Commercial Rideshare', href: '#pricing' },
      { name: 'Micro-Payload Delivery', href: '#pricing' },
    ],
    Developers: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Telemetry Streaming API', href: '#docs' },
      { name: 'Flight SDK (Python/Rust)', href: '#docs' },
      { name: 'Ground Station Protocol', href: '#docs' },
    ],
    Company: [
      { name: 'About LaunchPad', href: '#' },
      { name: 'Pricing Models', href: '#pricing' },
      { name: 'Flight Schedule 2026', href: '#' },
      { name: 'Contact Avionics Team', href: '#', onClick: () => onOpenDemo('Flight Support') },
    ],
  };

  return (
    <footer id="docs" className="w-full bg-[#090D16] border-t border-[#2E1065]/60 text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img alt="LaunchPad Logo" className="h-7 w-auto object-contain" src="/assets/logo.svg" />
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                LaunchPad
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              High-velocity orbital telemetry, mission-critical flight coordination, and satellite constellation architecture engineered for next-era space exploration.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/30 font-label-sm text-label-sm text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-semibold uppercase tracking-wider">All Systems Nominal • 99.99% Orbit Uptime</span>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">
                {title}
              </h3>
              <ul className="space-y-2.5 font-body-sm text-body-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="hover:text-primary transition-colors text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.href} className="hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            © 2026 LaunchPad Aerospace Inc. All orbital corridors reserved.
          </p>
          <div className="flex items-center gap-6 font-label-sm text-label-sm">
            <a href="#" className="hover:text-on-surface transition-colors">Security &amp; ITAR ECCN 9A515</a>
            <a href="#" className="hover:text-on-surface transition-colors">Privacy Shield</a>
            <a href="#" className="hover:text-on-surface transition-colors">Terms of Flight</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
