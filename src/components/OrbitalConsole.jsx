import React, { useState, useEffect } from 'react';

export default function OrbitalConsole() {
  const missions = [
    {
      id: 'lp-star-92',
      name: 'Transporter-14 Rideshare',
      orbit: 'SSO (Sun-Synchronous)',
      altitude: '525 km',
      apogee: '532 km',
      perigee: '518 km',
      velocity: '7.60 km/s',
      payload: '18 Smallsats (340 kg)',
      status: 'In Insertion Coast',
      color: '#a855f7',
    },
    {
      id: 'lp-artemis-gw',
      name: 'Cislunar Relay Node-3',
      orbit: 'NRHO (Near-Rectilinear Halo)',
      altitude: '3,800 km',
      apogee: '70,000 km',
      perigee: '3,200 km',
      velocity: '1.42 km/s',
      payload: 'Deep-Space Transceiver',
      status: 'Trans-Lunar Burn Locked',
      color: '#38bdf8',
    },
    {
      id: 'lp-earth-obs',
      name: 'Hyperspectral Constellation 2B',
      orbit: 'Polar LEO (97.4°)',
      altitude: '480 km',
      apogee: '485 km',
      perigee: '475 km',
      velocity: '7.63 km/s',
      payload: 'SAR & Optical Array',
      status: 'Telemetry Nominal',
      color: '#22c55e',
    },
  ];

  const [activeMission, setActiveMission] = useState(missions[0]);
  const [thrusterActive, setThrusterActive] = useState(false);
  const [logs, setLogs] = useState([
    '[10:44:12] GPS_LOCK: 12 satellites tracked, HDOP 0.78',
    '[10:44:18] STAR_TRACKER::Boresight error < 0.002 deg',
    '[10:44:25] REACTION_WHEEL_RPM: [X: 2400, Y: -1800, Z: 620]',
    '[10:44:31] AUTONOMOUS_PROPULSION_BUS: Nominal bus voltage 28.4V',
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomLogs = [
        `[${timeStr}] ISL_OPTICAL_MESH: Handover to node #09 complete`,
        `[${timeStr}] THERMAL_SHIELD: Sun-facing temp 112°C, Radiator -42°C`,
        `[${timeStr}] TELEMETRY_STREAM: 100Hz packet hash verified [SHA-256]`,
        `[${timeStr}] ATTITUDE_CONTROL: Quaternion drift within 0.0001 rad`,
        `[${timeStr}] GROUND_STATION_SVALBARD: Acquisition of Signal (AOS)`,
      ];
      const nextLog = randomLogs[Math.floor(Math.random() * randomLogs.length)];
      setLogs((prev) => [nextLog, ...prev.slice(0, 4)]);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const triggerThruster = () => {
    setThrusterActive(true);
    const timeStr = new Date().toTimeString().split(' ')[0];
    setLogs((prev) => [
      `[${timeStr}] >>> RCS_PULSE_FIRED: 40ms micro-burst, ΔV +0.012 m/s <<<`,
      ...prev.slice(0, 4),
    ]);
    setTimeout(() => setThrusterActive(false), 800);
  };

  return (
    <section id="telemetry" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold tracking-widest uppercase mb-3">
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>FLIGHT OPERATIONS CONSOLE</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
            Real-time orbital tracking &amp; telemetry diagnostics
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-xl border border-outline-variant/30">
          {missions.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveMission(m)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeMission.id === m.id
                  ? 'bg-primary text-on-primary shadow-[0_0_12px_rgba(183,109,255,0.4)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {m.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Console Box */}
      <div className="rounded-2xl bg-surface-container-lowest border border-primary/30 shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Terminal Header */}
        <div className="px-6 py-4 bg-surface-container-low/90 border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold">
              MISSION_ID: {activeMission.id.toUpperCase()}
            </span>
            <span className="text-sm font-semibold text-on-surface">{activeMission.name}</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[#22C55E]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping"></span>
              {activeMission.status}
            </span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Orbital Geometry */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-on-surface-variant uppercase tracking-wider font-semibold">
              Orbital Parameters
            </h4>
            <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Trajectory Profile:</span>
                <span className="text-on-surface font-semibold">{activeMission.orbit}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Nominal Altitude:</span>
                <span className="text-secondary font-bold">{activeMission.altitude}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Apogee / Perigee:</span>
                <span className="text-on-surface">{activeMission.apogee} / {activeMission.perigee}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span className="text-on-surface-variant">Instantaneous Velocity:</span>
                <span className="text-primary font-bold">{activeMission.velocity}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-on-surface-variant">Payload Manifest:</span>
                <span className="text-on-surface font-medium">{activeMission.payload}</span>
              </div>
            </div>

            {/* Thruster Test Control */}
            <div className="p-4 rounded-xl bg-surface-container-low/30 border border-outline-variant/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-on-surface font-semibold">RCS Micro-Propulsion Test</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${thrusterActive ? 'bg-[#22C55E]/20 text-[#22C55E]' : 'bg-surface-container text-on-surface-variant'}`}>
                  {thrusterActive ? 'IGNITING...' : 'READY'}
                </span>
              </div>
              <button
                onClick={triggerThruster}
                disabled={thrusterActive}
                className={`w-full py-2.5 rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  thrusterActive
                    ? 'bg-[#22C55E] text-black shadow-[0_0_20px_#22c55e]'
                    : 'bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                <span>Send RCS Delta-V Command</span>
              </button>
            </div>
          </div>

          {/* Column 2: Visual Attitude Indicator */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-container-low/40 border border-outline-variant/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-secondary/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative w-44 h-44 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center p-4 mb-4 animate-[spin_40s_linear_infinite]">
              <div className="w-36 h-36 rounded-full border border-secondary/50 flex items-center justify-center">
                <div className={`w-28 h-28 rounded-full bg-gradient-to-tr from-primary-container/30 to-secondary/30 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 ${thrusterActive ? 'scale-110 shadow-[0_0_30px_#38bdf8]' : ''}`}>
                  <span className="material-symbols-outlined text-4xl text-primary">satellite_alt</span>
                </div>
              </div>
            </div>

            <div className="font-mono text-xs text-on-surface font-semibold">ATTITUDE: PITCH 0.04° | YAW -0.01°</div>
            <div className="text-[11px] text-on-surface-variant font-mono mt-1">Ground Station: Kangerlussuaq, Greenland (AOS)</div>
          </div>

          {/* Column 3: Live Telemetry Event Logs */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-mono text-on-surface-variant uppercase tracking-wider font-semibold">
                  Live Event Stream
                </h4>
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              </div>
              <div className="h-56 p-4 rounded-xl bg-black/60 border border-outline-variant/30 font-mono text-[11px] text-on-surface-variant space-y-2.5 overflow-hidden flex flex-col justify-start">
                {logs.map((log, index) => (
                  <div
                    key={index}
                    className={`leading-relaxed ${
                      index === 0 ? 'text-secondary font-semibold animate-pulse' : 'opacity-85'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant pt-2 border-t border-outline-variant/20">
              <span>ITAR COMPLIANCE: ECCN 9A515</span>
              <span className="text-[#22C55E]">ALL_SENSORS_NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
