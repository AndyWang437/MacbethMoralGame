import React from 'react';
import { Scene } from '../types/game';

interface CharacterPsychologyModalProps {
  onClose: () => void;
}

interface CharacterMotivation {
  character: string;
  analysis: string;
  quote: string;
}

interface PsychologicalState {
  character: string;
  analysis: string;
  mentalState: string;
}

interface ModernPerspective {
  character: string;
  analysis: string;
  diagnosis: string;
}

interface CharacterDevelopment {
  character: string;
  analysis: string;
  turningPoint: string;
}

export const CharacterPsychologyModal: React.FC<CharacterPsychologyModalProps> = ({
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-macbeth-dark text-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-display text-macbeth-gold mb-4">Character Psychology Analysis</h2>
        
        <div className="space-y-6">
          {/* Character Motivations */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Motivations & Desires</h3>
            <div className="space-y-4">
              {/* Character Motivations content */}
            </div>
          </section>

          {/* Psychological State */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Psychological State</h3>
            <div className="space-y-4">
              {/* Psychological State content */}
            </div>
          </section>

          {/* Modern Psychological Analysis */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Modern Psychological Perspective</h3>
            <div className="space-y-4">
              {/* Modern Psychological Analysis content */}
            </div>
          </section>

          {/* Character Development */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Character Development</h3>
            <div className="space-y-4">
              {/* Character Development content */}
            </div>
          </section>
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