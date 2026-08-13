import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const ink = "#07080c";
const chalk = "#f4f1ea";
const signal = "#e11d2e";
const dim = "rgba(244, 241, 234, 0.55)";

export const SCORE_ADDA_FPS = 30;
export const SCORE_ADDA_DURATION = 300; // 10s loop

export const ScoreAddaLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  const tickerX = interpolate(frame, [0, SCORE_ADDA_DURATION], [0, -width * 0.85], {
    extrapolateRight: "clamp",
  });

  const cricketOpacity = interpolate(frame, [18, 36, 90, 110], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const footballOpacity = interpolate(frame, [100, 120, 175, 195], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const brandScale = interpolate(frame, [160, 190, 260, 285], [0.82, 1, 1, 0.96], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.spring({ damping: 180 }),
    output: "perceptual-scale",
  });

  const brandOpacity = interpolate(frame, [155, 175, 270, 295], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const tagOpacity = interpolate(frame, [200, 220, 270, 290], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sweep = interpolate(frame, [0, 40], [-20, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const pulse = interpolate(frame % Math.round(fps * 1.2), [0, Math.round(fps * 0.6), Math.round(fps * 1.2)], [1, 1.35, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: ink, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(225,29,46,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(244,241,234,0.06), transparent 50%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.04) 4px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${sweep}%`,
          width: "18%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(244,241,234,0.08), transparent)",
          transform: "skewX(-12deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 48,
          left: 0,
          right: 0,
          overflow: "hidden",
          borderTop: "1px solid rgba(244,241,234,0.12)",
          borderBottom: "1px solid rgba(244,241,234,0.12)",
          padding: "14px 0",
          background: "rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 48,
            whiteSpace: "nowrap",
            translate: `${tickerX}px 0px`,
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 28,
            letterSpacing: 2,
            color: chalk,
          }}
        >
          <span>IND 184/4 · RR 9.8</span>
          <span style={{ color: signal }}>LIVE</span>
          <span>BAR 2 — ARS 1 · 73'</span>
          <span>ISL · MUMBAI CITY</span>
          <span style={{ color: signal }}>BRIEF READY</span>
          <span>SCORE ADDA · CRICKET + FOOTBALL</span>
          <span>IND 184/4 · RR 9.8</span>
          <span style={{ color: signal }}>LIVE</span>
          <span>BAR 2 — ARS 1 · 73'</span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: width * 0.08,
          top: height * 0.28,
          opacity: cricketOpacity,
          color: chalk,
          maxWidth: width * 0.42,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: signal,
              scale: String(pulse),
            }}
          />
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: signal,
            }}
          >
            Cricket live
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
          INDIA vs AUS
        </div>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: 28,
            marginTop: 12,
            color: dim,
          }}
        >
          184/4 · 17.2 ov · Chase 201
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: width * 0.08,
          top: height * 0.32,
          opacity: footballOpacity,
          color: chalk,
          textAlign: "right",
          maxWidth: width * 0.42,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: signal,
            }}
          >
            Football live
          </span>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: signal,
              scale: String(pulse),
            }}
          />
        </div>
        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 92,
            lineHeight: 0.9,
            letterSpacing: 1,
          }}
        >
          BAR 2 — ARS 1
        </div>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: 28,
            marginTop: 12,
            color: dim,
          }}
        >
          73' · Momentum shift
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
          paddingTop: 40,
        }}
      >
        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: Math.min(width * 0.14, 220),
            lineHeight: 0.85,
            color: chalk,
            letterSpacing: 4,
            textAlign: "center",
          }}
        >
          SCORE
          <span style={{ color: signal }}> ADDA</span>
        </div>
        <div
          style={{
            marginTop: 28,
            opacity: tagOpacity,
            fontFamily: "DM Sans, sans-serif",
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: dim,
          }}
        >
          Live state. Sharp brief. One adda.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: 48,
          right: 48,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "DM Sans, sans-serif",
          fontSize: 16,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "rgba(244,241,234,0.35)",
        }}
      >
        <span>Cricket + Football</span>
        <span>India-first bulletin</span>
      </div>
    </AbsoluteFill>
  );
};
