"use client"
import { useEffect, useState } from "react"
import { useAuth } from "@/app/context/AuthContext"

export function useCartCount() {
    const { user } = useAuth()
    const [count, setCount] = useState(0)

    const fetchCount = async () => {
        if (!user) {
            setCount(0)
            return
        }

        fetch(`/api/cart?userId=${user.id}`, {
            headers: { Authorization: `Bearer ${user.token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    const total = data.reduce((sum: number, item: any) => sum + item.quantity, 0)
                    setCount(total)
                }
            })
    }

    useEffect(() => {
        fetchCount()

        window.addEventListener("cart-updated", fetchCount)
        return () => window.removeEventListener("cart-updated", fetchCount)
    }, [user])

    return count
}