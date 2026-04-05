import { NextResponse } from "next/server"
import { getCart, addToCart } from "@/lib/controllers/cart.controller"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const userId = searchParams.get("userId")

        if (!userId) {
            return NextResponse.json(
                { error: "userId es requerido" },
                { status: 400 }
            )
        }

        const cart = await getCart(userId)
        return NextResponse.json(cart)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener carrito" },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { userId, productId, quantity = 1 } = body

        if (!userId || !productId) {
        return NextResponse.json(
            { error: "userId y productId son requeridos" },
            { status: 400 }
        )
    }

        const item = await addToCart(userId, productId, quantity)
        return NextResponse.json(item, { status: 201 })
    } catch (error) {
        console.error("Error en POST /api/cart:", error)
        return NextResponse.json(
            { error: "Error al agregar al carrito" },
            { status: 500 }
        )
    }
}