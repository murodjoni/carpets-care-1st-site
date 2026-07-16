import { Link } from "react-router-dom"
import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

type CtaBandProps = {
  title?: string
  subtitle?: string
}

export default function CtaBand({
  title = "Ready for cleaner, fresher carpets?",
  subtitle = `Get your free, no-obligation quote today. Serving ${siteConfig.serviceArea} and surrounding areas.`,
}: CtaBandProps) {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-primary-foreground/80">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/#quote">Book now</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            asChild
          >
            <a href={siteConfig.phoneHref}>
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
