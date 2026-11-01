import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GaneshaMotif, CornerFlourish, RoyalRings, CelestialBlessingMotif } from './Ornaments';
import { Calendar, MapPin, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface HeroSectionProps {
  onOpenCardModal: () => void;
  language: Language;
  isDropActive?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCardModal,
  language,
  isDropActive = false,
}) => {
  const t = translations[language].hero;
  const [imageLoaded, setImageLoaded] = useState(false);
  const isDJ = isDropActive;

  // Exact uploaded Ghibli couple illustration
  const coupleImagePath = "/assets/aistudio/couple_gibli_23609491.png";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-radial from-[#FFF5EC] via-[#FFFDF9] to-[#FBF2EA]"
    >
      {/* Background Ornate Corner Flourishes */}
      <div className="absolute inset-4 sm:inset-8 border border-[#ECC880]/30 rounded-3xl pointer-events-none">
        <CornerFlourish position="top-left" className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 text-[#D4AF37]/60" />
        <CornerFlourish position="top-right" className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 text-[#D4AF37]/60" />
        <CornerFlourish position="bottom-left" className="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 text-[#D4AF37]/60" />
        <CornerFlourish position="bottom-right" className="absolute bottom-0 right-0 w-20 sm:w-32 h-20 sm:h-32 text-[#D4AF37]/60" />
      </div>

      {/* Radiant Golden Background Glow & Beat Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-35">
        <div className={`w-[520px] h-[520px] rounded-full blur-3xl transition-all duration-700 ${
          isDJ
            ? 'bg-gradient-to-tr from-[#FBBF24]/40 via-[#EF4444]/20 to-[#ECC880]/50 scale-120 animate-pulse'
            : 'bg-gradient-to-tr from-[#FAD9C5] via-[#ECC880]/20 to-[#FDEEE4] scale-100'
        }`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Lord Ganesha Invocation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-3 sm:mb-4"
        >
          <GaneshaMotif className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_4px_10px_rgba(212,175,55,0.35)]" />
          <p className="mt-2 font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8D5F13]">
            {t.invocation}
          </p>
        </motion.div>

        {/* Cordial Invitation Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-1 mb-2"
        >
          <p className={`text-base sm:text-xl text-[#732230] font-medium tracking-wide ${language === 'hi' ? 'font-devanagari text-lg sm:text-2xl' : 'font-cormorant italic'}`}>
            {t.invitedText}
          </p>
        </motion.div>

        {/* Grand Headline: AKSHITA & RAMIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="my-3 sm:my-4"
        >
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#5E1924] tracking-[0.08em] leading-tight">
            {language === 'hi' ? 'अक्षिता' : 'AKSHITA'}{' '}
            <span className="font-script text-4xl sm:text-6xl md:text-7xl font-normal text-[#C89938] mx-1 sm:mx-2">&</span>{' '}
            {language === 'hi' ? 'रमित' : 'RAMIT'}
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#C89938]" />
            <span className={`text-sm sm:text-lg font-bold tracking-[0.25em] text-gold-deep uppercase ${language === 'hi' ? 'font-devanagari tracking-widest' : 'font-cinzel'}`}>
              {t.ceremonyTag}
            </span>
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#C89938]" />
          </div>
        </motion.div>

        {/* Subtle Divine Blessing Silhouette Motif (Showering Celestial Blessings) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-md -mb-6 relative z-10 hidden sm:block"
        >
          <CelestialBlessingMotif isMusicPlaying={true} />
        </motion.div>

        {/* Central Couple Visual (EXACT Uploaded Ghibli Couple Illustration) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="relative my-4 sm:my-6 flex flex-col items-center w-full max-w-md px-3 sm:px-0"
        >
          {/* Royal Gold Frame with Double Filigree */}
          <div className={`relative w-full p-3 sm:p-4 rounded-3xl transition-all duration-700 flex flex-col items-center ${
            isDropActive
              ? 'couple-frame-neon bg-gradient-to-b from-[#2A0633]/95 via-[#390947]/95 to-[#200427]/95 border-2 border-[#EC4899] shadow-[0_0_40px_rgba(236,72,153,0.5),0_0_80px_rgba(245,158,11,0.3)]'
              : 'bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F3] to-[#FCEEE3] border-2 border-[#ECC880]/70 shadow-[0_22px_55px_rgba(94,25,36,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset]'
          }`}>
            
            {/* Top Interlocking Rings with Sparkle */}
            <div className={`relative -mt-9 sm:-mt-10 p-2 rounded-full border shadow-md animate-float z-20 transition-colors duration-500 ${
              isDropActive ? 'bg-[#360742] border-[#EC4899]' : 'bg-[#FFFDF9] border-[#ECC880]/70'
            }`}>
              <RoyalRings className="w-16 h-12" />
            </div>

            {/* Corner Decorative Filigree in Frame */}
            <CornerFlourish position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#C89938]/60 pointer-events-none" />
            <CornerFlourish position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#C89938]/60 pointer-events-none" />
            <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#C89938]/60 pointer-events-none" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#C89938]/60 pointer-events-none" />

            {/* Couple Illustration Container (Strictly preserving original quality and 3:4 aspect ratio) */}
            <div className={`relative mt-2 w-full aspect-[1194/1600] max-w-sm rounded-2xl overflow-hidden bg-[#18232C] transition-all duration-700 group cursor-pointer ${
              isDropActive
                ? 'ring-4 ring-[#EC4899] shadow-[0_0_35px_rgba(236,72,153,0.6),0_0_70px_rgba(245,158,11,0.4)]'
                : 'border-2 border-[#D4AF37]/50 shadow-[0_12px_36px_rgba(0,0,0,0.3)]'
            }`}
                 onClick={onOpenCardModal}
                 title="Tap to view ceremony details"
            >
              {/* The EXACT Uploaded Ghibli Couple Illustration (No filters, no modifications) */}
              <img
                src={coupleImagePath}
                alt="Akshita and Ramit Ring Ceremony - Original Couple Illustration"
                className={`w-full h-full object-cover rounded-xl transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-90 scale-[1.01]'
                }`}
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />

              {/* Gentle golden sparkle ambient shimmer border on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ECC880]/0 via-[#ECC880]/15 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Emotional Quote */}
            <p className={`mt-3.5 text-sm sm:text-base text-[#732230] px-3 font-medium ${language === 'hi' ? 'font-devanagari text-base' : 'font-cormorant italic'}`}>
              {t.quote}
            </p>

            {/* Primary Action Button (Clean, prominent, single unified CTA) */}
            <div className="mt-4 w-full flex items-center justify-center px-2">
              <button
                onClick={onOpenCardModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3DE9A] to-[#B38F24] text-[#3D0C13] font-cinzel font-bold text-xs sm:text-sm tracking-[0.14em] shadow-[0_8px_22px_rgba(212,175,55,0.45)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap overflow-hidden relative group"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 animate-shimmer pointer-events-none" />
                <ImageIcon className="w-4 h-4 text-[#5E1924]" />
                <span className={language === 'hi' ? 'font-devanagari font-bold text-sm tracking-normal' : ''}>
                  {t.viewInvitationCard}
                </span>
                <Sparkles className="w-4 h-4 text-[#5E1924] opacity-80" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Date, Time & Venue Key Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-cinzel text-[#5E1924]"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C89938]" />
            <span className="font-bold">{t.date}</span>
            <span className="text-[#8D5F13]">•</span>
            <span>{t.day}</span>
          </div>
          <div className="hidden sm:inline text-[#C89938]">•</div>
          <a href="#venue" className="flex items-center gap-2 hover:underline cursor-pointer group">
            <MapPin className="w-4 h-4 text-[#C89938] group-hover:scale-110 transition-transform" />
            <span className={`font-bold ${language === 'hi' ? 'font-devanagari font-bold' : ''}`}>{t.venue}</span>
            <span className="text-[10px] text-[#8D5F13]">↓</span>
          </a>
        </motion.div>

        {/* Scroll Affordance Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 flex flex-col items-center"
        >
          <a
            href="#couple"
            aria-label="Scroll to couple section"
            className="group flex flex-col items-center gap-1.5 text-xs font-cinzel tracking-widest text-[#8D5F13] hover:text-[#5E1924] transition-colors"
          >
            <span className={language === 'hi' ? 'font-devanagari font-bold text-sm' : ''}>
              {t.discoverMore}
            </span>
            <div className="w-5 h-8 rounded-full border border-[#C89938]/60 p-1 flex justify-center">
              <div className="w-1.5 h-2 rounded-full bg-[#C89938] animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
