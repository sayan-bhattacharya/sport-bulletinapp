import { motion, useReducedMotion } from "framer-motion";

const panes = [
  {
    side: "before",
    label: "Conventional Feeds (Cricbuzz / ESPN)",
    lines: ["Ad-cluttered popups", "Buried live scores", "Football treated as afterthought", "Endless scroll for context"],
  },
  {
    side: "after",
    label: "SPORT IQ (15-Sec Match Pulse)",
    lines: ["Zero ad clutter, 100% signal", "Scores always pinned & live", "Cricket + Football dual-fandom", "AI micro-bulletins in 40 words"],
  },
];

export function BeforeAfterGraphic() {
  const reduced = useReducedMotion();

  return (
    <div className="infographic before-after" aria-label="Conventional versus SPORT IQ">
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
