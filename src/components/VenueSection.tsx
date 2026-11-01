import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FloralDivider, CornerFlourish } from './Ornaments';
import { MapPin, Navigation, Copy, Check, Car, Compass } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface VenueSectionProps {
  language: Language;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ language }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[language].venue;

  const venueTitle = language === 'hi' ? "चौधरी फार्म हाउस, रोहटा रोड" : "CHAUDHARY FARM HOUSE, ROHTA ROAD";
  const venueAddress = language === 'hi' ? "रोहटा रोड, मेरठ, उत्तर प्रदेश" : "Rohta Road, Meerut, Uttar Pradesh, India";
  // Direct Google Maps navigation URL pointing specifically to Chaudhary Farm House, Rohta Road
  const mapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Chaudhary+Farm+House,+Rohta+Road,+Meerut";
  const mapsEmbedUrl = "https://maps.google.com/maps?q=Chaudhary+Farm+House,+Rohta+Road,+Meerut&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venueTitle}, ${venueAddress}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF9] via-[#FDF4EB] to-[#FFFDF9] overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
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

        {/* Venue Showcase Card - Dedicated to ONLY Chaudhary Farm House, Rohta Road */}
        <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F1] to-[#FCEEE3] border-2 border-[#ECC880]/70 shadow-[0_12px_32px_rgba(94,25,36,0.06)] flex flex-col justify-between"
          >
            <CornerFlourish position="top-left" className="absolute top-2 left-2 w-12 h-12 text-[#ECC880]/70 pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 text-xs font-cinzel font-bold tracking-widest text-[#8D5F13]">
                <MapPin className="w-4 h-4 text-[#C89938]" />
                <span className={language === 'hi' ? 'font-devanagari font-extrabold text-sm' : ''}>{t.tag}</span>
              </div>

              {/* Exact Venue Name in English & Hindi */}
              <h3 className={`mt-3 text-2xl sm:text-3xl font-extrabold text-[#5E1924] leading-tight ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
                {t.venueTitle}
              </h3>
              <div className="h-[2px] w-24 bg-gradient-to-r from-[#C89938] to-transparent my-4" />

              <p className={`text-base sm:text-lg font-bold text-[#3D0C13] leading-relaxed ${language === 'hi' ? 'font-devanagari font-bold' : 'font-cinzel'}`}>
                {t.addressLine1}
              </p>
              <p className={`mt-1 text-xs text-[#732230]/80 ${language === 'hi' ? 'font-devanagari text-sm' : 'font-sans-clean'}`}>
                {t.addressLine2}
              </p>

              {/* Venue Highlights */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-[#ECC880]/40 shadow-sm">
                  <Car className="w-4 h-4 text-[#8D5F13] shrink-0 mt-0.5" />
                  <div className={`text-xs text-[#732230]/90 ${language === 'hi' ? 'font-devanagari text-sm' : ''}`}>
                    <span className="font-bold text-[#5E1924]">{t.parkingTitle}</span> {t.parkingDesc}
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-[#ECC880]/40 shadow-sm">
                  <Compass className="w-4 h-4 text-[#8D5F13] shrink-0 mt-0.5" />
                  <div className={`text-xs text-[#732230]/90 ${language === 'hi' ? 'font-devanagari text-sm' : ''}`}>
                    <span className="font-bold text-[#5E1924]">{t.landmarkTitle}</span> {t.landmarkDesc}
                  </div>
                </div>
              </div>
            </div>

            {/* Single Prominent Get Directions CTA with subtle Copy option */}
            <div className="mt-8 pt-6 border-t border-[#ECC880]/40 flex flex-col gap-3">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3DE9A] to-[#B38F24] text-[#3D0C13] font-cinzel font-bold text-xs sm:text-sm tracking-[0.12em] shadow-[0_8px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 animate-shimmer pointer-events-none" />
                <Navigation className="w-4 h-4 text-[#5E1924]" />
                <span className={language === 'hi' ? 'font-devanagari text-sm font-bold tracking-normal' : ''}>
                  {t.getDirections}
                </span>
                <span className="text-[#5E1924] opacity-75">↗</span>
              </a>

              <div className="flex items-center justify-center">
                <button
                  onClick={handleCopyAddress}
                  className="py-1.5 px-3 rounded-full hover:bg-white/80 text-[#8D5F13] text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className={`text-emerald-700 font-bold ${language === 'hi' ? 'font-devanagari text-xs' : 'font-cinzel'}`}>{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8D5F13]" />
                      <span className={language === 'hi' ? 'font-devanagari text-xs' : 'font-cinzel'}>{t.copyAddress}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#ECC880]/70 shadow-[0_12px_32px_rgba(94,25,36,0.08)] bg-[#FFFDF9] min-h-[360px] flex flex-col"
          >
            {/* Map Top Header */}
            <div className="px-5 py-3 bg-[#FFF9F3] border-b border-[#ECC880]/40 flex items-center justify-between">
              <div className={`flex items-center gap-2 text-xs font-bold text-[#5E1924] ${language === 'hi' ? 'font-devanagari text-sm' : 'font-cinzel'}`}>
                <MapPin className="w-4 h-4 text-[#C89938]" />
                <span>{t.liveMapTitle}</span>
              </div>
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[11px] text-[#8D5F13] hover:underline flex items-center gap-1 font-semibold ${language === 'hi' ? 'font-devanagari text-xs' : 'font-cinzel'}`}
              >
                <span>{t.openGoogleMaps}</span>
                <span>↗</span>
              </a>
            </div>

            {/* Embedded Live Google Maps */}
            <div className="relative flex-1 w-full min-h-[320px]">
              <iframe
                title="Chaudhary Farm House Location Map"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px] grayscale-[15%] contrast-[105%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
