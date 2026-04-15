"use client"
import { useState } from "react"
import Image from "next/image"
import { useAuth } from "@/app/context/AuthContext"
import { Upload } from "lucide-react"

export default function ImageUpload({
    onUpload,
    currentImage,
    label = "Subir imagen",
}: {
    onUpload: (url: string) => void
    currentImage?: string
    label?: string
}) {
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [preview, setPreview] = useState(currentImage ?? "")

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const localUrl = URL.createObjectURL(file)
        setPreview(localUrl)
        setLoading(true)

        try {
            const formData = new FormData()
            formData.append("file", file)

            const res = await fetch("/api/upload", {
                method: "POST",
                headers: {
                Authorization: `Bearer ${user!.token}`,
                },
                body: formData,
            })

            const data = await res.json()
            if (res.ok) {
                onUpload(data.url)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-3">
            {preview && (
                <div className="relative w-full h-40 rounded-xl overflow-hidden bg-stone-100">
                    <Image src={preview} alt="Preview" fill className="object-cover" unoptimized />
                </div>
            )}

            <label className={`flex items-center justify-center gap-2 border-2 border-dashed border-stone-200 rounded-xl px-4 py-4 cursor-pointer hover:border-stone-400 transition ${loading ? "opacity-50" : ""}`}>
                <Upload size={18} className="text-stone-400" />
                <span className="text-sm text-stone-500">
                    {loading ? "Subiendo..." : label}
                </span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={loading}
                    className="hidden"
                />
            </label>
        </div>
    )
}