import { Scene } from '../types/game';

const translations: Record<string, string> = {
  "All hail, Macbeth! Hail to thee, Thane of Glamis!": "Greetings, Macbeth! We honor you as the Thane of Glamis!",
  "All hail, Macbeth! Hail to thee, Thane of Cawdor!": "Greetings, Macbeth! We honor you as the Thane of Cawdor!",
  "All hail, Macbeth, that shalt be king hereafter!": "Greetings, Macbeth! You will become king in the future!",
  "If it were done when 'tis done, then 'twere well it were done quickly.": "If the deed is done when it's done, then it would be best to do it quickly.",
  "Is this a dagger which I see before me, the handle toward my hand?": "Is this a dagger I see in front of me, with its handle pointing toward my hand?",
  "Out, damned spot! Out, I say!": "Get out, cursed bloodstain! Get out, I command you!",
  "Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day.": "Tomorrow, and tomorrow, and tomorrow, time moves slowly from day to day.",
  "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage.": "Life is just a brief shadow, like an actor who performs for a short time on stage.",
  "Fair is foul, and foul is fair.": "What seems good is actually bad, and what seems bad is actually good.",
  "Double, double toil and trouble; Fire burn, and cauldron bubble.": "Double the effort, double the trouble; Let the fire burn and the cauldron bubble."
};

export const getModernTranslation = (scene: Scene): string => {
  if (!scene.quote) return '';
  return translations[scene.quote] || scene.quote;
}; 