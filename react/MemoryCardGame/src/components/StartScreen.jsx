export default function StartScreen({ onStart, loading }) {
  return (
    <div className="start-screen">
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner" />
          <p className="loading-text">Loading anime...</p>
        </div>
      ) : (
        <>
          <div className="start-card-row">
            {['🎴', '📺', '✨', '🌸', '⚡', '🔥', '🎌', '💫'].map((s, i) => (
              <div
                key={s}
                className="start-card-preview"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span>{s}</span>
              </div>
            ))}
          </div>

          <span className="start-accent-bar" />

          <h1 className="start-title">Memory Card</h1>

          <p className="start-tagline">click each card exactly once</p>

          <div className="difficulty-buttons">
            <button className="diff-btn diff-easy" onClick={() => onStart('easy')}>
              <span className="diff-icon">🌱</span>
              <span className="diff-label">Easy</span>
              <span className="diff-cards">6 cards</span>
            </button>
            <button className="diff-btn diff-medium" onClick={() => onStart('medium')}>
              <span className="diff-icon">🔥</span>
              <span className="diff-label">Medium</span>
              <span className="diff-cards">12 cards</span>
            </button>
            <button className="diff-btn diff-hard" onClick={() => onStart('hard')}>
              <span className="diff-icon">💀</span>
              <span className="diff-label">Hard</span>
              <span className="diff-cards">18 cards</span>
            </button>
          </div>

          <div className="start-footer">
            <span className="start-footer-icon">📺</span>
            <span className="start-footer-sep">/</span>
            <span className="start-footer-icon">🎴</span>
            <span className="start-footer-sep">/</span>
            <span className="start-footer-icon">✨</span>
          </div>
        </>
      )}
    </div>
  );
}
