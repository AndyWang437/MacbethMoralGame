import { GameState } from '../types/game';

export class AudioManager {
  private static instance: AudioManager;
  private witchWhispers: HTMLAudioElement;
  private bloodDrip: HTMLAudioElement;
  private isPlaying: boolean = false;

  private constructor() {
    this.witchWhispers = new Audio('/audio/witch-whispers.mp3');
    this.bloodDrip = new Audio('/audio/blood-drip.mp3');
    
    // Preload audio files
    this.witchWhispers.load();
    this.bloodDrip.load();
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  public updateEffects(gameState: GameState) {
    // Update witch whispers
    if (gameState.ambition > 70) {
      this.witchWhispers.volume = (gameState.ambition - 70) / 30;
      if (!this.isPlaying) {
        this.witchWhispers.loop = true;
        this.witchWhispers.play();
        this.isPlaying = true;
      }
    } else {
      this.witchWhispers.pause();
      this.isPlaying = false;
    }
  }

  public playBloodDrip() {
    this.bloodDrip.currentTime = 0;
    this.bloodDrip.play();
  }

  public stopAll() {
    this.witchWhispers.pause();
    this.bloodDrip.pause();
    this.isPlaying = false;
  }
} 