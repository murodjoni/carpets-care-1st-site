import { Clock, Mail, MapPin, Phone } from "lucide-react"

import PageHero from "@/components/sections/PageHero"
import ServiceForm from "@/components/ServiceForm"
import Seo from "@/components/Seo"
import { siteConfig } from "@/config/site"

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact ${siteConfig.name} for a free carpet cleaning quote. Call ${siteConfig.phone} or request a quote online.`}
        path="/contact"
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Request a free quote or reach out with any questions — we'd love to help."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Reach {siteConfig.name}
            </h2>
            <p className="mt-3 text-muted-foreground">
              Prefer to talk? Give us a call or send an email and we&apos;ll get
              right back to you.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a
                    href={siteConfig.phoneHref}
                    className="font-medium text-foreground hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-foreground hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Service Area
                  </div>
                  <div className="font-medium text-foreground">
                    {siteConfig.serviceArea}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                  <ul className="mt-1 space-y-1">
                    {siteConfig.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex justify-between gap-6 text-sm text-foreground"
                      >
                        <span>{h.days}</span>
                        <span className="text-muted-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div id="quote" className="scroll-mt-24">
            <h2 className="mb-3 text-2xl font-bold text-foreground">
              Request a Free Quote
            </h2>
            <ServiceForm />
          </div>
        </div>
      </section>
    </>
  )
}
