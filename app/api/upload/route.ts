import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import { authMiddleware } from "@/lib/middleware/auth.middleware"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
    const auth = authMiddleware(request)
    if (auth instanceof NextResponse) return auth

    try {
        const formData = await request.formData()
        const file = formData.get("file") as File

        if (!file) {
            return NextResponse.json({ error: "No se proporcionó archivo" }, { status: 400 })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const base64 = buffer.toString("base64")
        const dataURI = `data:${file.type};base64,${base64}`

        const result = await cloudinary.uploader.upload(dataURI, {
            folder: "handcraft-haven",
        })

        return NextResponse.json({ url: result.secure_url })
    } catch (error) {
        return NextResponse.json({ error: "Error al subir imagen" }, { status: 500 })
    }
}