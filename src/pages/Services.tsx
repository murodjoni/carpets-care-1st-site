import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/sections/PageHero"
import CtaBand from "@/components/sections/CtaBand"
import Seo from "@/components/Seo"
import { services } from "@/config/services"

const process = [
  {
    step: "1",
    title: "Free Quote",
    description: "Tell us what you need and we'll give you a fast, honest estimate.",
  },
  {
    step: "2",
    title: "Inspect & Pre-Treat",
    description: "We assess fibers and stains, then pre-treat problem areas.",
  },
  {
    step: "3",
    title: "Deep Clean",
    description: "Truck-mounted hot-water extraction lifts dirt from deep down.",
  },
  {
    step: "4",
    title: "Dry & Enjoy",
    description: "Quick-dry methods get you back on fresh carpets fast.",
  },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Carpet Cleaning Services"
        description="Residential and commercial carpet cleaning, area rug cleaning, upholstery, stain & odor removal, and pet treatment. Backed by a 100% satisfaction guarantee."
        path="/services"
      />
      <PageHero
        eyebrow="What We Do"
        title="Carpet Cleaning Services"
        subtitle="Professional, thorough cleaning for every fiber and every space — backed by our 100% satisfaction guarantee."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-border/70">
              <CardContent className="pt-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="size-6" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Our Simple 4-Step Process
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {p.step}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two audiences */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "For Your Home",
              to: "/residential",
              points: [
                "Living rooms, bedrooms & stairs",
                "Pet stain & odor treatment",
                "Family- and pet-safe products",
              ],
            },
            {
              title: "For Your Business",
              to: "/commercial",
              points: [
                "Offices, retail, restaurants & hotels",
                "After-hours & weekend scheduling",
                "Maintenance plans available",
              ],
            },
          ].map((col) => (
            <Card key={col.title} className="border-border/70">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {col.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-6" asChild>
                  <Link to={col.to}>
                    Learn more
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
