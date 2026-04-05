import { prisma } from "@/lib/db"
import { IncrementalCache } from "next/dist/server/lib/incremental-cache"

export async function getOrders(userId: string) {
    return await prisma.order.findMany({
        where: { userId },
            include: {
            items: {
                include: {
                    product: {
                        include: { category: true },
                    },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    })
}

export async function getOrderById(id: string) {
    return await prisma.order.findUnique({
        where: { id },
        include: {
            items: {
                include: {
                    product: {
                        include: { category: true },
                    },
                },
            },
        },
    })
}

export async function createOrder(userId: string, items: { productId: string; quantity: number; price: number }[]) {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return await prisma.order.create({
        data: {
            userId,
            total,
            items: {
                create: items.map((item) => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price,
                })),
            },
        },
        include: {
            items: true,
        },
    })
}
