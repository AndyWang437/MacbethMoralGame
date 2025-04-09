import React, { useState } from 'react';
import { GameState, Collectible, CharacterRelationships } from '../types/game';

interface EnhancedUIProps {
  gameState: GameState;
  onShowRelationships: () => void;
  onShowCriticalAnalysis: () => void;
  onShowModernTranslation: () => void;
  onShowWhatIf: () => void;
  onShowCharacterPsychology: () => void;
}

export const EnhancedUI: React.FC<EnhancedUIProps> = ({
  gameState,
  onShowRelationships,
  onShowCriticalAnalysis,
  onShowModernTranslation,
  onShowWhatIf,
  onShowCharacterPsychology,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-macbeth-dark border-b border-macbeth-gold p-4 shadow-xl z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Stats Section */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-macbeth-gold font-serif">Ambition:</span>
              <div className="w-32 h-4 bg-gray-800 rounded-full overflow-hidden border border-macbeth-gold hover:border-macbeth-red">
                <div
                  className="h-full bg-gradient-to-r from-macbeth-red to-red-600 transition-all duration-300"
                  style={{ width: `${gameState.ambition}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-macbeth-gold font-serif">Guilt:</span>
              <div className="w-32 h-4 bg-gray-800 rounded-full overflow-hidden border border-macbeth-gold hover:border-macbeth-red">
                <div
                  className="h-full bg-gradient-to-r from-macbeth-blue to-blue-600 transition-all duration-300"
                  style={{ width: `${gameState.guilt}%` }}
                />
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={onShowRelationships}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-macbeth-gold hover:border-macbeth-red text-sm"
            >
              <span className="flex items-center gap-1">
                <span className="text-macbeth-gold">👥</span>
                Relationships
              </span>
            </button>
            <button
              onClick={onShowCriticalAnalysis}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-macbeth-gold hover:border-macbeth-red text-sm"
            >
              <span className="flex items-center gap-1">
                <span className="text-macbeth-gold">📖</span>
                Critical Analysis
              </span>
            </button>
            <button
              onClick={onShowModernTranslation}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-macbeth-gold hover:border-macbeth-red text-sm"
            >
              <span className="flex items-center gap-1">
                <span className="text-macbeth-gold">🔄</span>
                Modern Translation
              </span>
            </button>
            <button
              onClick={onShowWhatIf}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-macbeth-gold hover:border-macbeth-red text-sm"
            >
              <span className="flex items-center gap-1">
                <span className="text-macbeth-gold">❓</span>
                What If?
              </span>
            </button>
            <button
              onClick={onShowCharacterPsychology}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-macbeth-gold hover:border-macbeth-red text-sm"
            >
              <span className="flex items-center gap-1">
                <span className="text-macbeth-gold">🧠</span>
                Character Psychology
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CollectiblesModal: React.FC<{
  collectibles: Collectible[];
  onClose: () => void;
}> = ({ collectibles, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-macbeth-dark p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl text-macbeth-gold mb-4">Your Collectibles</h2>
        <div className="grid grid-cols-2 gap-4">
          {collectibles.map((collectible) => (
            <div key={collectible.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-macbeth-gold">{collectible.title}</h3>
              <p className="text-gray-300">{collectible.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-macbeth-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export const PathHistoryModal: React.FC<{
  pathHistory: string[];
  onClose: () => void;
}> = ({ pathHistory, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-macbeth-dark p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl text-macbeth-gold mb-4">Your Journey</h2>
        <div className="space-y-2">
          {pathHistory.map((scene, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg">
              <span className="text-macbeth-gold">Scene {index + 1}:</span> {scene}
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-macbeth-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export const RelationshipsModal: React.FC<{
  relationships: CharacterRelationships;
  onClose: () => void;
}> = ({ relationships, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-macbeth-dark p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl text-macbeth-gold mb-4">Character Relationships</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(relationships).map(([character, stats]) => (
            <div key={character} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-macbeth-gold">{character}</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-300">Trust:</span>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${stats.trust}%` }}
                    />
                  </div>
                </div>
                <div>
                  <span className="text-gray-300">Loyalty:</span>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${stats.loyalty}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-macbeth-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};