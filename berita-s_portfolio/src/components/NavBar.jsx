import React from 'react'

const NavBar = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 border-b border-[--line]/70  bg-[--surface]/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#home"
            className="uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[--accent]"
          >
            BERITA
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}> {link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
