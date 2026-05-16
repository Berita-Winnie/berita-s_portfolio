import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { upworkUrl } from "../data/content";

function SampleWorkModal({ system, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!system) return null;

  const hasExternalLink = system.sampleUrl?.startsWith("http");

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#1c1a18]/40 backdrop-blur-[2px]"
        aria-label="Close sample preview"
        onClick={onClose}
      />
      <motion.div
        className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] shadow-[var(--shadow-card-hover)]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative h-44 shrink-0 overflow-hidden sm:h-52"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <img
            src={system.sampleImage}
            alt=""
            className="h-full w-full object-cover saturate-[0.7] contrast-[0.92] brightness-[0.92]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1a18]/55 via-transparent to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full border border-white/20 bg-[#1c1a18]/50 p-2 text-white transition-colors hover:bg-[#1c1a18]/70"
            aria-label="Close"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </motion.div>

        <div className="overflow-y-auto px-6 py-6 sm:px-7 sm:py-7">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]/88">
            Sample work
          </p>
          <h3 id="sample-modal-title" className="mt-2 text-[1.1rem] font-medium leading-snug text-[var(--text)]">
            {system.sampleTitle}
          </h3>
          <p className="mt-3 text-[0.9rem] leading-[1.68] text-[var(--text-muted)]">{system.sampleDescription}</p>

          {system.sampleDeliverables?.length > 0 ? (
            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Deliverables
              </p>
              <ul className="mt-3 space-y-2">
                {system.sampleDeliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-[var(--text-muted)]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}

          <motion.div
            className="mt-7 flex flex-wrap gap-2.5 border-t border-[var(--line)]/60 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            {hasExternalLink ? (
              <a
                href={system.sampleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--text)] px-5 py-2.5 text-[0.875rem] font-medium text-[var(--surface)] transition-colors hover:bg-[var(--accent-hover)]"
              >
                Open full sample
              </a>
            ) : null}
            <a
              href={upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-2.5 text-[0.875rem] font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
            >
              Invite on Upwork
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="rounded-full border border-[var(--line)] bg-[var(--surface-muted)]/50 px-5 py-2.5 text-[0.875rem] font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              Contact me
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SampleWorkModal;
