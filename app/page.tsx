import Image from "next/image"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </div>
  )
}