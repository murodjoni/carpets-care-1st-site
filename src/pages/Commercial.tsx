import { Link } from "react-router-dom"
import {
  ArrowRight,
  Briefcase,
  Clock,
  GraduationCap,
  Hotel,
  Repeat,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/sections/PageHero"
import CtaBand from "@/components/sections/CtaBand"
import Seo from "@/components/Seo"

const propertyTypes = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Grease, food traffic, and spills handled with food-safe products and after-hours service.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Spaces",
    description:
      "Keep showrooms and sales floors pristine and welcoming for every customer.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Rooms, hallways, and lobbies cleaned on a schedule that never disturbs guests.",
  },
  {
    icon: Briefcase,
    title: "Offices & Corporate",
    description:
      "Healthier workspaces and a sharp first impression for clients and staff.",
  },
  {
    icon: Stethoscope,
    title: "Medical & Healthcare",
    description:
      "Sanitary, low-disruption cleaning that meets the standards your facility requires.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Education",
    description:
      "Large-area cleaning scheduled around classes, breaks, and holidays.",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "After-Hours Service",
    description: "Evenings and weekends so your operation never stops.",
  },
  {
    icon: Repeat,
    title: "Maintenance Plans",
    description: "Recurring schedules that keep floors consistently spotless.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully covered, professional crews you can trust on-site.",
  },
]

export default function Commercial() {
  return (
    <>
      <Seo
        title="Commercial Carpet Cleaning"
        description="Commercial carpet cleaning for restaurants, retail, hotels, offices, medical facilities, and schools. After-hours service and maintenance plans available."
        path="/commercial"
      />
      <PageHero
        eyebrow="For Business"
        title="Commercial Carpet Cleaning"
        subtitle="Spotless floors that protect your image and your investment — cleaned around your schedule, with minimal disruption to your business."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Industries We Serve
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every space is different. We tailor our approach to your facility,
            traffic, and hours.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {propertyTypes.map((p) => (
            <Card key={p.title} className="border-border/70">
              <CardContent className="pt-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <b.icon className="size-7" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/#quote">
                Request a Commercial Quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's keep your business looking its best"
        subtitle="Get a tailored commercial quote — no obligation, no pressure."
      />
    </>
  )
}
