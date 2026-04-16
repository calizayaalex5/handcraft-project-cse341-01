"use client"
import { useState } from "react"
import { useAuth } from "@/app/context/AuthContext"
import toast from "react-hot-toast"

export function useWishlist() {
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)

    const addToWishlist = async (productId: string) => {
        if (!user) {
            toast.error("Debes iniciar sesión primero")
            window.location.href = "/login"
            return
        }

        setLoading(true)
        try {
            const res = await fetch("/api/wishlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({ userId: user.id, productId }),
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.error)

        toast.success("¡Agregado a tu wishlist! ❤️")
        } catch (error: any) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { addToWishlist, loading }
}