import React, { useState } from 'react';
import { Scene, GameState, Choice } from '../types/game';
import { EnhancedUI } from './EnhancedUI';
import { CriticalAnalysisModal } from './CriticalAnalysisModal';
import { WhatIfScenariosModal } from './WhatIfScenarios';
import { CharacterPsychologyModal } from './CharacterPsychologyModal';
import { updateGameState } from '../utils/gameState';
import { getEnding } from '../utils/endings';

interface GameProps {
  scenes: Scene[];
  onEndGame: (ending: string) => void;
}

export const Game: React.FC<GameProps> = ({ scenes, onEndGame }) => {
  const [gameState, setGameState] = useState<GameState>({
    currentScene: 'scene1',
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

  const [showCriticalAnalysis, setShowCriticalAnalysis] = useState(false);
  const [showWhatIf, setShowWhatIf] = useState(false);
  const [showCharacterPsychology, setShowCharacterPsychology] = useState(false);

  const currentScene = scenes.find(s => s.id === gameState.currentScene);

  const handleChoice = (choice: Choice) => {
    if (choice.nextScene === 'end') {
      onEndGame(getEnding(gameState));
      return;
    }

    const newState = updateGameState(gameState, choice, currentScene);
    setGameState(newState);
  };

  return (
    <div className="game-container">
      <EnhancedUI
        gameState={gameState}
        onShowRelationships={() => {}}
        onShowCriticalAnalysis={() => setShowCriticalAnalysis(true)}
        onShowModernTranslation={() => {}}
        onShowWhatIf={() => setShowWhatIf(true)}
        onShowCharacterPsychology={() => setShowCharacterPsychology(true)}
      />

      {/* Main game content */}
      <div className="scene-container">
        <h1>{currentScene?.title}</h1>
        <p>{currentScene?.text}</p>
        
        {currentScene?.quote && (
          <blockquote>
            {currentScene.quote}
            <cite>{currentScene.quoteSource}</cite>
          </blockquote>
        )}

        <div className="choices">
          {currentScene?.choices.map((choice) => (
            <button
              key={choice.label}
              onClick={() => handleChoice(choice)}
              className="choice-button"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>

      {/* Modals */}
      {showCriticalAnalysis && currentScene?.criticalLens && (
        <CriticalAnalysisModal
          criticalLens={currentScene.criticalLens}
          onClose={() => setShowCriticalAnalysis(false)}
        />
      )}

      {showWhatIf && currentScene?.whatIfScenarios && (
        <WhatIfScenariosModal
          scenarios={currentScene.whatIfScenarios}
          onClose={() => setShowWhatIf(false)}
        />
      )}

      {showCharacterPsychology && (
        <CharacterPsychologyModal
          onClose={() => setShowCharacterPsychology(false)}
        />
      )}
    </div>
  );
}; 