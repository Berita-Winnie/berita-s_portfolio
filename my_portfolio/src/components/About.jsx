import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-[var(--section-y)] lg:px-10"
    >
      <SectionHeading eyebrow="About" title="Operational support that feels steady and human." />
      <div className="grid gap-6 md:grid-cols-2 md:gap-7">
        <p className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-8 text-[0.9125rem] font-normal leading-[1.72] text-[var(--text-muted)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/18 hover:shadow-[var(--shadow-card-hover)] md:p-9">
          I work with people who are juggling too much—managing inboxes, coordinating schedules, chasing
          details, and keeping projects moving. My role is to take that load off your plate with clear
          communication and systems you can trust.
        </p>
        <p className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-8 text-[0.9125rem] font-normal leading-[1.72] text-[var(--text-muted)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/18 hover:shadow-[var(--shadow-card-hover)] md:p-9">
          Whether you need ongoing assistance or help getting organized for a busy season, I bring patience,
          discretion, and a practical eye for what "done" looks like. Every client relationship is built on
          reliability and respect for your time.
        </p>
      </div>
    </section>
  );
}

export default About;
