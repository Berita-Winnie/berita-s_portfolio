import SectionHeading from "./SectionHeading";
import { motion, useReducedMotion } from "framer-motion";
import { getRevealProps } from "../utils/motion";

function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-[var(--section-y)] lg:px-10"
      {...getRevealProps(prefersReducedMotion, { duration: 0.72 })}
    >
      <motion.div {...getRevealProps(prefersReducedMotion, { delay: 0.05 })}>
        <SectionHeading eyebrow="About" title="What I do." />
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 md:gap-7">
        <motion.p
          className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-8 text-[0.9125rem] font-normal leading-[1.72] text-[var(--text-muted)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/18 hover:shadow-[var(--shadow-card-hover)] md:p-9"
          {...getRevealProps(prefersReducedMotion, { delay: 0.12 })}
        >
          I manage inboxes, calendars, projects, and daily operations for founders and busy professionals.
          Tasks include email, scheduling, coordination, and admin work.
        </motion.p>
        <motion.p
          className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-8 text-[0.9125rem] font-normal leading-[1.72] text-[var(--text-muted)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/18 hover:shadow-[var(--shadow-card-hover)] md:p-9"
          {...getRevealProps(prefersReducedMotion, { delay: 0.2 })}
        >
          Available for ongoing support or project-based work. Clear communication, organized systems,
          and reliable follow-through.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default About;
