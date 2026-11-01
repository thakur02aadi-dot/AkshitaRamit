import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FloralDivider } from './Ornaments';
import { Calendar, Download, Share2, Check, Sparkles } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface CountdownTimerProps {
  language: Language;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ language }) => {
  // Target: 23 November 2026, 10:00 AM IST (Asia/Kolkata, UTC+05:30)
  const targetDate = new Date('2026-11-23T10:00:00+05:30').getTime();
  const t = translations[language].countdown;

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPassed: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPassed: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPassed: false,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Akshita & Ramit – The Ring Ceremony'
  )}&dates=20261123T043000Z/20261123T113000Z&details=${encodeURIComponent(
    'Cordially invited to celebrate the Ring Ceremony of Akshita Singh & Ramit Singh at Chaudhary Farm House, Dilawra, Rohta Road, Meerut.'
  )}&location=${encodeURIComponent('Chaudhary Farm House, Dilawra, Rohta Road, Meerut')}`;

  // Download .ics calendar file
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Akshita & Ramit Ring Ceremony//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Akshita & Ramit – The Ring Ceremony',
      'DESCRIPTION:Cordially invited to celebrate the Ring Ceremony of Akshita Singh and Ramit Singh at Chaudhary Farm House, Meerut.',
      'LOCATION:Chaudhary Farm House, Dilawra, Rohta Road, Meerut',
      'DTSTART:20261123T043000Z',
      'DTEND:20261123T113000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Akshita-Ramit-Ring-Ceremony.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Akshita & Ramit – The Ring Ceremony',
      text: language === 'hi'
        ? 'आप सादर आमंत्रित हैं अक्षिता सिंह एवं रमित सिंह के शुभ सगाई समारोह में - २३ नवम्बर २०२६, चौधरी फार्म हाउस, मेरठ!'
        : 'You are cordially invited to celebrate the Ring Ceremony of Akshita Singh & Ramit Singh on 23 November 2026 at Chaudhary Farm House, Meerut!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to copy link
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const timeUnits = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF9] via-[#FDF4EB] to-[#FFFDF9] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Pretitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={`text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari tracking-wider font-bold' : 'font-cinzel'}`}>
            {t.pretitle}
          </span>
          <h2 className={`mt-2 text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#5E1924] tracking-wide ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
            {t.heading}
          </h2>
          <p className={`mt-3 text-base sm:text-lg text-[#732230] max-w-2xl px-4 ${language === 'hi' ? 'font-devanagari text-lg sm:text-xl font-medium' : 'font-cormorant italic'}`}>
            {t.supportingText}
          </p>
          <p className="mt-2 text-xs sm:text-sm font-cinzel text-[#8D5F13] font-semibold tracking-wider">
            {t.eventTime}
          </p>
          <FloralDivider className="my-5" />
        </motion.div>

        {/* Dynamic Countdown Grid or Celebration Message */}
        {timeLeft.isPassed ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#ECC880] shadow-lg max-w-lg mx-auto"
          >
            <h3 className={`text-2xl sm:text-3xl font-bold text-[#5E1924] ${language === 'hi' ? 'font-devanagari' : 'font-cinzel'}`}>
              {t.celebrationBegunTitle}
            </h3>
            <p className={`mt-2 text-base sm:text-lg text-[#732230] ${language === 'hi' ? 'font-devanagari' : 'font-cormorant'}`}>
              {t.celebrationBegunDesc}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-6 w-full max-w-2xl my-6"
          >
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FFF7EE] border border-[#ECC880]/70 shadow-[0_8px_20px_rgba(94,25,36,0.06)] flex flex-col items-center justify-center group hover:border-[#C89938] transition-colors"
              >
                {/* Top gold accent dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C89938]" />
                <span className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#5E1924] tabular-nums tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className={`mt-1 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#8D5F13] uppercase ${language === 'hi' ? 'font-devanagari tracking-wider font-extrabold text-sm' : 'font-cinzel'}`}>
                  {unit.label}
                </span>
                {/* Subtle border ring */}
                <div className="absolute inset-1 border border-[#ECC880]/30 rounded-xl pointer-events-none" />
              </div>
            ))}
          </motion.div>
        )}

        {/* Action Controls: Add to Calendar & Share */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Add to Google Calendar */}
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#3D0C13] font-cinzel text-xs font-bold tracking-wider hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-sm whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-[#3D0C13]" />
            <span className={language === 'hi' ? 'font-devanagari font-bold text-xs tracking-normal' : ''}>
              {t.addGoogleCalendar}
            </span>
          </a>

          {/* Download .ics for Apple / Outlook */}
          <button
            onClick={handleDownloadIcs}
            className="px-5 py-2.5 rounded-full bg-white border border-[#ECC880] text-[#5E1924] hover:bg-[#FFF8E7] font-cinzel text-xs font-semibold tracking-wider hover:border-[#C89938] transition-all flex items-center gap-2 cursor-pointer shadow-sm whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-[#8D5F13]" />
            <span className={language === 'hi' ? 'font-devanagari text-xs' : ''}>
              {t.downloadIcs}
            </span>
          </button>

          {/* Share Invitation */}
          <button
            onClick={handleShare}
            className="px-5 py-2.5 rounded-full bg-[#FDEEE4] hover:bg-[#FAD9C5] border border-[#ECC880]/60 text-[#5E1924] font-cinzel text-xs font-semibold tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm whitespace-nowrap"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" />
                <span className={`text-emerald-700 font-bold ${language === 'hi' ? 'font-devanagari text-xs' : ''}`}>
                  {t.linkCopied}
                </span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#8D5F13]" />
                <span className={language === 'hi' ? 'font-devanagari text-xs' : ''}>
                  {t.shareInvitation}
                </span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
