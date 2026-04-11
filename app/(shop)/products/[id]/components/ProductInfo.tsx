"use client"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/app/hooks/useCart"

type Product = {
    id: string
    name: string
    description: string
    price: number
    stock: number
    category: { name: string }
}

export default function ProductInfoComponent({ product }: { product: Product }) {
    const { addToCart, loading } = useCart()
    
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
                <div className="w-10 h-10 bg-stone-200 rounded-full" />
                <div>
                    <p className="text-xs text-stone-400">Vendido por</p>
                    <p className="text-sm font-semibold text-stone-800">Artesano</p>
                </div>
            </div>

            <p className="text-sm text-stone-400">
                Stock disponible: <span className="font-semibold text-stone-700">{product.stock}</span>
            </p>

            <div className="flex gap-3">
                <button
                    onClick={() => addToCart(product.id)}
                    disabled={loading || product.stock === 0}
                    className="flex-1 flex items-center justify-center gap-2 bg-stone-800 text-white py-3 rounded-full hover:bg-stone-700 transition text-sm disabled:opacity-50"
                >
                    <ShoppingCart size={16} />
                    {product.stock === 0 ? "Agotado" : loading ? "Agregando..." : "Agregar al carrito"}
                </button>
                    <button className="p-3 border border-stone-200 rounded-full hover:bg-stone-50 transition">
                    <Heart size={18} className="text-stone-500" />
                </button>
            </div>
        </div>
    )
}