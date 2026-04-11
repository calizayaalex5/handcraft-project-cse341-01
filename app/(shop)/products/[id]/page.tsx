import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ProductImages from "./components/ProductImages"
import ProductInfoComponent from "./components/ProductInfo"
import Reviews from "./components/Reviews"

async function getProduct(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${id}`, {
        cache: "no-store",
    })
        const data = await res.json()
        console.log("Producto:", data)
        return data
    }

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = await getProduct(id)

    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-6xl mx-auto px-6 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <ProductImages />
                      <ProductInfoComponent product={product} />
                  </div>
                <Reviews productId={id} />
            </section>

            <Footer />
        </main>
    )
}