import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { scenes } from '../data/scenes';
import { Scene, GameState } from '../types/game';
import { EnhancedUI, CollectiblesModal, PathHistoryModal, RelationshipsModal } from '../components/EnhancedUI';
import { CriticalAnalysisModal, ModernTranslationModal } from '../components/CriticalAnalysis';
import { WhatIfScenariosModal } from '../components/WhatIfScenarios';
import { GameEffects } from '../components/GameEffects';
import { getCharacterPortrait } from '../utils/characters';

export default function Game() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>({
    currentScene: 'scene1',
    ambition: 50,
    guilt: 0,
    pathHistory: [],
    collectibles: [],
    relationships: {
      'Lady Macbeth': { trust: 100, loyalty: 100, fear: 0 },
      'Banquo': { trust: 100, loyalty: 100, fear: 0 },
      'Duncan': { trust: 100, loyalty: 100, fear: 0 },
      'Macduff': { trust: 100, loyalty: 100, fear: 0 },
      'Malcolm': { trust: 100, loyalty: 100, fear: 0 }
    }
  });

  const [showCollectibles, setShowCollectibles] = useState(false);
  const [showPathHistory, setShowPathHistory] = useState(false);
  const [showRelationships, setShowRelationships] = useState(false);
  const [showCriticalAnalysis, setShowCriticalAnalysis] = useState(false);
  const [showModernTranslation, setShowModernTranslation] = useState(false);
  const [showWhatIf, setShowWhatIf] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showCharacterPsychology, setShowCharacterPsychology] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const currentScene = scenes.find(scene => scene.id === gameState.currentScene);

  const handleChoice = (choice: { nextScene: string; ambitionChange: number; guiltChange: number }) => {
    setIsTransitioning(true);
    setGameState(prev => ({
      ...prev,
      currentScene: choice.nextScene,
      ambition: Math.max(0, Math.min(100, prev.ambition + choice.ambitionChange)),
      guilt: Math.max(0, Math.min(100, prev.guilt + choice.guiltChange)),
      pathHistory: [...prev.pathHistory, prev.currentScene]
    }));
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  useEffect(() => {
    if (gameState.ambition <= 0 || gameState.ambition >= 100) {
      navigate('/ending', { state: { gameState } });
    }
  }, [gameState, navigate]);

  if (!currentScene) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto relative">
      <GameEffects
        currentScene={currentScene}
        isTransitioning={isTransitioning}
        onTransitionComplete={handleTransitionComplete}
      />
      
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

      <div className={`relative z-10 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="scene-container">
          <h1 className="title-text mb-6">
            {currentScene.title}
          </h1>

          <p className="subtitle-text">
            {currentScene.text}
          </p>

          {currentScene.quote && (
            <div className="quote-box">
              <div className="flex items-start gap-4">
                <img
                  src={getCharacterPortrait(currentScene.quoteSource || 'default')}
                  alt={currentScene.quoteSource || 'Character'}
                  className="w-16 h-16 rounded-full border-2 border-macbeth-gold"
                />
                <div>
                  <p className="text-macbeth-gold flame-effect">{currentScene.quote}</p>
                  {currentScene.quoteSource && (
                    <p className="text-sm mt-2 text-macbeth-light/70">{currentScene.quoteSource}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4 mt-8">
            {currentScene.choices.map((choice) => (
              <button
                key={choice.label}
                onClick={() => handleChoice({
                  ...choice,
                  guiltChange: choice.guiltChange || 0
                })}
                className="choice-button w-full text-left transition-transform hover:scale-105"
              >
                <span className="font-bold mr-2">{choice.label}.</span>
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showCollectibles && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <CollectiblesModal
            collectibles={gameState.collectibles}
            onClose={() => setShowCollectibles(false)}
          />
        </div>
      )}

      {showPathHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <PathHistoryModal
            pathHistory={gameState.pathHistory}
            onClose={() => setShowPathHistory(false)}
          />
        </div>
      )}

      {showRelationships && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <RelationshipsModal
            relationships={gameState.relationships}
            onClose={() => setShowRelationships(false)}
          />
        </div>
      )}

      {showCriticalAnalysis && currentScene.criticalLens && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <CriticalAnalysisModal
            analysis={currentScene.criticalLens}
            quote={currentScene.quote || ''}
            onClose={() => setShowCriticalAnalysis(false)}
          />
        </div>
      )}

      {showModernTranslation && currentScene.modernTranslation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ModernTranslationModal
            translation={currentScene.modernTranslation}
            onClose={() => setShowModernTranslation(false)}
          />
        </div>
      )}

      {showWhatIf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <WhatIfScenariosModal
            scenarios={currentScene.whatIfScenarios || []}
            onClose={() => setShowWhatIf(false)}
          />
        </div>
      )}
    </div>
  );
} 