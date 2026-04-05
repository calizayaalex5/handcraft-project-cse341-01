import { NextResponse } from "next/server"
import { removeFromCart, updateCartItem } from "@/lib/controllers/cart.controller"

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ itemId: string }> }
) {
    try {
        const { itemId } = await params
        await removeFromCart(itemId)
        return NextResponse.json({ message: "Item eliminado" })
    } catch (error) {
        return NextResponse.json(
            { error: "Error al eliminar item" },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ itemId: string }> }
) {
    try {
        const { itemId } = await params
        const body = await request.json()
        const { quantity } = body

        const item = await updateCartItem(itemId, quantity)
        return NextResponse.json(item)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al actualizar item" },
            { status: 500 }
        )
    }
}