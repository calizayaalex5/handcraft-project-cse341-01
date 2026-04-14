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

export async function createProduct(data: {
    name: string
    description: string
    price: number
    stock: number
    categoryId: string
    image?: string
}) {
    return await prisma.product.create({
        data,
        include: { category: true },
    })
}

export async function updateProduct(id: string, data: {
    name?: string
    description?: string
    price?: number
    stock?: number
    categoryId?: string
    image?: string
}) {
    return await prisma.product.update({
        where: { id },
        data,
        include: { category: true },
    })
}

export async function deleteProduct(id: string) {
    return await prisma.product.delete({
        where: { id },
    })
    }