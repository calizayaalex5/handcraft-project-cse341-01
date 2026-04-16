"use client"
import { useState } from "react"
import { useAuth } from "@/app/context/AuthContext"
import toast from "react-hot-toast"

export function useCart() {
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)

    const addToCart = async (productId: string, quantity: number = 1) => {
        if (!user) {
            toast.error("Debes iniciar sesión primero")
            window.location.href = "/login"
            return
        }

        setLoading(true)
        try {
            const res = await fetch("/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.token}`,
                },
                body: JSON.stringify({ userId: user.id, productId, quantity }),
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data.error)

            window.dispatchEvent(new Event("cart-updated"))
            toast.success("¡Producto agregado al carrito! 🛒")

        } catch (error: any) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { addToCart, loading }
}