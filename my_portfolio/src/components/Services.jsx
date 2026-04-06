import { CalendarCheck2, FolderKanban, Globe, LayoutDashboard, NotebookTabs, Search, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

const serviceItemIcons = {
  "Organization & Prioritization": FolderKanban,
  "Calendar & Email Management": CalendarCheck2,
  Research: Search,
  "Travel Planning": Globe,
  "Project Management": LayoutDashboard,
  "Meeting & Administrative Support": Users,
};

function Services() {
  const service = services[0];

  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-[var(--section-y)] lg:px-10">
      <SectionHeading eyebrow="Services" title="How I can support your business." />

      <div className="mx-auto max-w-4xl">
        <article className="rounded-[var(--radius-lg)] border border-[var(--line)]/80 bg-[var(--surface)] p-8 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-[var(--accent)]/18 hover:shadow-[var(--shadow-card-hover)] md:p-10">
          <NotebookTabs className="mb-5 h-5 w-5 text-[var(--accent)]/90" strokeWidth={1.5} />
          <h3 className="text-[1rem] font-medium text-[var(--text)]">{service.title}</h3>
          <p className="mt-3 max-w-2xl text-[0.9rem] font-normal leading-[1.7] text-[var(--text-muted)]">
            {service.description}
          </p>
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-2.5">
            {(service.items ?? []).map((item) => {
              const ItemIcon = serviceItemIcons[item] ?? LayoutDashboard;
              return (
                <li
                  key={item}
                  className="flex min-h-[2.75rem] items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2 text-[0.9rem] text-[var(--text-muted)] transition-colors duration-300 ease-out hover:bg-[var(--accent-soft)]/45 hover:text-[var(--text)]"
                >
                  <ItemIcon className="h-4 w-4 shrink-0 text-[var(--accent)]/85" strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
