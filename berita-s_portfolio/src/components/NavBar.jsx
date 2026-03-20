import React from 'react'
import { navLinks } from '../data/content'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)]/70  bg-[var(--surface)]/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#home"
          className="uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          berita
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}> {link.label}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-md border border-[var(--line)] p-2 text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {/* ---------Mobile nav------------- */}
      {isMenuOpen ? (
        <div className="border-t border-[var(--line)] bg-[var(--surface)] md:hidden">
          <ul className="mx-auto flex w-full  max-w-6xl flex-col gap-2 px-6 py-4 lg:px-10 ">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-2 transition hover:bg-[var(--accent-soft)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

export default NavBar
