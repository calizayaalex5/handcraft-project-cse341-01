import { prisma } from "@/lib/db"

export async function getCategories() {
    return await prisma.category.findMany({
        include: {
            _count: {
                select: { products: true },
            }
        },
    })
}

export async function getCategoryBySlug(slug: string) {
    return await prisma.category.findUnique({
        where: { slug },
        include: {
            products: true,
        },
    })
}