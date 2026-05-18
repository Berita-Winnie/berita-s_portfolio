import {
  CalendarCheck2,
  CodeXml,
  FolderKanban,
  Globe,
  LayoutDashboard,
  LayoutTemplate,
  NotebookTabs,
  Search,
  Users,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { services } from '../data/content'

const icons = [NotebookTabs, LayoutDashboard]
const serviceItemIcons = {
  'Organization & Prioritization': FolderKanban,
  'Calendar &Email Management': CalendarCheck2,
  'Travel Planning': Globe,
  'Project Management': LayoutDashboard,
  'Meeting & Administrative Support': Users,
  'Responsive Design': LayoutTemplate,
  'React and Tailiwind Development': CodeXml,
  'Clean UI Implementation': NotebookTabs,
}

const Services = () => {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10"
    >
      <SectionHeading
        eyebrow="Services"
        title="Focused support for operations and modern web presence."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = icons[index] ?? LayoutDashboard
          return (
            <article
              key={service.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] "
            >
              <Icon className="mb-4 h-5 w-5 text-[var(--accent)] " />
              <h3 className="text-lg font-semibold ">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {service.description}
              </p>
              <ul className="mt-5 grid gap-2.5">
                {(service.items ?? []).map((item) => {
                  const ItemIcon = serviceItemIcons[item] ?? LayoutDashboard
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:bg[var(--accent-soft)]/40 hover:text-[var(--text)]"
                    >
                      <ItemIcon className="h-4 w-4 shrink-0 text-[var(--accent)]"/> <span>{item}</span>
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
