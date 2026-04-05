import { NextResponse } from "next/server"
import { loginUser } from "@/lib/controllers/auth.controller"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, password } = body

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email y contraseña son requeridos" },
                { status: 400 }
            )
        }

        const user = await loginUser(email, password)
        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 401 }
        )
    }
}