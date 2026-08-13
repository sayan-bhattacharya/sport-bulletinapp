import { Player } from "@remotion/player";
import { SCORE_ADDA_DURATION, SCORE_ADDA_FPS, ScoreAddaLoop } from "../remotion/ScoreAddaLoop";

const heroSrc = `${import.meta.env.BASE_URL}videos/score-adda-hero.mp4`;

export function HeroPlayer() {
  return (
    <div className="hero-stack">
      <video
        className="hero-video"
        src={heroSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-overlay">
        <Player
          component={ScoreAddaLoop}
          durationInFrames={SCORE_ADDA_DURATION}
          compositionWidth={1920}
          compositionHeight={1080}
          fps={SCORE_ADDA_FPS}
          style={{ width: "100%", height: "100%", background: "transparent" }}
          className="hero-remotion"
          controls={false}
          loop
          autoPlay
          initiallyMuted
          acknowledgeRemotionLicense
        />
      </div>
    </div>
  );
}
