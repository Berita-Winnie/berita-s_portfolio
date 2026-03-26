import { ArrowUpRight, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-16 lg:px-10 "
    >
      <SectionHeading
        eyebrow="Projects"
        title="Selected work focused on clarity, utility, and visual balance."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-sm "
          >
            <div className="mb-4 h-40 rounded-xl border border-[var(--line)]/70 bg-gradient-to-br from-[#ece4da] to-[#e5ddd2]" />
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] ">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] px-3 py-1  text-xs text-[var(--text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={project.liveurl}
                className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-[var(--accent)]"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] transition-colors duration-300  hover:text-[var(--text)]"
              >
                GitHub <Github className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
