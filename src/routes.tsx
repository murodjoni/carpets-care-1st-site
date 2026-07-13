import type { RouteRecord } from "vite-react-ssg"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import Commercial from "@/pages/Commercial"
import Residential from "@/pages/Residential"
import About from "@/pages/About"
import Contact from "@/pages/Contact"

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "commercial", element: <Commercial /> },
      { path: "residential", element: <Residential /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]
