// Asset Helpers for Macbeth Game Effects

// Generate a data URI for a blood splatter (red blob)
export const getBloodSplatterDataURI = () => {
  // Simple red splatter svg
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23660000" d="M50,20 C70,5 90,30 85,50 C95,65 80,90 50,85 C20,95 5,70 15,50 C5,30 30,5 50,20 Z" opacity="0.7" /></svg>`;
};

// Generate a data URI for witch hallucination
export const getWitchHallucinationDataURI = () => {
  // Simple witch silhouette svg
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23222" d="M50,10 C60,10 70,40 70,60 C70,80 60,90 50,90 C40,90 30,80 30,60 C30,40 40,10 50,10 Z" opacity="0.5" /><path fill="%23222" d="M20,40 L80,40 L70,55 L30,55 Z" opacity="0.7" /><circle cx="40" cy="30" r="5" fill="%23992211" /><circle cx="60" cy="30" r="5" fill="%23992211" /></svg>`;
};

// Generate a data URI for Banquo's ghost
export const getBanquoGhostDataURI = () => {
  // Simple ghost silhouette svg
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23ccddff" d="M50,10 C65,10 75,25 75,40 C75,55 65,70 65,85 C60,80 55,85 50,80 C45,85 40,80 35,85 C35,70 25,55 25,40 C25,25 35,10 50,10 Z" opacity="0.7" /><circle cx="40" cy="30" r="5" fill="%23222" /><circle cx="60" cy="30" r="5" fill="%23222" /><path fill="none" stroke="%23222" d="M40,50 C45,55 55,55 60,50" stroke-width="2" /></svg>`;
};

// Get witch whisper text selections
export const getWitchWhispers = (): string[] => [
  "All hail, Macbeth! Hail to thee, Thane of Glamis!",
  "All hail, Macbeth! Hail to thee, Thane of Cawdor!",
  "All hail, Macbeth! That shalt be king hereafter!",
  "Lesser than Macbeth, and greater.",
  "Not so happy, yet much happier.",
  "Double, double toil and trouble; Fire burn, and cauldron bubble.",
  "By the pricking of my thumbs, something wicked this way comes.",
  "Fair is foul, and foul is fair.",
  "When shall we three meet again? In thunder, lightning, or in rain?",
  "None of woman born shall harm Macbeth."
];

// Function to generate whisper audio data (if needed)
export const getWhisperAudioSrc = (index: number): string => {
  // In a real implementation, this would return URLs to actual audio files
  return `/sounds/whisper-${index % 5}.mp3`;
}; 