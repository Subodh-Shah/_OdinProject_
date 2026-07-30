export default function MemoryCard({ item, onClick, isDuplicate }) {
  return (
    <div
      className={`memory-card${isDuplicate ? ' is-duplicate' : ''}`}
      onClick={onClick}
    >
      <div className="memory-card-border" />
      <div className="memory-card-inner">
        <div className="card-accent" />
        <div className="card-emoji-wrap">
          <span className="card-emoji">{item}</span>
        </div>
        <span className="card-label">memory</span>
      </div>
    </div>
  );
}
