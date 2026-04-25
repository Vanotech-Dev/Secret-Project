import { useState } from "react";
import { content } from "../content";
import "./EnvelopeScene.css";

/**
 * Scene 1 — Halaman Pembuka
 * Background gelap hangat, amplop melayang, klik untuk buka surat.
 */
export default function EnvelopeScene({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Wait for envelope animation, then transition
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className={`envelope-scene ${isOpening ? "is-leaving" : ""}`}>
      {/* Ambient golden glow from bottom */}
      <div className="ambient-glow" />

      {/* Title text */}
      <div className="envelope-title">
        <p className="envelope-subtitle">sebuah surat kecil untuk</p>
        <h1 className="envelope-name">{content.recipientName}</h1>
      </div>

      {/* The envelope */}
      <div
        className={`envelope-wrapper ${isOpening ? "is-opening" : ""}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Ketuk untuk membuka surat"
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      >
        <div className="envelope">
          {/* Envelope body */}
          <div className="envelope-body">
            {/* Inner V patterns */}
            <div className="envelope-v-left" />
            <div className="envelope-v-right" />

            {/* Letter peek (visible during opening) */}
            <div className="envelope-letter-peek">
              <div className="letter-peek-lines">
                <span /><span /><span />
              </div>
            </div>
          </div>

          {/* Top flap */}
          <div className="envelope-flap" />

          {/* Wax seal */}
          <div className="wax-seal">
            <span className="seal-heart">♥</span>
          </div>
        </div>
      </div>

      {/* Hint text */}
      <p className="envelope-hint">— ketuk untuk membuka —</p>
    </div>
  );
}
