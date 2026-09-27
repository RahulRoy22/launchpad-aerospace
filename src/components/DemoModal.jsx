import React, { useState } from 'react';

export default function DemoModal({ isOpen, onClose, initialMissionType }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    orbit: 'LEO (Low Earth Orbit)',
    window: 'Q3 2026',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTicketId(`LP-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  const handleReset = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-lg rounded-2xl bg-surface-container-low border border-primary/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 lg:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!success ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Reserve Launch Corridor
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {initialMissionType || 'LaunchPad OS.2 Flight Operations'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-on-surface-variant mb-1">
                    Flight Lead / Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Commander Shepard"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface focus:border-primary focus:outline-none text-sm font-body-md"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-on-surface-variant mb-1">
                    Aerospace Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Orbital Dynamics Inc"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface focus:border-primary focus:outline-none text-sm font-body-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-on-surface-variant mb-1">
                  Work / Agency Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="flight-ops@agency.space"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface focus:border-primary focus:outline-none text-sm font-body-md"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-on-surface-variant mb-1">
                    Target Orbit
                  </label>
                  <select
                    value={formData.orbit}
                    onChange={(e) => setFormData({ ...formData, orbit: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface focus:border-primary focus:outline-none text-sm font-body-md"
                  >
                    <option>LEO (Low Earth Orbit)</option>
                    <option>SSO (Sun-Synchronous)</option>
                    <option>MEO (Medium Earth Orbit)</option>
                    <option>GEO (Geostationary Transfer)</option>
                    <option>Cislunar / Lunar Orbit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-on-surface-variant mb-1">
                    Launch Window
                  </label>
                  <select
                    value={formData.window}
                    onChange={(e) => setFormData({ ...formData, window: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface focus:border-primary focus:outline-none text-sm font-body-md"
                  >
                    <option>Q3 2026 (Priority)</option>
                    <option>Q4 2026</option>
                    <option>Q1 2027</option>
                    <option>Q2 2027+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-on-surface-variant mb-1">
                  Payload Manifest Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Payload mass, cubesat dispenser dimensions, RF downlink specs..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface focus:border-primary focus:outline-none text-sm font-body-md resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl font-label-md text-label-md font-semibold text-on-primary bg-gradient-to-r from-primary-container via-tertiary-container to-primary-container hover:brightness-110 shadow-[0_0_25px_rgba(183,109,255,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                      <span>Validating Telemetry Corridor...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>Submit Flight Manifest Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/15 border-2 border-[#22C55E]/40 mx-auto flex items-center justify-center text-[#22C55E]">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Flight Corridor Reserved!
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
              Your mission request has been logged into the LaunchPad avionics scheduling engine. A flight telemetry coordinator will contact you within 2 hours.
            </p>
            <div className="p-3.5 rounded-xl bg-surface-container border border-primary/30 inline-block font-mono text-xs">
              <span className="text-on-surface-variant">FLIGHT_SLOT_REF: </span>
              <span className="text-primary font-bold">{ticketId}</span>
            </div>
            <div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-sm font-semibold transition-colors"
              >
                Return to Mission Control
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
