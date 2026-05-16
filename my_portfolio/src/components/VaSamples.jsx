import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SampleWorkModal from "./SampleWorkModal";
import { executiveSupportSystems } from "../data/content";
import { motion, useReducedMotion } from "framer-motion";
import { getRevealProps } from "../utils/motion";

function VaSamples() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSample, setActiveSample] = useState(null);

  const openSample = (system) => {
    if (system.sampleUrl?.startsWith("http")) {
      window.open(system.sampleUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setActiveSample(system);
  };

  return (
    <motion.section
      id="support-systems"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-[var(--section-y)] lg:px-10"
      {...getRevealProps(prefersReducedMotion, { duration: 0.72 })}
    >
      <motion.div {...getRevealProps(prefersReducedMotion, { delay: 0.05 })}>
        <SectionHeading
          eyebrow="Executive Support Systems"
          title="Sample work."
          description="Click a card to view each sample."
        />
      </motion.div>

      <motion.div
        className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3"
        {...getRevealProps(prefersReducedMotion, { delay: 0.1 })}
      >
        {executiveSupportSystems.map((system, index) => (
          <motion.article
            key={system.slug}
            className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/20 hover:shadow-[var(--shadow-card-hover)] md:p-7"
            {...getRevealProps(prefersReducedMotion, { delay: 0.1 + index * 0.055 })}
          >
            <button
              type="button"
              onClick={() => openSample(system)}
              className="relative mb-5 block h-[9.25rem] w-full shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)]/50 bg-[var(--surface-muted)] text-left transition-colors duration-300 ease-out group-hover:border-[var(--accent)]/15"
            >
              <img
                src={system.sampleImage}
                alt={`${system.sampleTitle} sample preview`}
                className="h-full w-full object-cover saturate-[0.64] contrast-[0.92] brightness-[0.92] transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:saturate-[0.74]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1a18]/58 via-[#1c1a18]/30 to-[#1c1a18]/12" />
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-[#1c1a18]/55 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/90">
                View sample
              </span>
            </button>

            <h3 className="text-[1rem] font-medium leading-snug tracking-tight text-[var(--text)]">
              {system.sampleTitle}
            </h3>
            <p className="mt-3 flex-grow text-[0.9rem] font-normal leading-[1.68] text-[var(--text-muted)]">
              {system.sampleDescription}
            </p>

            <div className="mt-6 border-t border-[var(--line)]/60 pt-5">
              <button
                type="button"
                onClick={() => openSample(system)}
                className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[var(--text)] transition-colors duration-300 ease-out hover:text-[var(--accent)]"
              >
                View sample work
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 opacity-70 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeSample ? (
          <SampleWorkModal system={activeSample} onClose={() => setActiveSample(null)} />
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}

export default VaSamples;
