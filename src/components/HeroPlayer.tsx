import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { SCORE_ADDA_DURATION, SCORE_ADDA_FPS, ScoreAddaLoop } from "../remotion/ScoreAddaLoop";

const desktopSrc = `${import.meta.env.BASE_URL}videos/score-adda-hero.mp4`;
const mobileSrc = `${import.meta.env.BASE_URL}videos/score-adda-hero-mobile.mp4`;

function useIsCompact() {
  const [compact, setCompact] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 900px)").matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const onChange = () => setCompact(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return compact;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function HeroPlayer() {
  const compact = useIsCompact();
  const reducedMotion = usePrefersReducedMotion();
  const showRemotion = !compact && !reducedMotion;

  return (
    <div className="hero-stack">
      <video
        className="hero-video"
        key={compact ? "mobile" : "desktop"}
        src={compact ? mobileSrc : desktopSrc}
        autoPlay={!reducedMotion}
        muted
        loop={!reducedMotion}
        playsInline
        preload={compact ? "metadata" : "auto"}
        aria-hidden="true"
      />
      {showRemotion ? (
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
      ) : (
        <div className="hero-mobile-chrome" aria-hidden="true">
          <div className="hero-mobile-chip">
            <span className="live-dot">Live</span>
            <span>Cricket + Football</span>
          </div>
        </div>
      )}
    </div>
  );
}
