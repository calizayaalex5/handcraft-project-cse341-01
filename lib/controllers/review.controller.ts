import { prisma } from "@/lib/db";

export async function getReviewsByProduct(productId: string) {
    return await prisma.review.findMany({
        where: { productId },
        include: {
            user: { select: { name: true } },
        },
        orderBy: { createdAt: "desc" },
    })
}

export async function getReviewById(id: string) {
    return await prisma.review.findUnique({
        where: { id },
        include: {
            user: { select: { name: true } },
        },
    })
}

export async function createReview(
    userId: string,
    productId: string,
    rating: number,
    comment: string
) {
    if (rating < 1 || rating > 5) {
        throw new Error("El rating debe ser entre 1 y 5")
    }

    return await prisma.review.create({
        data: { userId, productId, rating, comment },
        include: {
            user: { select: { name: true } },
        },
    })
}

export async function updateReview(
    id: string,
    rating: number,
    comment: string
) {
    if (rating < 1 || rating > 5) {
        throw new Error("El rating debe ser entre 1 y 5")
    }

    return await prisma.review.update({
        where: { id },
        data: { rating, comment },
        include: {
            user: { select: { name: true } },
        },
    })
}

export async function deleteReview(id: string) {
    return await prisma.review.delete({
        where: { id },
    })
}