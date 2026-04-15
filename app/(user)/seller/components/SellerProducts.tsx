"use client"
import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
                        <div key={product.id} className="border border-stone-100 rounded-xl overflow-hidden hover:shadow-md transition">

                            <Link href={`/products/${product.id}`}>
                                <div className="relative w-full h-40 bg-stone-100">
                                {product.image ? (
                                    <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover hover:scale-105 transition"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-stone-200" />
                                )}
                                </div>
                            </Link>

                            <div className="p-4">
                                <p className="text-xs text-stone-400 mb-1">{product.category.name}</p>
                                <Link href={`/products/${product.id}`}>
                                    <p className="text-sm font-semibold text-stone-800 hover:underline">{product.name}</p>
                                </Link>
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}