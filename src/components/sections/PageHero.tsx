type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-border/60 bg-linear-to-b from-primary/10 via-background to-background">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
