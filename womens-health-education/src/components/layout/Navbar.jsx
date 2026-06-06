import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/cycle', label: 'Cycle' },
  { to: '/hormones', label: 'Hormones' },
  { to: '/menstrual-health', label: 'Period health' },
  { to: '/products', label: 'Products & Learn' },
  { to: '/life-stages', label: 'Life stages' },
  { to: '/symptoms', label: 'Symptoms' },
  { to: '/wellness', label: 'Wellness' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
]

const linkClass = ({ isActive }) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-blush/80 text-plum-deep dark:bg-plum/40 dark:text-parchment'
      : 'text-plum hover:bg-blush/40 dark:text-lavender-mist dark:hover:bg-plum/30'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-blush/45 bg-warm-white/92 backdrop-blur-md dark:border-plum/35 dark:bg-plum-deep/92">
      <div className="mx-auto flex max-w-[72rem] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-soft/50 to-lavender-mist/60 text-sm font-display font-semibold text-plum-deep dark:text-charcoal"
            aria-hidden
          >
            L
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-charcoal dark:text-parchment">
            Lumen
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-plum hover:bg-blush/50 lg:hidden dark:text-parchment dark:hover:bg-plum/40"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-blush/50 bg-warm-white px-4 py-4 lg:hidden dark:border-plum/40 dark:bg-plum-deep"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile main">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2.5 text-base ${
                    isActive
                      ? 'bg-blush/70 font-medium text-plum-deep dark:bg-plum/40 dark:text-parchment'
                      : 'text-charcoal dark:text-parchment/90'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
