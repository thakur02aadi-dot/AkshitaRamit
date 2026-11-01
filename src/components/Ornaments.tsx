import React from 'react';

/**
 * Ornate Lord Ganesha Vector Motif
 */
export const GaneshaMotif: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Lord Shree Ganesha"
  >
    {/* Golden Aura / Halo */}
    <circle cx="80" cy="76" r="68" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="80" cy="76" r="60" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4" />
    
    {/* Ray Petals */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <line
        key={deg}
        x1="80"
        y1="12"
        x2="80"
        y2="20"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform={`rotate(${deg} 80 76)`}
      />
    ))}

    {/* Mukut / Crown */}
    <path
      d="M62 46 L80 18 L98 46 L88 48 L80 32 L72 48 Z"
      fill="url(#goldGrad)"
      stroke="#8D5F13"
      strokeWidth="0.8"
    />
    <circle cx="80" cy="22" r="3.5" fill="#B32638" />
    <circle cx="80" cy="36" r="2.5" fill="#E8CD78" />

    {/* Ears */}
    {/* Left Ear */}
    <path
      d="M58 56 C40 56 32 70 38 88 C42 98 52 98 56 94"
      stroke="url(#goldGrad)"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Right Ear */}
    <path
      d="M102 56 C120 56 128 70 122 88 C118 98 108 98 104 94"
      stroke="url(#goldGrad)"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Head Contour & Trunk */}
    <path
      d="M64 56 C70 52 90 52 96 56 C102 62 102 76 96 82 C90 88 88 98 90 108 C91 114 98 118 104 114 C108 112 110 106 108 102"
      stroke="url(#goldGrad)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Trishul / Tilak on forehead */}
    <path d="M80 50 L80 64" stroke="#B32638" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M75 54 C75 60 78 64 80 64 C82 64 85 60 85 54" stroke="#C89938" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="80" cy="68" r="2" fill="#B32638" />

    {/* Eyes */}
    <ellipse cx="68" cy="64" rx="2.5" ry="1.5" fill="#5E1924" />
    <ellipse cx="92" cy="64" rx="2.5" ry="1.5" fill="#5E1924" />

    {/* Modak on trunk */}
    <circle cx="108" cy="100" r="4.5" fill="url(#goldGrad)" stroke="#8D5F13" strokeWidth="1" />

    {/* Lotus Base */}
    <path
      d="M50 134 C65 124 95 124 110 134 C95 142 65 142 50 134 Z"
      fill="#FAD9C5"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
    />
    <path
      d="M38 136 C52 130 68 132 80 138 C92 132 108 130 122 136"
      stroke="#B32638"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <defs>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ECC880" />
        <stop offset="0.45" stopColor="#C89938" />
        <stop offset="0.75" stopColor="#AA7B25" />
        <stop offset="1" stopColor="#ECC880" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Royal Corner Flourish
 */
export const CornerFlourish: React.FC<{ className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  className = "w-24 h-24 text-[#C89938]",
  position = 'top-left',
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scaleX(-1)';
      case 'bottom-left': return 'scaleY(-1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: getTransform() }}
      aria-hidden="true"
    >
      <path
        d="M6 94 V24 C6 14 14 6 24 6 H94"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 94 V28 C12 19 19 12 28 12 H94"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />
      <circle cx="6" cy="6" r="3.5" fill="currentColor" />
      <path
        d="M16 45 C16 30 30 16 45 16 C38 24 38 38 45 45 C38 38 24 38 16 45 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="32" cy="32" r="3" fill="#B32638" />
      <circle cx="48" cy="20" r="2" fill="currentColor" />
      <circle cx="20" cy="48" r="2" fill="currentColor" />
    </svg>
  );
};

/**
 * Royal Ring Ceremony Interlocking Rings Vector
 */
export const RoyalRings: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Interlocking Engagement Rings"
  >
    {/* Left Ring (Groom's Classic Gold Band) */}
    <ellipse
      cx="46"
      cy="46"
      rx="24"
      ry="24"
      stroke="url(#ringGold)"
      strokeWidth="5.5"
      fill="none"
    />
    <ellipse
      cx="46"
      cy="46"
      rx="21.5"
      ry="21.5"
      stroke="#FFFDF9"
      strokeWidth="1"
      opacity="0.6"
      fill="none"
    />

    {/* Right Ring (Bride's Diamond Solitaire Ring) */}
    <ellipse
      cx="74"
      cy="46"
      rx="24"
      ry="24"
      stroke="url(#ringGold2)"
      strokeWidth="5"
      fill="none"
    />

    {/* Sparkling Diamond Solitaire */}
    <path
      d="M74 15 L66 23 L74 31 L82 23 Z"
      fill="#E0F2FE"
      stroke="#38BDF8"
      strokeWidth="1"
    />
    <path
      d="M74 15 L74 31 M66 23 L82 23"
      stroke="#FFFFFF"
      strokeWidth="1"
    />
    {/* Diamond Sparkle Glint */}
    <circle cx="74" cy="23" r="2" fill="#FFFFFF" />
    <line x1="74" y1="9" x2="74" y2="13" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="84" y1="17" x2="81" y2="20" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="64" y1="17" x2="67" y2="20" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />

    <defs>
      <linearGradient id="ringGold" x1="20" y1="20" x2="70" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE68A" />
        <stop offset="0.5" stopColor="#D97706" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="ringGold2" x1="50" y1="20" x2="100" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEF3C7" />
        <stop offset="0.4" stopColor="#F59E0B" />
        <stop offset="0.8" stopColor="#B45309" />
        <stop offset="1" stopColor="#FDE68A" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Royal Floral Divider
 */
export const FloralDivider: React.FC<{ className?: string }> = ({ className = "w-full max-w-md mx-auto my-6" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C89938]/60 to-[#C89938]" />
    <div className="flex items-center gap-1.5 text-[#C89938]">
      <span className="text-[10px]">✦</span>
      <span className="text-base">❖</span>
      <span className="text-[10px]">✦</span>
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C89938]/60 to-[#C89938]" />
  </div>
);

/**
 * Celestial Divine Blessings (Devtas / Pushpa Vrishti) Motif
 * Traditional Indian sacred art motif depicting celestial blessings from the heavens
 */
export const CelestialBlessingMotif: React.FC<{ className?: string; isMusicPlaying?: boolean }> = ({
  className = "w-full h-32",
  isMusicPlaying = false,
}) => (
  <svg
    viewBox="0 0 600 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} pointer-events-none transition-opacity duration-1000 ${isMusicPlaying ? 'opacity-85' : 'opacity-40'}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="celestialGold" x1="0" y1="0" x2="600" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ECC880" stopOpacity="0.8" />
        <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.95" />
        <stop offset="1" stopColor="#AA7B25" stopOpacity="0.75" />
      </linearGradient>
      <radialGradient id="divineAura" cx="50%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#ECC880" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Center Divine Rays */}
    <ellipse cx="300" cy="30" rx="140" ry="30" fill="url(#divineAura)" />
    <path d="M300 10 L220 80 M300 10 L260 90 M300 10 L300 95 M300 10 L340 90 M300 10 L380 80" stroke="url(#celestialGold)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

    {/* Left Celestial Being (Devta in traditional cloud silhouette) */}
    <g transform="translate(100, 15) scale(0.75)">
      {/* Cloud Base */}
      <path d="M10 60 C5 45 35 30 55 45 C65 25 105 25 115 45 C135 35 155 55 145 70 C145 75 25 75 10 60 Z" fill="#FFFDF9" opacity="0.85" stroke="url(#celestialGold)" strokeWidth="1" />
      {/* Devta Silhouette in Golden Aura */}
      <circle cx="85" cy="20" r="12" fill="#D4AF37" opacity="0.8" />
      {/* Crown / Mukut */}
      <path d="M78 12 L85 2 L92 12 Z" fill="#AA7B25" />
      {/* Auspicious Posture & Hands Showering Petals */}
      <path d="M72 32 C72 26 98 26 98 32 L92 52 H78 Z" fill="#C89938" opacity="0.8" />
      <path d="M92 34 Q108 42 118 48" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M78 34 Q62 42 52 48" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      {/* Falling Flower Petals from Hands */}
      <circle cx="124" cy="56" r="3" fill="#F472B6" />
      <circle cx="132" cy="68" r="2.5" fill="#FBBF24" />
      <circle cx="46" cy="56" r="3" fill="#F472B6" />
      <circle cx="38" cy="68" r="2.5" fill="#FBBF24" />
    </g>

    {/* Center Sacred Kalash / Lotus Blessing Crest */}
    <g transform="translate(280, 20)">
      <circle cx="20" cy="20" r="18" fill="url(#celestialGold)" opacity="0.2" />
      {/* Sacred Lotus */}
      <path d="M20 8 C14 18 10 24 6 26 C14 26 18 20 20 8 Z" fill="url(#celestialGold)" />
      <path d="M20 8 C26 18 30 24 34 26 C26 26 22 20 20 8 Z" fill="url(#celestialGold)" />
      <path d="M20 5 C16 16 17 26 20 28 C23 26 24 16 20 5 Z" fill="#D4AF37" />
    </g>

    {/* Right Celestial Being (Devta in traditional cloud silhouette) */}
    <g transform="translate(420, 15) scale(0.75)">
      {/* Cloud Base */}
      <path d="M10 60 C5 45 35 30 55 45 C65 25 105 25 115 45 C135 35 155 55 145 70 C145 75 25 75 10 60 Z" fill="#FFFDF9" opacity="0.85" stroke="url(#celestialGold)" strokeWidth="1" />
      {/* Devta Silhouette in Golden Aura */}
      <circle cx="85" cy="20" r="12" fill="#D4AF37" opacity="0.8" />
      {/* Crown / Mukut */}
      <path d="M78 12 L85 2 L92 12 Z" fill="#AA7B25" />
      {/* Auspicious Posture & Hands Showering Petals */}
      <path d="M72 32 C72 26 98 26 98 32 L92 52 H78 Z" fill="#C89938" opacity="0.8" />
      <path d="M78 34 Q62 42 52 48" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M92 34 Q108 42 118 48" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      {/* Falling Flower Petals from Hands */}
      <circle cx="46" cy="56" r="3" fill="#F472B6" />
      <circle cx="38" cy="68" r="2.5" fill="#FBBF24" />
      <circle cx="124" cy="56" r="3" fill="#F472B6" />
      <circle cx="132" cy="68" r="2.5" fill="#FBBF24" />
    </g>
  </svg>
);
