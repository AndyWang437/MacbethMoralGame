import React, { useState } from 'react';

interface WhatIfScenario {
  id: string;
  title: string;
  description: string;
  originalChoice: string;
  alternativeChoice: string;
  consequences: string[];
}

interface WhatIfScenariosProps {
  scenarios: WhatIfScenario[];
  onClose: () => void;
}

export const WhatIfScenariosModal: React.FC<WhatIfScenariosProps> = ({
  scenarios,
  onClose
}) => {
  const [activeScenario, setActiveScenario] = useState<WhatIfScenario | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-macbeth-dark p-6 rounded-lg max-w-4xl w-full">
        <h2 className="text-2xl text-macbeth-gold mb-4">What If? Scenarios</h2>

        {!activeScenario ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(scenario)}
                className="bg-gray-800 p-4 rounded-lg text-left hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl text-macbeth-gold mb-2">{scenario.title}</h3>
                <p className="text-gray-300">{scenario.description}</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl text-macbeth-gold mb-4">{activeScenario.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-gray-300 mb-2">Original Choice</h4>
                  <p className="text-gray-400 italic">{activeScenario.originalChoice}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-300 mb-2">Alternative Choice</h4>
                  <p className="text-gray-400 italic">{activeScenario.alternativeChoice}</p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-gray-300 mb-2">Possible Consequences</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {activeScenario.consequences.map((consequence, index) => (
                    <li key={index}>{consequence}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveScenario(null)}
                className="bg-gray-800 text-macbeth-gold px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Scenarios
              </button>
              <button
                onClick={onClose}
                className="bg-macbeth-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 