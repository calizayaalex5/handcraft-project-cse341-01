"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const items = [
  { id: 1, name: "Collar Artesanal",  price: "$24.99", qty: 1 },
  { id: 2, name: "Jarrón de Barro",   price: "$39.99", qty: 2 },
]

export default function OrderSummary() {
    
    const router = useRouter()
    
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-stone-800 mb-6">Resumen del pedido</h2>

            <div className="flex flex-col gap-4 mb-6">
                {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex-shrink-0" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-stone-800">{item.name}</p>
                        <p className="text-xs text-stone-400">Cantidad: {item.qty}</p>
                    </div>
                    <p className="text-sm font-bold text-stone-800">{item.price}</p>
                </div>
                ))}
            </div>

            <div className="flex flex-col gap-2 text-sm text-stone-600 border-t border-stone-100 pt-4 mb-6">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$104.97</span>
                </div>
                <div className="flex justify-between">
                    <span>Envío</span>
                    <span className="text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-stone-800 pt-2 border-t border-stone-100">
                    <span>Total</span>
                    <span>$104.97</span>
                </div>
            </div>

            <button 
                onClick={() => router.push("/order-confirmation")}
                className="w-full bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition"
            >
                Confirmar pedido
            </button>

            <Link
                href="/cart"
                className="block text-center text-sm text-stone-500 hover:text-stone-800 transition mt-3"
            >
                Volver al carrito
            </Link>
        </div>
    )
}