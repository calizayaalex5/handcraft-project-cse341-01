import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function registerUser(
  name: string,
  email: string,
  password: string,
  role: "BUYER" | "SELLER" = "BUYER"
) {
    const existing = await prisma.user.findUnique({
        where: { email },
    })

    if (existing) {
        throw new Error("Email ya está en uso")
    }

    //encriptacion de contraseña
    const hashedPassword = await bcrypt.hash(password, 10)

    //crear usuario
    const user = await prisma.user.create({
        data: {
        name,
        email,
        password: hashedPassword,
        role,
        },
    })

    //no retornamos la contraseña
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword

}

export async function loginUser(email: string, password: string) {
    // Buscar usuario
    const user = await prisma.user.findUnique({
        where: { email },
    })

    if (!user) {
        throw new Error("Credenciales incorrectas")
    }

    // Verificar contraseña
    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error("Credenciales incorrectas")
    }

    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
}