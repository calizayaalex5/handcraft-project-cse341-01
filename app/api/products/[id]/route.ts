import { NextResponse } from "next/server"
import { getProductById, updateProduct, deleteProduct } from "@/lib/controllers/product.controller"
import { adminMiddleware } from "@/lib/middleware/admin.middleware"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> } 
) {
    try {
        const { id } = await params
        const product = await getProductById(id)

        if (!product) {
            return NextResponse.json(
                { error: "Producto no encontrado" },
                { status: 404 }
            )
        }

        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener producto" },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const auth = adminMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const { id } = await params
        const body = await request.json()
        const product = await updateProduct(id, body)
        return NextResponse.json(product)
    } catch (error) {
            return NextResponse.json(
            { error: "Error al actualizar producto" },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const auth = adminMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const { id } = await params
        await deleteProduct(id)
        return NextResponse.json({ message: "Producto eliminado" })
    } catch (error) {
        return NextResponse.json(
            { error: "Error al eliminar producto" },
            { status: 500 }
        )
    }
}