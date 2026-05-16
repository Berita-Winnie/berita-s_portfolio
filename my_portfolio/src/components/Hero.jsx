import { motion, useReducedMotion } from "framer-motion";
import { getIntroProps } from "../utils/motion";
import { upworkUrl } from "../data/content";

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="home"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-[var(--section-y)] pt-12 lg:px-10 lg:pt-[var(--section-y-tight)]"
      {...getIntroProps(prefersReducedMotion, { duration: 0.78 })}
    >
      <motion.div
        className="grid items-stretch gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14"
        {...getIntroProps(prefersReducedMotion, { duration: 0.78 })}
      >
        <motion.div className="flex flex-col justify-center pb-2 lg:pb-0">
          <motion.p
            className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]/88"
            {...getIntroProps(prefersReducedMotion, { delay: 0.08, duration: 0.7 })}
          >
            Executive Virtual Assistant
          </motion.p>
          <motion.h1
            className="max-w-xl text-[1.85rem] font-medium leading-[1.12] tracking-tight text-[var(--text)] md:text-[2.35rem] lg:text-[2.55rem]"
            {...getIntroProps(prefersReducedMotion, { delay: 0.15, duration: 0.78 })}
          >
            Executive Virtual Assistant for Founders &amp; Busy Professionals
          </motion.h1>
          <motion.p
            className="mt-4 text-[0.9375rem] font-medium text-[var(--text)]/90 md:text-[1rem]"
            {...getIntroProps(prefersReducedMotion, { delay: 0.2, duration: 0.75 })}
          >
            Winrose Berita
          </motion.p>
          <motion.p
            className="mt-5 max-w-lg text-[0.9375rem] font-normal leading-[1.72] text-[var(--text-muted)] md:text-[0.975rem]"
            {...getIntroProps(prefersReducedMotion, { delay: 0.24, duration: 0.8 })}
          >
            I handle inbox and calendar management, project coordination, travel planning, expense
            tracking, and administrative tasks for founders, CEOs, and busy professionals.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-2.5"
            {...getIntroProps(prefersReducedMotion, { delay: 0.32, duration: 0.72 })}
          >
            <a
              href="#support-systems"
              className="rounded-full bg-[var(--text)] px-5.5 py-2.75 text-[0.875rem] font-medium text-[var(--surface)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-card-hover)]"
            >
              View samples
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--line)] bg-[var(--surface)]/90 px-5.5 py-2.75 text-[0.875rem] font-medium text-[var(--text)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
            >
              Get started
            </a>
          </motion.div>
          <motion.p
            className="mt-6 max-w-md text-[0.875rem] leading-relaxed text-[var(--text-muted)]"
            {...getIntroProps(prefersReducedMotion, { delay: 0.38, duration: 0.72 })}
          >
            <a
              href={upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--text)] underline decoration-[var(--line)] underline-offset-4 transition-colors duration-300 ease-out hover:text-[var(--accent)] hover:decoration-[var(--accent)]/40"
            >
              Invite me on Upwork
            </a>{" "}
            or contact me to get started.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-3.5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] md:min-h-[320px] md:p-4"
          {...getIntroProps(prefersReducedMotion, { delay: 0.22, duration: 0.85 })}
        >
          <motion.div className="drift-slow absolute right-6 top-6 h-24 w-24 rounded-full bg-[var(--accent-soft)]/80 blur-2xl" />
          <motion.div
            className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)]/60 bg-[var(--surface-muted)] md:min-h-[300px]"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.005 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/berita-profile.png"
              alt="Winrose Berita — Executive Virtual Assistant"
              className="h-full min-h-[260px] w-full flex-1 object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] md:min-h-[300px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1c1a18]/70 via-[#1c1a18]/25 to-transparent px-5 pb-5 pt-12">
              <p className="text-[12px] font-normal text-white/84">Executive Virtual Assistant</p>
              <p className="mt-1.5 text-[1.05rem] font-medium leading-snug tracking-tight text-white md:text-[1.16rem]">
                Inbox. Calendar. Operations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
