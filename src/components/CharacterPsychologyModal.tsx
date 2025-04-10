import React from 'react';
import { Scene } from '../types/game';

interface CharacterPsychologyModalProps {
  currentScene: Scene;
  onClose: () => void;
}

export const CharacterPsychologyModal: React.FC<CharacterPsychologyModalProps> = ({
  currentScene,
  onClose,
}) => {
  const getPsychologicalState = () => {
    // Determine psychological state based on scene content
    if (currentScene.id.includes('witches')) {
      return {
        state: "Initial Ambition",
        description: "Macbeth is experiencing the first stirrings of ambition, mixed with skepticism and curiosity. The witches' prophecy has planted a seed that will grow into obsession.",
        indicators: [
          "Curiosity about the prophecy",
          "Initial skepticism",
          "Growing interest in power",
          "Conflict between loyalty and ambition"
        ]
      };
    } else if (currentScene.id.includes('murder')) {
      return {
        state: "Guilt and Paranoia",
        description: "Macbeth is experiencing intense guilt and paranoia after committing murder. His psychological state is deteriorating rapidly.",
        indicators: [
          "Hallucinations (seeing the dagger)",
          "Paranoia about being discovered",
          "Intense guilt and self-doubt",
          "Growing detachment from reality"
        ]
      };
    } else if (currentScene.id.includes('banquet')) {
      return {
        state: "Psychological Breakdown",
        description: "Macbeth is experiencing a full psychological breakdown, seeing Banquo's ghost and losing touch with reality.",
        indicators: [
          "Visual hallucinations",
          "Public displays of distress",
          "Loss of control",
          "Increasing isolation"
        ]
      };
    } else {
      return {
        state: "Ambition and Conflict",
        description: "Macbeth is wrestling with his growing ambition and the moral implications of his actions.",
        indicators: [
          "Internal conflict",
          "Moral questioning",
          "Growing determination",
          "Shifting priorities"
        ]
      };
    }
  };

  const getModernAnalysis = () => {
    return {
      diagnosis: "Macbeth's psychological journey can be analyzed through modern psychological frameworks:",
      analysis: [
        {
          framework: "Cognitive Dissonance",
          description: "The conflict between Macbeth's self-image as a loyal thane and his growing ambition creates significant psychological stress."
        },
        {
          framework: "Narcissistic Personality Traits",
          description: "Macbeth's increasing focus on power and status suggests developing narcissistic tendencies."
        },
        {
          framework: "Post-Traumatic Stress",
          description: "The murders and subsequent guilt manifest in hallucinations and paranoia, similar to PTSD symptoms."
        },
        {
          framework: "Moral Disengagement",
          description: "Macbeth's gradual acceptance of violence shows the process of moral disengagement, where ethical standards are progressively lowered."
        }
      ]
    };
  };

  const getCharacterDevelopment = () => {
    return {
      stages: [
        {
          stage: "Initial State",
          description: "Loyal thane, respected warrior, content with his position"
        },
        {
          stage: "Ambition Awakening",
          description: "The prophecy plants seeds of ambition and desire for power"
        },
        {
          stage: "Moral Conflict",
          description: "Struggles with the morality of his actions while pursuing power"
        },
        {
          stage: "Descent into Tyranny",
          description: "Increasing paranoia and willingness to commit violence to maintain power"
        },
        {
          stage: "Psychological Breakdown",
          description: "Loss of touch with reality, hallucinations, and isolation"
        }
      ]
    };
  };

  const psychologicalState = getPsychologicalState();
  const modernAnalysis = getModernAnalysis();
  const characterDevelopment = getCharacterDevelopment();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-macbeth-dark text-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-display text-macbeth-gold mb-4">Character Psychology Analysis</h2>
        
        <div className="space-y-6">
          {/* Current Psychological State */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Current Psychological State</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-macbeth-gold mb-2">{psychologicalState.state}</h4>
              <p className="text-gray-300 mb-4">{psychologicalState.description}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {psychologicalState.indicators.map((indicator, index) => (
                  <li key={index}>{indicator}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Modern Psychological Analysis */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Modern Psychological Perspective</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300 mb-4">{modernAnalysis.diagnosis}</p>
              <div className="space-y-4">
                {modernAnalysis.analysis.map((item, index) => (
                  <div key={index} className="border-l-2 border-macbeth-gold pl-4">
                    <h4 className="text-macbeth-gold">{item.framework}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Character Development */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Character Development</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="space-y-4">
                {characterDevelopment.stages.map((stage, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-macbeth-gold flex items-center justify-center text-macbeth-dark font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-macbeth-gold">{stage.stage}</h4>
                      <p className="text-gray-300">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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