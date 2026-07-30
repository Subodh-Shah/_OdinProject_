const particles = [
  { emoji: '🌸', left: '2%', delay: '0s', dur: '10s', size: '2rem' },
  { emoji: '✨', left: '8%', delay: '3s', dur: '14s', size: '1.4rem' },
  { emoji: '💫', left: '16%', delay: '6s', dur: '12s', size: '1.8rem' },
  { emoji: '🌸', left: '25%', delay: '1s', dur: '11s', size: '2.2rem' },
  { emoji: '⭐', left: '33%', delay: '5s', dur: '15s', size: '1.6rem' },
  { emoji: '🌸', left: '40%', delay: '8s', dur: '13s', size: '1.9rem' },
  { emoji: '💫', left: '48%', delay: '2s', dur: '10s', size: '2rem' },
  { emoji: '✨', left: '55%', delay: '7s', dur: '16s', size: '1.5rem' },
  { emoji: '🌸', left: '62%', delay: '4s', dur: '12s', size: '2.1rem' },
  { emoji: '⭐', left: '70%', delay: '9s', dur: '14s', size: '1.7rem' },
  { emoji: '🌸', left: '78%', delay: '1.5s', dur: '11s', size: '2.3rem' },
  { emoji: '✨', left: '85%', delay: '6.5s', dur: '13s', size: '1.5rem' },
  { emoji: '💫', left: '92%', delay: '3.5s', dur: '15s', size: '1.8rem' },
  { emoji: '🌸', left: '50%', delay: '10s', dur: '12s', size: '2rem' },
  { emoji: '⭐', left: '20%', delay: '11s', dur: '14s', size: '1.6rem' },
  { emoji: '🌸', left: '68%', delay: '12s', dur: '11s', size: '2rem' },
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
            animationDuration: p.dur,
            fontSize: p.size,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
