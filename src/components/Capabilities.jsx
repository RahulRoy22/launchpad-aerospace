import React from 'react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: 'timeline',
      title: 'Autonomous Trajectory Optimization',
      tag: 'PROPULSION ΔV',
      description:
        'Continuous n-body gravitational perturbation recalculation with millisecond convergence. Optimal burns computed on-edge before apogee insertion.',
      stat: '< 1.2ms Solver Latency',
      color: 'primary',
    },
    {
      icon: 'hub',
      title: 'Constellation Laser Mesh',
      tag: 'OPTICAL ISL',
      description:
        'Inter-satellite laser communication protocol routing telemetry packets across non-geostationary orbital swarms without ground line-of-sight.',
      stat: '10 Gbps Inter-Satellite Throughput',
      color: 'secondary',
    },
    {
      icon: 'radar',
      title: 'Real-Time Telemetry Streaming',
      tag: 'AVIONICS PROTOCOL',
      description:
        'ITAR-compliant bi-directional telemetry bus streaming gyro, thermistor, propellant pressure, and battery state vectors at 100 Hz frequency.',
      stat: '99.999% Packet Reliability',
      color: 'primary',
    },
    {
      icon: 'satellite',
      title: 'Global Ground Station Mesh',
      tag: 'MULTI-BAND ANTENNA',
      description:
        'Dynamic antenna array scheduling across 48 polar and equatorial ground stations with automated orbital Doppler shift tracking.',
      stat: '48 Direct Downlink Nodes',
      color: 'secondary',
    },
    {
      icon: 'rocket',
      title: 'Multi-Manifest Rideshare Sync',
      tag: 'PAYLOAD DEPLOYMENT',
      description:
        'Automated dispenser sequencer for multi-customer deployments. Validates tip-off rates, separation velocities, and safe drift corridors.',
      stat: 'Up to 64 Cubesats / Launch',
      color: 'primary',
    },
    {
      icon: 'shield_with_heart',
      title: 'Orbital Debris Collision Guard',
      tag: 'SAFETY CO-PILOT',
      description:
        'Millisecond space traffic management integration with real-time conjunction warnings and autonomous micro-thrust delta-V collision avoidance.',
      stat: '0.000% Conjunction Incidents',
      color: 'secondary',
    },
  ];

  return (
    <section id="capabilities" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
      {/* Section Title & Narrative */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-semibold tracking-widest uppercase mb-3">
          <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
          <span>SYSTEM ARCHITECTURE</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Engineered for mission-critical flight precision and multi-orbit agility
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
          Replace fragmented flight software with an integrated mission control stack designed for modern aerospace constellations, commercial launch providers, and deep-space missions.
        </p>
      </div>

      {/* 3-Column Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((item, index) => {
          const isPrimary = item.color === 'primary';
          return (
            <div
              key={index}
              className="group relative rounded-2xl bg-surface-container-low/60 hover:bg-surface-container/80 border border-outline-variant/30 hover:border-primary/50 p-7 transition-all duration-300 backdrop-blur-xl hover:shadow-[0_12px_36px_rgba(168,85,247,0.15)] flex flex-col justify-between"
            >
              {/* Glow Highlight on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isPrimary 
                      ? 'bg-primary/15 text-primary border border-primary/30 group-hover:scale-110' 
                      : 'bg-secondary/15 text-secondary border border-secondary/30 group-hover:scale-110'
                  } transition-transform`}>
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-highest/60 border border-outline-variant/20 text-on-surface-variant font-mono">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Stat Pill */}
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs font-mono">
                <span className="text-on-surface-variant">BENCHMARK:</span>
                <span className={`font-semibold ${isPrimary ? 'text-primary' : 'text-secondary'}`}>
                  {item.stat}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
