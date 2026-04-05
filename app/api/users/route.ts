import { NextResponse } from "next/server"
import { getUsers } from "@/lib/controllers/user.controller"

export async function GET() {
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