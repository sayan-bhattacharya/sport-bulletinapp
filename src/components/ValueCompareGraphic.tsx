import { motion, useReducedMotion } from "framer-motion";

type Metric = {
  label: string;
  conventional: number;
  scoreAdda: number;
  unit: string;
  invert?: boolean;
};

const metrics: Metric[] = [
  { label: "Time to clarity", conventional: 38, scoreAdda: 92, unit: "speed" },
  { label: "Front-page clutter", conventional: 86, scoreAdda: 22, unit: "noise", invert: true },
  { label: "Dual-sport parity", conventional: 34, scoreAdda: 96, unit: "balance" },
  { label: "Live + brief together", conventional: 28, scoreAdda: 94, unit: "habit" },
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
    <div className="infographic value-compare" aria-label="Score Adda versus conventional bulletin">
      <div className="value-compare-legend">
        <span className="legend-mute">Conventional bulletin</span>
        <span className="legend-signal">Score Adda</span>
      </div>
      <ul className="value-metric-list">
        {metrics.map((m, i) => (
          <li key={m.label}>
            <div className="value-metric-label">
              <span>{m.label}</span>
              <span className="value-metric-scores">
                <span className="score-mute">{m.conventional}</span>
                <span className="score-signal">{m.scoreAdda}</span>
              </span>
            </div>
            <Bar value={m.conventional} tone="mute" delay={0.08 + i * 0.1} reduced={reduced} />
            <Bar value={m.scoreAdda} tone="signal" delay={0.16 + i * 0.1} reduced={reduced} />
          </li>
        ))}
      </ul>
      <p className="infographic-footnote">
        Same match night. Less chrome. Faster meaning.
      </p>
    </div>
  );
}
