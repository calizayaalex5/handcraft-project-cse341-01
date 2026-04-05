import { NextResponse } from "next/server"
import { removeFromWishlist } from "@/lib/controllers/wishlist.controller"

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        await removeFromWishlist(id)

        return NextResponse.json({ message: "Item eliminado de wishlist" })
    } catch (error) {
        return NextResponse.json(
            { error: "Error al eliminar de wishlist" },
            { status: 500 }
        )
    }
}