export default function VideoGuideCard({ title, description, videoId }) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}`

  return (
    <article className="flex-none w-[320px] sm:w-[360px]">
      <div className="rounded-[1.75rem] border border-blush/45 bg-gradient-to-br from-lavender-mist/38 to-peach-soft/30 p-4 shadow-soft dark:border-lavender-mist/20 dark:from-[#584a60] dark:via-[#4a3d4f] dark:to-[#3f3344]">
        <div className="aspect-video overflow-hidden rounded-[1.25rem] bg-parchment ring-1 ring-white/20 dark:bg-[#2f2733] dark:ring-lavender-mist/15">
          <iframe
            src={src}
            title={title}
            loading="lazy"
            className="h-full w-full"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-4 rounded-2xl border border-white/35 bg-warm-white/82 p-4 dark:border-lavender-mist/20 dark:bg-[#2f2733]/90">
          <h3 className="font-display text-lg font-semibold text-charcoal dark:text-parchment">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-plum dark:text-lavender-mist/92">{description}</p>
        </div>
      </div>
    </article>
  )
}

