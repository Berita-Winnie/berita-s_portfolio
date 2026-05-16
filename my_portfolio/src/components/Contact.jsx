import SectionHeading from "./SectionHeading";
import { contacts, upworkUrl } from "../data/content";
import { motion, useReducedMotion } from "framer-motion";
import { getRevealProps } from "../utils/motion";

function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-[var(--section-y)] pt-[var(--section-y)] lg:px-10"
      {...getRevealProps(prefersReducedMotion, { duration: 0.72 })}
    >
      <motion.div {...getRevealProps(prefersReducedMotion, { delay: 0.05 })}>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch."
          description="Invite me on Upwork or send a message."
        />
      </motion.div>

      <motion.div
        className="mb-8 rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface-muted)]/50 px-6 py-5 text-center shadow-[var(--shadow-card)] md:px-8 md:py-6"
        {...getRevealProps(prefersReducedMotion, { delay: 0.08 })}
      >
        <p className="text-[0.9375rem] font-medium leading-relaxed text-[var(--text)]">
          Invite me on Upwork or contact me to get started.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href={upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--text)] px-5.5 py-2.75 text-[0.875rem] font-medium text-[var(--surface)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-card-hover)]"
          >
            Invite on Upwork
          </a>
          <a
            href="mailto:winrose.berita@email.com"
            className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5.5 py-2.75 text-[0.875rem] font-medium text-[var(--text)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
          >
            Send an email
          </a>
        </div>
      </motion.div>

      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-stretch lg:gap-9">
        <div className="flex flex-col gap-3.5">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex min-h-[4.25rem] items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] px-5 py-4 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/20 hover:shadow-[var(--shadow-card-hover)]"
              {...getRevealProps(prefersReducedMotion, { delay: 0.1 + index * 0.05 })}
            >
              <contact.icon className="h-4 w-4 shrink-0 text-[var(--accent)]/90" strokeWidth={1.5} />
              <motion.div whileHover={prefersReducedMotion ? undefined : { x: 2 }} transition={{ duration: 0.3 }}>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {contact.label}
                </p>
                <p className="mt-0.5 text-[0.875rem] font-medium text-[var(--text)] transition-colors duration-300 ease-out group-hover:text-[var(--accent)]">
                  {contact.value}
                </p>
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.form
          className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-8 shadow-[var(--shadow-card)] md:p-9"
          {...getRevealProps(prefersReducedMotion, { delay: 0.18 })}
        >
          <motion.div
            className="grid gap-4.5 sm:grid-cols-2 sm:gap-x-5"
            {...getRevealProps(prefersReducedMotion, { delay: 0.2 })}
          >
            <label className="flex flex-col gap-2">
              <span className="text-[12px] font-normal text-[var(--text-muted)]">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-[var(--radius-sm)] border border-[var(--line)]/85 bg-[var(--surface-muted)]/38 px-4 py-2.5 text-[0.875rem] font-normal text-[var(--text)] transition-all duration-300 ease-out placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent)]/35 focus:bg-[var(--surface)] focus:shadow-[0_0_0_3px_var(--accent-soft)]"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[12px] font-normal text-[var(--text-muted)]">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-[var(--radius-sm)] border border-[var(--line)]/85 bg-[var(--surface-muted)]/38 px-4 py-2.5 text-[0.875rem] font-normal text-[var(--text)] transition-all duration-300 ease-out placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent)]/35 focus:bg-[var(--surface)] focus:shadow-[0_0_0_3px_var(--accent-soft)]"
              />
            </label>
          </motion.div>

          <label className="mt-5 flex flex-grow flex-col gap-2">
            <span className="text-[12px] font-normal text-[var(--text-muted)]">Message</span>
            <textarea
              rows={5}
              placeholder="What support do you need?"
              className="min-h-[8.5rem] flex-grow resize-y rounded-[var(--radius-sm)] border border-[var(--line)]/85 bg-[var(--surface-muted)]/38 px-4 py-3 text-[0.875rem] font-normal leading-[1.6] text-[var(--text)] transition-all duration-300 ease-out placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent)]/35 focus:bg-[var(--surface)] focus:shadow-[0_0_0_3px_var(--accent-soft)]"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-fit rounded-full bg-[var(--text)] px-6 py-2.75 text-[0.875rem] font-medium text-[var(--surface)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-card-hover)]"
          >
            Send message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
