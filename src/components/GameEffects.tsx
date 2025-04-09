import React, { useEffect, useRef } from 'react';
import { Scene } from '../types/game';

interface GameEffectsProps {
  currentScene: Scene;
  isTransitioning: boolean;
  onTransitionComplete: () => void;
}

export const GameEffects: React.FC<GameEffectsProps> = ({
  currentScene,
  isTransitioning,
  onTransitionComplete
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Scene-specific audio and visual effects
  useEffect(() => {
    if (!currentScene) return;

    // Stop any playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Set background based on scene location
    if (backgroundRef.current) {
      const location = getSceneLocation(currentScene.id);
      backgroundRef.current.className = `fixed inset-0 transition-all duration-1000 ${getBackgroundClass(location)}`;
    }

    // Play scene-specific audio
    const audioPath = getSceneAudio(currentScene.id);
    if (audioPath && audioRef.current) {
      audioRef.current.src = audioPath;
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(console.error);
    }

    // Play scene transition sound
    const transitionSound = new Audio('/sounds/transition.mp3');
    transitionSound.volume = 0.5;
    transitionSound.play().catch(console.error);

    // Play quote audio if available
    const quoteAudio = new Audio(getQuoteAudio());
    quoteAudio.volume = 0.7;
    quoteAudio.play().catch(console.error);

    // Start transition animation
    if (isTransitioning) {
      setTimeout(onTransitionComplete, 1000);
    }
  }, [currentScene, isTransitioning, onTransitionComplete]);

  return (
    <>
      <div ref={backgroundRef} className="fixed inset-0 transition-all duration-1000" />
      <audio ref={audioRef} />
    </>
  );
};

// Helper functions for scene-specific effects
function getSceneLocation(sceneId: string): string {
  const locationMap: { [key: string]: string } = {
    'scene1': 'battlefield',
    'scene2': 'castle',
    'scene3': 'throne_room',
    'scene4': 'banquet_hall',
    'scene5': 'witches_cavern',
    // Add more scene locations as needed
  };
  return locationMap[sceneId] || 'default';
}

function getBackgroundClass(location: string): string {
  const backgroundClasses: { [key: string]: string } = {
    'battlefield': 'bg-battlefield bg-cover bg-center',
    'castle': 'bg-castle bg-cover bg-center',
    'throne_room': 'bg-throne-room bg-cover bg-center',
    'banquet_hall': 'bg-banquet-hall bg-cover bg-center',
    'witches_cavern': 'bg-witches-cavern bg-cover bg-center',
    'default': 'bg-macbeth-dark'
  };
  return backgroundClasses[location] || backgroundClasses.default;
}

function getSceneAudio(sceneId: string): string | null {
  const audioMap: { [key: string]: string } = {
    'scene1': '/sounds/battlefield.mp3',
    'scene2': '/sounds/castle.mp3',
    'scene3': '/sounds/throne-room.mp3',
    'scene4': '/sounds/banquet.mp3',
    'scene5': '/sounds/witches.mp3',
    // Add more scene audio as needed
  };
  return audioMap[sceneId] || null;
}

function getQuoteAudio(): string {
  // Return a default audio file path
  return '/audio/default-quote.mp3';
} 