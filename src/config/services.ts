import {
  Building2,
  Droplets,
  Home,
  PawPrint,
  Sofa,
  Layers,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: "Residential Carpet Cleaning",
    description:
      "Deep, hot-water extraction that lifts dirt, allergens, and years of wear from carpets in every room of your home.",
    icon: Home,
  },
  {
    title: "Commercial Carpet Cleaning",
    description:
      "Flexible after-hours service for offices, restaurants, hotels, and retail — spotless floors with minimal disruption.",
    icon: Building2,
  },
  {
    title: "Area & Oriental Rugs",
    description:
      "Gentle, fiber-safe cleaning for delicate and high-value rugs, restoring color and softness.",
    icon: Layers,
  },
  {
    title: "Upholstery Cleaning",
    description:
      "Sofas, chairs, and sectionals cleaned and refreshed with fabric-appropriate treatments.",
    icon: Sofa,
  },
  {
    title: "Stain & Odor Removal",
    description:
      "Targeted treatment for stubborn spots, spills, and lingering odors that ordinary cleaning misses.",
    icon: Droplets,
  },
  {
    title: "Pet Treatment",
    description:
      "Specialized enzyme treatments that eliminate pet stains and odors at the source — not just mask them.",
    icon: PawPrint,
  },
]
