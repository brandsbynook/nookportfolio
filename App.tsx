/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import OperationalStandards from './components/OperationalStandards';
import BackgroundProcess from './components/BackgroundProcess';
import GoogleDriveExplorer from './components/GoogleDriveExplorer';
import ContactFooter from './components/ContactFooter';
import { DriveFile } from './services/googleDriveService';

export function App() {
  const [attachedDriveFile, setAttachedDriveFile] = useState<DriveFile | null>(null);

  const scrollToSection = (targetId: string) => {
    if (!targetId || targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Restricted environment safety
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  const handleAttachDriveFile = (file: DriveFile) => {
    setAttachedDriveFile(file);
    // Smoothly scroll back to the scope drafter to show the attached file
    setTimeout(() => {
      scrollToSection('approach');
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#090b0e] font-sans text-[#e6e2da] selection:bg-[#1c2430] selection:text-[#e6e2da]">
      {/* 3-Zone Clean Navbar with Drive Files shortcut */}
      <Navbar onNavClick={handleNavClick} />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero: Name, Tag, Core Statement, Education, Experience, Pipeline & Availability */}
        <Hero onScrollToWork={() => scrollToSection('work')} />

        {/* 2. Featured Work: The Vanaspati Co, nook games, nook sanctuary */}
        <FeaturedWork />

        {/* 3. Operational Standards: 4-Item Minimalist Grid */}
        <OperationalStandards />

        {/* 4. Background & Layered Pipeline: Sociology/Psychology, Experience, Turnkey Scope Brief */}
        <BackgroundProcess
          attachedDriveFile={attachedDriveFile}
          onClearAttachedFile={() => setAttachedDriveFile(null)}
          onScrollToDrive={() => scrollToSection('drive')}
        />

        {/* 5. Google Drive Integration: File Browser, Document Review & Scope Attacher */}
        <GoogleDriveExplorer
          onAttachFileToScope={handleAttachDriveFile}
          attachedFileId={attachedDriveFile?.id}
        />
      </main>

      {/* 6. Footer & Contact: Direct Mailto, Copy Email, 24h Note, Google Play Dev Link */}
      <ContactFooter />
    </div>
  );
}

export default App;
