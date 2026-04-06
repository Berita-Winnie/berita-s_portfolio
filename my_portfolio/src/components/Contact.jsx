import SectionHeading from "./SectionHeading";
import { contacts } from "../data/content";

function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-[var(--section-y)] pt-[var(--section-y)] lg:px-10"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Tell me what you need off your plate."
        description="Retainer or project support, tailored to your workflow."
      />

      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-stretch lg:gap-9">
        <div className="flex flex-col gap-3.5">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex min-h-[4.25rem] items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] px-5 py-4 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/20 hover:shadow-[var(--shadow-card-hover)]"
              >
                <Icon className="h-4 w-4 shrink-0 text-[var(--accent)]/90" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {contact.label}
                  </p>
                  <p className="mt-0.5 text-[0.875rem] font-medium text-[var(--text)] transition-colors duration-300 ease-out group-hover:text-[var(--accent)]">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <form className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-8 shadow-[var(--shadow-card)] md:p-9">
          <div className="grid gap-4.5 sm:grid-cols-2 sm:gap-x-5">
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
          </div>

          <label className="mt-5 flex flex-grow flex-col gap-2">
            <span className="text-[12px] font-normal text-[var(--text-muted)]">Message</span>
            <textarea
              rows={5}
              placeholder="Tell me about the support you are looking for..."
              className="min-h-[8.5rem] flex-grow resize-y rounded-[var(--radius-sm)] border border-[var(--line)]/85 bg-[var(--surface-muted)]/38 px-4 py-3 text-[0.875rem] font-normal leading-[1.6] text-[var(--text)] transition-all duration-300 ease-out placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent)]/35 focus:bg-[var(--surface)] focus:shadow-[0_0_0_3px_var(--accent-soft)]"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-fit rounded-full bg-[var(--text)] px-6 py-2.75 text-[0.875rem] font-medium text-[var(--surface)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-card-hover)]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
