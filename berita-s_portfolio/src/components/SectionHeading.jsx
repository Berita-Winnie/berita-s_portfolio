import React from 'react'

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-10 md:mb-12">
      <p classname="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] ">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
