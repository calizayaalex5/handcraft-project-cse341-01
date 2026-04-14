"use client"
import { useEffect, useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import OrderCard from "./components/OrderCard"
import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext"

type Order = {
    id: string
    total: number
    status: string
    createdAt: string
    items: {
        id: string
        quantity: number
        price: number
        product: { name: string }
    }[]
}

export default function OrdersPage() {
    const { user } = useAuth()
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) return
        fetch(`/api/orders?userId=${user.id}`, {
            headers: { Authorization: `Bearer ${user.token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data)
                setLoading(false)
        })
    }, [user])

    if (!user) {
        return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="max-w-4xl mx-auto px-6 py-32 text-center">
                <p className="text-stone-500">Debes iniciar sesión para ver tus pedidos.</p>
                <Link href="/login" className="text-stone-800 underline text-sm mt-2 inline-block">
                    Iniciar sesión
                </Link>
            </section>
            <Footer />
        </main>
        )
    }

  return (
        <main className="min-h-screen bg-[#fdf8f3]">
        <Navbar />

        <section className="max-w-4xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-3xl font-bold text-stone-800">Mis Pedidos</h1>
                <Link href="/profile" className="text-sm text-stone-500 hover:text-stone-800 transition">
                    ← Volver al perfil
                </Link>
            </div>

            {loading ? (
                <p className="text-stone-400">Cargando pedidos...</p>
            ) : orders.length === 0 ? (
                <p className="text-stone-400">No tienes pedidos aún.</p>
            ) : (
                <div className="flex flex-col gap-6">
                    {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </section>

        <Footer />
        </main>
    )
}