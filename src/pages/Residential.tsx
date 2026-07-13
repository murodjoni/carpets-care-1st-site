import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, Leaf, PawPrint, Sparkles, Wind } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/sections/PageHero"
import CtaBand from "@/components/sections/CtaBand"
import Seo from "@/components/Seo"

const highlights = [
  {
    icon: Sparkles,
    title: "Whole-Home Clean",
    description:
      "Bedrooms, living rooms, hallways, and stairs — every carpeted space refreshed.",
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly Treatment",
    description:
      "Enzyme treatments that remove pet stains and odors at the source.",
  },
  {
    icon: Leaf,
    title: "Safe for Your Family",
    description:
      "Non-toxic, biodegradable products that are gentle on kids and pets.",
  },
  {
    icon: Wind,
    title: "Fast Dry Times",
    description:
      "Powerful extraction means your carpets are dry and usable sooner.",
  },
]

const included = [
  "Free in-home or over-the-phone estimate",
  "Furniture moving for standard items",
  "Pre-treatment of stains & high-traffic areas",
  "Deodorizing and grooming",
  "100% satisfaction guarantee",
]

export default function Residential() {
  return (
    <>
      <Seo
        title="Residential Carpet Cleaning"
        description="Deep, family- and pet-safe carpet cleaning for your home. Whole-home service, pet stain & odor treatment, and fast dry times, guaranteed."
        path="/residential"
      />
      <PageHero
        eyebrow="For Your Home"
        title="Residential Carpet Cleaning"
        subtitle="A deeper, healthier clean for the place that matters most. Fresh carpets, happier home — guaranteed."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <Card key={h.title} className="border-border/70">
              <CardContent className="pt-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <h.icon className="size-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {h.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              What's Included
            </h2>
            <p className="mt-4 text-muted-foreground">
              One transparent price with everything you need for a spotless
              result — no surprise fees.
            </p>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/#quote">
                Get My Free Quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <Card className="border-border/70">
            <CardContent className="pt-6">
              <blockquote className="text-lg font-medium text-foreground">
                “Our carpets hadn't looked this good since the day we moved in.
                Professional, on time, and worth every penny.”
              </blockquote>
              <footer className="mt-4 text-sm text-muted-foreground">
                — Sarah M., Homeowner
              </footer>
            </CardContent>
          </Card>
        </div>
      </section>

      <CtaBand
        title="Give your home the fresh start it deserves"
        subtitle="Book your residential carpet cleaning today — fast, friendly, guaranteed."
      />
    </>
  )
}
