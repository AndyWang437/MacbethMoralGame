import React from 'react';
import { Scene } from '../types/game';

interface CharacterPsychologyModalProps {
  scene: Scene;
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

export const CharacterPsychologyModal: React.FC<CharacterPsychologyModalProps> = ({ scene, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-macbeth-dark text-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-display text-macbeth-gold mb-4">Character Psychology Analysis</h2>
        
        <div className="space-y-6">
          {/* Character Motivations */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Motivations & Desires</h3>
            <div className="space-y-4">
              {scene.characterAnalysis?.motivations?.map((motivation: CharacterMotivation, index: number) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-macbeth-gold">{motivation.character}</h4>
                  <p className="text-macbeth-light mt-2">{motivation.analysis}</p>
                  <div className="mt-2 text-sm text-macbeth-gold">
                    Supporting Quote: <span className="italic">{motivation.quote}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Psychological State */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Psychological State</h3>
            <div className="space-y-4">
              {scene.characterAnalysis?.psychologicalState?.map((state: PsychologicalState, index: number) => (
                <div key={index} className="border-l-4 border-macbeth-gold pl-4">
                  <h4 className="font-bold text-macbeth-gold">{state.character}</h4>
                  <p className="text-macbeth-light mt-2">{state.analysis}</p>
                  <div className="mt-2">
                    <span className="text-sm text-macbeth-gold">Mental State: </span>
                    <span className="text-macbeth-light">{state.mentalState}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modern Psychological Analysis */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Modern Psychological Perspective</h3>
            <div className="space-y-4">
              {scene.characterAnalysis?.modernPerspective?.map((perspective: ModernPerspective, index: number) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-macbeth-gold">{perspective.character}</h4>
                  <p className="text-macbeth-light mt-2">{perspective.analysis}</p>
                  <div className="mt-2 text-sm text-macbeth-gold">
                    Possible Diagnosis: {perspective.diagnosis}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Character Development */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Character Development</h3>
            <div className="space-y-4">
              {scene.characterAnalysis?.development?.map((dev: CharacterDevelopment, index: number) => (
                <div key={index} className="border-l-4 border-macbeth-gold pl-4">
                  <h4 className="font-bold text-macbeth-gold">{dev.character}</h4>
                  <p className="text-macbeth-light mt-2">{dev.analysis}</p>
                  <div className="mt-2">
                    <span className="text-sm text-macbeth-gold">Key Turning Point: </span>
                    <span className="text-macbeth-light">{dev.turningPoint}</span>
                  </div>
                </div>
              ))}
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