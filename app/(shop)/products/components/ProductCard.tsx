"use client"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { useCart } from "@/app/hooks/useCart"
import { useWishlist } from "@/app/hooks/useWishlist"

type Product = {
    id: string
    name: string
    price: string
    category: string
    image?: string
    stock?: number
}

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart, loading: cartLoading } = useCart()
    const { addToWishlist, loading: wishlistLoading } = useWishlist()

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition">

            <div className="relative w-full h-56 bg-stone-200 rounded-t-2xl overflow-hidden">
                {product.image ? (
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                />
                ) : (
                    <div className="w-full h-full bg-stone-200 group-hover:bg-stone-300 transition" />
                )}

                {product.stock !== undefined && product.stock === 0 && (
                    
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Agotado
                        </span>
                    </div>
                )}

                <button
                    onClick={() => addToWishlist(product.id)}
                    aria-label={`Agregar ${product.name} a wishlist`}
                    disabled={wishlistLoading}
                    className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-sm hover:text-red-400 transition"
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
                        aria-label={`Agregar ${product.name} al carrito`}
                        disabled={cartLoading || product.stock === 0}
                        className={`text-xs px-3 py-1 rounded-full transition ${
                            product.stock === 0
                            ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                            : "bg-stone-800 text-white hover:bg-stone-700"
                        }`}
                    >
                        {cartLoading ? "..." : product.stock === 0 ? "Agotado" : "+ Carrito"}
                    </button>
                </div>
            </div>

        </div>
    )
}