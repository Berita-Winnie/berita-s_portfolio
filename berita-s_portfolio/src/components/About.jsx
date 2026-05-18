import SectionHeading from './SectionHeading'


function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-[var(--section-y)] lg:px-10"
    >
      
      <SectionHeading
        eyebrow="About"
        title="Operational support that feels steady and human."
      />
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        <p className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/90 bg-[var(--surface)] p-7 text-[0.9375rem] font-normal leading-relaxed text-[var(--text-muted)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/20 hover:shadow-[var(--shadow-card-hover)] md:p-8">
          I work with people who are juggling too much—managing inboxes,
          coordinating schedules, chasing details, and keeping projects moving.
          My role is to take that load off your plate with clear communication
          and systems you can trust.
        </p>
        <p className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/90 bg-[var(--surface)] p-7 text-[0.9375rem] font-normal leading-relaxed text-[var(--text-muted)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/20 hover:shadow-[var(--shadow-card-hover)] md:p-8">
          Whether you need ongoing assistance or help getting organized for a
          busy season, I bring patience, discretion, and a practical eye for
          what “done” looks like. Every client relationship is built on
          reliability and respect for your time.
        </p>
      </div>
    </section>
  )
}

export default About
