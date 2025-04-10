export interface Choice {
  label: string;
  text: string;
  nextScene: string;
  ambitionChange: number;
  guiltChange?: number;
}

export interface Scene {
  id: string;
  title: string;
  text: string;
  quote?: string;
  quoteSource?: string;
  choices: Choice[];
  background?: string;
  soundEffect?: string;
  voiceOver?: string;
  collectible?: Collectible;
  criticalLens?: CriticalAnalysis;
  modernTranslation?: ModernTranslation;
  whatIfScenarios?: WhatIfScenario[];
  characterAnalysis?: {
    motivations?: CharacterMotivation[];
    psychologicalState?: PsychologicalState[];
    modernPerspective?: ModernPerspective[];
    development?: CharacterDevelopment[];
  };
  visibilityCondition?: {
    type: 'ambition' | 'guilt';
    threshold: number;
    operator: '>' | '<' | '>=' | '<=';
  };
  alternativeSceneId?: string;
}

export interface GameState {
  currentScene: string;
  ambition: number;
  guilt: number;
  pathHistory: string[];
  collectibles: Collectible[];
  relationships: CharacterRelationships;
}

export interface Collectible {
  id: string;
  title: string;
  description: string;
  image?: string;
  sceneId: string;
}

export interface CharacterRelationships {
  [key: string]: {
    trust: number;
    loyalty: number;
    fear: number;
  };
}

export interface CriticalAnalysis {
  interpretations: {
    title: string;
    description: string;
    critic: string;
  }[];
  criticQuotes: {
    text: string;
    critic: string;
    source?: string;
  }[];
  adaptations: {
    title: string;
    description: string;
    differences: string[];
  }[];
  quotes?: {
    text: string;
    source: string;
    critic?: string;
  }[];
  themes?: Array<{
    name: string;
    analysis: string;
  }>;
  symbolism?: Array<{
    element: string;
    meaning: string;
  }>;
  historicalContext?: {
    jacobean: string;
    sources: string;
  };
}

export interface Interpretation {
  title: string;
  description: string;
  source: string;
}

export interface CriticQuote {
  text: string;
  critic: string;
  source?: string;
}

export interface Adaptation {
  title: string;
  description: string;
  year?: number;
  director?: string;
  differences?: string[];
}

export interface Ending {
  id: string;
  title: string;
  description: string;
  ambitionThreshold: number;
  guiltThreshold: number;
  originalText?: string;
  whatIf?: string[];
}

export interface ModernTranslation {
  original: string;
  modern: string;
  explanation: string;
}

export interface WhatIfScenario {
  id: string;
  title: string;
  description: string;
  originalChoice: string;
  alternativeChoice: string;
  consequences: string[];
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