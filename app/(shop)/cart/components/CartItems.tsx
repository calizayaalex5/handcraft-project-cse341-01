"use client"
import { Trash2 } from "lucide-react"
import Image from "next/image"

type CartItemType = {
    id: string
    quantity: number
    product: {
        id: string
        name: string
        price: number
        stock: number
        image?: string | null
        category: { name: string }
    }
}

export default function CartItem({ 
    item, 
    onRemove,
    onUpdate,
}: { 
    item: CartItemType, 
    onRemove: (id: string) => void
    onUpdate: (id: string, quantity: number) => void
}) {

    return (
        <div className="flex items-center gap-6 border-b border-stone-100 py-6">
            <div className="relative w-24 h-24 bg-stone-200 rounded-xl overflow-hidden flex-shrink-0">
                {item.product.image ? (
                <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                />
                ) : (
                    <div className="w-full h-full bg-stone-200" />
                )}
            </div>

            <div className="flex-1">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">{item.product.category.name}</p>
                <p className="text-sm font-semibold text-stone-800">{item.product.name}</p>
            </div>

            <div className="flex items-center border border-stone-200 rounded-full">
                <button
                    onClick={() => onUpdate(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-3 py-1 text-stone-600 hover:text-stone-900 transition disabled:opacity-30"
                >
                    −
                </button>
                <span className="px-3 text-sm">{item.quantity}</span>
                <button
                    onClick={() => onUpdate(item.id, item.quantity + 1)}
                    disabled={item.quantity >= item.product.stock}  // ← agrega esto
                    className="px-3 py-1 text-stone-600 hover:text-stone-900 transition disabled:opacity-30"
                >
                    +
                </button>
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