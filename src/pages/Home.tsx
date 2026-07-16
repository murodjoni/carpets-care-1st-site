import { Link } from "react-router-dom"
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Leaf,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ServiceForm from "@/components/ServiceForm"
import CtaBand from "@/components/sections/CtaBand"
import Seo from "@/components/Seo"
import { services } from "@/config/services"
import { siteConfig } from "@/config/site"

const trustBadges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "Satisfaction Guaranteed" },
  { icon: Leaf, label: "Eco-Friendly Products" }
]

const whyUs = [
  {
    icon: Sparkles,
    title: "Deeper Clean",
    description:
      "Truck-mounted hot-water extraction reaches deep into fibers to remove what vacuuming leaves behind.",
  },
  {
    icon: ThumbsUp,
    title: "100% Guarantee",
    description:
      "If you're not thrilled with the result, we'll re-clean it free. Simple as that.",
  },
  {
    icon: Leaf,
    title: "Safe for Family & Pets",
    description:
      "Non-toxic, biodegradable solutions that are tough on stains but gentle on your home.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable",
    description:
      "On-time arrivals, quick-dry methods, and flexible scheduling that works around you.",
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Carpets Care, LLC"
        description={siteConfig.description}
        path="/"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Star className="size-4 fill-current" />
              Rated 5 stars by local customers
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Professional carpet cleaning for homes and businesses. We lift
              deep-down dirt, stubborn stains, and odors — leaving your floors
              fresh, healthy, and looking like new.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/#quote">
                  Book now
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <b.icon className="size-4 text-primary" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Hero form */}
          <div id="quote" className="scroll-mt-24 lg:pl-4">
            <div className="mb-3 text-center lg:text-left">
              <h2 className="text-xl font-semibold text-foreground">
                Request Your Free Quote
              </h2>
            </div>
            <ServiceForm />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Cleaning Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a single stubborn stain to an entire office floor, we have the
            equipment and expertise to handle it.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border/70 transition-shadow hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link to="/services">
              View all services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why {siteConfig.name}?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We treat every home and business like our own. Here&apos;s what
              sets us apart.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <item.icon className="size-7" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  )
}
