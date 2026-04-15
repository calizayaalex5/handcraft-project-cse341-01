"use client"
import { Trash2 } from "lucide-react"

type CartItemType = {
  id: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    category: { name: string }
  }
}

export default function CartItem({ item, onRemove }: { item: CartItemType, onRemove: (id: string) => void }) {
    return (
        <div className="flex items-center gap-6 border-b border-stone-100 py-6">
            <div className="w-24 h-24 bg-stone-200 rounded-xl flex-shrink-0" />

            <div className="flex-1">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">{item.product.category.name}</p>
                <p className="text-sm font-semibold text-stone-800">{item.product.name}</p>
            </div>

            <div className="flex items-center border border-stone-200 rounded-full">
                <button className="px-3 py-1 text-stone-600 hover:text-stone-900 transition">−</button>
                <span className="px-3 text-sm">{item.quantity}</span>
                <button className="px-3 py-1 text-stone-600 hover:text-stone-900 transition">+</button>
            </div>

            <p className="text-sm font-bold text-stone-800 w-16 text-right">
                ${(item.product.price * item.quantity).toFixed(2)}
            </p>

            <button
                onClick={() => onRemove(item.id)}
                aria-label={`Eliminar ${item.product.name} del carrito`}
                className="text-stone-300 hover:text-red-400 transition"
            >
                <Trash2 size={18} />
            </button>
        </div>
    )
}