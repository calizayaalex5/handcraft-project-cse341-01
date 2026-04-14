"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuth } from "@/app/context/AuthContext"

type CartItem = {
    id: string
    quantity: number
    product: {
        id: string
        name: string
        price: number
    }
}

export default function OrderSummary() {
    const router = useRouter()
    const { user } = useAuth()
    const [items, setItems] = useState<CartItem[]>([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        if (!user) return
        fetch(`/api/cart?userId=${user.id}`, {
            headers: { Authorization: `Bearer ${user.token}` },
        })
            .then((res) => res.json())
            .then(setItems)
    }, [user])

    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

    const handleConfirm = async () => {
        if (!user || items.length === 0) return
        setLoading(true)

        try {
            // Crear orden
            await fetch("/api/orders", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                userId: user.id,
                    items: items.map((item) => ({
                        productId: item.product.id,
                        quantity: item.quantity,
                        price: item.product.price,
                    })),
                }),
            })

            await Promise.all(
                items.map((item) =>
                    fetch(`/api/cart/${item.id}`, {
                        method: "DELETE",
                        headers: { Authorization: `Bearer ${user.token}` },
                    })
                )
            )

            router.push("/order-confirmation")
        } catch (error) {
            console.error("Error al confirmar pedido:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-stone-800 mb-6">Resumen del pedido</h2>

            {items.length === 0 ? (
                <p className="text-stone-400 text-sm mb-6">No hay items en el carrito.</p>
            ) : (
                <div className="flex flex-col gap-4 mb-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-stone-100 rounded-xl flex-shrink-0" />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-stone-800">{item.product.name}</p>
                            <p className="text-xs text-stone-400">Cantidad: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-bold text-stone-800">${item.product.price.toFixed(2)}</p>
                    </div>
                ))}
                </div>
            )}

            <div className="flex flex-col gap-2 text-sm text-stone-600 border-t border-stone-100 pt-4 mb-6">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Envío</span>
                    <span className="text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-stone-800 pt-2 border-t border-stone-100">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <button
                onClick={handleConfirm}
                disabled={loading || items.length === 0}
                className="w-full bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition disabled:opacity-50"
            >
                {loading ? "Procesando..." : "Confirmar pedido"}
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