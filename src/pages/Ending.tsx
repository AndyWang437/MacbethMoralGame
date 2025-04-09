import { useLocation, useNavigate } from 'react-router-dom';
import { GameState } from '../types/game';

export default function Ending() {
  const location = useLocation();
  const navigate = useNavigate();
  const gameState = location.state?.gameState as GameState;

  if (!gameState) {
    return <div>No game state found</div>;
  }

  const getEndingMessage = () => {
    if (gameState.ambition >= 80) {
      return {
        title: "The Path of Ambition",
        message: "Your ambition consumed you, leading to a tragic end. Like Macbeth, you let power corrupt your soul, and in the end, it destroyed you.",
        quote: "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more."
      };
    } else if (gameState.ambition <= 20) {
      return {
        title: "The Path of Honor",
        message: "You chose honor over ambition, resisting the temptations of power. While you may not have become king, you maintained your integrity and lived a life of peace.",
        quote: "The attempt and not the deed confounds us."
      };
    } else {
      return {
        title: "The Path of Balance",
        message: "You walked a middle path, sometimes tempted by ambition, sometimes guided by honor. Your story is one of struggle and compromise, showing the complexity of human nature.",
        quote: "To know my deed, 'twere best not know myself."
      };
    }
  };

  const ending = getEndingMessage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative">
      <div className="absolute inset-0 bg-macbeth-dark/70 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-3xl">
        <h1 className="title-text flame-effect mb-8">
          {ending.title}
        </h1>

        <div className="scene-container mb-8">
          <div className="quote-box">
            <p className="text-macbeth-gold flame-effect">{ending.quote}</p>
            <p className="text-sm mt-2 text-macbeth-light/70">Macbeth, Act 5, Scene 5</p>
          </div>

          <p className="subtitle-text mt-6">
            {ending.message}
          </p>
        </div>

        <div className="scene-container mb-8">
          <h2 className="text-2xl font-display text-macbeth-gold mb-4">
            Your Final Ambition Score
          </h2>
          <div className="ambition-meter w-64 mx-auto">
            <div 
              className="ambition-meter-fill" 
              style={{ width: `${gameState.ambition}%` }}
            />
          </div>
          <div className="flex justify-between text-sm mt-2 w-64 mx-auto text-macbeth-light/80">
            <span>Honor</span>
            <span>Ambition</span>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="choice-button"
        >
          Play Again
        </button>
      </div>
    </div>
  );
} 