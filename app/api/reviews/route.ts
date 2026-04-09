import { NextResponse } from "next/server"
import { getReviewsByProduct, createReview } from "@/lib/controllers/review.controller"
import { authMiddleware } from "@/lib/middleware/auth.middleware"
    
// GET /api/reviews?productId=xxx
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const productId = searchParams.get("productId")

        if (!productId) {
            return NextResponse.json(
                { error: "productId es requerido" },
                { status: 400 }
            )
        }

        const reviews = await getReviewsByProduct(productId)
        return NextResponse.json(reviews)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener reseñas" },
            { status: 500 }
        )
    }
}

// POST /api/reviews
export async function POST(request: Request) {
    const auth = authMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const body = await request.json()
        const { userId, productId, rating, comment } = body

        if (!userId || !productId || !rating || !comment) {
            return NextResponse.json(
                { error: "userId, productId, rating y comment son requeridos" },
                { status: 400 }
            )
        }

        const review = await createReview(userId, productId, rating, comment)
        return NextResponse.json(review, { status: 201 })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )
    }
}