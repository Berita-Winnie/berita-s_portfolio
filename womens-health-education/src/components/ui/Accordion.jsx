import { useState } from 'react'

/**
 * Accordion items: { id, title, subtitle?, content } — content can be string or React node.
 * defaultOpenId: null starts with all panels closed (calmer default).
 */
export default function Accordion({ items, defaultOpenId = null, className = '' }) {
  const [openId, setOpenId] = useState(defaultOpenId)

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const key = item.id ?? item.q
        const title = item.title ?? item.q
        const subtitle = item.subtitle
        const content = item.content ?? item.a
        const isOpen = openId === key
        return (
          <div
            key={key}
            className="overflow-hidden rounded-2xl border border-blush/40 bg-warm-white/90 dark:border-lavender-mist/20 dark:bg-gradient-to-br dark:from-[#3b323f] dark:to-[#302833]"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-blush/25 dark:hover:bg-[#4b3f51]/70 md:px-6 md:py-5"
              onClick={() => setOpenId(isOpen ? null : key)}
              aria-expanded={isOpen}
            >
              <span>
                <span className="block font-display text-lg font-medium leading-snug text-charcoal dark:text-parchment">
                  {title}
                </span>
                {subtitle && (
                  <span className="mt-1 block text-sm font-normal text-plum/85 dark:text-lavender-mist/80">
                    {subtitle}
                  </span>
                )}
              </span>
              <span className={`mt-1 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden>
                <svg className="h-5 w-5 text-plum/70 dark:text-lavender-mist/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-blush/35 px-5 pb-5 pt-0 text-sm leading-relaxed text-plum dark:border-lavender-mist/20 dark:text-lavender-mist/92 md:px-6">
                <div className="pt-4">{typeof content === 'string' ? <p>{content}</p> : content}</div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
