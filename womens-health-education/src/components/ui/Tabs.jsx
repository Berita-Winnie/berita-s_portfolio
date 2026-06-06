import { useId, useState } from 'react'

/**
 * Accessible tabs. `panels` is a map of tab id -> React node.
 */
export default function Tabs({ tabs, panels, defaultId, className = '', panelClassName = '' }) {
  const baseId = useId()
  const first = tabs[0]?.id
  const [active, setActive] = useState(defaultId ?? first)

  if (!tabs.length) return null

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex flex-wrap gap-2 border-b border-blush/50 pb-4 dark:border-plum/40"
      >
        {tabs.map((tab) => {
          const selected = active === tab.id
          return (
            <button
              key={tab.id}
              id={`${baseId}-${tab.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-${tab.id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-4 py-2.5 text-left text-sm font-medium transition ${
                selected
                  ? 'bg-plum-deep text-parchment shadow-soft dark:bg-peach-soft dark:text-charcoal'
                  : 'bg-warm-white/80 text-plum hover:bg-blush/40 dark:bg-plum-deep/40 dark:text-lavender-mist dark:hover:bg-plum/50'
              }`}
            >
              <span className="block font-display text-base">{tab.label}</span>
              {tab.hint && (
                <span className="mt-0.5 block text-xs font-normal opacity-85">{tab.hint}</span>
              )}
            </button>
          )
        })}
      </div>
      {tabs.map((tab) => {
        const selected = active === tab.id
        if (!selected) return null
        return (
          <div
            key={tab.id}
            id={`${baseId}-${tab.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-${tab.id}-tab`}
            className={`pt-8 ${panelClassName}`}
          >
            {panels[tab.id]}
          </div>
        )
      })}
    </div>
  )
}
