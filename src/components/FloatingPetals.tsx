import React, { useEffect, useRef, useState } from 'react';
import { weddingAudio, AudioState, PopperShotType } from '../utils/audioPlayer';

interface PetalParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'rosePetal' | 'jasmine' | 'glowingStar' | 'goldDust' | 'etherealOrb' | 'celebrationConfetti';
  pulsePhase: number;
}

interface PopperParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  life: number;
  maxLife: number;
  type: 'goldFoil' | 'rose' | 'mogra' | 'streamer';
}

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [audioState, setAudioState] = useState<AudioState>(weddingAudio.getState());
  const popperParticlesRef = useRef<PopperParticle[]>([]);

  // Subscribe to audio state for phase and drop detection
  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((state) => {
      setAudioState(state);
    });
    return () => unsubscribe();
  }, []);

  // Synchronized Party Popper shots
  useEffect(() => {
    const triggerPopper = (shotType: PopperShotType = 'grand') => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.width || window.innerWidth;
      const height = canvasRef.current.height || window.innerHeight;

      const goldColors = ['#FFD700', '#F59E0B', '#ECC880', '#FDE68A', '#FBBF24'];
      const roseColors = ['#E11D48', '#BE123C', '#F43F5E', '#FDA4AF'];
      const mograColors = ['#FFFDF9', '#FEF9C3', '#F8FAFC'];
      const neonColors = ['#EC4899', '#D946EF', '#8B5CF6', '#3B82F6'];

      const newParticles: PopperParticle[] = [];
      const isMobile = window.innerWidth < 768;

      let origins: { x: number; y: number; angleSpread: [number, number]; power: number; count: number }[] = [];

      if (shotType === 'left') {
        origins = [
          { x: width * 0.02, y: height * 0.90, angleSpread: [-Math.PI * 0.44, -Math.PI * 0.08], power: 21, count: isMobile ? 55 : 90 },
        ];
      } else if (shotType === 'right') {
        origins = [
          { x: width * 0.98, y: height * 0.90, angleSpread: [-Math.PI * 0.92, -Math.PI * 0.56], power: 21, count: isMobile ? 55 : 90 },
        ];
      } else if (shotType === 'dual') {
        origins = [
          { x: width * 0.04, y: height * 0.88, angleSpread: [-Math.PI * 0.45, -Math.PI * 0.12], power: 19, count: isMobile ? 45 : 75 },
          { x: width * 0.96, y: height * 0.88, angleSpread: [-Math.PI * 0.88, -Math.PI * 0.55], power: 19, count: isMobile ? 45 : 75 },
        ];
      } else {
        // Grand 3-way drop explosion
        origins = [
          { x: width * 0.05, y: height * 0.85, angleSpread: [-Math.PI * 0.45, -Math.PI * 0.05], power: 19, count: isMobile ? 45 : 80 },
          { x: width * 0.95, y: height * 0.85, angleSpread: [-Math.PI * 0.95, -Math.PI * 0.55], power: 19, count: isMobile ? 45 : 80 },
          { x: width * 0.5, y: height * 0.9, angleSpread: [-Math.PI * 0.75, -Math.PI * 0.25], power: 23, count: isMobile ? 50 : 90 },
        ];
      }

      origins.forEach((origin) => {
        for (let i = 0; i < origin.count; i++) {
          const angle = origin.angleSpread[0] + Math.random() * (origin.angleSpread[1] - origin.angleSpread[0]);
          const speed = (Math.random() * 0.6 + 0.4) * origin.power;

          const randType = Math.random();
          let type: PopperParticle['type'] = 'goldFoil';
          let color = goldColors[Math.floor(Math.random() * goldColors.length)];
          let size = Math.random() * 10 + 6;

          if (randType < 0.35) {
            type = 'goldFoil';
            color = goldColors[Math.floor(Math.random() * goldColors.length)];
            size = Math.random() * 9 + 5;
          } else if (randType < 0.60) {
            type = 'rose';
            color = roseColors[Math.floor(Math.random() * roseColors.length)];
            size = Math.random() * 12 + 8;
          } else if (randType < 0.85) {
            type = 'mogra';
            color = mograColors[Math.floor(Math.random() * mograColors.length)];
            size = Math.random() * 8 + 6;
          } else {
            type = 'streamer';
            color = neonColors[Math.floor(Math.random() * neonColors.length)];
            size = Math.random() * 16 + 10;
          }

          newParticles.push({
            x: origin.x,
            y: origin.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size,
            color,
            type,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 14,
            opacity: 1,
            life: 0,
            maxLife: Math.random() * 120 + 90,
          });
        }
      });

      popperParticlesRef.current = [...popperParticlesRef.current, ...newParticles];
    };

    const unsubscribeDrop = weddingAudio.onDrop(() => triggerPopper('grand'));
    const unsubscribeShots = weddingAudio.onPopperShot((type) => triggerPopper(type));

    // Interactive screen click burst
    const handleWindowClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.tagName === 'INPUT')) {
        return;
      }
      const clickX = e.clientX;
      const clickY = e.clientY;
      const goldColors = ['#FFD700', '#F59E0B', '#ECC880', '#FDE68A'];
      const roseColors = ['#E11D48', '#BE123C', '#F43F5E'];
      const mograColors = ['#FFFDF9', '#FEF9C3'];

      const burstParticles: PopperParticle[] = [];
      const count = 30;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 3;
        const rand = Math.random();
        const type: PopperParticle['type'] = rand < 0.4 ? 'goldFoil' : (rand < 0.7 ? 'rose' : 'mogra');
        const color = type === 'goldFoil' ? goldColors[Math.floor(Math.random() * goldColors.length)] : (type === 'rose' ? roseColors[Math.floor(Math.random() * roseColors.length)] : mograColors[Math.floor(Math.random() * mograColors.length)]);
        burstParticles.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          size: Math.random() * 8 + 5,
          color,
          type,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 1,
          life: 0,
          maxLife: 80,
        });
      }
      popperParticlesRef.current = [...popperParticlesRef.current, ...burstParticles];
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      unsubscribeDrop();
      unsubscribeShots();
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  // Main Canvas Render Loop (Graceful falling petals, glowing stars, stardust & spotlights)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsEnabled(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const roseColors = [
      'rgba(244, 114, 182, 0.85)', // soft pink
      'rgba(251, 146, 60, 0.75)',  // peach blossom
      'rgba(225, 29, 72, 0.7)',    // deep crimson rose
      'rgba(253, 186, 116, 0.8)',  // warm apricot
    ];

    const jasmineColors = [
      'rgba(255, 253, 248, 0.95)', // pure white mogra
      'rgba(254, 243, 199, 0.9)',  // champagne jasmine
    ];

    const celebrationColors = [
      '#FFD700',
      '#EF4444',
      '#F59E0B',
      '#EC4899',
      '#A855F7',
      '#06B6D4',
    ];

    const isCelebration = audioState.isDropActive;
    // Balanced particle count: 42 on mobile, 68 on desktop
    const count = window.innerWidth < 768 ? 42 : 68;
    const particles: PetalParticle[] = [];

    // Initialize particles distributed across the entire screen height
    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let type: PetalParticle['type'] = 'rosePetal';
      let color = roseColors[Math.floor(Math.random() * roseColors.length)];
      let size = Math.random() * 11 + 7;

      if (rand < 0.22) {
        // Delicate glowing 4-point star
        type = 'glowingStar';
        color = '#FDE68A';
        size = Math.random() * 5 + 3;
      } else if (rand < 0.42) {
        // Tiny shimmering golden stardust
        type = 'goldDust';
        color = '#F59E0B';
        size = Math.random() * 2.5 + 1.2;
      } else if (rand < 0.65) {
        // Mogra (jasmine) 5-petal blossom
        type = 'jasmine';
        color = jasmineColors[Math.floor(Math.random() * jasmineColors.length)];
        size = Math.random() * 9 + 6;
      } else if (rand < 0.82) {
        // Soft floating ethereal light particle
        type = 'etherealOrb';
        color = '#FBF1D5';
        size = Math.random() * 4 + 2;
      } else if (isCelebration) {
        // Celebration metallic confetti
        type = 'celebrationConfetti';
        color = celebrationColors[Math.floor(Math.random() * celebrationColors.length)];
        size = Math.random() * 7 + 4;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height, // Distributed immediately across screen!
        size,
        speedY: Math.random() * 0.7 + 0.35, // Slow, graceful, relaxing descent
        speedX: Math.random() * 0.8 - 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        opacity: Math.random() * 0.55 + 0.4,
        color,
        type,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const isPlaying = audioState.isPlaying;
      const isDJDrop = audioState.isDropActive;

      // Real-time audio frequency analysis
      const audioEnergy = weddingAudio.getAudioEnergy();
      const bassEnergy = audioEnergy.bass;
      const trebleEnergy = audioEnergy.treble;

      // 1. Moving DJ Spotlights in Celebration Theme
      if (isDJDrop) {
        // Left Spotlight: Royal Purple / Magenta sweeping across
        const spot1Angle = Math.sin(frame * 0.018) * 0.4 + 0.55;
        const spot1X = width * 0.2;
        const spot1Grad = ctx.createRadialGradient(
          spot1X + Math.cos(spot1Angle) * width * 0.35,
          height * 0.6,
          20,
          spot1X + Math.cos(spot1Angle) * width * 0.35,
          height * 0.6,
          width * 0.5
        );
        spot1Grad.addColorStop(0, `rgba(236, 72, 153, ${0.11 + bassEnergy * 0.14})`);
        spot1Grad.addColorStop(0.5, `rgba(168, 85, 247, ${0.05 + bassEnergy * 0.07})`);
        spot1Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spot1Grad;
        ctx.fillRect(0, 0, width, height);

        // Right Spotlight: Amber Gold / Fuchsia sweeping across
        const spot2Angle = -Math.sin(frame * 0.022 + 1) * 0.4 + Math.PI - 0.55;
        const spot2X = width * 0.8;
        const spot2Grad = ctx.createRadialGradient(
          spot2X + Math.cos(spot2Angle) * width * 0.35,
          height * 0.6,
          20,
          spot2X + Math.cos(spot2Angle) * width * 0.35,
          height * 0.6,
          width * 0.5
        );
        spot2Grad.addColorStop(0, `rgba(245, 158, 11, ${0.10 + bassEnergy * 0.12})`);
        spot2Grad.addColorStop(0.5, `rgba(217, 70, 239, ${0.04 + bassEnergy * 0.06})`);
        spot2Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spot2Grad;
        ctx.fillRect(0, 0, width, height);

        // Bass-reactive ambient center wave
        const waveY = height * 0.5 + Math.sin(frame * 0.025) * 50;
        const waveGrad = ctx.createRadialGradient(width * 0.5, waveY, 40, width * 0.5, waveY, width * 0.65);
        waveGrad.addColorStop(0, `rgba(253, 224, 71, ${0.05 + bassEnergy * 0.07})`);
        waveGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = waveGrad;
        ctx.fillRect(0, 0, width, height);
      } else if (isPlaying) {
        // Peaceful golden candlelight aura in Phase 1
        const pulse = Math.sin(frame * 0.015) * 0.025 + 0.04;
        const auraGrad = ctx.createRadialGradient(width / 2, 200, 40, width / 2, 200, width * 0.8);
        auraGrad.addColorStop(0, `rgba(253, 230, 138, ${pulse})`);
        auraGrad.addColorStop(0.5, `rgba(245, 158, 11, ${pulse * 0.3})`);
        auraGrad.addColorStop(1, 'rgba(255, 253, 249, 0)');
        ctx.fillStyle = auraGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Render Party Popper Confetti & Blossom Bursts
      const currentPoppers = popperParticlesRef.current;
      for (let j = currentPoppers.length - 1; j >= 0; j--) {
        const p = currentPoppers[j];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.32; // Gravity
        p.vx *= 0.986; // Air drag
        p.rotation += p.rotationSpeed;
        p.opacity = Math.max(0, 1 - p.life / p.maxLife);

        if (p.opacity <= 0 || p.y > height + 50) {
          currentPoppers.splice(j, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'goldFoil') {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.7);
          ctx.shadowColor = '#FFD700';
          ctx.shadowBlur = 6;
        } else if (p.type === 'rose') {
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.6, p.size * 0.8, p.size * 0.6, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.6, -p.size * 0.8, -p.size * 0.6, 0, -p.size);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (p.type === 'mogra') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size, -2, p.size * 2, 4);
        }

        ctx.restore();
      }

      // 3. Render Graceful Falling Petals, Glowing Stars & Shimmering Dust
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += isDJDrop ? p.speedY * (1.15 + bassEnergy * 0.3) : p.speedY;
        p.x += Math.sin((p.y + frame * 0.6) * 0.008) * 0.7 + p.speedX;
        p.rotation += p.rotationSpeed;
        p.pulsePhase += 0.03;

        // Wrap around seamlessly
        if (p.y > height + 25) {
          p.y = -25;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'glowingStar') {
          // Delicate 4-pointed radiant wedding star
          const starScale = p.size * (1 + Math.sin(p.pulsePhase) * 0.15 + trebleEnergy * 0.4);
          ctx.strokeStyle = '#FDE68A';
          ctx.fillStyle = '#FFFDF0';
          ctx.shadowColor = '#FBBF24';
          ctx.shadowBlur = isDJDrop ? 12 : 8;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, -starScale);
          ctx.quadraticCurveTo(0, 0, starScale, 0);
          ctx.quadraticCurveTo(0, 0, 0, starScale);
          ctx.quadraticCurveTo(0, 0, -starScale, 0);
          ctx.quadraticCurveTo(0, 0, 0, -starScale);
          ctx.fill();
        } else if (p.type === 'goldDust') {
          // Tiny golden sparkle
          const dustSize = p.size * (1 + trebleEnergy * 0.5);
          ctx.beginPath();
          ctx.arc(0, 0, dustSize, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = '#FDE68A';
          ctx.shadowBlur = 6;
          ctx.fill();
        } else if (p.type === 'jasmine') {
          // Mogra 5-petal white blossom
          ctx.fillStyle = p.color;
          ctx.beginPath();
          for (let k = 0; k < 5; k++) {
            const angle = (k * Math.PI * 2) / 5;
            const xPetal = Math.cos(angle) * (p.size * 0.5);
            const yPetal = Math.sin(angle) * (p.size * 0.5);
            ctx.ellipse(xPetal, yPetal, p.size * 0.45, p.size * 0.25, angle, 0, Math.PI * 2);
          }
          ctx.fill();
          // Delicate gold center
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.15, 0, Math.PI * 2);
          ctx.fillStyle = '#F59E0B';
          ctx.fill();
        } else if (p.type === 'etherealOrb') {
          // Soft floating light particle
          const orbGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
          orbGlow.addColorStop(0, 'rgba(255, 253, 240, 0.9)');
          orbGlow.addColorStop(0.5, 'rgba(253, 230, 138, 0.4)');
          orbGlow.addColorStop(1, 'rgba(253, 230, 138, 0)');
          ctx.fillStyle = orbGlow;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'celebrationConfetti') {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          // Organic curved Indian wedding rose petal
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.7, p.size * 0.9, p.size * 0.7, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.7, -p.size * 0.9, -p.size * 0.7, 0, -p.size);
          ctx.fillStyle = p.color;
          ctx.shadowColor = 'rgba(225, 29, 72, 0.3)';
          ctx.shadowBlur = 4;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled, audioState]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      aria-hidden="true"
    />
  );
};
