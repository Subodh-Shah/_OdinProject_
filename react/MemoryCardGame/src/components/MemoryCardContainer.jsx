import MemoryCard from './MemoryCard.jsx';

export default function MemoryCardContainer({ cards, onCardClick, duplicateValue, shuffling }) {
  return (
    <div className={`card-grid${shuffling ? ' is-shuffling' : ''}`}>
      {cards.map((item) => (
        <MemoryCard
          key={item.id}
          item={item}
          onClick={() => onCardClick(item)}
          isDuplicate={item.id === duplicateValue}
        />
      ))}
    </div>
  );
}
