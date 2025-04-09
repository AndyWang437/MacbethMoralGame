import React, { useState, useEffect, useRef } from 'react';
import { Scene, GameState, Collectible, CharacterRelationships, CriticalAnalysis, ModernTranslation, Choice } from '../types/game';
import { EnhancedUI, CollectiblesModal, PathHistoryModal, RelationshipsModal } from './EnhancedUI';
import { CriticalAnalysisModal, ModernTranslationModal } from './CriticalAnalysis';
import { WhatIfScenariosModal } from './WhatIfScenarios';
import { CharacterPsychologyModal } from './CharacterPsychologyModal';
import { updateGameState } from '../utils/gameState';
import { getEnding } from '../utils/endings';
import { getModernTranslation } from '../utils/translations';
import { getCharacterPortrait } from '../utils/characters';
import { AudioManager } from '../utils/audioEffects';

// Audio files
const witchWhispers = new Audio('/audio/witch-whispers.mp3');
const bloodDrip = new Audio('/audio/blood-drip.mp3');

interface GameProps {
  scenes: Scene[];
  onEndGame: (ending: string) => void;
}

export const Game: React.FC<GameProps> = ({ scenes, onEndGame }) => {
  const [gameState, setGameState] = useState<GameState>({
    currentScene: 'witches_prophecy',
    ambition: 50,
    guilt: 0,
    pathHistory: [],
    collectibles: [],
    relationships: {
      'Lady Macbeth': { trust: 50, loyalty: 50, fear: 0 },
      'Banquo': { trust: 50, loyalty: 50, fear: 0 },
      'Duncan': { trust: 50, loyalty: 50, fear: 0 },
      'Macduff': { trust: 50, loyalty: 50, fear: 0 },
    }
  });

  const [showCollectibles, setShowCollectibles] = useState(false);
  const [showPathHistory, setShowPathHistory] = useState(false);
  const [showRelationships, setShowRelationships] = useState(false);
  const [showCriticalAnalysis, setShowCriticalAnalysis] = useState(false);
  const [showModernTranslation, setShowModernTranslation] = useState(false);
  const [showWhatIf, setShowWhatIf] = useState(false);
  const [showCharacterPsychology, setShowCharacterPsychology] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [bloodSplatters, setBloodSplatters] = useState<Array<{id: number, x: number, y: number}>>([]);
  const bloodSplatterRef = useRef<number>(0);
  const audioManager = useRef(AudioManager.getInstance());

  // Visual effects based on guilt and ambition
  useEffect(() => {
    const updateVisualEffects = () => {
      // Add blood splatters when guilt is high
      if (gameState.guilt > 70 && Math.random() < 0.1) {
        const newSplatter = {
          id: bloodSplatterRef.current++,
          x: Math.random() * 100,
          y: Math.random() * 100
        };
        setBloodSplatters(prev => [...prev, newSplatter]);
        audioManager.current.playBloodDrip();
      }

      // Remove old blood splatters
      if (bloodSplatters.length > 10) {
        setBloodSplatters(prev => prev.slice(1));
      }
    };

    const interval = setInterval(updateVisualEffects, 5000);
    return () => clearInterval(interval);
  }, [gameState.guilt, bloodSplatters]);

  // Audio effects for witch whispers
  useEffect(() => {
    audioManager.current.updateEffects(gameState);
    return () => {
      audioManager.current.stopAll();
    };
  }, [gameState.ambition]);

  const currentScene = scenes.find(s => s.id === gameState.currentScene);

  // Calculate visual effects based on ambition and guilt
  const getVisualEffects = () => {
    const ambitionEffect = Math.max(0, (gameState.ambition - 50) / 50);
    const guiltEffect = Math.max(0, (gameState.guilt - 50) / 50);
    
    return {
      redTint: ambitionEffect * 0.5, // 50% max red tint
      blueTint: guiltEffect * 0.5, // 50% max blue tint
      blur: guiltEffect * 3, // 3px max blur
      brightness: 1 - (guiltEffect * 0.3) // 30% max darkening
    };
  };

  const shouldShowScene = (scene: Scene) => {
    if (scene.id === 'banquos_ghost' && gameState.ambition < 70) {
      return false;
    }
    if (!scene.visibilityCondition) return true;
    
    const { type, threshold, operator } = scene.visibilityCondition;
    const value = type === 'ambition' ? gameState.ambition : gameState.guilt;
    
    switch (operator) {
      case '>': return value > threshold;
      case '<': return value < threshold;
      case '>=': return value >= threshold;
      case '<=': return value <= threshold;
      default: return true;
    }
  };

  const handleChoice = (choice: Choice) => {
    if (choice.nextScene === 'end') {
      onEndGame(getEnding(gameState));
      return;
    }

    // Check if the next scene should be visible
    const nextScene = scenes.find(s => s.id === choice.nextScene);
    if (nextScene && !shouldShowScene(nextScene)) {
      // If the scene shouldn't be visible, find an alternative scene
      const alternativeScene = scenes.find(s => s.id === nextScene.alternativeSceneId);
      if (alternativeScene) {
        choice.nextScene = alternativeScene.id;
      }
    }

    console.log('Current guilt:', gameState.guilt);
    console.log('Choice guilt change:', choice.guiltChange);
    const newState = updateGameState(gameState, choice, currentScene);
    console.log('New guilt:', newState.guilt);
    setGameState(newState);
  };

  const getBackgroundColor = () => {
    const guiltIntensity = gameState.guilt / 100;
    const ambitionIntensity = gameState.ambition / 100;
    
    return {
      backgroundColor: `rgba(139, 0, 0, ${guiltIntensity * 0.3})`,
      filter: `brightness(${1 - (ambitionIntensity * 0.2)})`
    };
  };

  const visualEffects = getVisualEffects();

  if (!currentScene) return null;

  return (
    <div 
      className="min-h-screen bg-macbeth-dark text-white relative transition-all duration-500"
      style={{
        ...getBackgroundColor(),
        filter: gameState.ambition > 70 ? 'brightness(0.8)' : 'brightness(1)'
      }}
    >
      {/* Blood splatter effects */}
      {bloodSplatters.map(splatter => (
        <div
          key={splatter.id}
          className="fixed w-32 h-32 blood-splatter"
          style={{
            left: `${splatter.x}%`,
            top: `${splatter.y}%`,
            backgroundImage: 'url(/images/blood-splatter.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* Ambition effect overlay */}
      {gameState.ambition > 70 && (
        <div 
          className="fixed inset-0 ambition-effect"
          style={{
            background: 'radial-gradient(circle, rgba(139,0,0,0.1) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Enhanced UI */}
      <EnhancedUI
        gameState={gameState}
        onShowCollectibles={() => setShowCollectibles(true)}
        onShowPathHistory={() => setShowPathHistory(true)}
        onShowRelationships={() => setShowRelationships(true)}
        onShowCriticalAnalysis={() => setShowCriticalAnalysis(true)}
        onShowModernTranslation={() => setShowModernTranslation(true)}
        onShowWhatIf={() => setShowWhatIf(true)}
        onShowCharacterPsychology={() => setShowCharacterPsychology(true)}
        onShowSettings={() => setShowSettings(true)}
        onShowHelp={() => setShowHelp(true)}
      />

      {/* Main content */}
      <div className="max-w-4xl mx-auto pt-32 px-4 pb-8">
        <h1 className="text-3xl font-serif text-macbeth-gold mb-4">{currentScene.title}</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-macbeth-gold">
          <p className="text-lg mb-4">{currentScene.text}</p>
          {currentScene.quote && (
            <blockquote className="border-l-4 border-macbeth-gold pl-4 italic mb-4">
              {currentScene.quote}
            </blockquote>
          )}
          <div className="space-y-4">
            {currentScene.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                className="w-full bg-macbeth-dark hover:bg-macbeth-red text-white px-6 py-3 rounded-lg transition-colors border border-macbeth-gold hover:border-macbeth-red"
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showCollectibles && (
        <CollectiblesModal
          collectibles={gameState.collectibles}
          onClose={() => setShowCollectibles(false)}
        />
      )}

      {showPathHistory && (
        <PathHistoryModal
          pathHistory={gameState.pathHistory}
          onClose={() => setShowPathHistory(false)}
        />
      )}

      {showRelationships && (
        <RelationshipsModal
          relationships={gameState.relationships}
          onClose={() => setShowRelationships(false)}
        />
      )}

      {showCriticalAnalysis && currentScene.criticalLens && (
        <CriticalAnalysisModal
          analysis={currentScene.criticalLens}
          quote={currentScene.quote || ''}
          onClose={() => setShowCriticalAnalysis(false)}
        />
      )}

      {showModernTranslation && currentScene.modernTranslation && (
        <ModernTranslationModal
          translation={currentScene.modernTranslation}
          onClose={() => setShowModernTranslation(false)}
        />
      )}

      {showWhatIf && (
        <WhatIfScenariosModal
          scenarios={currentScene.whatIfScenarios || []}
          onClose={() => setShowWhatIf(false)}
        />
      )}

      {showCharacterPsychology && (
        <CharacterPsychologyModal
          scene={currentScene}
          onClose={() => setShowCharacterPsychology(false)}
        />
      )}

      {currentScene.quote && (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          <img
            src={getCharacterPortrait(currentScene.quoteSource || 'default')}
            alt={currentScene.quoteSource || 'Character'}
            className="w-16 h-16 rounded-full border-2 border-macbeth-gold"
          />
        </div>
      )}
    </div>
  );
}; 