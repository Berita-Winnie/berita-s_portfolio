import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-2 rounded-full border border-blush/80 bg-warm-white px-3 py-1.5 text-xs font-medium text-plum shadow-soft transition hover:border-dust-rose/50 dark:border-plum/50 dark:bg-plum/30 dark:text-parchment"
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="hidden sm:inline">{dark ? 'Dark' : 'Light'}</span>
      <span className="relative h-5 w-9 rounded-full bg-blush/80 dark:bg-sage/40">
        <span
          className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-warm-white shadow transition-transform ${
            dark ? 'translate-x-4' : ''
          }`}
        />
      </span>
    </button>
  )
}
