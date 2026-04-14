import { prisma } from "@/lib/db"

export async function getAdminStats() {
    const [totalUsers, totalProducts, totalOrders, orders] = await Promise.all([
        prisma.user.count(),
        prisma.product.count(),
        prisma.order.count(),
        prisma.order.findMany({
        select: { total: true },
        }),
    ])

    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)

    return {
        totalUsers,
        totalProducts,
        totalOrders,
        totalRevenue,
    }
}

export async function getRecentOrders() {
    return await prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
            user: { select: { name: true, email: true } },
            items: {
                include: {
                product: { select: { name: true } },
                },
            },
        },
    })
}

export async function getTopProducts() {
    const orderItems = await prisma.orderItem.groupBy({
        by: ["productId"],
        _sum: { quantity: true, price: true },
        orderBy: { _sum: { quantity: "desc" } },
        take: 4,
    })

    const products = await Promise.all(
        orderItems.map(async (item) => {
            const product = await prisma.product.findUnique({
                where: { id: item.productId },
                include: { category: true },
            })
            return {
                ...product,
                totalSales: item._sum.quantity,
                totalRevenue: item._sum.price,
            }
        })
    )

    return products
}