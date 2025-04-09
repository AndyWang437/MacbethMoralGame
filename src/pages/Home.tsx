import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative">
      <div className="absolute inset-0 bg-macbeth-dark/70 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-3xl">
        <h1 className="title-text flame-effect">
          Macbeth: Fate or Free Will?
        </h1>
        
        <div className="scene-container mb-8">
          <p className="subtitle-text">
            Step into the shoes of Macbeth and make choices that will determine your fate.
            Will you follow ambition or honor? The path you choose will shape your destiny.
          </p>
        </div>

        <button
          onClick={() => navigate('/game')}
          className="choice-button text-2xl px-8 py-4 mb-12"
        >
          Begin Your Journey
        </button>

        <div className="scene-container">
          <p className="text-macbeth-gold/80 font-serif">
            An interactive narrative game based on Shakespeare's Macbeth
          </p>
          <p className="text-macbeth-light/70 mt-2 text-sm">
            Make choices that affect your ambition and determine your ending
          </p>
        </div>
      </div>
    </div>
  );
} 