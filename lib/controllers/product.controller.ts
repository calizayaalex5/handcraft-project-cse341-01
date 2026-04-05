import { prisma } from "@/lib/db"

export async function getProducts() {
    return await prisma.product.findMany({
        include: { category: true },
        orderBy: { createdAt: "desc" },
    })
}

export async function getProductById(id: string) {
    return await prisma.product.findUnique({
        where: { id },
        include: {
        category: true,
            reviews: {
                include: {
                user: { select: { name: true } },
                },
            },
        },
    })
}