import { NextResponse } from "next/server"
import { getWishlist, addToWishlist } from "@/lib/controllers/wishlist.controller"

// GET /api/wishlist?userId=xxx
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

        const wishlist = await getWishlist(userId)
        return NextResponse.json(wishlist)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener wishlist" },
            { status: 500 }
        )
    }
}

// POST /api/wishlist
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { userId, productId } = body

        if (!userId || !productId) {
            return NextResponse.json(
                { error: "userId y productId son requeridos" },
                { status: 400 }
            )
        }

        const item = await addToWishlist(userId, productId)
        return NextResponse.json(item, { status: 201 })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )
    }
}