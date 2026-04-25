import "./PolaroidCard.css";

/**
 * A single polaroid-style photo card.
 * Shows a photo (or placeholder) with a handwritten caption underneath.
 */
export default function PolaroidCard({ src, caption, rotation = 0, index = 0 }) {
  return (
    <div
      className="polaroid"
      style={{
        "--rotation": `${rotation}deg`,
        animationDelay: `${0.8 + index * 0.15}s`,
      }}
    >
      <div className="polaroid-frame">
        {src ? (
          <img
            src={src}
            alt={caption}
            className="polaroid-image"
            loading="lazy"
          />
        ) : (
          <div className="polaroid-placeholder">
            <span className="polaroid-placeholder-icon">📷</span>
            <span className="polaroid-placeholder-text">Foto kenangan</span>
          </div>
        )}
      </div>
      <p className="polaroid-caption">{caption}</p>
    </div>
  );
}
