"use client"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useCart } from "@/app/hooks/useCart"
import { useWishlist } from "@/app/hooks/useWishlist"

type Product = {
    id: string
    name: string
    price: string
    category: string
}

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart, loading: cartLoading } = useCart()
    const { addToWishlist, loading: wishlistLoading } = useWishlist()

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition">

            <div className="relative w-full h-56 bg-stone-100">
                <div className="w-full h-full bg-stone-200 group-hover:bg-stone-300 transition pointer-events-none" />
            </div>

            <div className="relative">    
                <button
                    onClick={() => {
                        addToWishlist(product.id)
                    }}
                    disabled={wishlistLoading}
                    className="absolute -top-12 right-3 p-2 bg-white rounded-full shadow-sm hover:text-red-400 transition z-10"
                    >
                    <Heart size={16} className="text-stone-400" />
                </button>
            </div>

            <div className="p-4">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">{product.category}</p>
                <Link href={`/products/${product.id}`}>
                    <p className="text-sm font-semibold text-stone-800 hover:underline">{product.name}</p>
                </Link>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm font-bold text-stone-800">{product.price}</p>
                    <button
                        onClick={() => addToCart(product.id)}
                        disabled={cartLoading}
                        className="text-xs bg-stone-800 text-white px-3 py-1 rounded-full hover:bg-stone-700 transition disabled:opacity-50"
                    >
                        {cartLoading ? "..." : "+ Carrito"}
                    </button>
                </div>
            </div>

        </div>
    )
}