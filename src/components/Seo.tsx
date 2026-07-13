import { Head } from "vite-react-ssg"

import { siteConfig } from "@/config/site"

type SeoProps = {
  /** Page-specific title; the brand name is appended automatically. */
  title: string
  description: string
  /** Route path for the canonical URL, e.g. "/services". */
  path: string
}

export default function Seo({ title, description, path }: SeoProps) {
  const fullTitle = `${title} | ${siteConfig.name}`
  const canonical = `${siteConfig.url}${path === "/" ? "" : path}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}
