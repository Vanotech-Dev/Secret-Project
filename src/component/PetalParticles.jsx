import { useMemo } from "react";
import "./PetalParticles.css";

export default function PetalParticles({ count = 16 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const colors = [
        "var(--rose-soft)",
        "var(--gold-light)",
        "var(--rose)",
        "rgba(245, 237, 218, 0.6)",
      ];
      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 8,
        size: 6 + Math.random() * 10,
        sway: 20 + Math.random() * 50,
        opacity: 0.25 + Math.random() * 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });
  }, [count]);

  return (
    <div className="petal-container" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            backgroundColor: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--sway": `${p.sway}px`,
            "--petal-opacity": p.opacity,
          }}
        />
      ))}
    </div>
  );
}
