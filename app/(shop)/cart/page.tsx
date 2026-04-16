"use client"
import { useEffect, useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import CartItems from "./components/CartItems"
import CartSummary from "./components/CartSummary"
import { useAuth } from "@/app/context/AuthContext"

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

export default function CartPage() {
    const { user } = useAuth()
    const [items, setItems] = useState<CartItemType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) return

        fetch(`/api/cart?userId=${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
                setLoading(false)
        })
    }, [user])

    const handleRemove = async (itemId: string) => {
        await fetch(`/api/cart/${itemId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${user!.token}` },
        })
        setItems(items.filter((item) => item.id !== itemId))
    }

    const handleUpdate = async (itemId: string, quantity: number) => {
        if (quantity < 1) return
        
        await fetch(`/api/cart/${itemId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user!.token}`,
            },
            body: JSON.stringify({ quantity }),
        })
            setItems(items.map((item) =>
                item.id === itemId ? { ...item, quantity } : item
        ))
        window.dispatchEvent(new Event("cart-updated"))
    }

    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

    if (!user) {
            return (
                <main className="min-h-screen bg-[#fdf8f3]">
                    <Navbar />
                        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
                            <p className="text-stone-500">Debes iniciar sesión para ver tu carrito.</p>
                        </section>
                    <Footer />
                </main>
            )
    }

    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-bold text-stone-800 mb-10">Tu Carrito</h1>

                {loading ? (
                    <p className="text-stone-400">Cargando carrito...</p>
                ) : items.length === 0 ? (
                    <p className="text-stone-400">Tu carrito está vacío.</p>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1">
                            {items.map((item) => (
                                <CartItems 
                                    key={item.id} 
                                    item={item} 
                                    onRemove={handleRemove} 
                                    onUpdate={handleUpdate}    
                                />
                            ))}
                        </div>
                        <div className="w-full lg:w-80">
                            <CartSummary total={total} />
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    )
}