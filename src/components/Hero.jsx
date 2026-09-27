import React, { useState, useEffect } from 'react';

export default function Hero({ onOpenDemo }) {
  // Live fluctuating telemetry simulation
  const [telemetry, setTelemetry] = useState({
    velocity: 7.662,
    altitude: 408.4,
    deltaV: 184.2,
    signalStrength: 99.8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        velocity: Number((7.66 + (Math.random() * 0.01 - 0.005)).toFixed(3)),
        altitude: Number((408.4 + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        deltaV: Number((184.2 + (Math.random() * 0.4 - 0.2)).toFixed(1)),
        signalStrength: Number((99.7 + Math.random() * 0.25).toFixed(1)),
      }));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="platform" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 flex flex-col items-center overflow-hidden">
      {/* Ambient Plasma Radiant Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] -left-48 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute top-[60%] -right-48 w-[700px] h-[700px] bg-primary-container/10 rounded-full blur-[180px] pointer-events-none -z-10"></div>

      {/* Live Launch Badge */}
      <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-low/90 border border-primary/30 shadow-[0_0_24px_rgba(183,109,255,0.25)] backdrop-blur-xl mb-space-lg hover:border-primary/60 transition-all cursor-default">
        <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22c55e] animate-ping"></span>
        <span className="font-label-sm text-label-sm text-primary tracking-wider uppercase font-semibold">LAUNCHPAD 2.4 IS LIVE</span>
        <span className="w-1 h-3 rounded-full bg-outline-variant/40"></span>
        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Autonomous Orbital Insertion &amp; Multi-Manifest Telemetry</span>
      </div>

      {/* Main Hero Headlines */}
      <div className="max-w-4xl text-center space-y-space-md mb-space-xl">
        <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
          Next-Gen Infrastructure for the <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary via-surface-tint to-secondary bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(183,109,255,0.4)]">
            New Space Economy
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto font-normal leading-relaxed">
          Accelerate your payload delivery from pad to orbit. Automate mission trajectory planning, manage multi-satellite constellations, and stream real-time orbital telemetry with millisecond latency.
        </p>
      </div>

      {/* CTA Interaction Group */}
      <div className="flex flex-col sm:flex-row items-center gap-space-md mb-16 w-full sm:w-auto">
        <button
          onClick={() => onOpenDemo('Flight Slot Booking')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm font-label-lg text-label-lg text-on-primary bg-gradient-to-r from-primary-container via-tertiary-container to-primary-container hover:brightness-110 px-8 py-3.5 rounded-xl shadow-[0_0_30px_rgba(183,109,255,0.45)] transition-all font-semibold active:scale-95 group"
        >
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-white">
            rocket_launch
          </span>
          <span>Launch Mission</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>

        <a
          href="#telemetry"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm font-label-lg text-label-lg text-on-surface hover:text-secondary bg-surface-container-high/60 hover:bg-surface-container-highest backdrop-blur-xl border border-outline-variant/40 px-8 py-3.5 rounded-xl transition-all font-medium"
        >
          <span className="material-symbols-outlined text-[20px] text-secondary">monitoring</span>
          <span>Live Telemetry Console</span>
        </a>
      </div>

      {/* Futuristic Orbital Cockpit / Telemetry Card */}
      <div className="w-full max-w-5xl rounded-2xl bg-surface-container-low/70 border border-primary/30 shadow-[0_16px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden relative">
        {/* Header Bar */}
        <div className="px-6 py-3.5 bg-surface-container/60 border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 text-on-surface-variant font-semibold tracking-wider">FLIGHT_NODE::LP-ORBITAL-ALPHA-7</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="flex items-center gap-1.5 text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              TELEMETRY: SYNCHRONIZED
            </span>
            <span className="hidden sm:inline text-outline">|</span>
            <span className="hidden sm:inline">UTC: 2026-09-27 10:45:00</span>
          </div>
        </div>

        {/* Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8">
          {/* Visual Telemetry Trajectory / Graphic Preview */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 z-10">
              <span className="px-2.5 py-1 rounded bg-secondary/10 border border-secondary/30 text-secondary text-[11px] font-mono font-semibold">
                LEO INCLINATION 51.6°
              </span>
            </div>
            
            <div className="relative z-10 space-y-2 mb-4">
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest font-semibold">Mission Path Vector</span>
              <h3 className="text-xl font-bold text-on-surface">Falcon-X rideshare::Deploy Sequence</h3>
              <p className="text-sm text-on-surface-variant">Autonomous orbital circularization burn nominal at T+08:24.</p>
            </div>

            {/* Visualizer Image / Map Graphic */}
            <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-outline-variant/30 flex items-center justify-center bg-black/40">
              <img
                src="/assets/hero-graphic.png"
                alt="Orbital Trajectory Console"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              
              {/* Overlay Trajectory Arc */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono bg-surface-container-lowest/90 px-3 py-2 rounded border border-outline-variant/40 backdrop-blur-md">
                <span className="text-secondary font-semibold">TRAJECTORY_LOCK: [PASS]</span>
                <span className="text-on-surface-variant">APOGEE: 420.5 KM</span>
                <span className="text-primary font-semibold">PERIGEE: 402.1 KM</span>
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Metric 1 */}
              <div className="p-4 rounded-xl bg-surface-container/40 border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between text-on-surface-variant text-xs font-mono mb-1">
                  <span>ORBIT VELOCITY</span>
                  <span className="material-symbols-outlined text-[16px] text-primary">speed</span>
                </div>
                <div className="text-2xl font-bold font-mono text-on-surface">
                  {telemetry.velocity} <span className="text-xs text-primary font-normal">km/s</span>
                </div>
                <div className="text-[11px] text-secondary mt-1 font-mono">Mach 22.4 (Orbital)</div>
              </div>

              {/* Metric 2 */}
              <div className="p-4 rounded-xl bg-surface-container/40 border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between text-on-surface-variant text-xs font-mono mb-1">
                  <span>ALTITUDE</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary">flight_takeoff</span>
                </div>
                <div className="text-2xl font-bold font-mono text-on-surface">
                  {telemetry.altitude} <span className="text-xs text-secondary font-normal">km</span>
                </div>
                <div className="text-[11px] text-on-surface-variant mt-1 font-mono">Target: 410.0 km</div>
              </div>

              {/* Metric 3 */}
              <div className="p-4 rounded-xl bg-surface-container/40 border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between text-on-surface-variant text-xs font-mono mb-1">
                  <span>REMAINING ΔV</span>
                  <span className="material-symbols-outlined text-[16px] text-primary">local_fire_department</span>
                </div>
                <div className="text-2xl font-bold font-mono text-on-surface">
                  {telemetry.deltaV} <span className="text-xs text-primary font-normal">m/s</span>
                </div>
                <div className="text-[11px] text-[#22C55E] mt-1 font-mono">Propellant Margin +28%</div>
              </div>

              {/* Metric 4 */}
              <div className="p-4 rounded-xl bg-surface-container/40 border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between text-on-surface-variant text-xs font-mono mb-1">
                  <span>LINK QUALITY</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary">satellite_alt</span>
                </div>
                <div className="text-2xl font-bold font-mono text-on-surface">
                  {telemetry.signalStrength}%
                </div>
                <div className="text-[11px] text-secondary mt-1 font-mono">Latency 4.2ms</div>
              </div>
            </div>

            {/* Quick Action in Cockpit */}
            <div className="p-4 rounded-xl bg-surface-container-high/40 border border-primary/20 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-on-surface font-semibold">Autonomous Flight Protocol</div>
                <div className="text-[11px] text-on-surface-variant">Active dispenser locks armed</div>
              </div>
              <button
                onClick={() => onOpenDemo('Flight Telemetry Console')}
                className="px-3.5 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary text-xs font-mono font-semibold transition-all hover:scale-105 active:scale-95"
              >
                Inspect Telemetry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
