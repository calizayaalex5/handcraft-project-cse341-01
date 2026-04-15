import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import CategoryGrid from "./components/CategoryGrid"
import Link from "next/link"
import { getProducts } from "@/lib/controllers/product.controller"

const categoryNames: Record<string, string> = {
    joyeria:    "Joyería",
    decoracion: "Decoración Hogar",
    ropa:       "Ropa",
    nuevos:     "Nuevos Productos",
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const categoryName = categoryNames[slug] ?? slug

    const allProducts = await getProducts()
    const products = slug === "nuevos"
        ? allProducts.slice(0, 4)
        : allProducts.filter((p) => p.category.slug === slug)

    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Categoría</p>
                        <h1 className="text-3xl font-bold text-stone-800">{categoryName}</h1>
                    </div>
                    <Link href="/products" className="text-sm text-stone-500 hover:text-stone-800 transition">
                        ← Ver todos
                    </Link>
                </div>

                <div className="flex gap-3 mb-10 flex-wrap">
                    {Object.entries(categoryNames).map(([key, label]) => (
                        <Link
                            key={key}
                            href={`/products/category/${key}`}
                            className={`text-sm px-5 py-2 rounded-full border transition ${
                                key === slug
                                ? "bg-stone-800 text-white border-stone-800"
                                : "border-stone-200 text-stone-500 hover:bg-stone-800 hover:text-white hover:border-stone-800"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <CategoryGrid products={products.map(p => ({ ...p, image: p.image ?? undefined }))} />
            </section>
            <Footer />
        </main>
    )
}