function Footer() {
  return (
    <footer className="border-t border-[var(--line)]/80 bg-[var(--surface)]/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 py-11 text-[12px] font-normal text-[var(--text-muted)] md:flex-row md:items-center lg:px-10">
        <p className="text-[var(--text)]/80">© {new Date().getFullYear()} Winrose Berita</p>
        <p>Executive Virtual Assistant</p>
      </div>
    </footer>
  );
}

export default Footer;
