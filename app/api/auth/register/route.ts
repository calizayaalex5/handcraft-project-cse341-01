import { NextResponse } from "next/server"
import { registerUser } from "@/lib/controllers/auth.controller"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, password, role } = body

        if (!name || !email || !password) {
        return NextResponse.json(
            { error: "Nombre, email y contraseña son requeridos" },
            { status: 400 }
        )
        }

        const user = await registerUser(name, email, password, role)
        return NextResponse.json(user, { status: 201 })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )
    }
}