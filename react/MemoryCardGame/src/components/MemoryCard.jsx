export default function MemoryCard({ item, onClick, isDuplicate }) {
  return (
    <div
      className={`memory-card${isDuplicate ? ' is-duplicate' : ''}`}
      onClick={onClick}
    >
      <div className="memory-card-border" />
      <div className="memory-card-inner">
        <div className="card-accent" />
        <img src={item.image} alt={item.title} className="card-image" loading="lazy" />
        <div className="card-image-fade" />
        <span className="card-label">{item.title}</span>
      </div>
    </div>
  );
}
