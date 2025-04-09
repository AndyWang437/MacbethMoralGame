import React from 'react';
import { CharacterRelationships } from '../types/game';

interface CharacterRelationshipsProps {
  relationships: CharacterRelationships;
  onClose: () => void;
}

export const CharacterRelationshipsModal: React.FC<CharacterRelationshipsProps> = ({
  relationships,
  onClose
}) => {
  const renderMetricBar = (value: number) => {
    return (
      <div className="w-full h-2 bg-gray-700 rounded-full">
        <div
          className="h-full bg-macbeth-gold rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-macbeth-dark p-6 rounded-lg max-w-4xl w-full">
        <h2 className="text-2xl text-macbeth-gold mb-4">Character Relationships</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(relationships).map(([character, metrics]) => (
            <div key={character} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl text-macbeth-gold mb-4 capitalize">{character}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-300 mb-2">Trust</h4>
                  {renderMetricBar(metrics.trust)}
                </div>
                
                <div>
                  <h4 className="text-gray-300 mb-2">Loyalty</h4>
                  {renderMetricBar(metrics.loyalty)}
                </div>
                
                <div>
                  <h4 className="text-gray-300 mb-2">Fear</h4>
                  {renderMetricBar(metrics.fear)}
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