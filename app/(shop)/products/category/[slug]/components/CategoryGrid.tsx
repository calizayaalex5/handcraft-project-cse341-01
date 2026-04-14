"use client"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useCart } from "@/app/hooks/useCart"
import { useWishlist } from "@/app/hooks/useWishlist"

type Product = {
  id: string
  name: string
  price: number
  category: { name: string; slug: string }
}

function ProductItem({ product }: { product: Product }) {
    const { addToCart, loading: cartLoading } = useCart()
    const { addToWishlist, loading: wishlistLoading } = useWishlist()

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="relative w-full h-48 bg-stone-200 group-hover:bg-stone-300 transition rounded-t-2xl">
                <button
                    onClick={() => addToWishlist(product.id)}
                    disabled={wishlistLoading}
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

    export default function CategoryGrid({ products }: { products: Product[] }) {
    if (products.length === 0) {
        return (
        <div className="text-center py-24 text-stone-400">
            <p className="text-lg">No hay productos en esta categoría.</p>
            <Link href="/products" className="text-sm text-stone-800 hover:underline mt-2 inline-block">
                Ver todos los productos
            </Link>
        </div>
        )
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}