import { Player } from "@remotion/player";
import { SCORE_ADDA_DURATION, SCORE_ADDA_FPS, ScoreAddaLoop } from "../remotion/ScoreAddaLoop";

export function HeroPlayer() {
  return (
    <Player
      component={ScoreAddaLoop}
      durationInFrames={SCORE_ADDA_DURATION}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={SCORE_ADDA_FPS}
      style={{ width: "100%", height: "100%" }}
      controls={false}
      loop
      autoPlay
      initiallyMuted
      acknowledgeRemotionLicense
    />
  );
}
