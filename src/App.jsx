import { useState, useEffect, useRef } from "react";
import { content } from "./content";
import EnvelopeScene from "./component/EnvelopeScene";
import LetterScene from "./component/LetterScene";
import PetalParticles from "./component/PetalParticles";
import "./App.css";

function App() {
  const [scene, setScene] = useState("envelope"); // "envelope" | "letter"
  const audioRef = useRef(null);

  useEffect(() => {
    if (content.audioSrc && scene === "letter" && audioRef.current) {
      audioRef.current.play().catch(() => {
        /* autoplay blocked — ok */
      });
    }
  }, [scene]);

  const handleOpenLetter = () => {
    setScene("letter");
  };

  const handleCloseLetter = () => {
    setScene("envelope");
  };

  return (
    <div className="app">
      <PetalParticles count={14} />

      {scene === "envelope" && (
        <EnvelopeScene onOpen={handleOpenLetter} />
      )}

      {scene === "letter" && (
        <LetterScene onClose={handleCloseLetter} />
      )}

      {content.audioSrc && (
        <audio ref={audioRef} src={content.audioSrc} loop preload="auto" />
      )}
    </div>
  );
}

export default App;
