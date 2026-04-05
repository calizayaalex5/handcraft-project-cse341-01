import { NextResponse } from "next/server"
import { getReviewById, updateReview, deleteReview } from "@/lib/controllers/review.controller"

// GET /api/reviews/[id]
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const review = await getReviewById(id)

        if (!review) {
            return NextResponse.json(
                { error: "Reseña no encontrada" },
                { status: 404 }
            )
        }

        return NextResponse.json(review)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener reseña" },
            { status: 500 }
        )
    }
}

// PUT /api/reviews/[id]
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await request.json()
        const { rating, comment } = body

        if (!rating || !comment) {
            return NextResponse.json(
                { error: "rating y comment son requeridos" },
                { status: 400 }
            )
        }

        const review = await updateReview(id, rating, comment)
        return NextResponse.json(review)
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )
    }
}

// DELETE /api/reviews/[id]
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        await deleteReview(id)

        return NextResponse.json({ message: "Reseña eliminada" })
    } catch (error) {
        return NextResponse.json(
            { error: "Error al eliminar reseña" },
            { status: 500 }
        )
    }
}