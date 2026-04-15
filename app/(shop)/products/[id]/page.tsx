import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ProductImages from "./components/ProductImages"
import ProductInfoComponent from "./components/ProductInfo"
import Reviews from "./components/Reviews"
import { getProductById } from "@/lib/controllers/product.controller"
import Link from "next/link"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = await getProductById(id)

    if (!product) {
        return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="max-w-6xl mx-auto px-6 py-32 text-center">
                <p className="text-stone-500 mb-4">Producto no encontrado.</p>
                <Link href="/products" className="text-stone-800 underline text-sm">
                    Ver todos los productos
                </Link>
            </section>
            <Footer />
        </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ProductImages image={product.image ?? undefined} name={product.name} />
                        <ProductInfoComponent product={product} />
                    </div>
                    <Reviews productId={id} />
                </section>
            <Footer />
        </main>
    )
}