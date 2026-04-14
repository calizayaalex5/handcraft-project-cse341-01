"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

type Order = {
    id: string
    total: number
    status: string
    createdAt: string
    items: { id: string; quantity: number; product: { name: string } }[]
}

const statusColor: Record<string, string> = {
    DELIVERED: "bg-green-100 text-green-700",
    SHIPPED:   "bg-blue-100 text-blue-700",
    PENDING:   "bg-yellow-100 text-yellow-700",
    CANCELLED: "bg-red-100 text-red-700",
}

const statusLabel: Record<string, string> = {
    DELIVERED: "Entregado",
    SHIPPED:   "En camino",
    PENDING:   "Pendiente",
    CANCELLED: "Cancelado",
}

export default function OrdersList({ userId, token }: { userId: string, token: string }) {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/api/orders?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data)
                setLoading(false)
        })
    }, [userId, token])

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-5">Mis Pedidos</h2>

            {loading ? (
                <p className="text-stone-400 text-sm">Cargando pedidos...</p>
            ) : orders.length === 0 ? (
                <p className="text-stone-400 text-sm">No tienes pedidos aún.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {orders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between border border-stone-100 rounded-xl p-4">
                            <div>
                                <p className="text-sm font-semibold text-stone-800">Pedido #{order.id.slice(-6)}</p>
                                <p className="text-xs text-stone-400 mt-1">
                                {new Date(order.createdAt).toLocaleDateString("es-ES", { month: "short", year: "numeric" })} · {order.items.length} {order.items.length === 1 ? "item" : "items"}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                                    {statusLabel[order.status]}
                                </span>
                                <p className="text-sm font-bold text-stone-800">${order.total.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Link
                href="/profile/orders"
                className="block text-center text-sm text-stone-500 hover:text-stone-800 transition mt-5"
            >
                Ver todos los pedidos
            </Link>
        </div>
    )
}