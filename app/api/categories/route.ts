import { NextResponse } from "next/server"
import { getCategories } from "@/lib/controllers/category.controller"


// GET /api/categories
export async function GET() {
    try {
        const categories = await getCategories()
        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener categorías" },
            { status: 500 }
        )
    }
}