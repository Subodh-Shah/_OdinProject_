const particles = [
  { emoji: '🌸', left: '3%', delay: '0s', duration: '14s', size: '1.4rem' },
  { emoji: '⭐', left: '12%', delay: '4s', duration: '18s', size: '1rem' },
  { emoji: '🌸', left: '22%', delay: '2s', duration: '12s', size: '1.1rem' },
  { emoji: '✨', left: '35%', delay: '6s', duration: '16s', size: '0.9rem' },
  { emoji: '🌸', left: '48%', delay: '1s', duration: '15s', size: '1.3rem' },
  { emoji: '⭐', left: '58%', delay: '5s', duration: '11s', size: '1rem' },
  { emoji: '🌸', left: '70%', delay: '3s', duration: '17s', size: '1.2rem' },
  { emoji: '✨', left: '82%', delay: '7s', duration: '13s', size: '0.8rem' },
  { emoji: '⭐', left: '92%', delay: '2.5s', duration: '19s', size: '1.1rem' },
  { emoji: '🌸', left: '45%', delay: '8s', duration: '14s', size: '1rem' },
];

export default function BackgroundParticles() {
  return (
    <div className="bg-particles">
      {particles.map((p, i) => (
        <span
          key={i}
          className="bg-particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
