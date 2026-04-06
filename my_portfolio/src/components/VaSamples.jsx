import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { primarySkills } from "../data/content";

function VaSamples() {
  return (
    <section
      id="va-samples"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-[var(--section-y)] lg:px-10"
    >
      <SectionHeading
        eyebrow="Sample work"
        title="Examples tied to each skill area."
        description="Examples are anonymized where needed."
      />

      <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {primarySkills.map((skill) => (
          <article
            key={skill.name}
            className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/20 hover:shadow-[var(--shadow-card-hover)] md:p-7"
          >
            <div className="relative mb-5 h-[9.25rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)]/50 bg-[var(--surface-muted)] transition-colors duration-300 ease-out group-hover:border-[var(--accent)]/15">
              <img
                src={skill.sampleImage}
                alt={`${skill.name} sample preview`}
                className="h-full w-full object-cover saturate-[0.64] contrast-[0.92] brightness-[0.92] transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:saturate-[0.74]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1a18]/58 via-[#1c1a18]/30 to-[#1c1a18]/12" />
            </div>
            <h3 className="text-[1rem] font-medium leading-snug tracking-tight text-[var(--text)]">
              {skill.sampleTitle ?? skill.name}
            </h3>
            <p className="mt-3 flex-grow text-[0.9rem] font-normal leading-[1.68] text-[var(--text-muted)]">
              {skill.sampleDescription}
            </p>

            <div className="mt-6 border-t border-[var(--line)]/60 pt-5">
              <a
                href={skill.sampleUrl}
                target={skill.sampleUrl.startsWith("http") ? "_blank" : undefined}
                rel={skill.sampleUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[var(--text)] transition-colors duration-300 ease-out hover:text-[var(--accent)]"
              >
                View sample work <ArrowUpRight className="h-4 w-4 shrink-0 opacity-70 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VaSamples;
