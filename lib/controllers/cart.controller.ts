import { prisma } from "@/lib/db";

export async function getCart(userId: string) {
    return await prisma.cart.findMany({
        where: { userId },
        include: {
            product: {
                include: { category: true },
            },
        },
    })
} 

export async function addToCart(userId: string, productId: string, quantity: number) {
    const existing = await prisma.cart.findFirst({
        where: { userId, productId },
    })

  if (existing) {
    return await prisma.cart.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + quantity },
    })
  }

  return await prisma.cart.create({
        data: { userId, productId, quantity },
    })
}

export async function removeFromCart(cartItemId: string) {
    return await prisma.cart.delete({
        where: { id: cartItemId },
    })
}

export async function updateCartItem(cartItemId: string, quantity: number) {
    return await prisma.cart.update({
        where: { id: cartItemId },
        data: { quantity },
    })
}