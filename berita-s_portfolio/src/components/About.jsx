import React from 'react'
import SectionHeading from './SectionHeading'
const About = () => {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-16 lg:px-10 "
    >
      <SectionHeading
        eyebrow="About"
        title="A thoughtful blend of design-minded development and organised support."
      />
      <div className=" grid gap-6 text-[15px] leading-relaxed text-[var(--text-muted)] md:grid-cols-2">
        <p className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 ">
          My journey into tech started with curiosity about how digital products
          can feel both beautiful and useful. As I learned frontend development,
          I became passionate about building interfaces that are clear,
          responsive, and enjoyable to use.
        </p>
        <p className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 ">
          Alongside that, I enjoy supporting businesses as a virtual assistant,
          helping manage communication, scheduling, research, and documentation.
          I love creating clean systems that reduce friction and keep people
          focused on what matters most.
        </p>
      </div>
    </section>
  )
}

export default About
