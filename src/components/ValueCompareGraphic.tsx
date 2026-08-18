import { motion, useReducedMotion } from "framer-motion";

type Metric = {
  label: string;
  conventional: number;
  sportIq: number;
  unit: string;
  invert?: boolean;
};

const metrics: Metric[] = [
  { label: "Time to clarity (Seconds)", conventional: 38, sportIq: 94, unit: "speed" },
  { label: "Zero-clutter signal index", conventional: 24, sportIq: 96, unit: "signal" },
  { label: "Cricket + Football dual parity", conventional: 34, sportIq: 98, unit: "balance" },
  { label: "AI Micro-bulletin delivery speed", conventional: 18, sportIq: 95, unit: "speed" },
];

function Bar({
  value,
  tone,
  delay,
  reduced,
}: {
  value: number;
  tone: "mute" | "signal";
  delay: number;
  reduced: boolean | null;
}) {
  return (
    <div className="value-bar-track">
      <motion.div
        className={`value-bar-fill value-bar-fill--${tone}`}
        initial={{ width: reduced ? `${value}%` : "0%" }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }
        }
      />
    </div>
  );
}

export function ValueCompareGraphic() {
  const reduced = useReducedMotion();

  return (
    <div className="infographic value-compare" aria-label="SPORT IQ versus conventional bulletin">
      <div className="value-compare-legend">
        <span className="legend-mute">Conventional Apps (Cricbuzz/ESPN)</span>
        <span className="legend-signal" style={{ color: "#dc2626", fontWeight: 800 }}>SPORT IQ (High-Velocity)</span>
      </div>
      <ul className="value-metric-list">
        {metrics.map((m, i) => (
          <li key={m.label}>
            <div className="value-metric-label">
              <span>{m.label}</span>
              <span className="value-metric-scores">
                <span className="score-mute">{m.conventional}%</span>
                <span className="score-signal" style={{ color: "#dc2626", fontWeight: 800 }}>{m.sportIq}%</span>
              </span>
            </div>
            <Bar value={m.conventional} tone="mute" delay={0.08 + i * 0.1} reduced={reduced} />
            <Bar value={m.sportIq} tone="signal" delay={0.16 + i * 0.1} reduced={reduced} />
          </li>
        ))}
      </ul>
      <p className="infographic-footnote">
        High-octane sports pulse. Sub-2.5s AI summary generation. Zero ad bloat.
      </p>
    </div>
  );
}
