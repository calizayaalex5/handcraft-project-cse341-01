"use client"
import { ShoppingCart, Heart, User } from "lucide-react"
import { useCart } from "@/app/hooks/useCart"
import { useWishlist } from "@/app/hooks/useWishlist"
import Image from "next/image"

type Product = {
    id: string
    name: string
    description: string
    price: number
    stock: number
    category: { name: string }
    seller?: {
        id: string
        name: string
        image: string | null
    } | null
}

export default function ProductInfoComponent({ product }: { product: Product }) {
    const { addToCart, loading: cartLoading } = useCart()
    const { addToWishlist, loading: wishlistLoading } = useWishlist()
    
    if (!product || !product.category) {
        return <div className="text-stone-400">Cargando producto...</div>
    }

    return (
        <div className="flex flex-col gap-6">
            <p className="text-xs text-stone-400 uppercase tracking-widest">{product.category.name}</p>

            <h1 className="text-4xl font-bold text-stone-800">{product.name}</h1>

            <p className="text-3xl font-bold text-stone-800">${product.price.toFixed(2)}</p>

            <p className="text-stone-500 text-sm leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-3 border border-stone-200 rounded-xl p-3">
                <div className="relative w-10 h-10 bg-stone-200 rounded-full overflow-hidden flex-shrink-0">
                    {product.seller?.image ? (
                        <Image
                            src={product.seller.image}
                            alt={product.seller.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <User size={20} className="text-stone-400" />
                        </div>
                    )}
                </div>
                <div>
                    <p className="text-xs text-stone-400">Vendido por</p>
                    <p className="text-sm font-semibold text-stone-800">
                        {product.seller?.name ?? "Vendedor desconocido"}
                    </p>
                </div>
            </div>

            <p className="text-sm text-stone-400">
                Stock disponible: <span className="font-semibold text-stone-700">{product.stock}</span>
            </p>

            <div className="flex gap-3">
                <button
                    onClick={() => addToCart(product.id)}
                    disabled={cartLoading || product.stock === 0}
                    className="flex-1 flex items-center justify-center gap-2 bg-stone-800 text-white py-3 rounded-full hover:bg-stone-700 transition text-sm disabled:opacity-50"
                >
                    <ShoppingCart size={16} />
                    {product.stock === 0 ? "Agotado" : cartLoading ? "Agregando..." : "Agregar al carrito"}
                </button>
                <button
                    onClick={() => addToWishlist(product.id)}
                    disabled={wishlistLoading}
                    className="p-3 border border-stone-200 rounded-full hover:bg-stone-50 transition"
                >
                    <Heart size={18} className={wishlistLoading ? "text-stone-300" : "text-stone-500"} />
                </button>
            </div>
        </div>
    )
}