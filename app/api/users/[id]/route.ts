import { NextResponse } from "next/server"
import { getUserById, updateUserRole, deleteUser } from "@/lib/controllers/user.controller"

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
    try {
        const { id } = await params
        const body = await request.json()
        const { role } = body

        if (!role) {
            return NextResponse.json(
                { error: "role es requerido" },
                { status: 400 }
            )
        }

        const user = await updateUserRole(id, role)
        return NextResponse.json(user)
    } catch (error) {
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