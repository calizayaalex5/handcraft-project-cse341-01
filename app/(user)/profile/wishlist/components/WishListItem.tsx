"use client"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/app/hooks/useCart"

type Item = {
    id: string
    name: string
    price: number
    image?: string | null
    category: { name: string }
}

export default function WishlistItemComponent({
    item,
    onRemove,
}: {
    item: Item
    onRemove: (id: string) => void
}) {
    const { addToCart } = useCart()  

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

            <div className="relative w-full h-48 bg-stone-200 rounded-t-2xl overflow-hidden">
                {item.image ? (
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                />
                ) : (
                    <div className="w-full h-full bg-stone-200 group-hover:bg-stone-300 transition" />
                )}
                <button
                    onClick={() => onRemove(item.id)}
                    className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-sm hover:text-red-400 transition"
                >
                    <Heart size={16} className="text-red-400 fill-red-400" />
                </button>
            </div>

            <div className="p-4">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">{item.category.name}</p>
                <Link href={`/products/${item.id}`}>
                    <p className="text-sm font-semibold text-stone-800 hover:underline">{item.name}</p>
                </Link>
                <div className="flex items-center justify-between mt-3">
                    <p className="text-sm font-bold text-stone-800">${item.price.toFixed(2)}</p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => addToCart(item.id)}
                            className="flex items-center gap-1 text-xs bg-stone-800 text-white px-3 py-1.5 rounded-full hover:bg-stone-700 transition"
                        >
                            <ShoppingCart size={12} />
                            Agregar
                        </button>
                        <button
                            onClick={() => onRemove(item.id)}
                            className="p-1.5 border border-stone-200 rounded-full hover:bg-red-50 hover:border-red-200 transition"
                        >
                            <Trash2 size={14} className="text-stone-400 hover:text-red-400" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}