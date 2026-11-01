import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FloralDivider, CornerFlourish, GaneshaMotif } from './Ornaments';
import { Phone, MessageCircle, Copy, Check, Users } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface RSVPSectionProps {
  language: Language;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ language }) => {
  const [copiedNum, setCopiedNum] = useState<string | null>(null);
  const t = translations[language].rsvp;

  const leftFamilyEn = [
    'THAKUR MANGE RAM SINGH',
    'THAKUR SHYAME SINGH',
    'THAKUR RANA SINGH',
  ];

  const rightFamilyEn = [
    'THAKUR RAJENDER SINGH',
    'THAKUR GYANENDER SINGH',
  ];

  const leftFamilyHi = [
    'ठाकुर मांगे राम सिंह',
    'ठाकुर श्यामे सिंह',
    'ठाकुर राणा सिंह',
  ];

  const rightFamilyHi = [
    'ठाकुर राजेंद्र सिंह',
    'ठाकुर ज्ञानेंद्र सिंह',
  ];

  const leftFamily = language === 'hi' ? leftFamilyHi : leftFamilyEn;
  const rightFamily = language === 'hi' ? rightFamilyHi : rightFamilyEn;

  const contactNumbers = [
    { number: '7060526872', formatted: '+91 70605 26872' },
    { number: '9719808209', formatted: '+91 97198 08209' },
  ];

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNum(num);
    setTimeout(() => setCopiedNum(null), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    language === 'hi'
      ? "नमस्ते! अक्षिता एवं रमित को उनके शुभ सगाई समारोह पर हार्दिक बधाई! हम २३ नवम्बर २०२६ को चौधरी फार्म हाउस, मेरठ में अवश्य उपस्थित होंगे।"
      : "Namaste! Heartiest congratulations to Akshita & Ramit on their auspicious Ring Ceremony! We are delighted to attend at Chaudhary Farm House, Meerut on 23 November 2026."
  );

  return (
    <section
      id="rsvp"
      className="relative min-h-[90vh] py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF9] via-[#FDF3EA] to-[#FCEEE3] flex flex-col justify-center items-center overflow-hidden border-t border-[#ECC880]/40"
    >
      {/* Background Ornate Frame */}
      <div className="absolute inset-4 sm:inset-10 border border-[#ECC880]/50 rounded-3xl pointer-events-none">
        <CornerFlourish position="top-left" className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 text-[#D4AF37]/70" />
        <CornerFlourish position="top-right" className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 text-[#D4AF37]/70" />
        <CornerFlourish position="bottom-left" className="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 text-[#D4AF37]/70" />
        <CornerFlourish position="bottom-right" className="absolute bottom-0 right-0 w-20 sm:w-32 h-20 sm:h-32 text-[#D4AF37]/70" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Subtle Ganesha & Floral Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-3"
        >
          <GaneshaMotif className="w-14 h-14 sm:w-16 sm:h-16 text-[#C89938]" />
          <span className={`mt-2 text-xs font-semibold tracking-[0.25em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari font-bold text-sm tracking-wider' : 'font-cinzel'}`}>
            {t.pretitle}
          </span>
          <h2 className={`mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#5E1924] tracking-wider ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
            {t.heading}
          </h2>
          <p className={`mt-2 text-base sm:text-xl text-[#732230] ${language === 'hi' ? 'font-devanagari text-lg sm:text-2xl' : 'font-cormorant italic'}`}>
            {t.supportingText}
          </p>
          <FloralDivider className="my-6" />
        </motion.div>

        {/* Family Members Two-Column Presentation Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full p-6 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-[#ECC880] shadow-[0_16px_40px_rgba(94,25,36,0.08)] relative my-4"
        >
          {/* Inner decorative border */}
          <div className="absolute inset-2 sm:inset-3 border border-dashed border-[#C89938]/40 rounded-2xl pointer-events-none" />

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-4 h-4 text-[#8D5F13]" />
            <span className={`text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari text-base font-extrabold' : 'font-cinzel'}`}>
              {t.familyTag}
            </span>
          </div>

          {/* Two Prominent Columns for Family Elders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center md:text-left relative">
            
            {/* Left Column */}
            <div className="flex flex-col space-y-5 md:pl-8">
              {leftFamily.map((name) => (
                <div key={name} className="flex items-center justify-center md:justify-start gap-3 group">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C89938] shrink-0 group-hover:scale-125 transition-transform" />
                  <span className={`text-base sm:text-lg md:text-xl font-extrabold text-[#5E1924] tracking-wide ${language === 'hi' ? 'font-devanagari text-lg sm:text-xl' : 'font-cinzel'}`}>
                    {name}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtle Divider on desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-[#ECC880] to-transparent" />

            {/* Right Column */}
            <div className="flex flex-col space-y-5 md:pl-8">
              {rightFamily.map((name) => (
                <div key={name} className="flex items-center justify-center md:justify-start gap-3 group">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C89938] shrink-0 group-hover:scale-125 transition-transform" />
                  <span className={`text-base sm:text-lg md:text-xl font-extrabold text-[#5E1924] tracking-wide ${language === 'hi' ? 'font-devanagari text-lg sm:text-xl' : 'font-cinzel'}`}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Contact Numbers Strip */}
          <div className="mt-12 pt-8 border-t border-[#ECC880]/60 flex flex-col items-center">
            <span className={`text-xs font-bold tracking-[0.2em] text-[#8D5F13] uppercase mb-4 ${language === 'hi' ? 'font-devanagari font-extrabold text-sm' : 'font-cinzel'}`}>
              {t.directContact}
            </span>

            {/* Large Prominent Phone Numbers */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {contactNumbers.map(({ number }) => (
                <div
                  key={number}
                  className="w-full sm:w-auto p-4 sm:px-6 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FCEEE3] border border-[#ECC880] shadow-sm flex items-center justify-between sm:justify-start gap-4 hover:border-[#B38F24] transition-all"
                >
                  <a
                    href={`tel:${number}`}
                    className="flex items-center gap-3 text-left group"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#B38F24] text-[#3D0C13] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-cinzel text-xl sm:text-2xl font-black text-[#5E1924] tracking-wider group-hover:text-[#B38F24] transition-colors tabular-nums">
                        {number}
                      </div>
                      <div className={`text-[11px] text-[#732230]/70 font-medium ${language === 'hi' ? 'font-devanagari text-xs' : 'font-sans-clean'}`}>
                        {t.tapToCall}
                      </div>
                    </div>
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(number)}
                    aria-label={`Copy contact number ${number}`}
                    className="p-2 rounded-lg bg-white border border-[#ECC880]/50 hover:bg-[#FFF8E7] text-[#8D5F13] transition-colors cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedNum === number ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp RSVP Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a
                href={`https://wa.me/917060526872?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-cinzel font-bold text-xs sm:text-sm tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span className={language === 'hi' ? 'font-devanagari font-bold text-sm tracking-normal' : ''}>{t.confirmWhatsApp1}</span>
              </a>

              <a
                href={`https://wa.me/919719808209?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rsvp-sec w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-[#ECC880] text-[#5E1924] font-cinzel font-semibold text-xs tracking-wider hover:bg-[#FFF8E7] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className={language === 'hi' ? 'font-devanagari text-xs font-semibold' : ''}>{t.confirmWhatsApp2}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Warm Personal note */}
        <p className={`mt-6 text-xs sm:text-sm text-[#732230] max-w-xl ${language === 'hi' ? 'font-devanagari text-sm' : 'font-cormorant italic'}`}>
          {t.closingBlessing}
        </p>
      </div>
    </section>
  );
};
