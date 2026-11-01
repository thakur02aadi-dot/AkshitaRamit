import React from 'react';
import { motion } from 'motion/react';
import { FloralDivider, CornerFlourish } from './Ornaments';
import { Calendar, Clock, Sparkles, Heart } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface EventDetailsProps {
  language: Language;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ language }) => {
  const t = translations[language].event;

  const details = [
    {
      label: t.cards.event.label,
      value: t.cards.event.value,
      subtext: t.cards.event.subtext,
      icon: <Sparkles className="w-5 h-5 text-[#8D5F13]" />,
    },
    {
      label: t.cards.date.label,
      value: t.cards.date.value,
      subtext: t.cards.date.subtext,
      icon: <Calendar className="w-5 h-5 text-[#8D5F13]" />,
    },
    {
      label: t.cards.day.label,
      value: t.cards.day.value,
      subtext: t.cards.day.subtext,
      icon: <Heart className="w-5 h-5 text-[#8D5F13]" />,
    },
    {
      label: t.cards.time.label,
      value: t.cards.time.value,
      subtext: t.cards.time.subtext,
      icon: <Clock className="w-5 h-5 text-[#8D5F13]" />,
    },
  ];

  return (
    <section id="event" className="relative py-20 px-4 sm:px-6 bg-[#FFFDF9] overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Header */}
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
          <p className={`mt-2 text-base sm:text-lg text-[#732230] ${language === 'hi' ? 'font-devanagari text-lg' : 'font-cormorant italic'}`}>
            {t.supportingText}
          </p>
          <FloralDivider className="my-5" />
        </motion.div>

        {/* 4 Core Event Detail Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {details.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F1] to-[#FCEEE3] border border-[#ECC880]/70 shadow-[0_8px_24px_rgba(94,25,36,0.05)] text-center flex flex-col items-center justify-between group hover:border-[#C89938] transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-[#ECC880] flex items-center justify-center shadow-sm mb-3 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div>
                <span className={`text-[11px] font-bold tracking-[0.2em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari font-extrabold text-xs' : 'font-cinzel'}`}>
                  {item.label}
                </span>
                <h3 className={`mt-1 text-lg sm:text-xl font-extrabold text-[#5E1924] tracking-wide ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
                  {item.value}
                </h3>
                <p className={`mt-1 text-xs text-[#732230]/75 ${language === 'hi' ? 'font-devanagari text-sm' : 'font-sans-clean'}`}>
                  {item.subtext}
                </p>
              </div>
              {/* Inset gold decorative frame */}
              <div className="absolute inset-1.5 border border-[#ECC880]/30 rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Detailed Timeline & Auspicious Flow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FDF4EB] border border-[#ECC880]/60 shadow-[0_12px_32px_rgba(94,25,36,0.06)] relative overflow-hidden"
        >
          <CornerFlourish position="top-left" className="absolute top-2 left-2 w-14 h-14 text-[#ECC880]/60" />
          <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-14 h-14 text-[#ECC880]/60" />

          <div className="text-center mb-8">
            <span className={`text-xs font-semibold tracking-[0.2em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari font-bold text-sm' : 'font-cinzel'}`}>
              {t.muhuratPretitle}
            </span>
            <h3 className={`mt-1 text-xl sm:text-2xl font-bold text-[#5E1924] ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
              {t.muhuratHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {t.itinerary.map((step) => (
              <div
                key={step.title}
                className="relative p-5 rounded-2xl bg-white/80 border border-[#ECC880]/40 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FAD9C5] to-[#FCEEE3] border border-[#ECC880] flex items-center justify-center text-2xl mb-3 shadow-inner">
                  {step.icon}
                </div>
                <div className={`text-xs font-bold tracking-wider text-[#8D5F13] bg-[#FDEEE4] px-3 py-1 rounded-full mb-2 ${language === 'hi' ? 'font-devanagari text-sm font-extrabold' : 'font-cinzel'}`}>
                  {step.time}
                </div>
                <h4 className={`text-base font-bold text-[#5E1924] ${language === 'hi' ? 'font-devanagari text-lg' : 'font-cinzel'}`}>
                  {step.title}
                </h4>
                <p className={`mt-2 text-xs text-[#732230]/80 leading-relaxed ${language === 'hi' ? 'font-devanagari text-sm' : 'font-sans-clean'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Attire & Notes Footer */}
          <div className="mt-8 pt-6 border-t border-[#ECC880]/40 flex flex-wrap items-center justify-around gap-4 text-center">
            <div className={`flex items-center gap-2 text-xs text-[#732230] ${language === 'hi' ? 'font-devanagari text-sm' : 'font-sans-clean'}`}>
              <span className="font-cinzel font-bold text-[#5E1924]">{t.suggestedAttireLabel}</span>
              <span>{t.suggestedAttireText}</span>
            </div>
            <div className={`flex items-center gap-2 text-xs text-[#732230] ${language === 'hi' ? 'font-devanagari text-sm' : 'font-sans-clean'}`}>
              <span className="font-cinzel font-bold text-[#5E1924]">{t.blessingsLabel}</span>
              <span>{t.blessingsText}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
