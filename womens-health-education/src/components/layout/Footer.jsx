import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-blush/45 bg-warm-white/85 dark:border-plum/40 dark:bg-plum-deep/85">
      <div className="mx-auto max-w-[72rem] px-5 py-14 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-plum-deep dark:text-parchment">Lumen</p>
            <p className="mt-2 max-w-sm text-sm text-plum dark:text-lavender-mist/90">
              Education for body literacy—not a substitute for personalized medical care.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/resources" className="text-plum underline-offset-4 hover:underline dark:text-peach-soft">
              Resources &amp; FAQ
            </Link>
            <Link to="/about" className="text-plum underline-offset-4 hover:underline dark:text-peach-soft">
              About
            </Link>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-plum/75 dark:text-lavender-mist/65">
          © {new Date().getFullYear()} Lumen · For learning only · Seek a qualified clinician for health concerns
        </p>
      </div>
    </footer>
  )
}
