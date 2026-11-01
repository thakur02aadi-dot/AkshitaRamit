import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Sparkles } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface OriginalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const OriginalCardModal: React.FC<OriginalCardModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;
  const t = translations[language].modal;

  const cardImagePath = "/assets/aistudio/Elegant_Ring_Ceremony_Invitation_Card__1__582743ca.png";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-xl max-h-[90vh] bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] flex flex-col"
        >
          {/* Modal Header */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-[#FFF5EC] to-[#FCEEE3] border-b border-[#ECC880]/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8D5F13]" />
              <h3 className={`text-sm sm:text-base font-bold text-[#5E1924] ${language === 'hi' ? 'font-devanagari text-base' : 'font-cinzel'}`}>
                {t.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={cardImagePath}
                download="Akshita-Ramit-Ring-Ceremony-Invitation.png"
                className="p-1.5 rounded-full hover:bg-white text-[#8D5F13] transition-colors"
                title={t.downloadCard}
              >
                <Download className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white text-[#5E1924] transition-colors cursor-pointer"
                title={t.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content - The Authentic Card */}
          <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center bg-[#2B090E]/5">
            <img
              src={cardImagePath}
              alt="Akshita and Ramit Original Ring Ceremony Invitation Card"
              className="max-h-[72vh] w-auto object-contain rounded-xl shadow-lg border border-[#ECC880]/60"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Modal Footer */}
          <div className="px-5 py-3 bg-[#FFFDF9] border-t border-[#ECC880]/30 text-center">
            <p className={`text-xs text-[#8D5F13] font-semibold ${language === 'hi' ? 'font-devanagari text-sm' : 'font-cinzel'}`}>
              {t.cardSubtext}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
