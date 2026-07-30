export default function WinScreen({ score, bestScore, totalCards, difficulty, onReplay, onHome }) {
  return (
    <div className="win-overlay">
      <div className="win-panel">
        <div className="win-decor">
          <span className="win-decor-item" style={{ animationDelay: '0s' }}>✨</span>
          <span className="win-decor-item" style={{ animationDelay: '0.2s' }}>🎉</span>
          <span className="win-decor-item" style={{ animationDelay: '0.4s' }}>✨</span>
        </div>

        <h2 className="win-title">You Won!</h2>

        <div className="win-divider" />

        <div className="win-stats">
          <div className="win-stat">
            <span className="win-stat-icon">🏆</span>
            <div className="win-stat-content">
              <span className="win-stat-label">Streak</span>
              <span className="win-stat-value">{score}<span className="win-stat-total">/{totalCards}</span></span>
            </div>
          </div>
          <div className="win-stat">
            <span className="win-stat-icon">⭐</span>
            <div className="win-stat-content">
              <span className="win-stat-label">Best</span>
              <span className="win-stat-value">{bestScore}</span>
            </div>
          </div>
          <div className="win-stat">
            <span className="win-stat-icon">🎯</span>
            <div className="win-stat-content">
              <span className="win-stat-label">Mode</span>
              <span className="win-stat-value win-stat-diff">{difficulty} &middot; {totalCards}</span>
            </div>
          </div>
        </div>

        <div className="win-divider" />

        <div className="win-buttons">
          <button className="win-btn replay-btn" onClick={onReplay}>
            <span className="win-btn-icon">🔄</span>
            Play Again
          </button>
          <button className="win-btn home-btn" onClick={onHome}>
            <span className="win-btn-icon">🏠</span>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
