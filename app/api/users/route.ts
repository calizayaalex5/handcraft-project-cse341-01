import { NextResponse } from "next/server"
import { getUsers } from "@/lib/controllers/user.controller"
import { adminMiddleware } from "@/lib/middleware/admin.middleware"

export async function GET(request: Request) {
    const auth = adminMiddleware(request)

    if (auth instanceof NextResponse) return auth

    try {
        const users = await getUsers()
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener usuarios" },
            { status: 500 }
        )
    }
}