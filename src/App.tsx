import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Ending from './pages/Ending';
import './index.css';

function App() {
  return (
    <Router basename={import.meta.env.PROD ? '/MacbethMoralGame' : '/'}>
      <div className="min-h-screen bg-macbeth-dark text-macbeth-light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/ending" element={<Ending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 