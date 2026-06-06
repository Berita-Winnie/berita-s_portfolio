/** Consistent horizontal padding and max width for editorial layouts */
export function PageShell({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[72rem] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>
  )
}

/** Narrow column for comfortable reading */
export function ProseColumn({ children, className = '' }) {
  return <div className={`mx-auto max-w-[40rem] ${className}`}>{children}</div>
}
