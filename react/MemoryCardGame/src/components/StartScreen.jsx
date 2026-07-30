const previewEmojis = ['🐶', '🐱', '🐸', '🦊', '🐻', '🐼', '🐨', '🦁'];

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-card-row">
        {previewEmojis.map((emoji, i) => (
          <div
            key={emoji}
            className="start-card-preview"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span>{emoji}</span>
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
          <span className="diff-cards">5 cards</span>
        </button>
        <button className="diff-btn diff-medium" onClick={() => onStart('medium')}>
          <span className="diff-icon">🔥</span>
          <span className="diff-label">Medium</span>
          <span className="diff-cards">10 cards</span>
        </button>
        <button className="diff-btn diff-hard" onClick={() => onStart('hard')}>
          <span className="diff-icon">💀</span>
          <span className="diff-label">Hard</span>
          <span className="diff-cards">15 cards</span>
        </button>
      </div>

      <div className="start-footer">
        <span className="start-footer-icon">🧠</span>
        <span className="start-footer-sep">/</span>
        <span className="start-footer-icon">🎴</span>
        <span className="start-footer-sep">/</span>
        <span className="start-footer-icon">💭</span>
      </div>
    </div>
  );
}
