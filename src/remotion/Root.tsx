import { Composition } from "remotion";
import { SCORE_ADDA_DURATION, SCORE_ADDA_FPS, ScoreAddaLoop } from "./ScoreAddaLoop";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ScoreAddaLoop"
      component={ScoreAddaLoop}
      durationInFrames={SCORE_ADDA_DURATION}
      fps={SCORE_ADDA_FPS}
      width={1920}
      height={1080}
    />
  );
};
