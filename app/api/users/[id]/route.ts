import { NextResponse } from "next/server"
import { getUserById, updateUserRole, updateUser, deleteUser } from "@/lib/controllers/user.controller"
import { authMiddleware } from "@/lib/middleware/auth.middleware"

// GET /api/users/[id]
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const user = await getUserById(id)

        if (!user) {
            return NextResponse.json(
                { error: "Usuario no encontrado" },
                { status: 404 }
            )
        }

        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json(
            { error: "Error al obtener usuario" },
            { status: 500 }
        )
    }
}

// PUT /api/users/[id]
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const auth = authMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const { id } = await params
        const body = await request.json()

        if (body.role && Object.keys(body).length === 1) {
            const user = await updateUserRole(id, body.role)
            return NextResponse.json(user)
        }

        const user = await updateUser(id, body)
        return NextResponse.json(user)
    } catch (error) {
        console.error("Error PUT /api/users/[id]:", error)
        return NextResponse.json(
            { error: "Error al actualizar usuario" },
            { status: 500 }
        )
    }
}

// DELETE /api/users/[id]
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        await deleteUser(id)

        return NextResponse.json({ message: "Usuario eliminado" })
    } catch (error) {
        return NextResponse.json(
            { error: "Error al eliminar usuario" },
            { status: 500 }
        )
    }
}