import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import MissionStats from './components/MissionStats';
import OrbitalConsole from './components/OrbitalConsole';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMissionType, setModalMissionType] = useState('');

  const handleOpenDemo = (missionType = '') => {
    setModalMissionType(missionType);
    setModalOpen(true);
  };

  const handleCloseDemo = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main className="flex-1 pt-20">
        <Hero onOpenDemo={handleOpenDemo} />
        <MissionStats />
        <Capabilities />
        <OrbitalConsole />
        <Pricing onOpenDemo={handleOpenDemo} />
        <CallToAction onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Reservation / Flight Demo Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseDemo}
        initialMissionType={modalMissionType}
      />
    </div>
  );
}
