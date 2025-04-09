import React from 'react';
import { Scene, CriticalAnalysis } from '../types/game';

interface CriticalAnalysisModalProps {
  criticalLens: CriticalAnalysis;
  onClose: () => void;
}

interface Theme {
  name: string;
  analysis: string;
}

interface Symbol {
  element: string;
  meaning: string;
}

export const CriticalAnalysisModal: React.FC<CriticalAnalysisModalProps> = ({
  criticalLens,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-macbeth-dark text-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-display text-macbeth-gold mb-4">Critical Analysis</h2>
        
        <div className="space-y-6">
          {/* Literary Analysis */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Literary Analysis</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-macbeth-gold">Themes</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {criticalLens.themes?.map((theme: Theme, index: number) => (
                    <li key={index} className="text-macbeth-light">
                      {theme.name}: {theme.analysis}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-macbeth-gold">Symbolism</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {criticalLens.symbolism?.map((symbol: Symbol, index: number) => (
                    <li key={index} className="text-macbeth-light">
                      {symbol.element}: {symbol.meaning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Historical Context */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Historical Context</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-macbeth-gold">Jacobean England</h4>
                <p className="text-macbeth-light">{criticalLens.historicalContext?.jacobean}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-macbeth-gold">Shakespeare's Sources</h4>
                <p className="text-macbeth-light">{criticalLens.historicalContext?.sources}</p>
              </div>
            </div>
          </section>

          {/* Critical Perspectives */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Critical Perspectives</h3>
            <div className="space-y-4">
              {criticalLens.criticQuotes.map((quote, index) => (
                <div key={index} className="border-l-4 border-macbeth-gold pl-4">
                  <p className="italic text-macbeth-light">{quote.text}</p>
                  <p className="text-sm text-macbeth-gold mt-2">- {quote.critic}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Modern Adaptations */}
          <section>
            <h3 className="text-xl font-display text-macbeth-gold mb-2">Modern Adaptations</h3>
            <div className="space-y-4">
              {criticalLens.adaptations.map((adaptation, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-macbeth-gold">{adaptation.title}</h4>
                  <p className="text-macbeth-light mt-2">{adaptation.description}</p>
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