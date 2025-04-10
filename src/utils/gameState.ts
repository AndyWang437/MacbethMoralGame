import { GameState, Scene, Choice, Collectible, CharacterRelationships } from '../types/game';

export const initialGameState: GameState = {
  currentScene: 'act1_scene1',
  ambition: 0,
  guilt: 0,
  pathHistory: [],
  collectibles: [],
  relationships: {
    lady_macbeth: { trust: 100, loyalty: 100, fear: 0 },
    banquo: { trust: 100, loyalty: 100, fear: 0 },
    duncan: { trust: 100, loyalty: 100, fear: 0 },
    macduff: { trust: 100, loyalty: 100, fear: 0 },
    witches: { trust: 0, loyalty: 0, fear: 0 }
  }
};

export const updateGameState = (prevState: GameState, choice: Choice, currentScene?: Scene): GameState => {
  const newState = {
    ...prevState,
    currentScene: choice.nextScene,
    ambition: Math.max(0, Math.min(100, prevState.ambition + choice.ambitionChange)),
    pathHistory: [...prevState.pathHistory, prevState.currentScene]
  };

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

  // Helper function to update relationship values within bounds
  const updateValue = (value: number, change: number) => {
    return Math.max(0, Math.min(100, value + change));
  };

  // Update relationships based on the scene context and choice
  switch (scene.id) {
    case 'act1_scene1': // Witches' Prophecy
      newRelationships.witches.trust = updateValue(newRelationships.witches.trust, choice.ambitionChange > 0 ? 10 : -5);
      newRelationships.witches.fear = updateValue(newRelationships.witches.fear, choice.ambitionChange > 0 ? 5 : -5);
      break;

    case 'act1_scene2': // Lady Macbeth's Soliloquy
      newRelationships.lady_macbeth.trust = updateValue(newRelationships.lady_macbeth.trust, choice.ambitionChange > 0 ? 15 : -10);
      newRelationships.lady_macbeth.loyalty = updateValue(newRelationships.lady_macbeth.loyalty, choice.ambitionChange > 0 ? 10 : -15);
      break;

    case 'act1_scene3': // Duncan's Arrival
      newRelationships.duncan.trust = updateValue(newRelationships.duncan.trust, choice.ambitionChange > 0 ? -10 : 5);
      newRelationships.duncan.loyalty = updateValue(newRelationships.duncan.loyalty, choice.ambitionChange > 0 ? -15 : 10);
      break;

    case 'act1_scene4': // Murder of Duncan
      newRelationships.duncan.trust = 0;
      newRelationships.duncan.loyalty = 0;
      newRelationships.lady_macbeth.trust = updateValue(newRelationships.lady_macbeth.trust, choice.ambitionChange > 0 ? 20 : -20);
      newRelationships.lady_macbeth.loyalty = updateValue(newRelationships.lady_macbeth.loyalty, choice.ambitionChange > 0 ? 15 : -15);
      break;

    case 'act2_scene1': // Banquo's Ghost
      newRelationships.banquo.trust = updateValue(newRelationships.banquo.trust, choice.ambitionChange > 0 ? -20 : 10);
      newRelationships.banquo.loyalty = updateValue(newRelationships.banquo.loyalty, choice.ambitionChange > 0 ? -25 : 15);
      newRelationships.banquo.fear = updateValue(newRelationships.banquo.fear, choice.ambitionChange > 0 ? 30 : -10);
      break;

    case 'act2_scene2': // Macduff's Discovery
      newRelationships.macduff.trust = updateValue(newRelationships.macduff.trust, choice.ambitionChange > 0 ? -25 : 15);
      newRelationships.macduff.loyalty = updateValue(newRelationships.macduff.loyalty, choice.ambitionChange > 0 ? -30 : 20);
      newRelationships.macduff.fear = updateValue(newRelationships.macduff.fear, choice.ambitionChange > 0 ? 20 : -10);
      break;

    case 'act3_scene1': // Banquet Scene
      newRelationships.lady_macbeth.trust = updateValue(newRelationships.lady_macbeth.trust, choice.ambitionChange > 0 ? -15 : 10);
      newRelationships.lady_macbeth.loyalty = updateValue(newRelationships.lady_macbeth.loyalty, choice.ambitionChange > 0 ? -20 : 15);
      newRelationships.banquo.trust = updateValue(newRelationships.banquo.trust, choice.ambitionChange > 0 ? -30 : 20);
      newRelationships.banquo.loyalty = updateValue(newRelationships.banquo.loyalty, choice.ambitionChange > 0 ? -35 : 25);
      break;

    case 'act3_scene2': // Lady Macbeth's Sleepwalking
      newRelationships.lady_macbeth.trust = updateValue(newRelationships.lady_macbeth.trust, choice.ambitionChange > 0 ? -25 : 20);
      newRelationships.lady_macbeth.loyalty = updateValue(newRelationships.lady_macbeth.loyalty, choice.ambitionChange > 0 ? -30 : 25);
      newRelationships.lady_macbeth.fear = updateValue(newRelationships.lady_macbeth.fear, choice.ambitionChange > 0 ? 40 : -20);
      break;

    case 'act4_scene1': // Final Battle
      newRelationships.macduff.trust = updateValue(newRelationships.macduff.trust, choice.ambitionChange > 0 ? -40 : 30);
      newRelationships.macduff.loyalty = updateValue(newRelationships.macduff.loyalty, choice.ambitionChange > 0 ? -45 : 35);
      newRelationships.macduff.fear = updateValue(newRelationships.macduff.fear, choice.ambitionChange > 0 ? 50 : -30);
      break;

    // Add more cases as needed
  }

  return newRelationships;
};

export const getEnding = (state: GameState): string => {
  if (state.ambition >= 80) {
    return 'tyrant';
  } else if (state.ambition >= 60) {
    return 'tragic';
  } else if (state.ambition <= 40) {
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