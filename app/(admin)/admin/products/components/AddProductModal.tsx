"use client"
import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { useAuth } from "@/app/context/AuthContext"

type Product = {
    id: string
    name: string
    description: string
    price: number
    stock: number
    categoryId: string
    image?: string
}

type Category = {
    id: string
    name: string
}

export default function AddProductModal({
    onClose,
    onSave,
    product,
}: {
    onClose: () => void
    onSave: (product: any) => void
    product?: Product | null
}) {
    const { user } = useAuth()
    const [categories, setCategories] = useState<Category[]>([])
    const [name, setName] = useState(product?.name ?? "")
    const [description, setDescription] = useState(product?.description ?? "")
    const [price, setPrice] = useState(product?.price?.toString() ?? "")
    const [stock, setStock] = useState(product?.stock?.toString() ?? "")
    const [categoryId, setCategoryId] = useState(product?.categoryId ?? "")
    const [image, setImage] = useState(product?.image ?? "")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("/api/categories")
        .then((res) => res.json())
        .then(setCategories)
    }, [])

    const handleSave = async () => {
        if (!name || !description || !price || !stock || !categoryId) return
        setLoading(true)

        try {
            const url = product ? `/api/products/${product.id}` : "/api/products"
            const method = product ? "PUT" : "POST"

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user!.token}`,
                },
                body: JSON.stringify({
                    name,
                    description,
                    price: parseFloat(price),
                    stock: parseInt(stock),
                    categoryId,
                    image,
                }),
            })

            const data = await res.json()
            if (res.ok) {
                onSave(data)
                onClose()
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl">
                <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-stone-800">
                    {product ? "Editar producto" : "Agregar producto"}
                </h2>
                <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition">
                    <X size={20} className="text-stone-500" />
                </button>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Nombre</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Descripción</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3}
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 resize-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Precio</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Stock</label>
                        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)}
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Categoría</label>
                        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 bg-white">
                        <option value="">Seleccionar categoría</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Imagen URL</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)}
                        placeholder="https://..."
                        className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300" />
                    </div>

                    <div className="flex gap-3 mt-2">
                        <button onClick={onClose}
                        className="flex-1 border border-stone-200 text-stone-700 text-sm py-3 rounded-full hover:bg-stone-50 transition">
                        Cancelar
                        </button>
                        <button onClick={handleSave} disabled={loading}
                        className="flex-1 bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition disabled:opacity-50">
                        {loading ? "Guardando..." : product ? "Actualizar" : "Agregar producto"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}