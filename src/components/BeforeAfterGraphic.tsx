import { motion, useReducedMotion } from "framer-motion";

const panes = [
  {
    side: "before",
    label: "Conventional",
    lines: ["Alert spam", "Buried score", "Football afterthought", "Long scroll for context"],
  },
  {
    side: "after",
    label: "Score Adda",
    lines: ["One front pulse", "Score always visible", "Cricket = Football", "Brief in one tap"],
  },
];

export function BeforeAfterGraphic() {
  const reduced = useReducedMotion();

  return (
    <div className="infographic before-after" aria-label="Conventional versus Score Adda">
      <div className="before-after-grid">
        {panes.map((pane, pi) => (
          <motion.div
            key={pane.side}
            className={`ba-pane ba-pane--${pane.side}`}
            initial={reduced ? false : { opacity: 0, x: pi === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: reduced ? 0 : 0.55,
              delay: reduced ? 0 : 0.08 + pi * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="ba-label">{pane.label}</p>
            <ul>
              {pane.lines.map((line, li) => (
                <motion.li
                  key={line}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduced ? 0 : 0.35,
                    delay: reduced ? 0 : 0.22 + pi * 0.1 + li * 0.08,
                  }}
                >
                  {line}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
