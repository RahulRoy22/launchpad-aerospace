import React from 'react';

export default function MissionStats() {
  const stats = [
    {
      value: '1,240+',
      label: 'Successful Deployments',
      sub: 'Falcon, Ariane, Vulcan & Rocket Lab',
      trend: '+18% YoY',
      trendPositive: true,
    },
    {
      value: '99.99%',
      label: 'Orbital Telemetry Uptime',
      sub: 'Zero mission-loss failover SLA',
      trend: 'Mission Critical',
      trendPositive: true,
    },
    {
      value: '4.2ms',
      label: 'Avg Telemetry Latency',
      sub: 'LEO direct optical ISL routing',
      trend: 'Ultra Low-Latency',
      trendPositive: true,
    },
    {
      value: '48',
      label: 'Global Ground Stations',
      sub: 'Equatorial & polar dual-polarization',
      trend: 'Worldwide Mesh',
      trendPositive: true,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10">
      <div className="relative overflow-hidden rounded-2xl bg-surface-container-low/80 backdrop-blur-2xl border border-primary/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/20">
          {stats.map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[11px] font-mono font-medium mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                <span>{item.trend}</span>
              </div>
              <span className="font-headline-lg text-headline-lg font-extrabold text-on-surface font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary-fixed to-secondary">
                {item.value}
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold mt-2">
                {item.label}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-[200px]">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
