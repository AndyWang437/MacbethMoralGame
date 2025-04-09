import { GameState } from '../types/game';

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

export const getEndingDescription = (ending: string): string => {
  switch (ending) {
    case 'tyrant':
      return 'You have become a ruthless tyrant, consumed by ambition and power. The kingdom trembles under your rule, but at what cost?';
    case 'tragic':
      return 'Your ambition led you down a dark path, but your conscience could not bear the weight of your actions. A tragic end to a once noble soul.';
    case 'redemption':
      return 'Despite the darkness that surrounded you, you found the strength to seek redemption. Your conscience guided you back to the light.';
    case 'balanced':
      return 'You walked the fine line between ambition and morality. Your choices shaped your destiny, but you maintained your humanity.';
    default:
      return 'Your journey has come to an end. The choices you made have led you here.';
  }
}; 