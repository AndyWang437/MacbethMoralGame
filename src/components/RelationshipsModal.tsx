import React from 'react';
import { CharacterRelationships } from '../types/game';

interface RelationshipsModalProps {
  relationships: CharacterRelationships;
  onClose: () => void;
}

export const RelationshipsModal: React.FC<RelationshipsModalProps> = ({
  relationships,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-macbeth-dark p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-display text-macbeth-gold mb-4">Character Relationships</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(relationships).map(([character, stats]) => (
            <div key={character} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-display text-macbeth-gold mb-2">
                {character.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Trust</span>
                    <span className="text-macbeth-gold">{stats.trust}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-300"
                      style={{ width: `${stats.trust}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Loyalty</span>
                    <span className="text-macbeth-gold">{stats.loyalty}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${stats.loyalty}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Fear</span>
                    <span className="text-macbeth-gold">{stats.fear}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 transition-all duration-300"
                      style={{ width: `${stats.fear}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-macbeth-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}; 