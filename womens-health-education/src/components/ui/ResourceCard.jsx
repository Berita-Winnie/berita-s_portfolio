export default function ResourceCard({ title, description, tag }) {
  return (
    <div className="rounded-[1.75rem] border border-blush/42 bg-gradient-to-br from-warm-white to-blush/18 p-6 shadow-soft dark:border-lavender-mist/20 dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344] md:p-7">
      <span className="inline-block rounded-full bg-lavender-mist/85 px-3 py-0.5 text-xs font-medium text-plum dark:bg-[#2f2733] dark:text-peach-soft">
        {tag}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-charcoal dark:text-parchment">{title}</h3>
      <p className="mt-2 text-sm text-plum dark:text-lavender-mist/92">{description}</p>
    </div>
  )
}
