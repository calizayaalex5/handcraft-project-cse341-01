import { NextResponse } from "next/server"
import { getProductsBySeller, createProduct } from "@/lib/controllers/product.controller"
import { authMiddleware } from "@/lib/middleware/auth.middleware"

export async function GET(request: Request) {
    const auth = authMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const { searchParams } = new URL(request.url)
        const sellerId = searchParams.get("sellerId")

        if (!sellerId) {
            return NextResponse.json({ error: "sellerId es requerido" }, { status: 400 })
        }

        const products = await getProductsBySeller(sellerId)
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({ error: "Error al obtener productos" }, { status: 500 })
    }
}

export async function POST(request: Request) {
    const auth = authMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const body = await request.json()
        const { name, description, price, stock, categoryId, image, sellerId } = body

        if (!name || !description || !price || !stock || !categoryId || !sellerId) {
            return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
        }

        const product = await createProduct({ name, description, price, stock, categoryId, image, sellerId })
        return NextResponse.json(product, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: "Error al crear producto" }, { status: 500 })
    }
}