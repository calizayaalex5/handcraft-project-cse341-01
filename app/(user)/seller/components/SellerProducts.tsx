"use client"
import { Pencil, Trash2 } from "lucide-react"
import { useAuth } from "@/app/context/AuthContext"

type Product = {
    id: string
    name: string
    price: number
    stock: number
    description: string
    categoryId: string
    image?: string
    category: { name: string }
}

export default function SellerProducts({
    products,
    onAdd,
    onEdit,
    onDelete,
}: {
    products: Product[]
    onAdd: () => void
    onEdit: (product: Product) => void
    onDelete: (id: string) => void
}) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-stone-800">Mis Productos</h2>
                <button
                onClick={onAdd}
                className="bg-stone-800 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-700 transition"
                >
                + Nuevo producto
                </button>
            </div>

            {products.length === 0 ? (
                <p className="text-stone-400 text-sm text-center py-8">No tienes productos publicados aún.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="border border-stone-100 rounded-xl p-4 hover:shadow-md transition">
                            <div className="w-full h-32 bg-stone-100 rounded-xl mb-3" />
                            <p className="text-xs text-stone-400 mb-1">{product.category.name}</p>
                            <p className="text-sm font-semibold text-stone-800">{product.name}</p>
                            <p className="text-sm text-stone-500 mt-1">${product.price.toFixed(2)}</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                {product.stock > 0 ? `${product.stock} en stock` : "Agotado"}
                                </span>
                                <div className="flex gap-2">
                                <button onClick={() => onEdit(product)}
                                    className="p-1.5 border border-stone-200 rounded-lg hover:bg-stone-50 transition">
                                    <Pencil size={14} className="text-stone-400" />
                                </button>
                                <button onClick={() => onDelete(product.id)}
                                    className="p-1.5 border border-stone-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition">
                                    <Trash2 size={14} className="text-stone-400" />
                                </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}