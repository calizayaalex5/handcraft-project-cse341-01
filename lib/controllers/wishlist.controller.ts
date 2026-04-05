import { prisma } from "@/lib/db"

export async function getWishlist(userId: string) {
    return await prisma.wishlist.findMany({
        where: { userId },
        include: {
            product: {
                include: { category: true },
            },
        },
    })
}

export async function addToWishlist(userId: string, productId: string) {
    const existing = await prisma.wishlist.findFirst({
        where: { userId, productId },
    })

    if (existing) {
        throw new Error("El producto ya está en la wishlist")
    }

    return await prisma.wishlist.create({
        data: { userId, productId },
        include: {
            product: {
                include: { category: true },
            },
        },
    })
}

export async function removeFromWishlist(id: string) {
    return await prisma.wishlist.delete({
        where: { id },
    })
}