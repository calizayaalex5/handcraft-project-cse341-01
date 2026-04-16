"use client"
import { useEffect, useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Filters from "./components/Filters"
import ProductCard from "./components/ProductCard"
import { Search } from "lucide-react"
import { ProductGridSkeleton } from "@/app/components/Skeleton"
import AnimatedCard from "@/app/components/AnimatedProductCard"

type Product = {
    id: string
    name: string
    price: number
    stock: number
    image?: string
    category: { name: string; slug: string }
}

const priceRanges: Record<string, { min: number; max: number }> = {
    "Todos":          { min: 0,   max: Infinity },
    "Menos de $20":   { min: 0,   max: 20 },
    "$20 - $50":      { min: 20,  max: 50 },
    "$50 - $100":     { min: 50,  max: 100 },
    "Más de $100":    { min: 100, max: Infinity },
}

const categoryMap: Record<string, string> = {
    "Joyería":          "joyeria",
    "Decoración Hogar": "decoracion",
    "Ropa":             "ropa",
    "Nuevos":           "nuevos",
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [filtered, setFiltered] = useState<Product[]>([])
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    const [selectedPrice, setSelectedPrice] = useState("Todos")
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            setFiltered(data)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        let result = [...products]

        // Filtro por categoría
        if (selectedCategory !== "Todos") {
        const slug = categoryMap[selectedCategory]
        result = result.filter((p) => p.category.slug === slug)
        }

        // Filtro por precio
        const range = priceRanges[selectedPrice]
        if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max)
        }

        // Filtro por búsqueda
        if (search.trim()) {
        result = result.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
        )
        }

        setFiltered(result)
    }, [selectedCategory, selectedPrice, search, products])

    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
                    <h1 className="text-3xl font-bold text-stone-800">
                        Productos
                        <span className="text-sm font-normal text-stone-400 ml-3">
                        ({filtered.length} resultados)
                        </span>
                    </h1>

                    <div className="flex items-center gap-2 border border-stone-300 rounded-full px-4 py-2 bg-white w-full md:w-72">
                        <Search size={16} className="text-stone-400" />
                        <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar productos..."
                        className="flex-1 outline-none text-sm text-stone-700 bg-transparent"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <Filters
                        selectedCategory={selectedCategory}
                        selectedPrice={selectedPrice}
                        onCategoryChange={setSelectedCategory}
                        onPriceChange={setSelectedPrice}
                    />
                    <div className="flex-1">
                        {loading ? (
                            <ProductGridSkeleton />
                        ) : filtered.length === 0 ? (
                        <div className="text-center py-24">
                            <p className="text-stone-400">No se encontraron productos.</p>
                            <button
                            onClick={() => {
                                setSelectedCategory("Todos")
                                setSelectedPrice("Todos")
                                setSearch("")
                            }}
                            className="text-stone-800 underline text-sm mt-2 inline-block"
                            >
                            Limpiar filtros
                            </button>
                        </div>
                        ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((product, index) => (
                                <AnimatedCard key={product.id} index={index}>
                                <ProductCard
                                    product={{
                                    id: product.id,
                                    name: product.name,
                                    price: `$${product.price.toFixed(2)}`,
                                    category: product.category.name,
                                    image: product.image ?? undefined,
                                    stock: product.stock,
                                    }}
                                />
                                </AnimatedCard>
                            ))}
                        </div>
                        )}
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    )
}