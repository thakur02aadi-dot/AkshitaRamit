import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GaneshaMotif, CornerFlourish } from './Ornaments';
import { Sparkles, Music, Languages } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';
import { Language, translations } from '../utils/translations';

interface InvitationEnvelopeProps {
  onOpen: () => void;
  onMusicStarted: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({
  onOpen,
  onMusicStarted,
  language,
  onToggleLanguage,
}) => {
  const [isOpenAnimationStarted, setIsOpenAnimationStarted] = useState(false);
  const t = translations[language].envelope;

  const handleOpenClick = () => {
    setIsOpenAnimationStarted(true);

    // Start divine "Vakratunda Mahakaya" mantra audio
    try {
      weddingAudio.play();
      onMusicStarted();
    } catch {
      // Audio start handled gracefully
    }

    // Allow the 3D flap and letter unfolding animation to play before transitioning to the website
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0508] bg-radial from-[#380E14] via-[#22070B] to-[#120305] px-4 py-8 overflow-hidden select-none">
      {/* Background Golden Sparkles & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#E8CD78]/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#B32638]/20 blur-3xl" />
      </div>

      {/* Top Language Toggle on Welcome Screen */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <button
          onClick={onToggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#ECC880]/50 bg-[#3D0C13]/80 hover:bg-[#5E1924] text-[#ECC880] text-xs font-semibold tracking-wider shadow-md transition-all cursor-pointer"
        >
          <Languages className="w-3.5 h-3.5 text-[#FDE68A]" />
          <span className={language === 'en' ? 'font-devanagari font-bold text-xs' : 'font-cinzel text-xs'}>
            {language === 'en' ? 'हिन्दी' : 'English'}
          </span>
        </button>
      </div>

      {/* Ornate Golden Background Floral Frame */}
      <div className="absolute inset-6 md:inset-10 border border-[#C89938]/30 rounded-2xl pointer-events-none">
        <CornerFlourish position="top-left" className="absolute top-0 left-0 w-16 md:w-28 h-16 md:h-28 text-[#ECC880]" />
        <CornerFlourish position="top-right" className="absolute top-0 right-0 w-16 md:w-28 h-16 md:h-28 text-[#ECC880]" />
        <CornerFlourish position="bottom-left" className="absolute bottom-0 left-0 w-16 md:w-28 h-16 md:h-28 text-[#ECC880]" />
        <CornerFlourish position="bottom-right" className="absolute bottom-0 right-0 w-16 md:w-28 h-16 md:h-28 text-[#ECC880]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center text-center">
        {/* Sacred Invocation & Ganesha Motif */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center mb-5"
        >
          <GaneshaMotif className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]" />
          <p className="mt-3 font-cinzel text-xs md:text-sm tracking-[0.25em] text-[#ECC880] font-bold">
            {t.invocation}
          </p>
          <p className={`mt-1 text-sm md:text-base text-[#FAD9C5]/85 ${language === 'hi' ? 'font-devanagari' : 'font-cormorant italic'}`}>
            {t.ancestorBlessing}
          </p>
        </motion.div>

        {/* 3D Interactive Royal Envelope */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md aspect-[16/11] perspective-[1200px]"
        >
          {/* Envelope Body */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#FFF9F0] via-[#FBF2E3] to-[#F5E5CE] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_0_1px_rgba(200,153,56,0.5)] flex flex-col justify-between overflow-hidden border border-[#ECC880]/60">
            
            {/* Ornate Gold Border Inner Inset */}
            <div className="absolute inset-2 md:inset-3 border border-double border-[#C89938]/40 rounded-xl pointer-events-none" />

            {/* Letter Inside sliding upward on click */}
            <motion.div
              animate={isOpenAnimationStarted ? { y: -80, scale: 1.02 } : { y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-4 rounded-lg bg-gradient-to-b from-[#FFFDF9] to-[#FDF4EB] border border-[#ECC880]/70 shadow-md p-4 flex flex-col items-center justify-center"
            >
              <div className={`text-[10px] md:text-xs tracking-[0.2em] text-[#8D5F13] font-bold ${language === 'hi' ? 'font-devanagari tracking-normal text-xs' : 'font-cinzel'}`}>
                {t.invitationType}
              </div>
              <h2 className={`mt-1 text-xl md:text-2xl font-bold text-[#5E1924] tracking-wide ${language === 'hi' ? 'font-devanagari text-2xl font-extrabold' : 'font-cinzel'}`}>
                {t.coupleNames}
              </h2>
              <div className="flex items-center gap-2 my-1 text-[#C89938]">
                <span className="h-[1px] w-6 bg-[#C89938]" />
                <span className="text-xs">✦</span>
                <span className="h-[1px] w-6 bg-[#C89938]" />
              </div>
              <p className={`text-[11px] md:text-xs text-[#8D5F13] font-semibold ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
                {t.eventDate}
              </p>
              <p className={`text-[10px] md:text-xs text-[#5E1924] font-bold mt-1 ${language === 'hi' ? 'font-devanagari text-xs' : 'font-cinzel'}`}>
                📍 {language === 'hi' ? 'चौधरी फार्म हाउस, रोहटा रोड' : 'Chaudhary Farm House, Rohta Road'}
              </p>
            </motion.div>

            {/* Envelope Bottom Flap Geometry */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: 'polygon(0% 100%, 50% 55%, 100% 100%)',
                background: 'linear-gradient(180deg, #F5E5CE 0%, #E8D3B3 100%)',
                borderTop: '1px solid rgba(200,153,56,0.3)',
              }}
            />

            {/* Left & Right Flap Shadows */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: 'polygon(0% 0%, 50% 55%, 0% 100%)',
                background: 'linear-gradient(90deg, #EDD9BD 0%, #F8EEDB 100%)',
                opacity: 0.9,
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: 'polygon(100% 0%, 50% 55%, 100% 100%)',
                background: 'linear-gradient(-90deg, #EDD9BD 0%, #F8EEDB 100%)',
                opacity: 0.9,
              }}
            />

            {/* Top Folding Flap (Animated opening on click) */}
            <motion.div
              animate={isOpenAnimationStarted ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
              className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
            >
              <div
                className="w-full h-full shadow-lg"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  background: 'linear-gradient(180deg, #FFFDF9 0%, #F3E2CA 100%)',
                  borderBottom: '1px solid rgba(200, 153, 56, 0.5)',
                }}
              />
            </motion.div>

            {/* Royal Gold Wax Seal */}
            <motion.div
              animate={isOpenAnimationStarted ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#8A1A27] via-[#B32638] to-[#D9465B] shadow-[0_6px_16px_rgba(0,0,0,0.5),0_0_0_2px_#C89938] flex flex-col items-center justify-center text-[#FFFDF9] cursor-pointer hover:scale-105 transition-transform duration-200">
                <span className="text-[9px] font-cinzel font-semibold tracking-wider text-[#ECC880]">A & R</span>
                <span className="text-xs">💍</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call-to-action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3 w-full"
        >
          <button
            onClick={handleOpenClick}
            disabled={isOpenAnimationStarted}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3DE9A] to-[#B38F24] text-[#3D0C13] font-cinzel font-bold text-sm md:text-base tracking-[0.18em] shadow-[0_10px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden cursor-pointer whitespace-nowrap"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 animate-shimmer pointer-events-none" />
            <Sparkles className="w-5 h-5 text-[#5E1924] group-hover:rotate-12 transition-transform duration-300" />
            <span className={language === 'hi' ? 'font-devanagari font-bold text-base tracking-normal' : ''}>
              {t.openBtn}
            </span>
          </button>

          <p className={`flex items-center gap-1.5 text-xs text-[#ECC880]/80 ${language === 'hi' ? 'font-devanagari text-xs' : 'font-sans-clean'}`}>
            <Music className="w-3.5 h-3.5 text-[#ECC880]" />
            <span>{t.musicHint}</span>
          </p>

          <button
            onClick={() => {
              weddingAudio.play().catch(() => {});
              onOpen();
            }}
            className={`text-xs text-[#ECC880]/70 hover:text-[#ECC880] hover:underline cursor-pointer tracking-wider transition-colors pt-1 ${language === 'hi' ? 'font-devanagari font-bold' : 'font-cinzel'}`}
          >
            {language === 'hi' ? 'सीधे आमंत्रण देखें →' : 'Enter Ceremony Directly →'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};
