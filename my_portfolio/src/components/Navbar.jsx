import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)]/70 bg-[var(--surface)]/82 backdrop-blur-md transition-colors duration-300">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3.5 lg:px-10">
        <a
          href="#home"
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text)] transition-colors duration-300 ease-out hover:text-[var(--accent)]"
        >
          BERITA
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-[0.9rem] font-normal text-[var(--text-muted)] transition-colors duration-300 ease-out hover:text-[var(--text)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-[var(--radius-sm)] border border-[var(--line)] bg-[var(--surface)]/60 p-2.5 text-[var(--text)] transition-all duration-300 ease-out hover:border-[var(--accent)]/35 hover:text-[var(--accent)] md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>
      {isMenuOpen ? (
        <div className="border-t border-[var(--line)]/80 bg-[var(--surface)] md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-3 lg:px-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-[var(--radius-sm)] px-3 py-2.5 text-sm text-[var(--text-muted)] transition-colors duration-300 ease-out hover:bg-[var(--accent-soft)]/70 hover:text-[var(--text)]"
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
  );
}

export default Navbar;
