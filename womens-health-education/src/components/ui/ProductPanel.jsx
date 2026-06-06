import ExpandableDetails from './ExpandableDetails'
import ProductIllustration from './ProductIllustration'

function BulletList({ items }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-plum dark:text-lavender-mist/92">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dust-rose/75 dark:bg-rose-soft/60" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function ProductPanel({ product }) {
  const { name, shortDescription, whenUsed, pros, considerations, learnMore, accent } = product

  return (
    <article
      className={`rounded-[1.75rem] border border-blush/45 bg-gradient-to-br ${accent} p-6 shadow-soft dark:border-lavender-mist/20 dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] md:p-8`}
    >
      <div className="grid items-center gap-6 rounded-2xl border border-white/30 bg-warm-white/75 p-5 dark:border-lavender-mist/20 dark:bg-[#2f2733]/88 md:grid-cols-[minmax(0,1fr)_220px]">
        <div className="max-w-prose">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-charcoal dark:text-parchment">
            {name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-plum dark:text-lavender-mist/95">
            {shortDescription}
          </p>
        </div>
        <ProductIllustration type={product.id} />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/35 bg-warm-white/82 p-5 dark:border-lavender-mist/20 dark:bg-[#332b37]/88">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-plum-deep dark:text-peach-soft">Commonly used when</h3>
          <div className="mt-3">
            <BulletList items={whenUsed} />
          </div>
        </div>
        <div className="rounded-2xl border border-white/35 bg-warm-white/82 p-5 dark:border-lavender-mist/20 dark:bg-[#332b37]/88">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-plum-deep dark:text-peach-soft">Key pros</h3>
          <div className="mt-3">
            <BulletList items={pros} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ExpandableDetails label={`Learn more about ${name}`} className="w-full">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/30 bg-warm-white/80 p-5 dark:border-lavender-mist/20 dark:bg-[#2f2733]/88">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sage-deep dark:text-sage">Key considerations</h3>
              <div className="mt-3">
                <BulletList items={considerations} />
              </div>
            </div>
            <div className="rounded-2xl border border-white/30 bg-warm-white/80 p-5 dark:border-lavender-mist/20 dark:bg-[#2f2733]/88">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sage-deep dark:text-sage">Extra notes</h3>
              <div className="mt-3">
                <ul className="space-y-2 text-sm leading-relaxed text-plum dark:text-lavender-mist/92">
                  {learnMore.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/55 dark:bg-sage/35" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ExpandableDetails>
      </div>
    </article>
  )
}

