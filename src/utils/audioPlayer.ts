/**
 * Auspicious Two-Phase Musical Journey for Akshita & Ramit Ring Ceremony
 * 
 * Seamlessly transitions from:
 * Phase 1 (0:00 - 0:51): Divine Ganesh Mantra ("Vakratunda Mahakaya Suryakoti Samaprabha")
 *                         with authentic vocal chant, temple bells, flute, and concluding with
 *                         the sacred resonant Shankh Naad (conch shell sound).
 * 
 * Phase 2 (0:51 - 2:12): High-Energy DJ Celebration Track ("HUGEL, SOLTO - Jamaican (Bam Bam)")
 *                         The ending of the Shankh Naad blends seamlessly into the atmospheric
 *                         vocal intro ("What a bam bam..."), followed by rolling conga percussion
 *                         and a massive 122 BPM festival bass drop at 62.5s!
 * 
 * Masterfully mixed into a single sample-accurate stream with zero browser audio latency.
 * Equipped with Web Audio API real-time frequency analysis (bass, mid, treble) for reactive
 * visuals and precise drop detection.
 */

export type MusicPhase = 'mantra' | 'celebration';
export type PopperShotType = 'grand' | 'left' | 'right' | 'dual';

export interface AudioState {
  isPlaying: boolean;
  phase: MusicPhase;
  currentTime: number;
  duration: number;
  isMuted: boolean;
  progressPercent: number;
  isDropActive: boolean;
}

export type AudioStateCallback = (state: AudioState) => void;
export type DropCallback = () => void;
export type PopperShotCallback = (type: PopperShotType) => void;

class WeddingJourneyAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private targetVolume: number = 0.55;
  private listeners: AudioStateCallback[] = [];
  private dropListeners: DropCallback[] = [];
  private popperListeners: PopperShotCallback[] = [];
  private dropFiredThisSession: boolean = false;
  private firedShots: Set<number> = new Set();

  // Web Audio API components
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private sourceNode: MediaElementAudioSourceNode | null = null;
  private frequencyData: Uint8Array<ArrayBuffer> | null = null;

  // Cut-over point between Phase 1 and Phase 2 (in seconds)
  public readonly TRANSITION_TIMESTAMP = 51.0;
  // Full bass drop timestamp (in seconds)
  public readonly BASS_DROP_TIMESTAMP = 62.5;

  // Key musical timestamps throughout the song for synchronized party popper shots (at 122 BPM)
  public readonly CELEBRATION_SHOT_TIMESTAMPS: { time: number; type: PopperShotType }[] = [
    { time: 62.5, type: 'grand' },  // Initial massive drop!
    { time: 70.3, type: 'left' },   // 16 beats later
    { time: 78.2, type: 'dual' },   // 32 beats: "What a bam bam" chorus drop!
    { time: 86.1, type: 'right' },  // 16 beats
    { time: 94.0, type: 'dual' },   // Horn riff climax drop!
    { time: 102.0, type: 'left' },  // 16 beats
    { time: 109.8, type: 'grand' }, // High energy climax drop!
    { time: 117.7, type: 'right' }, // 16 beats
    { time: 125.5, type: 'dual' },  // Outro celebration finale!
  ];

  private audioSrc = '/assets/audio/wedding_journey_seamless.mp3';

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    try {
      this.audio = new Audio(this.audioSrc);
      this.audio.preload = 'auto';
      this.audio.loop = true; // Loops the celebration experience
      this.audio.volume = this.targetVolume;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.setupAudioContext();
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('timeupdate', () => {
        if (!this.audio) return;
        const cur = this.audio.currentTime;

        // Detect the exact drop moment
        if (cur >= this.BASS_DROP_TIMESTAMP && !this.dropFiredThisSession && this.isPlaying) {
          this.dropFiredThisSession = true;
          this.fireDropEvent();
        } else if (cur < this.TRANSITION_TIMESTAMP) {
          this.dropFiredThisSession = false;
          this.firedShots.clear();
        }

        // Fire synchronized party poppers throughout the celebration track
        if (this.isPlaying && cur >= this.TRANSITION_TIMESTAMP) {
          for (const shot of this.CELEBRATION_SHOT_TIMESTAMPS) {
            if (cur >= shot.time && !this.firedShots.has(shot.time)) {
              this.firedShots.add(shot.time);
              this.firePopperShot(shot.type);
            }
          }
        }

        if (this.isPlaying) {
          this.notifyListeners();
        }
      });

      this.audio.addEventListener('ended', () => {
        // Loop back to celebration drop for non-stop party
        if (this.audio) {
          this.audio.currentTime = this.TRANSITION_TIMESTAMP;
          this.firedShots.clear();
          this.audio.play().catch(() => {});
        }
      });

      this.audio.addEventListener('error', (e) => {
        console.warn("Audio loading check:", e);
      });
    } catch {
      // Audio element creation safety
    }
  }

  private setupAudioContext() {
    if (typeof window === 'undefined' || !this.audio || this.audioContext) {
      if (this.audioContext && this.audioContext.state === 'suspended') {
        this.audioContext.resume().catch(() => {});
      }
      return;
    }

    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return;

      this.audioContext = new AudioCtxClass();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.8;

      this.sourceNode = this.audioContext.createMediaElementSource(this.audio);
      this.sourceNode.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);

      this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
    } catch (err) {
      console.warn("AudioContext init info:", err);
    }
  }

  public play(): Promise<void> {
    if (!this.audio) return Promise.resolve();
    this.audio.volume = this.isMuted ? 0 : this.targetVolume;
    this.setupAudioContext();

    return this.audio.play().then(() => {
      this.isPlaying = true;
      if (this.audioContext && this.audioContext.state === 'suspended') {
        this.audioContext.resume().catch(() => {});
      }
      this.notifyListeners();
    }).catch((err) => {
      console.warn("Audio play prevented by browser policy:", err);
      this.isPlaying = false;
      this.notifyListeners();
    });
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  /**
   * Jump to Phase 1 (Mantra at 0s) or Phase 2 (Celebration intro at 51s)
   */
  public setPhase(phase: MusicPhase) {
    if (!this.audio) return;

    if (phase === 'mantra') {
      this.audio.currentTime = 0;
      this.dropFiredThisSession = false;
      this.firedShots.clear();
    } else {
      this.audio.currentTime = this.TRANSITION_TIMESTAMP;
      this.firedShots.clear();
    }

    if (!this.isPlaying) {
      this.play();
    } else {
      this.notifyListeners();
    }
  }

  /**
   * Jump directly to the explosive Bass Drop of Jamaican (Bam Bam) at 62.5s
   */
  public triggerBassDrop() {
    if (!this.audio) return;
    this.audio.currentTime = this.BASS_DROP_TIMESTAMP;
    this.dropFiredThisSession = true;
    this.firedShots.clear();
    this.firedShots.add(62.5);
    this.fireDropEvent();
    this.firePopperShot('grand');

    if (!this.isPlaying) {
      this.play();
    } else {
      this.notifyListeners();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : this.targetVolume;
    }
    this.notifyListeners();
    return this.isMuted;
  }

  /**
   * Real-time Web Audio API frequency analysis
   * Returns normalized [0.0 - 1.0] values for bass, mid, treble, and overall energy.
   */
  public getAudioEnergy(): { bass: number; mid: number; treble: number; overall: number } {
    if (!this.isPlaying) {
      return { bass: 0, mid: 0, treble: 0, overall: 0 };
    }

    if (this.analyser && this.frequencyData) {
      this.analyser.getByteFrequencyData(this.frequencyData);
      const binCount = this.frequencyData.length;

      // Sub-bass & Bass (approx 40Hz - 250Hz, bins 1 to 8)
      let bassSum = 0;
      const bassBins = Math.min(8, binCount);
      for (let i = 1; i <= bassBins; i++) {
        bassSum += this.frequencyData[i];
      }
      const bass = bassSum / (bassBins * 255);

      // Mid frequencies (approx 300Hz - 2.5kHz, bins 9 to 32)
      let midSum = 0;
      const midStart = 9;
      const midEnd = Math.min(32, binCount);
      for (let i = midStart; i <= midEnd; i++) {
        midSum += this.frequencyData[i];
      }
      const mid = midSum / ((midEnd - midStart + 1) * 255);

      // Treble (approx 2.5kHz - 10kHz, bins 33 to 80)
      let trebleSum = 0;
      const trebleStart = 33;
      const trebleEnd = Math.min(80, binCount);
      for (let i = trebleStart; i <= trebleEnd; i++) {
        trebleSum += this.frequencyData[i];
      }
      const treble = trebleSum / ((trebleEnd - trebleStart + 1) * 255);

      const overall = (bass * 0.5) + (mid * 0.3) + (treble * 0.2);
      return { bass, mid, treble, overall };
    }

    // Mathematical tempo-locked fallback at 122 BPM (~2.03 Hz) if AudioContext is pending
    const cur = this.audio ? this.audio.currentTime : 0;
    const isDJ = cur >= this.TRANSITION_TIMESTAMP;
    if (!isDJ) {
      return { bass: 0.15, mid: 0.25, treble: 0.2, overall: 0.2 };
    }
    const beatPhase = (cur * (122 / 60)) % 1;
    const bass = Math.max(0, 1 - beatPhase * 2.2);
    const treble = (Math.sin(cur * 16) + 1) * 0.35;
    return { bass, mid: 0.4, treble, overall: (bass + treble) / 2 };
  }

  /**
   * Register a callback triggered at the exact moment of the bass drop
   */
  public onDrop(callback: DropCallback): () => void {
    this.dropListeners.push(callback);
    return () => {
      this.dropListeners = this.dropListeners.filter((cb) => cb !== callback);
    };
  }

  public fireDropEvent() {
    this.dropListeners.forEach((cb) => {
      try {
        cb();
      } catch (err) {
        console.error("Drop callback error:", err);
      }
    });
  }

  public onPopperShot(callback: PopperShotCallback): () => void {
    this.popperListeners.push(callback);
    return () => {
      this.popperListeners = this.popperListeners.filter((cb) => cb !== callback);
    };
  }

  public firePopperShot(type: PopperShotType = 'dual') {
    this.popperListeners.forEach((cb) => {
      try {
        cb(type);
      } catch (err) {
        console.error("Popper shot callback error:", err);
      }
    });
  }

  public getState(): AudioState {
    const curTime = this.audio ? this.audio.currentTime : 0;
    const dur = this.audio && !isNaN(this.audio.duration) ? this.audio.duration : 132;
    const phase: MusicPhase = curTime >= this.TRANSITION_TIMESTAMP ? 'celebration' : 'mantra';
    const progressPercent = dur > 0 ? (curTime / dur) * 100 : 0;
    const isDropActive = curTime >= this.BASS_DROP_TIMESTAMP && this.isPlaying;

    return {
      isPlaying: this.isPlaying,
      phase,
      currentTime: curTime,
      duration: dur,
      isMuted: this.isMuted,
      progressPercent,
      isDropActive,
    };
  }

  public subscribe(cb: AudioStateCallback): () => void {
    this.listeners.push(cb);
    cb(this.getState());
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private notifyListeners() {
    const state = this.getState();
    this.listeners.forEach((cb) => cb(state));
  }

  public getPhase(): MusicPhase {
    return this.getState().phase;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsDropActive(): boolean {
    return this.getState().isDropActive;
  }
}

export const weddingAudio = new WeddingJourneyAudioPlayer();
