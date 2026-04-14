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

export async function searchProducts(query: string) {
    return await prisma.product.findMany({
        where: {
            OR: [
                { name: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
                { category: { name: { contains: query, mode: "insensitive" } } },
            ],
        },
        include: { category: true },
        orderBy: { createdAt: "desc" },
    })
}