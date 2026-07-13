/**
 * Single source of truth for company / brand info.
 * Swap these placeholder values for the real business details when ready.
 */
export const siteConfig = {
  name: "Carpets Care",
  legalName: "Carpets Care LLC",
  tagline: "Deep-Clean Carpets, Done Right",
  description:
    "Professional residential and commercial carpet cleaning. Fast, reliable, and satisfaction guaranteed. Get a free quote today.",

  // Contact — swap for real values
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "carpetscarellc@gmail.com",

  // Location / service area
  serviceArea: "Greater Metro Area",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "ST",
    zip: "00000",
  },

  // Hours (used in footer + JSON-LD later)
  hours: [
    { days: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // Public site URL (used for canonical / sitemap) — update after deploy
  url: "https://carpetscare.netlify.app",

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com",
  },
} as const

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Commercial", to: "/commercial" },
  { label: "Residential", to: "/residential" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const
