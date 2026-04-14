import { NextResponse } from "next/server";
import { getProducts, searchProducts } from "@/lib/controllers/product.controller";

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