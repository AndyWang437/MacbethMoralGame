export const getCharacterPortrait = (character: string): string => {
  const portraits: Record<string, string> = {
    'Macbeth': '/images/characters/macbeth.png',
    'Lady Macbeth': '/images/characters/lady-macbeth.png',
    'Banquo': '/images/characters/banquo.png',
    'Duncan': '/images/characters/duncan.png',
    'Macduff': '/images/characters/macduff.png',
    'Witches': '/images/characters/witches.png',
    'default': '/images/characters/default.png'
  };

  return portraits[character] || portraits.default;
}; 