"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useCart } from "@/app/hooks/useCart"
import { useWishlist } from "@/app/hooks/useWishlist"

type Product = {
    id: string
    name: string
    price: number
    category: { name: string }
}
export default function SearchResults({ query }: { query: string }) {
    const [results, setResults] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const { addToCart } = useCart()
    const { addToWishlist } = useWishlist()

    useEffect(() => {
        if (!query) return
        setLoading(true)
        fetch(`/api/products?search=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
            setResults(data)
            setLoading(false)
        })
    }, [query])

    if (!query) return null
    
    return (
        <div className="w-full max-w-6xl mx-auto mt-12">
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-stone-500">
                    <span className="font-semibold text-stone-800">{results.length} resultados</span> para "{query}"
                </p>
                <select className="text-sm border border-stone-200 rounded-full px-4 py-2 text-stone-600 outline-none bg-white">
                    <option>Más relevantes</option>
                    <option>Menor precio</option>
                    <option>Mayor precio</option>
                </select>
            </div>

            {loading ? (
                <p className="text-stone-400 text-center py-12">Buscando...</p>
            ) : results.length === 0 ? (
                <p className="text-stone-400 text-center py-12">No se encontraron productos para "{query}"</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {results.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="relative w-full h-48 bg-stone-200 group-hover:bg-stone-300 transition rounded-t-2xl">
                                <button
                                    onClick={() => addToWishlist(product.id)}
                                    className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-sm hover:text-red-400 transition"
                                >
                                    <Heart size={16} className="text-stone-400" />
                                </button>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-stone-400 mb-1">{product.category.name}</p>
                                <Link href={`/products/${product.id}`}>
                                    <p className="text-sm font-semibold text-stone-800 hover:underline">{product.name}</p>
                                </Link>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-sm font-bold text-stone-800">${product.price.toFixed(2)}</p>
                                    <button
                                        onClick={() => addToCart(product.id)}
                                        className="text-xs bg-stone-800 text-white px-3 py-1 rounded-full hover:bg-stone-700 transition"
                                    >
                                        + Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}