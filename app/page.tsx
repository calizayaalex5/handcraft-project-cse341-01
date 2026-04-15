import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Inicio",
  description: "Descubre productos artesanales únicos hechos a mano por artesanos talentosos.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fdf8f3]">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}