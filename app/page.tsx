import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CategoriesSection from "./components/CategoriesSection"
import FeaturedProducts from "./components/FeaturedProducts"
import HowItWorks from "./components/HowItWorks"
import PromoBanner from "./components/PromoBanner"
import BecomeSellerSection from "./components/BecomeSellerSection"
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
      <CategoriesSection />
      <FeaturedProducts />
      <HowItWorks />
      <PromoBanner />
      <BecomeSellerSection />
      <Footer />
    </main>
  )
}