import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Loader2, Building2, Home } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  orderSchema,
  type OrderInput,
  COMMERCIAL_TYPES,
  COMMERCIAL_TYPE_LABELS,
} from "@/lib/orderSchema"

const ENDPOINT = "/.netlify/functions/submit-order"

export default function ServiceForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<OrderInput>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: undefined,
      commercialType: undefined,
      residentialArea: "",
      preferredDate: "",
      details: "",
      website: "",
    },
  })

  const serviceType = form.watch("serviceType")

  async function onSubmit(values: OrderInput) {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? "Something went wrong")
      }

      setSubmitted(true)
      form.reset()
      toast.success("Request sent! We'll be in touch shortly.")
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Could not send your request. Please call us instead."
      )
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="size-14 text-primary" />
        <h3 className="text-2xl font-bold text-foreground">Request received!</h3>
        <p className="max-w-md text-muted-foreground">
          Thanks for reaching out. We&apos;ve emailed you a confirmation and
          will contact you shortly to schedule your carpet cleaning.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        {/* Honeypot — visually hidden, off-screen, ignored by real users */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...form.register("website")}
          />
        </div>

        {/* Service type — big selectable cards */}
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What do you need cleaned?</FormLabel>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    { value: "residential", label: "Residential", icon: Home },
                    { value: "commercial", label: "Commercial", icon: Building2 },
                  ] as const
                ).map((opt) => {
                  const Icon = opt.icon
                  const active = field.value === opt.value
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => field.onChange(opt.value)}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-sm font-medium transition-colors",
                        active
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      )}
                      aria-pressed={active}
                    >
                      <Icon className="size-6" />
                      {opt.label}
                    </button>
                  )
                })}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Conditional: commercial property type */}
        {serviceType === "commercial" && (
          <FormField
            control={form.control}
            name="commercialType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of commercial property</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COMMERCIAL_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {COMMERCIAL_TYPE_LABELS[t]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Conditional: residential size */}
        {serviceType === "residential" && (
          <FormField
            control={form.control}
            name="residentialArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Approx. size{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 3 bedrooms, stairs & living room"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Contact grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service address / city</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St, Your City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="preferredDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Preferred date / timeframe{" "}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g. Next week, weekday mornings" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Anything else?{" "}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Stains, pet odors, high-traffic areas, square footage…"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The more detail you share, the more accurate your quote.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Get My Free Quote"
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          No spam. We only use your info to contact you about your request.
        </p>
      </form>
    </Form>
  )
}
