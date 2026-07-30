import { useState, useEffect } from 'react';
import StartScreen from './StartScreen.jsx';
import ScoreContainer from './ScoreContainer.jsx';
import MemoryCardContainer from './MemoryCardContainer.jsx';
import WinScreen from './WinScreen.jsx';
import BackgroundParticles from './BackgroundParticles.jsx';
import ThemeToggle from './ThemeToggle.jsx';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const config = {
  easy: { cards: 6 },
  medium: { cards: 12 },
  hard: { cards: 18 },
};

export default function GameContainer() {
  const [gamePhase, setGamePhase] = useState('start');
  const [difficulty, setDifficulty] = useState(null);
  const [cards, setCards] = useState([]);
  const [clickedValues, setClickedValues] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [shake, setShake] = useState(false);
  const [duplicateValue, setDuplicateValue] = useState(null);
  const [shuffling, setShuffling] = useState(false);
  const [justClicked, setJustClicked] = useState(null);
  const [allAnime, setAllAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem('memory-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('memory-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime?limit=20&filter=bypopularity')
      .then(res => res.json())
      .then(data => {
        const anime = data.data.map(a => ({
          id: a.mal_id,
          title: a.title,
          image: a.images.jpg.large_image_url,
        }));
        setAllAnime(anime);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function startGame(diff) {
    const { cards: count } = config[diff];
    const picked = shuffle(allAnime).slice(0, count);
    const deck = shuffle(picked);
    setDifficulty(diff);
    setCards(deck);
    setClickedValues(new Set());
    setScore(0);
    setBestScore(0);
    setShake(false);
    setDuplicateValue(null);
    setShuffling(false);
    setJustClicked(null);
    setGamePhase('playing');
  }

  function handleCardClick(anime) {
    setJustClicked(anime.id);
    setTimeout(() => setJustClicked(null), 400);

    setShuffling(true);
    setTimeout(() => setShuffling(false), 450);

    setCards(prev => shuffle(prev));

    if (clickedValues.has(anime.id)) {
      setDuplicateValue(anime.id);
      setTimeout(() => setDuplicateValue(null), 600);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setScore(0);
      setClickedValues(new Set());
    } else {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      setClickedValues(prev => new Set(prev).add(anime.id));

      if (newScore === config[difficulty].cards) {
        setTimeout(() => setGamePhase('won'), 500);
      }
    }
  }

  const diffConfig = difficulty ? config[difficulty] : null;

  return (
    <div className="game-wrapper">
      <BackgroundParticles />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      {gamePhase === 'start' && <StartScreen onStart={startGame} loading={loading} />}

      {gamePhase === 'won' && diffConfig && (
        <WinScreen
          score={score}
          bestScore={bestScore}
          totalCards={diffConfig.cards}
          difficulty={difficulty}
          onReplay={() => startGame(difficulty)}
          onHome={() => setGamePhase('start')}
        />
      )}

      {gamePhase === 'playing' && diffConfig && (
        <>
          <div className="game-header">
            <button className="back-btn" onClick={() => setGamePhase('start')} aria-label="Back to menu">
              ←
            </button>
            <ScoreContainer
              score={score}
              bestScore={bestScore}
              difficulty={difficulty}
              totalCards={diffConfig.cards}
            />
          </div>

          <div className={`game-container${shake ? ' shake' : ''}`}>
            <MemoryCardContainer
              cards={cards}
              onCardClick={handleCardClick}
              duplicateValue={duplicateValue}
              justClicked={justClicked}
              shuffling={shuffling}
            />
          </div>
        </>
      )}
    </div>
  );
}
