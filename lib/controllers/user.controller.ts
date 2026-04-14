import { prisma } from "@/lib/db"

export async function getUsers() {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
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

export async function updateUser(id: string, data: { name?: string; email?: string }) {
    return await prisma.user.update({
        where: { id },
        data,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    })
}

export async function deleteUser(id: string) {
    return await prisma.user.delete({
        where: { id },
    })
}