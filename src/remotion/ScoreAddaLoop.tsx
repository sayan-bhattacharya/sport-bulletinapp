import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const chalk = "#f4f1ea";
const signal = "#e11d2e";
const dim = "rgba(244, 241, 234, 0.72)";

export const SCORE_ADDA_FPS = 30;
export const SCORE_ADDA_DURATION = 240;

const baseUrl = import.meta.env.BASE_URL || "/";
const logoAssetUrl = `${baseUrl}sport_iq_logo.png`;

/**
 * Transparent kinetic overlay — sits on top of the real hero MP4 video.
 * Zero solid background so the live match video plays underneath seamlessly.
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
    [1, 1.25, 1],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* PERSISTENT SLEEK TOP CORNER WATERMARK BADGE */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 28,
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "rgba(7, 10, 18, 0.72)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(220, 38, 38, 0.35)",
          padding: "6px 14px 6px 10px",
          borderRadius: 30,
          boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 16px rgba(220,38,38,0.2)",
          zIndex: 10,
        }}
      >
        <img
          src={logoAssetUrl}
          alt="SPORT IQ"
          style={{
            width: 26,
            height: 26,
            objectFit: "contain",
            filter: "drop-shadow(0 2px 8px rgba(220,38,38,0.5))",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: signal,
              scale: String(pulse),
              boxShadow: "0 0 10px #ef4444",
            }}
          />
          <span
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1.5,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            SPORT IQ <span style={{ color: signal }}>LIVE</span>
          </span>
        </div>
      </div>

      {/* LIGHT SWEEP SCANLINE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${sweep}%`,
          width: 80,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          transform: "skewX(-20deg)",
          pointerEvents: "none",
        }}
      />

      {/* TOP STREAMING TICKER */}
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 28,
          width: "55%",
          overflow: "hidden",
          borderBottom: "1px solid rgba(244,241,234,0.15)",
          paddingBottom: 6,
          background: "linear-gradient(90deg, transparent, rgba(7, 10, 18, 0.4))",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: 40,
            whiteSpace: "nowrap",
            translate: `${tickerX}px 0px`,
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 22,
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

      {/* CRICKET MOMENTUM CARD */}
      <div
        style={{
          position: "absolute",
          left: width * 0.07,
          top: height * 0.32,
          opacity: cricketOpacity,
          color: chalk,
          maxWidth: width * 0.45,
          background: "rgba(7, 10, 18, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "20px 28px",
          borderRadius: 16,
          border: "1px solid rgba(244,241,234,0.15)",
          boxShadow: "0 16px 36px rgba(0,0,0,0.6)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: signal,
              scale: String(pulse),
              boxShadow: "0 0 16px rgba(225,29,46,0.8)",
            }}
          />
          <span
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: signal,
            }}
          >
            Live Cricket Pulse
          </span>
        </div>
        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 78,
            lineHeight: 0.9,
            letterSpacing: 1,
          }}
        >
          IND 184/4
        </div>
        <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, marginTop: 8, color: dim }}>
          17.2 ov · Target 201 · Req. 6.1
        </div>
      </div>

      {/* FOOTBALL MOMENTUM CARD */}
      <div
        style={{
          position: "absolute",
          right: width * 0.07,
          top: height * 0.36,
          opacity: footballOpacity,
          color: chalk,
          textAlign: "right",
          maxWidth: width * 0.48,
          background: "rgba(7, 10, 18, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "20px 28px",
          borderRadius: 16,
          border: "1px solid rgba(244,241,234,0.15)",
          boxShadow: "0 16px 36px rgba(0,0,0,0.6)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 12,
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: signal,
            }}
          >
            Football Live
          </span>
          <div
            style={{
              width: 10,
              height: 10,
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
            fontSize: 74,
            lineHeight: 0.9,
            letterSpacing: 1,
          }}
        >
          MUM 1 — MBSG 1
        </div>
        <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, marginTop: 8, color: dim }}>
          64' · ISL Matchday · Petratos 72'
        </div>
      </div>

      {/* BRAND CRESCENDO OVERLAY WITH EXTRACTED TRANSPARENT LOGO BADGE */}
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
          pointerEvents: "none",
          background: "radial-gradient(circle at center, rgba(7, 10, 18, 0.7) 0%, transparent 75%)",
        }}
      >
        {/* Sleek extracted 3D Logo Asset with Transparent Alpha */}
        <img
          src={logoAssetUrl}
          alt="SPORT IQ Logo"
          style={{
            width: 140,
            height: 140,
            objectFit: "contain",
            filter: "drop-shadow(0 16px 36px rgba(220, 38, 38, 0.55))",
            marginBottom: 14,
          }}
        />

        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: Math.min(width * 0.12, 170),
            lineHeight: 0.85,
            color: chalk,
            letterSpacing: 4,
            textAlign: "center",
            textShadow: "0 12px 40px rgba(0,0,0,0.75)",
          }}
        >
          SPORT
          <span style={{ color: signal }}> IQ</span>
        </div>

        <div
          style={{
            marginTop: 18,
            opacity: tagOpacity,
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: dim,
            textShadow: "0 6px 20px rgba(0,0,0,0.65)",
          }}
        >
          News • Insights • Scores • Stories
        </div>
      </div>

      {/* BORDER FRAME */}
      <div
        style={{
          position: "absolute",
          inset: 14,
          border: "1px solid rgba(244,241,234,0.12)",
          borderRadius: 14,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
