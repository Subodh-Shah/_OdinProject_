import MemoryCard from './MemoryCard.jsx';

export default function MemoryCardContainer({ cards, onCardClick, duplicateValue, shuffling }) {
  return (
    <div className={`card-grid${shuffling ? ' is-shuffling' : ''}`}>
      {cards.map((item, index) => (
        <MemoryCard
          key={`${item}-${index}`}
          item={item}
          onClick={() => onCardClick(item)}
          isDuplicate={item === duplicateValue}
        />
      ))}
    </div>
  );
}
