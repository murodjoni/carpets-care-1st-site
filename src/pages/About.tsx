import { HeartHandshake, ShieldCheck, Sparkles, Target } from "lucide-react"

import PageHero from "@/components/sections/PageHero"
import CtaBand from "@/components/sections/CtaBand"
import Seo from "@/components/Seo"
import { siteConfig } from "@/config/site"

const values = [
  {
    icon: Target,
    title: "Do It Right",
    description:
      "We don't cut corners. Every job gets our full attention and our best work.",
  },
  {
    icon: HeartHandshake,
    title: "Treat People Well",
    description:
      "Friendly, respectful, on-time service — we treat your space like our own.",
  },
  {
    icon: ShieldCheck,
    title: "Stand Behind Our Work",
    description:
      "Not happy? We'll make it right. Our satisfaction guarantee is simple and real.",
  },
  {
    icon: Sparkles,
    title: "Keep Improving",
    description:
      "Better equipment, safer products, and smarter methods — we never stop refining.",
  },
]

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "5,000+", label: "Rooms cleaned" },
  { value: "5.0", label: "Average rating" },
  { value: "100%", label: "Satisfaction guarantee" },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description={`${siteConfig.name} is a locally owned carpet cleaning company built on honest work and a 100% satisfaction guarantee. Serving ${siteConfig.serviceArea}.`}
        path="/about"
      />
      <PageHero
        eyebrow="Our Story"
        title={`About ${siteConfig.name}`}
        subtitle="A locally owned carpet cleaning company built on honest work, careful attention, and a genuine commitment to our neighbors."
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-4 text-muted-foreground">
          <p>
            {siteConfig.name} started with a simple belief: that clean carpets
            make a real difference in how a home or business feels — and that
            getting them clean shouldn't be a hassle.
          </p>
          <p>
            We&apos;re a locally owned and operated team serving{" "}
            {siteConfig.serviceArea} and the surrounding communities. From a
            single stubborn stain to a full commercial floor, we bring
            professional-grade equipment, eco-friendly products, and a
            do-it-right attitude to every job.
          </p>
          <p>
            When you call us, you&apos;re not getting a faceless franchise.
            You&apos;re getting neighbors who care about your satisfaction and
            want to earn your business for years to come.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-primary-foreground/80">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            What We Stand For
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <v.icon className="size-7" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
