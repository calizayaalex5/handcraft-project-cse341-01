"use client"
import { useEffect, useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { useCart } from "@/app/hooks/useCart"

type WishlistItem = {
    id: string
    product: {
        id: string
        name: string
        price: number
        category: { name: string }
    }
}

export default function WishlistPage() {
    const { user } = useAuth()
    const { addToCart } = useCart()
    const [wishlist, setWishlist] = useState<WishlistItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) return
        fetch(`/api/wishlist?userId=${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((res) => res.json())
        .then((data) => {
            setWishlist(data)
            setLoading(false)
        })
    }, [user])

    const handleRemove = async (id: string) => {
        await fetch(`/api/wishlist/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${user!.token}` },
        })
        setWishlist(wishlist.filter((item) => item.id !== id))
    }

    if (!user) {
        return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="max-w-6xl mx-auto px-6 py-32 text-center">
                <p className="text-stone-500">Debes iniciar sesión para ver tu wishlist.</p>
                <Link href="/login" className="text-stone-800 underline text-sm mt-2 inline-block">
                    Iniciar sesión
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
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold text-stone-800">Mi Wishlist</h1>
                    <Link href="/profile" className="text-sm text-stone-500 hover:text-stone-800 transition">
                        ← Volver al perfil
                    </Link>
                </div>

                {loading ? (
                <p className="text-stone-400">Cargando wishlist...</p>
                ) : wishlist.length === 0 ? (
                <div className="text-center py-24">
                    <Heart size={48} className="text-stone-200 mx-auto mb-4" />
                    <p className="text-stone-400">No tienes productos en tu wishlist.</p>
                    <Link href="/products" className="text-stone-800 underline text-sm mt-2 inline-block">
                        Ver productos
                    </Link>
                </div>
                ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishlist.map((item) => (
                    <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="relative w-full h-48 bg-stone-200 group-hover:bg-stone-300 transition rounded-t-2xl">
                        <button
                            onClick={() => handleRemove(item.id)}
                            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-red-50 transition"
                        >
                            <Trash2 size={14} className="text-stone-400 hover:text-red-400" />
                        </button>
                        </div>
                        <div className="p-4">
                            <p className="text-xs text-stone-400">{item.product.category.name}</p>
                            <Link href={`/products/${item.product.id}`}>
                                <p className="text-sm font-semibold text-stone-800 hover:underline">{item.product.name}</p>
                            </Link>
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-sm font-bold text-stone-800">${item.product.price.toFixed(2)}</p>
                                <button
                                    onClick={() => addToCart(item.product.id)}
                                    className="flex items-center gap-1 text-xs bg-stone-800 text-white px-3 py-1.5 rounded-full hover:bg-stone-700 transition"
                                >
                                <ShoppingCart size={12} />
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </section>

            <Footer />
        </main>
    )
}