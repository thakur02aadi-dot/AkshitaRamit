import React from 'react';
import { motion } from 'motion/react';
import { RoyalRings, FloralDivider, CornerFlourish } from './Ornaments';
import { Sparkles } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface CoupleSectionProps {
  language: Language;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ language }) => {
  const t = translations[language].couple;

  return (
    <section id="couple" className="relative py-20 px-4 sm:px-6 bg-[#FFFDF9] overflow-hidden">
      {/* Decorative floral aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FDEEE4] via-[#FFF5EC] to-transparent rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className={`text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari font-bold tracking-wider' : 'font-cinzel'}`}>
            {t.pretitle}
          </span>
          <h2 className={`mt-2 text-2xl sm:text-4xl md:text-5xl font-bold text-[#5E1924] tracking-wide ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
            {t.heading}
          </h2>
          <FloralDivider className="my-5" />
        </motion.div>

        {/* Bride and Groom Royal Cards Grid */}
        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-11 gap-6 md:gap-4 items-center">
          
          {/* Left Column: The Bride (Akshita Singh) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F3] to-[#FCEEE3] border border-[#ECC880]/60 shadow-[0_12px_30px_rgba(94,25,36,0.06)] text-center overflow-hidden"
          >
            {/* Corner Filigree */}
            <CornerFlourish position="top-left" className="absolute top-2 left-2 w-12 h-12 text-[#ECC880]/70" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-12 h-12 text-[#ECC880]/70" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Bride Icon Crest */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FAD9C5] to-[#FCEEE3] border border-[#ECC880] flex items-center justify-center shadow-inner mb-4">
                <span className="text-2xl">👰🏻‍♀️</span>
              </div>

              <span className={`text-xs font-semibold tracking-[0.2em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari font-bold text-sm' : 'font-cinzel'}`}>
                {t.brideLabel}
              </span>

              <h3 className={`mt-1 text-2xl sm:text-3xl font-extrabold text-[#5E1924] tracking-wide ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
                {t.brideName}
              </h3>

              <div className="h-[1px] w-16 bg-[#C89938]/60 my-3" />

              <p className={`text-base sm:text-lg text-[#732230] ${language === 'hi' ? 'font-devanagari' : 'font-cormorant italic'}`}>
                {t.brideDaughterOf}
              </p>
              <p className={`text-sm sm:text-base font-bold text-[#3D0C13] mt-0.5 ${language === 'hi' ? 'font-devanagari text-base sm:text-lg' : 'font-cinzel'}`}>
                {t.brideParents}
              </p>

              <div className={`mt-5 p-3 rounded-xl bg-white/70 border border-[#ECC880]/40 w-full text-xs text-[#732230]/85 leading-relaxed ${language === 'hi' ? 'font-devanagari text-sm' : 'font-sans-clean'}`}>
                {t.brideDesc}
              </div>
            </div>
          </motion.div>

          {/* Center Column: Interlocking Rings & Heart Motif */}
          <div className="md:col-span-1 flex flex-col items-center justify-center py-2 md:py-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#FFFDF9] flex items-center justify-center">
                  <span className="font-script text-3xl font-bold text-[#C89938] leading-none">&</span>
                </div>
              </div>
              <div className="mt-3">
                <RoyalRings className="w-14 h-10" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Groom (Ramit Singh) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F3] to-[#FCEEE3] border border-[#ECC880]/60 shadow-[0_12px_30px_rgba(94,25,36,0.06)] text-center overflow-hidden"
          >
            {/* Corner Filigree */}
            <CornerFlourish position="top-right" className="absolute top-2 right-2 w-12 h-12 text-[#ECC880]/70" />
            <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-12 h-12 text-[#ECC880]/70" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Groom Icon Crest */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FAD9C5] to-[#FCEEE3] border border-[#ECC880] flex items-center justify-center shadow-inner mb-4">
                <span className="text-2xl">🤵🏻‍♂️</span>
              </div>

              <span className={`text-xs font-semibold tracking-[0.2em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari font-bold text-sm' : 'font-cinzel'}`}>
                {t.groomLabel}
              </span>

              <h3 className={`mt-1 text-2xl sm:text-3xl font-extrabold text-[#5E1924] tracking-wide ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
                {t.groomName}
              </h3>

              <div className="h-[1px] w-16 bg-[#C89938]/60 my-3" />

              <p className={`text-base sm:text-lg text-[#732230] ${language === 'hi' ? 'font-devanagari' : 'font-cormorant italic'}`}>
                {t.groomSonOf}
              </p>
              <p className={`text-sm sm:text-base font-bold text-[#3D0C13] mt-0.5 ${language === 'hi' ? 'font-devanagari text-base sm:text-lg' : 'font-cinzel'}`}>
                {t.groomParents}
              </p>

              <div className={`mt-5 p-3 rounded-xl bg-white/70 border border-[#ECC880]/40 w-full text-xs text-[#732230]/85 leading-relaxed ${language === 'hi' ? 'font-devanagari text-sm' : 'font-sans-clean'}`}>
                {t.groomDesc}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sacred Quote / Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center max-w-2xl px-4"
        >
          <p className={`text-lg sm:text-xl text-[#5E1924] font-medium leading-relaxed ${language === 'hi' ? 'font-devanagari' : 'font-cormorant italic'}`}>
            {t.bottomBlessing}
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-[#C89938]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className={`text-xs tracking-widest text-[#8D5F13] font-bold ${language === 'hi' ? 'font-devanagari text-sm' : 'font-cinzel'}`}>
              {language === 'hi' ? 'अक्षिता एवं रमित' : 'AKSHITA & RAMIT'}
            </span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
