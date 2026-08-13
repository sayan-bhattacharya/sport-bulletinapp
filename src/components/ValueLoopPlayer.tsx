import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { VALUE_LOOP_DURATION, VALUE_LOOP_FPS, ValueLoop } from "../remotion/ValueLoop";

function useDesktopMotionOk() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const widthOk = window.matchMedia("(min-width: 901px)");
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const sync = () => setOk(widthOk.matches && motionOk.matches);
    sync();
    widthOk.addEventListener("change", sync);
    motionOk.addEventListener("change", sync);
    return () => {
      widthOk.removeEventListener("change", sync);
      motionOk.removeEventListener("change", sync);
    };
  }, []);

  return ok;
}

export function ValueLoopPlayer() {
  const show = useDesktopMotionOk();
  if (!show) return null;

  return (
    <div className="value-loop-frame" aria-hidden="true">
      <Player
        component={ValueLoop}
        durationInFrames={VALUE_LOOP_DURATION}
        compositionWidth={960}
        compositionHeight={420}
        fps={VALUE_LOOP_FPS}
        style={{ width: "100%", height: "100%" }}
        controls={false}
        loop
        autoPlay
        initiallyMuted
        acknowledgeRemotionLicense
      />
    </div>
  );
}
