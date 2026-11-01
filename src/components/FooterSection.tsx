import React from 'react';
import { motion } from 'motion/react';
import { GaneshaMotif, RoyalRings } from './Ornaments';
import { ArrowUp, Share2 } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface FooterSectionProps {
  onOpenCardModal: () => void;
  language: Language;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenCardModal, language }) => {
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const shareText = language === 'hi'
      ? 'आप सादर आमंत्रित हैं अक्षिता एवं रमित के शुभ सगाई समारोह में - २३ नवम्बर २०२६, चौधरी फार्म हाउस, मेरठ!'
      : 'You are cordially invited to celebrate the Ring Ceremony of Akshita & Ramit on 23 November 2026 at Chaudhary Farm House, Meerut!';

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Akshita & Ramit – The Ring Ceremony',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // Fallback handled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'hi' ? 'निमंत्रण लिंक कॉपी हो गया!' : 'Invitation link copied to clipboard!');
    }
  };

  return (
    <footer className="relative py-20 px-4 sm:px-6 bg-[#2B090E] text-[#FFFDF9] overflow-hidden">
      {/* Background Golden Sparkle Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ECC880] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Lord Ganesha Motif in Gold */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <GaneshaMotif className="w-16 h-16 text-[#ECC880]" />
        </motion.div>

        {/* Closing Emotional Messages */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 max-w-2xl"
        >
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ECC880] tracking-wide leading-relaxed ${language === 'hi' ? 'font-devanagari text-2xl sm:text-3xl' : 'font-cinzel'}`}>
            {t.presenceMessage}
          </h3>
          <p className={`text-lg sm:text-2xl text-[#FAD9C5] font-medium ${language === 'hi' ? 'font-devanagari text-xl sm:text-2xl' : 'font-cormorant italic'}`}>
            {t.excitedMessage}
          </p>
        </motion.div>

        {/* Animated Couple Motif & Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-8 flex flex-col items-center"
        >
          <div className="p-3 rounded-full bg-[#3D0C13] border border-[#ECC880]/50 shadow-inner flex items-center gap-3">
            <span className="text-2xl">👰🏻‍♀️</span>
            <RoyalRings className="w-12 h-8" />
            <span className="text-2xl">🤵🏻‍♂️</span>
          </div>

          {/* Golden Flourish Divider */}
          <div className="flex items-center gap-2 my-4 text-[#ECC880]">
            <span className="h-[1px] w-16 bg-[#ECC880]/50" />
            <span className="text-xs">✦</span>
            <span className="h-[1px] w-16 bg-[#ECC880]/50" />
          </div>

          {/* With Love Signature */}
          <div className="space-y-1">
            <p className={`text-sm text-[#ECC880]/80 tracking-widest uppercase ${language === 'hi' ? 'font-devanagari text-base font-bold' : 'font-cormorant italic'}`}>
              {t.withLove}
            </p>
            <h4 className={`text-2xl sm:text-3xl font-black text-gold-foil tracking-widest ${language === 'hi' ? 'font-devanagari text-3xl font-extrabold' : 'font-cinzel'}`}>
              {t.coupleSignature}
            </h4>
          </div>
        </motion.div>

        {/* Footer Navigation & Actions */}
        <div className="mt-8 pt-8 border-t border-[#ECC880]/20 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-cinzel text-[#FAD9C5]/80">
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCardModal}
              className={`hover:text-[#ECC880] transition-colors cursor-pointer ${language === 'hi' ? 'font-devanagari text-sm font-semibold' : ''}`}
            >
              {t.originalCard}
            </button>
            <span>•</span>
            <button
              onClick={handleShare}
              className={`flex items-center gap-1 hover:text-[#ECC880] transition-colors cursor-pointer ${language === 'hi' ? 'font-devanagari text-sm font-semibold' : ''}`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{t.share}</span>
            </button>
          </div>

          <p className={`text-[11px] text-[#FAD9C5]/60 ${language === 'hi' ? 'font-devanagari text-xs' : 'font-sans-clean'}`}>
            {t.dateVenue}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#3D0C13] border border-[#ECC880]/40 text-[#ECC880] hover:bg-[#5E1924] transition-all cursor-pointer shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className={language === 'hi' ? 'font-devanagari text-xs' : ''}>{t.backToTop}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
