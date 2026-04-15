"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2 } from "lucide-react"

type WishlistItem = {
    id: string
    product: {
        id: string
        name: string
        price: number
        image?: string | null
        category: { name: string }
    }
}

export default function WishlistGrid({ userId, token }: { userId: string, token: string }) {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/api/wishlist?userId=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.json())
        .then((data) => {
            setWishlist(data)
            setLoading(false)
        })
    }, [userId, token])

    const handleRemove = async (id: string) => {
        await fetch(`/api/wishlist/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        })
        setWishlist(wishlist.filter((item) => item.id !== id))
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-5">Mi Wishlist</h2>

            {loading ? (
                <p className="text-stone-400 text-sm">Cargando wishlist...</p>
            ) : wishlist.length === 0 ? (
                <p className="text-stone-400 text-sm">No tienes productos en tu wishlist.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {wishlist.slice(0, 3).map((item) => (
                    <div key={item.id} className="group border border-stone-100 rounded-xl overflow-hidden hover:shadow-md transition">
                        <div className="relative w-full h-32 bg-stone-200">
                            {item.product.image ? (
                            <Image
                                src={item.product.image}
                                alt={item.product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition"
                            />
                            ) : (
                                <div className="w-full h-full bg-stone-200 group-hover:bg-stone-300 transition" />
                            )}
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="absolute top-2 right-2 z-10 p-1.5 bg-white rounded-full shadow-sm hover:bg-red-50 transition"
                            >
                                <Trash2 size={14} className="text-stone-400 hover:text-red-400" />
                            </button>
                        </div>
                        <div className="p-3">
                            <p className="text-xs text-stone-400">{item.product.category.name}</p>
                            <Link href={`/products/${item.product.id}`}>
                                <p className="text-sm font-semibold text-stone-800 hover:underline">{item.product.name}</p>
                            </Link>
                            <p className="text-sm text-stone-500 mt-1">${item.product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
                </div>
            )}

            <Link
                href="/profile/wishlist"
                className="block text-center text-sm text-stone-500 hover:text-stone-800 transition mt-5"
            >
                Ver wishlist completa
            </Link>
        </div>
    )
}