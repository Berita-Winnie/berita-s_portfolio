import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { topics, categories } from '../../data/topics'
import EmptySearchIllustration from '../illustrations/EmptySearchIllustration'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return topics.filter((t) => {
      const catOk = category === 'All' || t.category === category
      const textOk =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      return catOk && textOk
    })
  }, [query, category])

  return (
    <div className="rounded-3xl border border-blush/50 bg-warm-white p-5 shadow-soft dark:border-plum/40 dark:bg-plum-deep/50 md:p-6">
      <label htmlFor="topic-search" className="sr-only">
        Search topics
      </label>
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1">
          <input
            id="topic-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics (e.g. ovulation, sleep, PMS)…"
            className="w-full rounded-2xl border border-blush/80 bg-parchment/50 px-4 py-3 text-charcoal placeholder:text-plum/50 focus:border-dust-rose focus:outline-none focus:ring-2 focus:ring-dust-rose/30 dark:border-plum/50 dark:bg-plum-deep dark:text-parchment dark:placeholder:text-lavender-mist/40"
          />
        </div>
        <div>
          <label htmlFor="topic-cat" className="sr-only">
            Category
          </label>
          <select
            id="topic-cat"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-2xl border border-blush/80 bg-parchment/50 px-4 py-3 text-charcoal focus:border-dust-rose focus:outline-none focus:ring-2 focus:ring-dust-rose/30 dark:border-plum/50 dark:bg-plum-deep dark:text-parchment md:w-48"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className="mt-5 max-h-52 space-y-1 overflow-y-auto rounded-xl pr-1">
        {filtered.length === 0 && (
          <li className="flex flex-col items-center gap-2 py-5 text-center">
            <EmptySearchIllustration className="h-20 w-32 opacity-85" />
            <p className="text-sm text-plum dark:text-lavender-mist/80">No matches yet — try another word or category.</p>
          </li>
        )}
        {filtered.map((t) => (
          <li key={t.id}>
            <Link
              to={t.path}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition hover:bg-blush/40 dark:hover:bg-plum/40"
            >
              <span className="font-medium text-charcoal dark:text-parchment">{t.title}</span>
              <span className="text-xs text-plum dark:text-lavender-mist/80">{t.category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
