/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { InvitationEnvelope } from './components/InvitationEnvelope';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { CountdownTimer } from './components/CountdownTimer';
import { EventDetails } from './components/EventDetails';
import { VenueSection } from './components/VenueSection';
import { RSVPSection } from './components/RSVPSection';
import { FooterSection } from './components/FooterSection';
import { FloatingPetals } from './components/FloatingPetals';
import { OriginalCardModal } from './components/OriginalCardModal';
import { Language } from './utils/translations';
import { weddingAudio } from './utils/audioPlayer';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isDropActive, setIsDropActive] = useState<boolean>(weddingAudio.getIsDropActive());
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((state) => {
      setIsDropActive(state.isDropActive);
    });
    return () => unsubscribe();
  }, []);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };

  const handleMusicStarted = () => {
    // Music starts playing in background
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className={`relative min-h-screen selection:bg-[#B32638] selection:text-white transition-all duration-700 ${
      language === 'hi' ? 'font-devanagari' : 'font-sans-clean'
    } ${isDropActive ? 'celebration-theme celebration-mode' : 'bg-[#FFFDF9] text-[#4A151B]'}`}>
      {/* Falling Rose Petals, Jasmine Flowers, Stage Spotlights & Confetti Poppers */}
      <FloatingPetals />

      {/* Cinematic Invitation Envelope Opening Screen */}
      {!isEnvelopeOpen && (
        <InvitationEnvelope
          onOpen={handleEnvelopeOpen}
          onMusicStarted={handleMusicStarted}
          language={language}
          onToggleLanguage={handleToggleLanguage}
        />
      )}

      {/* Main Luxury Wedding Invitation Experience */}
      <div className={`transition-opacity duration-1000 ${isEnvelopeOpen ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar
          onOpenCardModal={() => setIsCardModalOpen(true)}
          language={language}
          onToggleLanguage={handleToggleLanguage}
        />

        <main>
          {/* SECTION 2: Hero Section with Ghibli Couple Illustration & Invitation Card CTA */}
          <HeroSection
            onOpenCardModal={() => setIsCardModalOpen(true)}
            language={language}
            isDropActive={isDropActive}
          />

          {/* SECTION 3: Couple Introduction */}
          <CoupleSection language={language} />

          {/* SECTION 4: Live Dynamic Countdown Timer ("Moments Until Forever" / "शुभ घड़ी का इंतज़ार") */}
          <CountdownTimer language={language} />

          {/* SECTION 5: Event Details & Itinerary */}
          <EventDetails language={language} />

          {/* SECTION 6: Venue & Directions (Dedicated ONLY to Chaudhary Farm House, Rohta Road) */}
          <VenueSection language={language} />

          {/* SECTION 7: RSVP & Direct Family Contact */}
          <RSVPSection language={language} />
        </main>

        {/* SECTION 8: Emotional Closing & Footer */}
        <FooterSection
          onOpenCardModal={() => setIsCardModalOpen(true)}
          language={language}
        />

        {/* Original Invitation Card Lightbox Modal */}
        <OriginalCardModal
          isOpen={isCardModalOpen}
          onClose={() => setIsCardModalOpen(false)}
          language={language}
        />
      </div>
    </div>
  );
}
