import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import StructuredData from "@/components/StructuredData"
import { Toaster } from "@/components/ui/sonner"

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Scroll to top on route change, or to the anchored section if a hash is present.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <StructuredData />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  )
}
