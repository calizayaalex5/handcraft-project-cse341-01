import { prisma } from "@/lib/db"

export async function getUsers() {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            image: true,
            createdAt: true,
            _count: {
                select: { orders: true },
            },
        },
        orderBy: { createdAt: "desc" },
    })
}

export async function getUserById(id: string) {
    return await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            image: true,
            createdAt: true,
            orders: true,
        },
    })
}

export async function updateUserRole(id: string, role: "BUYER" | "SELLER" | "ADMIN") {
    return await prisma.user.update({
        where: { id },
        data: { role },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        },
    })
}

export async function updateUser(
    id: string,
    data: {
        name?: string
        email?: string
        image?: string 
        phone?: string
        address?: string
        city?: string
        country?: string
        role?: "BUYER" | "SELLER" | "ADMIN"
        password?: string
    }
) {    
    return await prisma.user.update({
        where: { id },
        data,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            image: true,
            createdAt: true,
        },
    })
}

export async function deleteUser(id: string) {
    await prisma.cart.deleteMany({ where: { userId: id } })
    await prisma.wishlist.deleteMany({ where: { userId: id } })
    await prisma.review.deleteMany({ where: { userId: id } })
    await prisma.orderItem.deleteMany({
        where: { order: { userId: id } }
    })
    await prisma.order.deleteMany({ where: { userId: id } })

    return await prisma.user.delete({
        where: { id },
    })
}