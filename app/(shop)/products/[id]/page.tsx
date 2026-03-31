import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ProductImages from "./components/ProductImages"
import ProductInfoComponent from "./components/ProductInfo"
import Reviews from "./components/Reviews"

export default function ProductPage() {
  return (
        <main className="min-h-screen bg-[#fdf8f3]">
        <Navbar />

        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImages />
            <ProductInfoComponent />
            </div>
            <Reviews />
        </section>

        <Footer />
        </main>
  )
}