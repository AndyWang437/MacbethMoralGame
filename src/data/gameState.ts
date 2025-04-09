import { GameState } from '../types/game';

export const initialGameState: GameState = {
  currentScene: "scene1A",
  ambition: 0,
  guilt: 0,
  pathHistory: [],
  collectibles: [],
  relationships: {
    ladyMacbeth: { trust: 0, loyalty: 0, fear: 0 },
    banquo: { trust: 0, loyalty: 0, fear: 0 },
    duncan: { trust: 0, loyalty: 0, fear: 0 },
    macduff: { trust: 0, loyalty: 0, fear: 0 },
    witches: { trust: 0, loyalty: 0, fear: 0 }
  }
}; 