import { content } from "../content";
import PolaroidCard from "./PolaroidCard";
import "./LetterScene.css";

/**
 * Scene 2 — The Letter
 * Scrollable letter with header, personal message, polaroid gallery, and closing.
 */
export default function LetterScene({ onClose }) {
  return (
    <div className="letter-scene">
      {/* Dark overlay background */}
      <div className="letter-overlay" />

      {/* Close button */}
      <button
        className="letter-close"
        onClick={onClose}
        aria-label="Tutup surat"
      >
        ✕
      </button>

      {/* Letter paper */}
      <div className="letter-scroll-container">
        <article className="letter-paper">
          <div className="letter-inner-border">
            {/* Header */}
            <header className="letter-header">
              <span className="ornament">✦</span>
              <h1 className="letter-recipient">
                Untuk {content.recipientName}
              </h1>
              {content.age && content.age !== "..." && (
                <p className="letter-age">
                  Selamat Ulang Tahun yang ke-{content.age}
                </p>
              )}
              <span className="ornament">✦</span>
            </header>

            {/* Divider */}
            <div className="letter-divider" />

            {/* Salutation */}
            <p className="letter-salutation">{content.salutation}</p>

            {/* Body paragraphs */}
            <div className="letter-body">
              {content.paragraphs1.map((paragraph, i) => (
                <p
                  key={i}
                  className="letter-paragraph"
                  style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Divider before photos */}
            <div className="letter-divider" />

            {/* Polaroid gallery */}
            {content.photos.length > 0 && (
              <section className="polaroid-gallery">
                {content.photos.map((photo, i) => (
                  <PolaroidCard
                    key={i}
                    src={photo.src}
                    caption={photo.caption}
                    rotation={photo.rotation}
                    index={i}
                  />
                ))}
              </section>
            )}
            <div className="letter-body">
              {content.paragraphs2.map((paragraph, i) => (
                <p
                  key={i}
                  className="letter-paragraph"
                  style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Divider after photos */}
            <div className="letter-divider" />

            {/* Closing */}
            <footer className="letter-closing">
              <p className="closing-message">{content.closingMessage}</p>
              <p className="closing-sender">{content.senderName}</p>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}
