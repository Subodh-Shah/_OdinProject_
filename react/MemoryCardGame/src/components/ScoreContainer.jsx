export default function ScoreContainer({ score, bestScore, difficulty, totalCards }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="score-icon">🎯</span>
        <div className="score-content">
          <span className="score-label">Difficulty</span>
          <span className="score-value diff-badge">{difficulty} &middot; {totalCards}</span>
        </div>
      </div>
      <div className="score-item">
        <span className="score-icon">🏆</span>
        <div className="score-content">
          <span className="score-label">Score</span>
          <span className="score-value score-current">{score}</span>
        </div>
      </div>
      <div className="score-item">
        <span className="score-icon">⭐</span>
        <div className="score-content">
          <span className="score-label">Best</span>
          <span className="score-value score-best">{bestScore}</span>
        </div>
      </div>
    </div>
  );
}
