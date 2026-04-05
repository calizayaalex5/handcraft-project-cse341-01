import { NextResponse } from "next/server";
import { getOrders, createOrder } from "@/lib/controllers/order.controller";
import { error } from "console";

// GET /api/orders?userID=xxx
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json(
                { error: "userID es requerido" },
                { status: 400 }
            )
        }

        const orders = await getOrders(userId)
        return NextResponse.json(orders)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener pedidos" },
            { status: 500 }
        )
    }
}

// POST /api/orders
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, items } = body

        if (!userId || !items || items.length === 0) {
            return NextResponse.json(
                { error: "userId e items son requeridos" },
                { status: 400 }
            )
        }
        
        const order = await createOrder(userId, items)
        return NextResponse.json(order, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: "Error al crear pedido" },
            { status: 500 }
        )
    }
}