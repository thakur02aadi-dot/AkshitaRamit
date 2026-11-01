import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Languages } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface NavbarProps {
  onOpenCardModal: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCardModal,
  language,
  onToggleLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(94,25,36,0.08)] border-b border-[#ECC880]/40 py-2.5 sm:py-3'
          : 'bg-[#FFFDF9]/85 backdrop-blur-sm border-b border-[#ECC880]/20 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          className="font-cinzel text-base sm:text-lg md:text-xl font-bold tracking-[0.14em] text-[#5E1924] hover:text-[#8D5F13] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <span className="text-gold-foil">{t.brand}</span>
        </a>

        {/* Zone 2: Clean Section Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-wider text-[#732230] ${language === 'hi' ? 'font-devanagari text-sm font-bold' : 'font-cinzel'}`}>
          <a href="#couple" className="hover:text-[#B38F24] transition-colors whitespace-nowrap shrink-0">
            {t.couple}
          </a>
          <a href="#countdown" className="hover:text-[#B38F24] transition-colors whitespace-nowrap shrink-0">
            {t.countdown}
          </a>
          <a href="#event" className="hover:text-[#B38F24] transition-colors whitespace-nowrap shrink-0">
            {t.ceremony}
          </a>
          <a href="#venue" className="hover:text-[#B38F24] transition-colors whitespace-nowrap shrink-0">
            {t.venue}
          </a>
          <a href="#rsvp" className="hover:text-[#B38F24] transition-colors whitespace-nowrap shrink-0">
            {t.rsvp}
          </a>
        </nav>

        {/* Zone 3: Language Toggle & Original Card CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher Button */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C89938]/60 bg-gradient-to-r from-[#FFF5EC] to-[#FCEEE3] text-[#5E1924] text-xs font-bold tracking-wider hover:border-[#8D5F13] hover:shadow-xs transition-all cursor-pointer whitespace-nowrap shrink-0"
            title={language === 'en' ? 'Switch to Hindi (हिन्दी में देखें)' : 'Switch to English'}
          >
            <Languages className="w-3.5 h-3.5 text-[#B38F24]" />
            <span className={language === 'en' ? 'font-devanagari text-xs font-bold' : 'font-cinzel'}>
              {language === 'en' ? 'हिन्दी' : 'English'}
            </span>
          </button>

          {/* View Original Card Button */}
          <button
            onClick={onOpenCardModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C89938]/50 bg-[#FDEEE4]/80 hover:bg-[#FAD9C5] text-[#5E1924] text-xs font-cinzel font-semibold tracking-wider transition-all duration-200 shadow-xs cursor-pointer whitespace-nowrap shrink-0"
            title="View original invitation card image"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#8D5F13]" />
            <span className="hidden sm:inline">{t.originalCard}</span>
            <span className="sm:hidden">{t.originalCardShort}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
