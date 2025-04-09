import { GameState, Scene, Choice, Collectible, CharacterRelationships } from '../types/game';

export const initialGameState: GameState = {
  currentScene: 'scene1',
  ambition: 0,
  guilt: 0,
  pathHistory: [],
  collectibles: [],
  relationships: {
    'Lady Macbeth': { trust: 100, loyalty: 100, fear: 0 },
    'Banquo': { trust: 100, loyalty: 100, fear: 0 },
    'Duncan': { trust: 100, loyalty: 100, fear: 0 },
    'Macduff': { trust: 100, loyalty: 100, fear: 0 },
    'Malcolm': { trust: 100, loyalty: 100, fear: 0 }
  }
};

export const updateGameState = (prevState: GameState, choice: Choice, currentScene?: Scene): GameState => {
  console.log('Updating game state with choice:', choice);
  const newState = {
    ...prevState,
    currentScene: choice.nextScene,
    ambition: Math.max(0, Math.min(100, prevState.ambition + choice.ambitionChange)),
    guilt: Math.max(0, Math.min(100, prevState.guilt + (choice.guiltChange || 0))),
    pathHistory: [...prevState.pathHistory, prevState.currentScene]
  };
  console.log('New state:', newState);

  // Check for collectibles
  if (currentScene?.collectible) {
    newState.collectibles = [...prevState.collectibles, currentScene.collectible];
  }

  // Update relationships based on the scene and choice
  if (currentScene) {
    newState.relationships = updateRelationships(prevState.relationships, choice, currentScene);
  }

  return newState;
};

const updateRelationships = (
  relationships: GameState['relationships'],
  choice: Choice,
  scene: Scene
): GameState['relationships'] => {
  const newRelationships = { ...relationships };

  // Update relationships based on the scene context
  switch (scene.id) {
    case 'banquet_scene':
      newRelationships['Lady Macbeth'].trust += choice.ambitionChange > 0 ? -5 : 5;
      newRelationships['Lady Macbeth'].loyalty += choice.ambitionChange > 0 ? 5 : -5;
      break;
    case 'banquos_ghost_high_ambition':
      newRelationships['Banquo'].fear += choice.ambitionChange > 0 ? 10 : -5;
      break;
    case 'lady_macbeth_intervention':
      newRelationships['Lady Macbeth'].trust += choice.ambitionChange > 0 ? -10 : 10;
      break;
    // Add more cases as needed
  }

  return newRelationships;
};

export const getEnding = (state: GameState): string => {
  if (state.ambition >= 80 && state.guilt <= 20) {
    return 'tyrant';
  } else if (state.ambition >= 60 && state.guilt >= 40) {
    return 'tragic';
  } else if (state.ambition <= 40 && state.guilt >= 60) {
    return 'redemption';
  } else {
    return 'balanced';
  }
};

export const getModernTranslation = (quote: string): string => {
  const translations: Record<string, string> = {
    "Thou canst not say I did it: never shake thy gory locks at me.": "You can't say I did it: stop shaking your bloody hair at me.",
    "Avaunt! and quit my sight! let the earth hide thee!": "Get out of my sight! Let the earth hide you!",
    "To-morrow, and to-morrow, and to-morrow, creeps in this petty pace from day to day.": "Tomorrow, and tomorrow, and tomorrow, creeps along at this slow pace day after day.",
    "What, quite unmann'd in folly?": "What, completely unmanned by foolishness?",
    "Double, double toil and trouble; Fire burn, and cauldron bubble.": "Double, double work and trouble; Fire burn, and cauldron bubble."
  };

  return translations[quote] || quote;
}; 