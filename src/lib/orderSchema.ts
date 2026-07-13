import { z } from "zod"

export const SERVICE_TYPES = ["residential", "commercial"] as const

export const COMMERCIAL_TYPES = [
  "restaurant",
  "retail",
  "hotel",
  "office",
  "medical",
  "education",
  "other",
] as const

export const COMMERCIAL_TYPE_LABELS: Record<
  (typeof COMMERCIAL_TYPES)[number],
  string
> = {
  restaurant: "Restaurant",
  retail: "Retail Space",
  hotel: "Hotel / Hospitality",
  office: "Office / Corporate",
  medical: "Medical / Healthcare",
  education: "School / Education",
  other: "Other",
}

export const orderSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name").max(80),
    email: z.string().trim().email("Enter a valid email address").max(160),
    phone: z
      .string()
      .trim()
      .min(7, "Enter a valid phone number")
      .max(25, "Enter a valid phone number"),
    address: z
      .string()
      .trim()
      .min(2, "Enter the service address or city")
      .max(160),
    serviceType: z.enum(SERVICE_TYPES, {
      message: "Select residential or commercial",
    }),
    commercialType: z.enum(COMMERCIAL_TYPES).optional(),
    residentialArea: z.string().trim().max(120).optional(),
    preferredDate: z.string().trim().max(80).optional(),
    details: z.string().trim().max(2000).optional(),
    // Honeypot: real users never fill this hidden field. Accepted by the
    // schema so the server can silently drop bot submissions (see submit-order).
    website: z.string().max(200).optional(),
  })
  .refine(
    (data) => data.serviceType !== "commercial" || !!data.commercialType,
    {
      message: "Select the type of commercial property",
      path: ["commercialType"],
    }
  )

export type OrderInput = z.infer<typeof orderSchema>
