import React from 'react'
import SectionHeading from './SectionHeading'
import { assistantSkills, frontendskills } from '../data/content'

function SkillCard({ item }) {
  const Icon = item.icon
  return (
    <div className="group rounded-2xl border border-[var(--line)]  bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-sm">
      <Icon className="mb-4 h-5 w-5 text-[var(--accent)] transition-transform duration-300 group-hover:scale-105" />
      <p className="text-sm font-medium text-[var(--text)]">{item.name}</p>
    </div>
  )
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6  py-16 lg:px-10 "
    >
      <SectionHeading
        eyebrow="skills"
        title="Two strengths that work together."
        description="Frontend development and virtual assistant support, delivered with structure and attention to detail."
      />
      <div className="grid gap-3 lg:grid-cols-2">
        <article>
          <h3 className="mb-4 text-lg font-semibold ">Frontend Development</h3>
          <div className="grid gap-4 sm:grid-cols-2 ">
            {frontendskills.map((item) => (
              <SkillCard key={item.name} item={item} />
            ))}
          </div>
        </article>
        <article>
          <h3 className="mb-4 text-lg font-semibold ">
            Virtual Assistant Skills
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 ">
            {assistantSkills.map((item) => (
              <SkillCard key={item.name} item={item} />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills
