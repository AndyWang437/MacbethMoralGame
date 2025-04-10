import React, { useState } from 'react';
import { Scene, GameState, Choice } from '../types/game';
import { EnhancedUI } from './EnhancedUI';
import { CriticalAnalysisModal } from './CriticalAnalysisModal';
import { WhatIfScenariosModal } from './WhatIfScenarios';
import { CharacterPsychologyModal } from './CharacterPsychologyModal';
import { updateGameState, initialGameState } from '../utils/gameState';
import { getEndingDescription } from '../utils/endings';
import { RelationshipsModal } from './RelationshipsModal';

const determineEnding = (gameState: GameState): string => {
  if (gameState.guilt >= 80) return 'tyrant';
  if (gameState.guilt >= 50) return 'tragic';
  if (gameState.guilt >= 20) return 'balanced';
  return 'redemption';
};

interface GameProps {
  scenes: Scene[];
  onEndGame: (ending: string) => void;
}

export const Game: React.FC<GameProps> = ({ scenes, onEndGame }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const [showCriticalAnalysis, setShowCriticalAnalysis] = useState(false);
  const [showWhatIf, setShowWhatIf] = useState(false);
  const [showCharacterPsychology, setShowCharacterPsychology] = useState(false);
  const [showRelationships, setShowRelationships] = useState(false);
  const [showCollectibles, setShowCollectibles] = useState(false);
  const [showPathHistory, setShowPathHistory] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const currentScene = scenes.find(s => s.id === gameState.currentScene);

  const handleChoice = (choice: Choice) => {
    console.log('=== HANDLE CHOICE CALLED ===');
    console.log('Choice object:', JSON.stringify(choice, null, 2));
    console.log('Current game state:', JSON.stringify(gameState, null, 2));
    
    if (choice.nextScene === 'end') {
      const endingType = determineEnding(gameState);
      onEndGame(getEndingDescription(endingType));
      return;
    }

    const newState = updateGameState(gameState, choice, currentScene);
    console.log('=== NEW STATE CREATED ===');
    console.log('New state:', JSON.stringify(newState, null, 2));
    setGameState(newState);
  };

  return (
    <div className="game-container">
      <EnhancedUI
        gameState={gameState}
        onShowRelationships={() => setShowRelationships(true)}
        onShowCriticalAnalysis={() => setShowCriticalAnalysis(true)}
        onShowModernTranslation={() => {}}
        onShowWhatIf={() => setShowWhatIf(true)}
        onShowCharacterPsychology={() => setShowCharacterPsychology(true)}
        onShowCollectibles={() => setShowCollectibles(true)}
        onShowPathHistory={() => setShowPathHistory(true)}
        onShowSettings={() => setShowSettings(true)}
        onShowHelp={() => setShowHelp(true)}
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
              onClick={() => {
                console.log('=== CHOICE BUTTON CLICKED ===');
                console.log('Choice clicked:', choice.label);
                handleChoice(choice);
              }}
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
          currentScene={currentScene}
          onClose={() => setShowCharacterPsychology(false)}
        />
      )}

      {showRelationships && (
        <RelationshipsModal
          relationships={gameState.relationships}
          onClose={() => setShowRelationships(false)}
        />
      )}
    </div>
  );
}; 