import { motion, useReducedMotion } from "framer-motion";

const beats = [
  { n: "01", title: "15s Score Pulse", hint: "Instant match state" },
  { n: "02", title: "AI Micro-Bulletin", hint: "35-word tactical context" },
  { n: "03", title: "Viral Social Card", hint: "1-click WhatsApp share" },
];

export function HabitFlowGraphic() {
  const reduced = useReducedMotion();

  return (
    <div className="infographic habit-flow" aria-label="SPORT IQ habit loop">
      <div className="habit-flow-rail">
        {beats.map((b, i) => (
          <div className="habit-node-wrap" key={b.n}>
            <motion.div
              className="habit-node"
              initial={reduced ? false : { opacity: 0, y: 18, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduced ? 0 : 0.55,
                delay: reduced ? 0 : 0.12 + i * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="habit-n">{b.n}</span>
              <strong>{b.title}</strong>
              <span className="habit-hint">{b.hint}</span>
            </motion.div>
            {i < beats.length - 1 ? (
              <motion.div
                className="habit-connector"
                initial={reduced ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: reduced ? 0 : 0.45,
                  delay: reduced ? 0 : 0.28 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
      <motion.p
        className="infographic-footnote"
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: reduced ? 0 : 0.7, duration: reduced ? 0 : 0.4 }}
      >
        Conventional apps bury scores under video feeds and banner ads. SPORT IQ delivers match intelligence in one unified 15-second loop.
      </motion.p>
    </div>
  );
}
