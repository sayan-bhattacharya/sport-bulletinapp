import { Composition } from "remotion";
import { SCORE_ADDA_DURATION, SCORE_ADDA_FPS, ScoreAddaLoop } from "./ScoreAddaLoop";
import { VALUE_LOOP_DURATION, VALUE_LOOP_FPS, ValueLoop } from "./ValueLoop";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ScoreAddaLoop"
        component={ScoreAddaLoop}
        durationInFrames={SCORE_ADDA_DURATION}
        fps={SCORE_ADDA_FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="ValueLoop"
        component={ValueLoop}
        durationInFrames={VALUE_LOOP_DURATION}
        fps={VALUE_LOOP_FPS}
        width={960}
        height={420}
      />
    </>
  );
};
