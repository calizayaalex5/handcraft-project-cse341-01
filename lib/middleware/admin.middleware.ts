import { NextResponse } from "next/server"
import { verifyToken } from "./jwt"

export function adminMiddleware(request: Request) {
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return NextResponse.json(
            { error: "No autorizado" },
            { status: 401 }
        )
    }

    const token = authHeader.split(" ")[1]
    const payload = verifyToken(token)

    if (!payload) {
        return NextResponse.json(
            { error: "Token inválido o expirado" },
            { status: 401 }
        )
    }

    if (payload.role !== "ADMIN") {
        return NextResponse.json(
            { error: "Acceso denegado - se requiere rol ADMIN" },
            { status: 403 }
        )
    }

    return payload
}