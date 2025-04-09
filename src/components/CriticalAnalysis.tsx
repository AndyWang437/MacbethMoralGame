import React, { useState } from 'react';
import { CriticalAnalysis, ModernTranslation } from '../types/game';

interface CriticalAnalysisProps {
  analysis: CriticalAnalysis;
  quote: string;
  onClose: () => void;
}

export const CriticalAnalysisModal: React.FC<CriticalAnalysisProps> = ({
  analysis,
  quote,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'interpretations' | 'critics' | 'adaptations'>('interpretations');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-macbeth-dark p-6 rounded-lg max-w-4xl w-full">
        <h2 className="text-2xl text-macbeth-gold mb-4">Critical Analysis</h2>
        
        {/* Tabs */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActiveTab('interpretations')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'interpretations'
                ? 'bg-macbeth-red text-white'
                : 'bg-gray-800 text-macbeth-gold'
            }`}
          >
            Interpretations
          </button>
          <button
            onClick={() => setActiveTab('critics')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'critics'
                ? 'bg-macbeth-red text-white'
                : 'bg-gray-800 text-macbeth-gold'
            }`}
          >
            Critics
          </button>
          <button
            onClick={() => setActiveTab('adaptations')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'adaptations'
                ? 'bg-macbeth-red text-white'
                : 'bg-gray-800 text-macbeth-gold'
            }`}
          >
            Adaptations
          </button>
        </div>

        {/* Content */}
        <div className="bg-gray-800 p-4 rounded-lg">
          {activeTab === 'interpretations' && (
            <div className="space-y-4">
              {analysis.interpretations.map((interpretation, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <h3 className="text-macbeth-gold text-lg">{interpretation.title}</h3>
                  <p className="text-gray-300">{interpretation.description}</p>
                  <p className="text-gray-400 text-sm mt-2">- {interpretation.critic}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'critics' && (
            <div className="space-y-4">
              {analysis.criticQuotes.map((quote, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <blockquote className="text-gray-300 italic">"{quote.text}"</blockquote>
                  <p className="text-gray-400 text-sm mt-2">
                    - {quote.critic}{quote.source ? `, ${quote.source}` : ''}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'adaptations' && (
            <div className="space-y-4">
              {analysis.adaptations.map((adaptation, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <h3 className="text-macbeth-gold text-lg">
                    {adaptation.title}
                  </h3>
                  <p className="text-gray-300">{adaptation.description}</p>
                  {adaptation.differences && adaptation.differences.length > 0 && (
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      {adaptation.differences.map((difference, i) => (
                        <li key={i}>{difference}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
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

interface ModernTranslationProps {
  translation: ModernTranslation;
  onClose: () => void;
}

export const ModernTranslationModal: React.FC<ModernTranslationProps> = ({
  translation,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-macbeth-dark p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl text-macbeth-gold mb-4">Modern Translation</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-macbeth-gold mb-2">Original Text</h3>
            <p className="text-gray-300 italic">{translation.original}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-macbeth-gold mb-2">Modern Translation</h3>
            <p className="text-gray-300">{translation.modern}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-macbeth-gold mb-2">Explanation</h3>
            <p className="text-gray-300">{translation.explanation}</p>
          </div>
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