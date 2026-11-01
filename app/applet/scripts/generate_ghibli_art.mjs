import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 1600px;
    overflow: hidden;
    background: #111A24;
    font-family: 'Great Vibes', cursive, 'Cinzel', serif;
  }
</style>
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,600;1,600&display=swap" rel="stylesheet">
</head>
<body>
<svg width="1200" height="1600" viewBox="0 0 1200 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Garden Gradients -->
    <linearGradient id="skyGrad" x1="600" y1="0" x2="600" y2="1600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#121D28"/>
      <stop offset="35%" stopColor="#1E3238"/>
      <stop offset="70%" stopColor="#253D32"/>
      <stop offset="100%" stopColor="#1A2822"/>
    </linearGradient>

    <!-- Warm Fairy Light Tunnel Glow -->
    <radialGradient id="tunnelGlow" cx="600" cy="580" r="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.85"/>
      <stop offset="30%" stopColor="#FDE68A" stopOpacity="0.45"/>
      <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.2"/>
      <stop offset="100%" stopColor="#D97706" stopOpacity="0"/>
    </radialGradient>

    <!-- Bokeh Light Spheres -->
    <radialGradient id="lightOrb" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95"/>
      <stop offset="40%" stopColor="#FEF08A" stopOpacity="0.8"/>
      <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.4"/>
      <stop offset="100%" stopColor="#D97706" stopOpacity="0"/>
    </radialGradient>

    <radialGradient id="bokehSoft" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#FEF9C3" stopOpacity="0.6"/>
      <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.25"/>
      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
    </radialGradient>

    <!-- Couple Attire Gradients -->
    <linearGradient id="sherwaniGrad" x1="720" y1="500" x2="720" y2="1400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#202632"/>
      <stop offset="45%" stopColor="#181D26"/>
      <stop offset="100%" stopColor="#101319"/>
    </linearGradient>

    <linearGradient id="lehengaGrad" x1="480" y1="700" x2="480" y2="1500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#FDF0D5"/>
      <stop offset="30%" stopColor="#FCE7C8"/>
      <stop offset="70%" stopColor="#F8D7B0"/>
      <stop offset="100%" stopColor="#EDBE92"/>
    </linearGradient>

    <linearGradient id="dupattaGrad" x1="450" y1="650" x2="550" y2="1200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#E5989B" stopOpacity="0.85"/>
      <stop offset="50%" stopColor="#DDB892" stopOpacity="0.75"/>
      <stop offset="100%" stopColor="#B56576" stopOpacity="0.85"/>
    </linearGradient>

    <linearGradient id="goldZari" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#FDE68A"/>
      <stop offset="50%" stopColor="#D97706"/>
      <stop offset="100%" stopColor="#B45309"/>
    </linearGradient>

    <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="15" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Base Sky & Dark Garden Background -->
  <rect width="1200" height="1600" fill="url(#skyGrad)" />

  <!-- Background Ambient Garden Pergola & Tree Canopies -->
  <ellipse cx="180" cy="450" rx="260" ry="320" fill="#14241E" opacity="0.85" />
  <ellipse cx="1020" cy="450" rx="260" ry="320" fill="#14241E" opacity="0.85" />
  <ellipse cx="600" cy="220" rx="420" ry="200" fill="#162720" opacity="0.9" />

  <!-- Wooden Garden Fence in Background -->
  <path d="M220 700 H980 V880 H220 Z" fill="#2E231C" opacity="0.45" />
  <path d="M220 730 H980" stroke="#1F1712" stroke-width="6" opacity="0.6" />
  <path d="M220 780 H980" stroke="#1F1712" stroke-width="6" opacity="0.6" />
  <path d="M220 830 H980" stroke="#1F1712" stroke-width="6" opacity="0.6" />

  <!-- Magical Fairy Light Arbor Structure (A-Frame / Gothic Arch Tunnel) -->
  <g id="fairyLightCanopy">
    <!-- Tunnel Light Center Glow -->
    <circle cx="600" cy="560" r="420" fill="url(#tunnelGlow)" />

    <!-- A-frame Wooden / Metal Beam Arch Structure -->
    <path d="M600 240 L300 680 V1100" stroke="#785B38" stroke-width="14" stroke-linecap="round" opacity="0.85" />
    <path d="M600 240 L900 680 V1100" stroke="#785B38" stroke-width="14" stroke-linecap="round" opacity="0.85" />
    <path d="M600 290 L380 660" stroke="#5E4325" stroke-width="10" stroke-linecap="round" opacity="0.7" />
    <path d="M600 290 L820 660" stroke="#5E4325" stroke-width="10" stroke-linecap="round" opacity="0.7" />
    <path d="M380 660 L820 660" stroke="#5E4325" stroke-width="8" opacity="0.6" />

    <!-- Radiating Fairy Light Canopy Strings -->
    ${Array.from({ length: 28 }).map((_, i) => {
      const startX = 600;
      const startY = 240 + (i % 4) * 15;
      const endX = 260 + i * 25;
      const endY = 650 + Math.sin(i * 0.4) * 40;
      return `<path d="M${startX} ${startY} Q ${startX + (endX - startX)*0.45} ${startY + 160} ${endX} ${endY}" stroke="rgba(254, 240, 138, 0.55)" stroke-width="2.5" fill="none" />`;
    }).join('\n')}

    <!-- Vertical Curtain Fairy Lights -->
    ${Array.from({ length: 32 }).map((_, i) => {
      const x = 240 + i * 23;
      const topY = 600 + Math.abs(x - 600) * 0.25;
      const botY = 1100;
      return `<line x1="${x}" y1="${topY}" x2="${x}" y2="${botY}" stroke="rgba(254, 240, 138, 0.4)" stroke-width="1.8" stroke-dasharray="2 18" />`;
    }).join('\n')}

    <!-- Fairy Light Golden Bulbs (Glowing dots along canopy) -->
    ${Array.from({ length: 140 }).map((_, i) => {
      const cx = 260 + Math.sin(i * 1.37) * 320 + 320;
      const cy = 260 + (i * 5.5) % 650;
      const r = 3 + (i % 3);
      return `<circle cx="${cx}" cy="${cy}" r="${r * 2.8}" fill="url(#lightOrb)" />
              <circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFFFFF" />`;
    }).join('\n')}
  </g>

  <!-- Bokeh Ambient Golden Glow Orbs in Midground -->
  ${Array.from({ length: 30 }).map((_, i) => {
    const cx = (i * 137) % 1160 + 20;
    const cy = 350 + (i * 97) % 750;
    const r = 16 + (i % 5) * 8;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#bokehSoft)" />`;
  }).join('\n')}

  <!-- Side Foliage Trees & Potted Plants (Left & Right) -->
  <g id="foliage">
    <!-- Left Bush & Pots -->
    <ellipse cx="140" cy="780" rx="130" ry="240" fill="#244B36" />
    <ellipse cx="110" cy="620" rx="100" ry="180" fill="#2E5C43" />
    <ellipse cx="160" cy="920" rx="110" ry="160" fill="#1B3828" />
    <!-- Yellow small flowers on left bushes -->
    ${Array.from({ length: 22 }).map((_, i) => {
      const cx = 70 + (i * 29) % 150;
      const cy = 600 + (i * 41) % 450;
      return `<circle cx="${cx}" cy="${cy}" r="4" fill="#FDE047" /><circle cx="${cx+4}" cy="${cy+2}" r="3" fill="#FEF08A" />`;
    }).join('\n')}

    <!-- Left Planter Pots -->
    <path d="M40 1140 L70 1260 H180 L210 1140 Z" fill="#71717A" stroke="#52525B" stroke-width="4" />
    <ellipse cx="125" cy="1140" rx="85" ry="16" fill="#3F3F46" />

    <!-- Right Bush & Pots -->
    <ellipse cx="1060" cy="780" rx="130" ry="240" fill="#244B36" />
    <ellipse cx="1090" cy="620" rx="100" ry="180" fill="#2E5C43" />
    <ellipse cx="1040" cy="920" rx="110" ry="160" fill="#1B3828" />
    <!-- Yellow small flowers on right bushes -->
    ${Array.from({ length: 22 }).map((_, i) => {
      const cx = 980 + (i * 29) % 150;
      const cy = 600 + (i * 41) % 450;
      return `<circle cx="${cx}" cy="${cy}" r="4" fill="#FDE047" /><circle cx="${cx+4}" cy="${cy+2}" r="3" fill="#FEF08A" />`;
    }).join('\n')}

    <!-- Right Planter Pots -->
    <path d="M990 1140 L1020 1260 H1130 L1160 1140 Z" fill="#71717A" stroke="#52525B" stroke-width="4" />
    <ellipse cx="1075" cy="1140" rx="85" ry="16" fill="#3F3F46" />
  </g>

  <!-- Stone Courtyard Pavement Ground -->
  <g id="ground">
    <rect x="0" y="1220" width="1200" height="380" fill="#374151" opacity="0.8" />
    <!-- Patio Paver Stones Lines -->
    <path d="M0 1240 H1200 M0 1320 H1200 M0 1410 H1200 M0 1510 H1200" stroke="#1F2937" stroke-width="4" opacity="0.6" />
    <path d="M220 1240 V1320 M480 1240 V1320 M760 1240 V1320 M1020 1240 V1320" stroke="#1F2937" stroke-width="3" opacity="0.6" />
    <path d="M110 1320 V1410 M360 1320 V1410 M640 1320 V1410 M900 1320 V1410 M1130 1320 V1410" stroke="#1F2937" stroke-width="3" opacity="0.6" />
    <path d="M260 1410 V1510 M540 1410 V1510 M820 1410 V1510 M1080 1410 V1510" stroke="#1F2937" stroke-width="3" opacity="0.6" />

    <!-- Foreground Planter Pots (Left & Right) -->
    <!-- Front Left Pot -->
    <path d="M8 1160 L28 1320 H128 L148 1160 Z" fill="#9CA3AF" stroke="#6B7280" stroke-width="4" />
    <ellipse cx="78" cy="1160" rx="70" ry="14" fill="#4B5563" />
    <!-- Front Right Pot -->
    <path d="M738 1160 L758 1320 H858 L878 1160 Z" fill="#9CA3AF" stroke="#6B7280" stroke-width="4" />
    <ellipse cx="808" cy="1160" rx="70" ry="14" fill="#4B5563" />
    <path d="M888 1160 L908 1320 H1008 L1028 1160 Z" fill="#9CA3AF" stroke="#6B7280" stroke-width="4" />
    <ellipse cx="958" cy="1160" rx="70" ry="14" fill="#4B5563" />
    <path d="M168 1160 L188 1320 H288 L308 1160 Z" fill="#9CA3AF" stroke="#6B7280" stroke-width="4" />
    <ellipse cx="238" cy="1160" rx="70" ry="14" fill="#4B5563" />
  </g>

  <!-- ============================================== -->
  <!-- THE COUPLE: AKSHITA & RAMIT (GHIBLI STYLE)     -->
  <!-- ============================================== -->

  <!-- GROOM: RAMIT (Right Side, Navy/Black Bandhgala Sherwani) -->
  <g id="groomRamit">
    <!-- Groom Body & Legs -->
    <!-- Dark slim trousers -->
    <path d="M645 1180 L620 1480 L675 1480 L705 1180 Z" fill="#111827" />
    <path d="M715 1180 L725 1480 L780 1480 L750 1180 Z" fill="#111827" />
    <!-- Formal Leather Shoes -->
    <ellipse cx="645" cy="1490" rx="35" ry="18" fill="#1F1511" stroke="#000" stroke-width="3" />
    <ellipse cx="755" cy="1490" rx="35" ry="18" fill="#1F1511" stroke="#000" stroke-width="3" />

    <!-- Bandhgala Sherwani Coat Flared Body -->
    <path d="M590 580 C590 530 630 500 700 500 C770 500 810 530 810 580 L790 1180 C790 1190 600 1190 600 1180 Z" fill="url(#sherwaniGrad)" stroke="#111827" stroke-width="3.5" />
    
    <!-- Central Gold Placket Buttons -->
    <path d="M700 530 V1170" stroke="#C89938" stroke-width="2.5" />
    ${[550, 590, 630, 680, 730, 780, 840, 910].map(y => `
      <circle cx="700" cy="${y}" r="4.5" fill="#FDE68A" stroke="#854D0E" stroke-width="1.5" />
    `).join('\n')}

    <!-- Gold Embroidered Pocket Square & Collar Motif -->
    <!-- Pocket -->
    <path d="M735 680 H775 V720 Q755 745 735 720 Z" fill="#181D26" stroke="#D97706" stroke-width="2" />
    <path d="M740 670 L755 645 L770 670 Z" fill="#D4AF37" />
    <path d="M742 690 Q755 705 768 690" stroke="#FDE68A" stroke-width="2" fill="none" />

    <!-- Mandarin Collar with Zari Accent -->
    <path d="M660 520 Q700 535 740 520 L742 490 Q700 475 660 490 Z" fill="#202632" stroke="#D97706" stroke-width="3" />
    <path d="M668 505 Q700 518 732 505" stroke="#FDE68A" stroke-width="2" fill="none" />

    <!-- Groom Left Arm (Holding Bride's hand) -->
    <path d="M610 580 C585 640 560 720 545 810" stroke="#181D26" stroke-width="48" stroke-linecap="round" />
    <path d="M545 810 L590 830" stroke="#181D26" stroke-width="44" stroke-linecap="round" />
    <!-- Gold Embroidered Cuff -->
    <path d="M555 815 L575 825" stroke="#D97706" stroke-width="6" stroke-linecap="round" />
    <path d="M555 815 L575 825" stroke="#FDE68A" stroke-width="2" stroke-linecap="round" />

    <!-- Groom Right Arm (Relaxed at side / supporting) -->
    <path d="M785 580 C815 670 820 780 790 890" stroke="#181D26" stroke-width="48" stroke-linecap="round" />

    <!-- Groom Neck & Face (Ghibli Style) -->
    <path d="M680 470 V510 H720 V470 Z" fill="#F8D3B8" />
    <ellipse cx="700" cy="415" rx="58" ry="72" fill="#FADBC4" stroke="#4A3427" stroke-width="2.5" />

    <!-- Groom Styled Hair & Beard (Studio Ghibli style) -->
    <!-- Dark neat hair with volume -->
    <path d="M642 410 C635 340 680 320 735 320 C780 320 805 350 785 410 C765 370 730 365 700 370 C670 375 650 395 642 410 Z" fill="#231B15" />
    <path d="M640 390 C625 410 630 450 645 460 C648 440 648 410 640 390 Z" fill="#231B15" />

    <!-- Trimmed Neat Beard & Mustache -->
    <path d="M648 435 C650 480 675 490 705 490 C735 490 755 470 755 435 C740 450 725 460 705 460 C685 460 665 450 648 435 Z" fill="#2A2019" />
    <path d="M680 448 Q702 455 724 448" stroke="#231B15" stroke-width="4" stroke-linecap="round" fill="none" />

    <!-- Eyes (Ghibli warm gentle look towards Akshita) -->
    <!-- Left Eye -->
    <path d="M665 395 Q676 390 687 396" stroke="#2E1C14" stroke-width="3" stroke-linecap="round" fill="none" />
    <ellipse cx="676" cy="402" rx="6" ry="7.5" fill="#3D2619" />
    <circle cx="678" cy="400" r="2.2" fill="#FFFFFF" />
    <!-- Right Eye -->
    <path d="M710 395 Q721 390 732 396" stroke="#2E1C14" stroke-width="3" stroke-linecap="round" fill="none" />
    <ellipse cx="721" cy="402" rx="6" ry="7.5" fill="#3D2619" />
    <circle cx="723" cy="400" r="2.2" fill="#FFFFFF" />

    <!-- Eyebrows -->
    <path d="M662 385 Q676 380 690 387" stroke="#2A1B13" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <path d="M708 387 Q722 380 736 385" stroke="#2A1B13" stroke-width="3.5" stroke-linecap="round" fill="none" />

    <!-- Smile & Nose -->
    <path d="M698 412 L695 428 H704" stroke="#A76E51" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M685 440 Q702 452 720 440" stroke="#7A3F26" stroke-width="3" stroke-linecap="round" fill="none" />
    <!-- Cheek Blush -->
    <ellipse cx="665" cy="420" rx="14" ry="7" fill="#F472B6" opacity="0.35" />
    <ellipse cx="735" cy="420" rx="14" ry="7" fill="#F472B6" opacity="0.35" />
  </g>

  <!-- BRIDE: AKSHITA (Left Side, Gold/Peach Lehenga, Dupatta, Mehendi, Jhumkas) -->
  <g id="brideAkshita">
    <!-- Flared Ornate Lehenga Skirt -->
    <path d="M360 840 C420 830 480 830 520 840 L620 1480 C500 1515 320 1510 200 1480 Z" fill="url(#lehengaGrad)" stroke="#B45309" stroke-width="2" />

    <!-- Ornate Rajasthani / Mughal Circular Medallion Border at Hem -->
    <path d="M200 1460 C360 1495 500 1495 620 1460" stroke="#D97706" stroke-width="5" fill="none" />
    <path d="M195 1475 C360 1510 500 1510 625 1475" stroke="#78350F" stroke-width="8" fill="none" />
    <!-- Circular Embroidered Medallions along bottom -->
    ${[240, 310, 380, 450, 520, 580].map((cx, idx) => `
      <g transform="translate(${cx}, 1380)">
        <circle cx="0" cy="0" r="32" fill="${idx % 2 === 0 ? '#FDE68A' : '#FECDD3'}" stroke="#B45309" stroke-width="2.5" />
        <circle cx="0" cy="0" r="22" fill="${idx % 2 === 0 ? '#F43F5E' : '#0D9488'}" opacity="0.75" />
        <circle cx="0" cy="0" r="12" fill="#FDE68A" />
        <circle cx="0" cy="0" r="5" fill="#78350F" />
        <path d="M-22 0 H22 M0 -22 V22" stroke="#FFF" stroke-width="1.5" />
      </g>
    `).join('\n')}

    <!-- Vertical Golden Pleats & Embroidery Ribbons -->
    ${[280, 350, 420, 480, 540].map(x => `
      <path d="M${400 + (x-400)*0.3} 850 Q ${x - 20} 1150 ${x} 1340" stroke="#D97706" stroke-width="2" stroke-dasharray="6 4" opacity="0.8" fill="none" />
    `).join('\n')}

    <!-- Choli (Fitted Blouse) in Champagne Gold with Floral Embroidery -->
    <path d="M370 650 C370 590 420 570 470 580 C500 590 530 650 530 730 C470 740 400 740 370 730 Z" fill="#FBF0D9" stroke="#C89938" stroke-width="2.5" />
    <!-- Blouse Gold Zari Neckline & Sleeves -->
    <path d="M420 590 Q470 650 510 610" stroke="#D97706" stroke-width="4" fill="none" />
    <path d="M370 680 Q390 700 410 690" stroke="#D97706" stroke-width="4" fill="none" />
    <!-- Blouse floral embroidery dots -->
    ${[630, 650, 670, 690, 710].map(y => `
      <circle cx="430" cy="${y}" r="3" fill="#FB7185" /><circle cx="460" cy="${y+5}" r="3" fill="#D97706" /><circle cx="490" cy="${y}" r="3" fill="#FB7185" />
    `).join('\n')}

    <!-- Elegant Flowing Sheer Dupatta Draped Across Waist & Shoulder -->
    <path d="M360 620 C320 720 280 920 310 1150 C325 1250 355 1300 370 1300 C390 1300 370 1200 360 1100 C340 920 380 720 420 630 Z" fill="url(#dupattaGrad)" stroke="#B45309" stroke-width="1.8" />
    <!-- Dupatta Golden Lace Border (Kiran / Gota Patti) -->
    <path d="M360 620 C320 720 280 920 310 1150 C325 1250 355 1300 370 1300" stroke="#FDE68A" stroke-width="4" stroke-dasharray="4 2" fill="none" />
    <!-- Front Dupatta Pleats draped over arm -->
    <path d="M420 650 Q460 760 510 820 Q470 880 430 890 C400 890 380 780 400 710 Z" fill="url(#dupattaGrad)" opacity="0.9" />

    <!-- Bride Left Arm (with Red Chooda & Gold Bangles) -->
    <path d="M370 680 C360 740 370 800 440 825" stroke="#FCE7D6" stroke-width="26" stroke-linecap="round" fill="none" />
    <!-- Traditional Bangles (Red Chooda & Gold Kangan) -->
    <path d="M420 815 L435 822" stroke="#E11D48" stroke-width="14" stroke-linecap="round" />
    <path d="M415 812 L418 814" stroke="#FDE68A" stroke-width="6" />
    <path d="M438 823 L442 825" stroke="#FDE68A" stroke-width="6" />

    <!-- Bride Right Arm & Hand reaching Ramit's hand -->
    <path d="M500 700 Q530 760 550 810" stroke="#FCE7D6" stroke-width="26" stroke-linecap="round" fill="none" />
    <!-- Right Wrist Bangles -->
    <path d="M535 780 L545 795" stroke="#E11D48" stroke-width="10" stroke-linecap="round" />
    <path d="M532 776 L536 782" stroke="#FDE68A" stroke-width="4" />
    <path d="M547 798 L551 804" stroke="#FDE68A" stroke-width="4" />

    <!-- Bride Head, Neck & Beautiful Ghibli Expression -->
    <path d="M450 490 V550 H480 V490 Z" fill="#F8D3B8" />
    <ellipse cx="465" cy="440" rx="55" ry="68" fill="#FADBC4" stroke="#4A3427" stroke-width="2" />

    <!-- Dark Flowing Hair with Side Bun & Flowers -->
    <path d="M420 440 C410 360 450 330 500 330 C535 330 555 360 540 430 C530 400 505 385 470 385 C440 385 425 410 420 440 Z" fill="#1C140E" />
    <path d="M410 430 C400 450 395 520 415 560 C425 580 435 600 445 610 C430 570 420 530 420 470 Z" fill="#1C140E" />
    <!-- Jasmine Flowers in Hair (Gajra / Floral Hairpin) -->
    <circle cx="410" cy="410" r="7" fill="#FFFFFF" /><circle cx="412" cy="408" r="3" fill="#FEF08A" />
    <circle cx="418" cy="422" r="7" fill="#FFFFFF" /><circle cx="420" cy="420" r="3" fill="#FEF08A" />
    <circle cx="406" cy="424" r="6" fill="#FBCFE8" />

    <!-- Golden Traditional Kundan Jhumka Earring -->
    <path d="M435 465 L435 480" stroke="#D97706" stroke-width="2" />
    <path d="M428 480 Q435 475 442 480 L444 495 Q435 500 426 495 Z" fill="#FDE68A" stroke="#B45309" stroke-width="1.5" />
    <circle cx="435" cy="497" r="2.5" fill="#E11D48" />

    <!-- Golden Maang Tikka on Forehead -->
    <line x1="468" y1="355" x2="472" y2="400" stroke="#FDE68A" stroke-width="2" />
    <circle cx="472" cy="404" r="5" fill="#FDE68A" stroke="#B45309" stroke-width="1.2" />
    <circle cx="472" cy="404" r="2" fill="#E11D48" />

    <!-- Bride Eyes (Large, Warm Ghibli Anime Style gazing at Ramit) -->
    <!-- Left Eye -->
    <path d="M440 418 Q452 410 464 416" stroke="#2E1C14" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <ellipse cx="452" cy="426" rx="7.5" ry="9" fill="#3D2619" />
    <circle cx="454" cy="423" r="2.8" fill="#FFFFFF" />
    <circle cx="449" cy="428" r="1.5" fill="#FFFFFF" />
    <!-- Right Eye -->
    <path d="M482 418 Q494 410 506 416" stroke="#2E1C14" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <ellipse cx="494" cy="426" rx="7.5" ry="9" fill="#3D2619" />
    <circle cx="496" cy="423" r="2.8" fill="#FFFFFF" />
    <circle cx="491" cy="428" r="1.5" fill="#FFFFFF" />

    <!-- Eyebrows -->
    <path d="M438 406 Q452 400 466 407" stroke="#2A1B13" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M480 407 Q494 400 508 406" stroke="#2A1B13" stroke-width="2.5" stroke-linecap="round" fill="none" />

    <!-- Delicate Nose, Sweet Smile & Rosy Cheeks -->
    <path d="M470 435 Q472 445 468 448" stroke="#A76E51" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M460 460 Q474 472 488 460" stroke="#BE123C" stroke-width="3" stroke-linecap="round" fill="none" />
    <!-- Rosy Cheeks -->
    <ellipse cx="444" cy="442" rx="15" ry="8" fill="#FB7185" opacity="0.45" />
    <ellipse cx="504" cy="442" rx="15" ry="8" fill="#FB7185" opacity="0.45" />
  </g>

  <!-- INTERLOCKING HANDS & MEHENDI (Center) -->
  <g id="interlockingHands">
    <!-- Bride's Hands with Mehendi Patterns -->
    <path d="M450 820 C480 810 520 815 545 830" stroke="#E29578" stroke-width="16" stroke-linecap="round" fill="none" />
    <!-- Henna / Mehendi intricate mandalas on hands -->
    <path d="M470 818 Q485 812 500 818" stroke="#881337" stroke-width="2.5" fill="none" />
    <circle cx="485" cy="815" r="3" fill="#881337" />
    <path d="M510 822 Q525 816 540 822" stroke="#881337" stroke-width="2" fill="none" />

    <!-- Ramit's Hands holding Akshita's hand -->
    <path d="M570 825 C555 835 520 835 495 835" stroke="#E0A98A" stroke-width="18" stroke-linecap="round" fill="none" />
    <circle cx="535" cy="830" r="5" fill="#E0A98A" />

    <!-- Sparkling Diamond Engagement Ring Glint -->
    <circle cx="525" cy="824" r="6" fill="#FFFFFF" filter="url(#glowFilter)" />
    <circle cx="525" cy="824" r="14" fill="#FEF08A" opacity="0.4" />
    <line x1="525" y1="810" x2="525" y2="838" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
    <line x1="511" y1="824" x2="539" y2="824" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
  </g>

  <!-- ============================================== -->
  <!-- TOP BANNER: FLORAL ARCH & "RING CEREMONY"      -->
  <!-- ============================================== -->
  <g id="topBanner">
    <!-- Soft Vignette Header Curve -->
    <path d="M0 0 H1200 V180 C800 240 400 240 0 180 Z" fill="#0E1720" opacity="0.65" />

    <!-- Top Garland Vines & Leaves -->
    <path d="M0 40 Q300 140 600 80 Q900 140 1200 40" stroke="#22543D" stroke-width="10" fill="none" />
    <path d="M0 70 Q300 170 600 110 Q900 170 1200 70" stroke="#276749" stroke-width="6" fill="none" />

    <!-- Large Blooming Hibiscus / Rose Flowers (Left & Right top) -->
    <!-- Left Flowers -->
    <circle cx="90" cy="70" r="32" fill="#F472B6" />
    <circle cx="90" cy="70" r="22" fill="#FB7185" />
    <circle cx="90" cy="70" r="10" fill="#FDE047" />
    <circle cx="160" cy="110" r="26" fill="#F472B6" />
    <circle cx="160" cy="110" r="8" fill="#FDE047" />
    <circle cx="40" cy="110" r="24" fill="#FDA4AF" />

    <!-- Right Flowers -->
    <circle cx="1110" cy="70" r="32" fill="#F472B6" />
    <circle cx="1110" cy="70" r="22" fill="#FB7185" />
    <circle cx="1110" cy="70" r="10" fill="#FDE047" />
    <circle cx="1040" cy="110" r="26" fill="#F472B6" />
    <circle cx="1040" cy="110" r="8" fill="#FDE047" />
    <circle cx="1160" cy="110" r="24" fill="#FDA4AF" />

    <!-- Center Top Flowers -->
    <circle cx="540" cy="60" r="18" fill="#FDA4AF" /><circle cx="540" cy="60" r="6" fill="#FDE047" />
    <circle cx="660" cy="60" r="18" fill="#FDA4AF" /><circle cx="660" cy="60" r="6" fill="#FDE047" />
    <circle cx="600" cy="45" r="22" fill="#F472B6" /><circle cx="600" cy="45" r="8" fill="#FDE047" />

    <!-- Golden Twinkling Sparkles near Header -->
    ${[
      [240, 90], [320, 150], [420, 80], [780, 80], [880, 150], [960, 90],
      [180, 210], [1020, 210], [600, 200]
    ].map(([x, y]) => `
      <g transform="translate(${x}, ${y})">
        <circle cx="0" cy="0" r="3" fill="#FFF" />
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#FDE047" stroke-width="2" />
        <line x1="0" y1="-12" x2="0" y2="12" stroke="#FDE047" stroke-width="2" />
      </g>
    `).join('\n')}

    <!-- "Ring Ceremony" Elegant Script Calligraphy -->
    <!-- Outer Glow / Shadow -->
    <text x="600" y="145" text-anchor="middle" font-family="'Great Vibes', cursive" font-size="108" fill="#181310" stroke="#0F172A" stroke-width="12" stroke-linejoin="round" letter-spacing="2">
      Ring Ceremony
    </text>
    <!-- Crisp White/Cream Calligraphic Script -->
    <text x="600" y="145" text-anchor="middle" font-family="'Great Vibes', cursive" font-size="108" fill="#FFFDF7" letter-spacing="2">
      Ring Ceremony
    </text>
  </g>

  <!-- Bottom Left & Right Floral Vine Borders -->
  <g id="bottomFlourish">
    <path d="M-20 1620 Q180 1480 320 1580" stroke="#276749" stroke-width="8" fill="none" />
    <circle cx="60" cy="1540" r="24" fill="#F472B6" /><circle cx="60" cy="1540" r="8" fill="#FDE047" />
    <circle cx="160" cy="1520" r="18" fill="#FDA4AF" />

    <path d="M1220 1620 Q1020 1480 880 1580" stroke="#276749" stroke-width="8" fill="none" />
    <circle cx="1140" cy="1540" r="24" fill="#F472B6" /><circle cx="1140" cy="1540" r="8" fill="#FDE047" />
    <circle cx="1040" cy="1520" r="18" fill="#FDA4AF" />
  </g>
</svg>
</body>
</html>`;

const outHtml = path.resolve('/app/applet/render_ghibli.html');
fs.writeFileSync(outHtml, htmlContent);
console.log('HTML written to:', outHtml);
