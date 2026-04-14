import { NextResponse } from "next/server"
import { getAdminStats, getRecentOrders, getTopProducts } from "@/lib/controllers/admin.controller"
import { adminMiddleware } from "@/lib/middleware/admin.middleware"

export async function GET(request: Request) {
    const auth = adminMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const [stats, recentOrders, topProducts] = await Promise.all([
            getAdminStats(),
            getRecentOrders(),
            getTopProducts(),
        ])

        return NextResponse.json({ stats, recentOrders, topProducts })
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener estadísticas" },
            { status: 500 }
        )
    }
}