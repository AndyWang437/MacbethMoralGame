import React, { useEffect, useRef, useState } from 'react';
import { Scene, GameState } from '../types/game';
import { getBloodSplatterDataURI, getWitchHallucinationDataURI, getBanquoGhostDataURI, getWitchWhispers } from '../utils/assetHelpers';

interface GameEffectsProps {
  currentScene: Scene;
  isTransitioning: boolean;
  gameState: GameState;
  onTransitionComplete: () => void;
}

export const GameEffects: React.FC<GameEffectsProps> = ({
  currentScene,
  isTransitioning,
  gameState,
  onTransitionComplete
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [bloodCount, setBloodCount] = useState<number>(0); // Start with no blood
  const [showHallucination, setShowHallucination] = useState<boolean>(false); // Don't show initially
  const [showGhost, setShowGhost] = useState<boolean>(false); // Don't show initially
  const [whisperText, setWhisperText] = useState<string>("");
  
  // Get data URIs for our visual effects
  const bloodSplatterURI = getBloodSplatterDataURI();
  const witchHallucinationURI = getWitchHallucinationDataURI();
  const banquoGhostURI = getBanquoGhostDataURI();
  const witchWhispers = getWitchWhispers();
  
  // Determine grayscale and blur levels based on ambition
  const getAmbitionEffects = () => {
    const { ambition } = gameState;
    const grayscaleValue = Math.min(ambition / 1.25, 80); // Max 80% grayscale
    const blurValue = ambition > 65 ? Math.min((ambition - 65) / 10, 1) : 0; // Blur at high ambition
    
    return {
      filter: `grayscale(${grayscaleValue}%) blur(${blurValue}px)`,
      transition: 'filter 1.5s ease-in-out'
    };
  };

  // Show blood splatters based on ambition level
  useEffect(() => {
    // Add more blood as ambition increases - gradually scale from none to many
    const targetBloodCount = Math.floor(gameState.ambition / 10); // 0 to ~10 bloodstains as ambition increases
    
    if (targetBloodCount > bloodCount) {
      // Add blood stains gradually with a delay
      const timer = setTimeout(() => {
        setBloodCount(prev => prev + 1);
      }, 1000 + Math.random() * 3000); // Random delay for more natural appearance
      
      return () => clearTimeout(timer);
    }
  }, [gameState.ambition, bloodCount]);
  
  // Trigger hallucinations based on ambition
  useEffect(() => {
    // Higher ambition means more frequent hallucinations
    if (gameState.ambition > 60) {
      const hallucInterval = setInterval(() => {
        const shouldShow = Math.random() < (gameState.ambition / 200); // Probability increases with ambition
        if (shouldShow) {
          setShowHallucination(true);
          setTimeout(() => setShowHallucination(false), 3000 + Math.random() * 2000);
        }
      }, 10000); // Check every 10 seconds
      
      return () => clearInterval(hallucInterval);
    }
  }, [gameState.ambition]);
  
  // Show witch whispers based on ambition
  useEffect(() => {
    if (gameState.ambition > 65) {
      const whisperInterval = setInterval(() => {
        const shouldShow = Math.random() < (gameState.ambition / 150);
        if (shouldShow) {
          // Select a random whisper
          const randomIndex = Math.floor(Math.random() * witchWhispers.length);
          setWhisperText(witchWhispers[randomIndex]);
          
          // Hide after a delay
          setTimeout(() => {
            setWhisperText("");
          }, 4000);
        }
      }, 15000);
      
      return () => clearInterval(whisperInterval);
    }
  }, [gameState.ambition, witchWhispers]);
  
  // Show Banquo's ghost at the banquet if ambition is high
  useEffect(() => {
    // Only show ghost in the banquet scene (scene5A) when ambition is high
    if (currentScene.id === 'scene5A' && gameState.ambition > 75) {
      setShowGhost(true);
    } else {
      setShowGhost(false);
    }
  }, [currentScene, gameState.ambition]);

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

    // Start transition animation
    if (isTransitioning) {
      setTimeout(onTransitionComplete, 700);
    }
  }, [currentScene, isTransitioning, onTransitionComplete, gameState.ambition]);

  // Create array of bloodstains
  const bloodStains = Array.from({ length: bloodCount }).map((_, index) => {
    const size = 100 + Math.random() * 150; // Random size
    const top = Math.random() * 100; // Random vertical position
    const left = Math.random() * 100; // Random horizontal position
    const opacity = 0.2 + (Math.random() * 0.3) + (gameState.ambition / 400); // Higher opacity with higher ambition
    const rotation = Math.random() * 360; // Random rotation
    
    const bloodStyle = {
      position: 'fixed' as const,
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      zIndex: 5,
      transform: `rotate(${rotation}deg)`,
      backgroundImage: `url('/images/blood-splatter.svg')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      pointerEvents: 'none' as const,
    };
    
    return <div key={`blood-${index}`} className="blood-splatter" style={bloodStyle} />;
  });

  return (
    <>
      <div 
        ref={backgroundRef} 
        className="fixed inset-0 transition-all duration-1000"
        style={getAmbitionEffects()} 
      />
      
      {/* Blood stains */}
      {bloodStains}
      
      {/* Hallucinations */}
      {showHallucination && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="absolute animate-float opacity-60" style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
            transform: 'translate(-50%, -50%)',
          }}>
            <img 
              src="/images/witch-hallucination.svg" 
              alt="" 
              className="w-48 h-48 animate-pulse-slow"
            />
          </div>
        </div>
      )}
      
      {/* Witch whispers text */}
      {whisperText && (
        <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center">
          <p className="text-macbeth-gold opacity-80 text-3xl font-serif tracking-widest italic glitch-text">
            {whisperText}
          </p>
        </div>
      )}
      
      {/* Banquo's ghost - only shown in banquet scene with high ambition */}
      {showGhost && (
        <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center">
          <div className="relative">
            <img 
              src="/images/banquo-ghost.svg" 
              alt="" 
              className="w-72 h-72 opacity-70 animate-pulse-slow"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 30, 60, 0.7))',
              }}
            />
          </div>
        </div>
      )}
      
      <audio ref={audioRef} />
    </>
  );
};

// Helper functions for scene-specific effects
function getSceneLocation(sceneId: string): string {
  const locationMap: { [key: string]: string } = {
    'scene1A': 'battlefield',
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
    'scene1A': '/sounds/battlefield.mp3',
    'scene1': '/sounds/battlefield.mp3',
    'scene2': '/sounds/castle.mp3',
    'scene3': '/sounds/throne-room.mp3',
    'scene4': '/sounds/banquet.mp3',
    'scene5': '/sounds/witches.mp3',
    // Add more scene audio as needed
  };
  return audioMap[sceneId] || null;
} 