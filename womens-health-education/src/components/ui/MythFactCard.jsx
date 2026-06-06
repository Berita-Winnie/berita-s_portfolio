export default function MythFactCard({ myth, fact }) {
  return (
    <div className="rounded-3xl border border-blush/50 bg-warm-white p-6 shadow-soft dark:border-lavender-mist/20 dark:bg-gradient-to-br dark:from-[#584a60] dark:to-[#3f3344]">
      <p className="text-xs font-semibold uppercase tracking-wider text-dust-rose dark:text-rose-soft">Myth</p>
      <p className="mt-2 font-medium text-charcoal dark:text-parchment">{myth}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-sage-deep dark:text-sage">Fact</p>
      <p className="mt-2 text-sm text-plum dark:text-lavender-mist/90">{fact}</p>
    </div>
  )
}
