import Image from "next/image"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  )
}