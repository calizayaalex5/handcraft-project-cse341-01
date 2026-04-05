import { NextResponse } from 'next/server';
import { getOrderById } from '@/lib/controllers/order.controller';

// GET /api/orders/:id
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const order = await getOrderById(id)

        if (!order) {
            return NextResponse.json(
                { error: "Pedido no encontrado" },
                { status: 404 }
            )
        }

        return NextResponse.json(order)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener pedido" },
            { status: 500 }
        )
    }
}