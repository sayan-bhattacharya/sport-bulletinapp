import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const chalk = "#f4f1ea";
const signal = "#e11d2e";
const dim = "rgba(244, 241, 234, 0.72)";

/** Match the 8s compressed hero MP4 */
export const SCORE_ADDA_FPS = 30;
export const SCORE_ADDA_DURATION = 240;

/**
 * Transparent kinetic overlay — sits on top of the real hero MP4.
 * No solid fill so the background video stays visible.
 */
export const ScoreAddaLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  const tickerX = interpolate(frame, [0, SCORE_ADDA_DURATION], [0, -width * 0.9], {
    extrapolateRight: "clamp",
  });

  const cricketOpacity = interpolate(frame, [12, 28, 70, 88], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const footballOpacity = interpolate(frame, [78, 96, 140, 158], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const brandScale = interpolate(frame, [145, 170, 210, 232], [0.88, 1, 1, 0.97], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.spring({ damping: 180 }),
    output: "perceptual-scale",
  });

  const brandOpacity = interpolate(frame, [140, 158, 215, 235], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const tagOpacity = interpolate(frame, [165, 180, 215, 232], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sweep = interpolate(frame, [0, 36], [-25, 125], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const pulse = interpolate(
    frame % Math.round(fps * 1.2),
    [0, Math.round(fps * 0.6), Math.round(fps * 1.2)],
    [1, 1.35, 1],
    { extrapolateRight: "clamp" }
  );

  const frameGlow = interpolate(frame, [0, 40, 120, 200, 239], [0.15, 0.35, 0.2, 0.4, 0.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 55% at 75% 35%, rgba(225,29,46,${0.18 + frameGlow * 0.2}), transparent 55%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${sweep}%`,
          width: "16%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(244,241,234,0.12), transparent)",
          transform: "skewX(-12deg)",
          mixBlendMode: "screen",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          right: 0,
          overflow: "hidden",
          borderTop: "1px solid rgba(244,241,234,0.2)",
          borderBottom: "1px solid rgba(244,241,234,0.2)",
          padding: "12px 0",
          background: "rgba(7,8,12,0.45)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 48,
            whiteSpace: "nowrap",
            translate: `${tickerX}px 0px`,
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 26,
            letterSpacing: 2,
            color: chalk,
          }}
        >
          <span>IND 184/4 · RR 9.8</span>
          <span style={{ color: signal }}>LIVE</span>
          <span>MUM 1 — MBSG 1 · 64'</span>
          <span>SPORT IQ</span>
          <span style={{ color: signal }}>AI BRIEF READY</span>
          <span>CRICKET + FOOTBALL</span>
          <span>IND 184/4 · RR 9.8</span>
          <span style={{ color: signal }}>LIVE</span>
          <span>MUM 1 — MBSG 1 · 64'</span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: width * 0.07,
          top: height * 0.3,
          opacity: cricketOpacity,
          color: chalk,
          maxWidth: width * 0.4,
          textShadow: "0 8px 28px rgba(0,0,0,0.55)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: signal,
              scale: String(pulse),
              boxShadow: "0 0 16px rgba(225,29,46,0.8)",
            }}
          />
          <span
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: signal,
            }}
          >
            Live cricket pulse
          </span>
        </div>
        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 92,
            lineHeight: 0.9,
            letterSpacing: 1,
          }}
        >
          IND 184/4
        </div>
        <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, marginTop: 10, color: dim }}>
          17.2 ov · Target 201
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: width * 0.07,
          top: height * 0.34,
          opacity: footballOpacity,
          color: chalk,
          textAlign: "right",
          maxWidth: width * 0.45,
          textShadow: "0 8px 28px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: signal,
            }}
          >
            Football live
          </span>
          <div
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: signal,
              scale: String(pulse),
              boxShadow: "0 0 16px rgba(225,29,46,0.8)",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 84,
            lineHeight: 0.9,
            letterSpacing: 1,
          }}
        >
          MUM 1 — MBSG 1
        </div>
        <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, marginTop: 10, color: dim }}>
          64' · ISL Matchday
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: brandOpacity,
          scale: String(brandScale),
          paddingTop: 48,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: Math.min(width * 0.13, 200),
            lineHeight: 0.85,
            color: chalk,
            letterSpacing: 4,
            textAlign: "center",
            textShadow: "0 12px 40px rgba(0,0,0,0.65)",
          }}
        >
          SPORT
          <span style={{ color: signal }}> IQ</span>
        </div>
        <div
          style={{
            marginTop: 22,
            opacity: tagOpacity,
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: dim,
            textShadow: "0 6px 20px rgba(0,0,0,0.55)",
          }}
        >
          News • Insights • Scores • Stories
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 18,
          border: "1px solid rgba(244,241,234,0.18)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
