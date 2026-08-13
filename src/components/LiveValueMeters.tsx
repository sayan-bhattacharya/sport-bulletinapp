import { motion, useReducedMotion } from "framer-motion";

const chips = [
  { label: "Score state", value: "Always on" },
  { label: "Brief", value: "40 sec" },
  { label: "Sports", value: "2 equal" },
  { label: "Tabs needed", value: "1" },
];

export function LiveValueMeters() {
  const reduced = useReducedMotion();

  return (
    <div className="infographic live-meters" aria-label="Live pulse value">
      <div className="meter-grid">
        {chips.map((c, i) => (
          <motion.div
            key={c.label}
            className="meter-chip"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: reduced ? 0 : 0.45,
              delay: reduced ? 0 : 0.08 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="meter-label">{c.label}</span>
            <motion.strong
              initial={reduced ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: reduced ? 0 : 0.2 + i * 0.08,
                duration: reduced ? 0 : 0.4,
              }}
            >
              {c.value}
            </motion.strong>
          </motion.div>
        ))}
      </div>
      <p className="infographic-footnote">
        Built so the consultant can show: fewer surfaces, clearer value, faster fan decision.
      </p>
    </div>
  );
}
