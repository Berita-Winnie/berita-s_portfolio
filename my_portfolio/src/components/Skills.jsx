import SectionHeading from "./SectionHeading";
import { additionalSkillTags, primarySkills } from "../data/content";
import { motion, useReducedMotion } from "framer-motion";
import { getRevealProps } from "../utils/motion";

function SkillCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/72 bg-[var(--surface)]/86 px-6 py-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/22 md:px-6 md:py-6"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Icon
        className="mb-3 h-[1rem] w-[1rem] shrink-0 text-[var(--accent)]/82 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        strokeWidth={1.5}
      />
      <p className="text-[0.875rem] font-medium leading-snug tracking-tight text-[var(--text)] md:text-[0.9rem]">
        {item.name}
      </p>
    </motion.div>
  );
}

function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-[var(--section-y)] lg:px-10"
      {...getRevealProps(prefersReducedMotion, { duration: 0.72 })}
    >
      <motion.div {...getRevealProps(prefersReducedMotion, { delay: 0.05 })}>
        <SectionHeading eyebrow="Skills" title="Core tasks." />
      </motion.div>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        {...getRevealProps(prefersReducedMotion, { delay: 0.1 })}
      >
        {primarySkills.map((item, index) => (
          <motion.div key={item.name} {...getRevealProps(prefersReducedMotion, { delay: 0.12 + index * 0.05 })}>
            <SkillCard item={item} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 border-t border-[var(--line)]/50 pt-10 md:mt-14 md:pt-11"
        {...getRevealProps(prefersReducedMotion, { delay: 0.2 })}
      >
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
          Also
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-2.5">
          {additionalSkillTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[var(--line)]/45 bg-[var(--surface-muted)]/40 px-3 py-1 text-[0.8125rem] font-normal leading-none text-[var(--text)]/85"
            >
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
}

export default Skills;
