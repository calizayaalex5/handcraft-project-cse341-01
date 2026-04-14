import { NextResponse } from "next/server"
import { getProducts, searchProducts, createProduct } from "@/lib/controllers/product.controller"
import { adminMiddleware } from "@/lib/middleware/admin.middleware"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const query = searchParams.get("search")

    const products = query
        ? await searchProducts(query)
        : await getProducts()

    return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener productos" },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    const auth = adminMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const body = await request.json()
        const { name, description, price, stock, categoryId, image } = body

        if (!name || !description || !price || !stock || !categoryId) {
        return NextResponse.json(
            { error: "Todos los campos son requeridos" },
            { status: 400 }
        )
        }

        const product = await createProduct({ name, description, price, stock, categoryId, image })
        return NextResponse.json(product, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: "Error al crear producto" },
            { status: 500 }
        )
    }
}