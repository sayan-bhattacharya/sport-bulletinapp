import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

export const VALUE_LOOP_FPS = 30;
export const VALUE_LOOP_DURATION = 150; // 5s

const rows = [
  { label: "Clarity", left: 32, right: 94 },
  { label: "Focus", left: 28, right: 90 },
  { label: "Parity", left: 36, right: 96 },
];

/** Desktop Remotion loop: conventional vs Score Adda meters */
export const ValueLoop: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sweep = interpolate(frame, [0, VALUE_LOOP_DURATION], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#101218",
        color: "#f4f1ea",
        fontFamily: "DM Sans, sans-serif",
        padding: 36,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 28,
        }}
      >
        <div
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: 42,
            letterSpacing: 1,
            lineHeight: 1,
          }}
        >
          VALUE SHIFT
        </div>
        <div style={{ fontSize: 14, letterSpacing: 2, textTransform: "uppercase", opacity: 0.55 }}>
          Conventional → SPORT IQ
        </div>
      </div>

      {rows.map((row, i) => {
        const start = 12 + i * 18;
        const progress = interpolate(frame, [start, start + 40], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const rightW = row.right * progress;
        const leftW = row.left * Math.min(1, progress + 0.15);

        return (
          <div key={row.label} style={{ marginBottom: 22 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 8,
                opacity: 0.7,
              }}
            >
              <span>{row.label}</span>
              <span>
                <span style={{ opacity: 0.45 }}>{Math.round(leftW)}</span>
                {"  /  "}
                <span style={{ color: "#e11d2e", fontWeight: 700 }}>{Math.round(rightW)}</span>
              </span>
            </div>
            <div style={{ height: 10, background: "rgba(244,241,234,0.08)", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  width: `${leftW}%`,
                  background: "rgba(244,241,234,0.28)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  width: `${rightW}%`,
                  background: "#e11d2e",
                  boxShadow: "0 0 18px rgba(225,29,46,0.35)",
                }}
              />
            </div>
          </div>
        );
      })}

      <div
        style={{
          position: "absolute",
          left: 36,
          right: 36,
          bottom: 28,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Bebas Neue, sans-serif",
          fontSize: 28,
          letterSpacing: 1,
          opacity: interpolate(frame, [70, 90], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <span style={{ opacity: 0.4 }}>NOISE</span>
        <span style={{ color: "#e11d2e", fontWeight: 900 }}>SPORT IQ</span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${sweep * 100}%`,
          width: 2,
          background: "rgba(244,241,234,0.15)",
        }}
      />
    </AbsoluteFill>
  );
};
