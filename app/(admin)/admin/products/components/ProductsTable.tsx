"use client"

import { Pencil, Trash2 } from "lucide-react"

type Product = {
    id: string
    name: string
    description: string
    price: number
    stock: number
    categoryId: string
    image?: string
    category: { name: string }
}

export default function ProductsTable({
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
                <h2 className="text-lg font-bold text-stone-800">Todos los productos</h2>
                <button
                onClick={onAdd}
                className="bg-stone-800 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-700 transition"
                >
                + Agregar producto
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-stone-100">
                        <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Producto</th>
                        <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Categoría</th>
                        <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Precio</th>
                        <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Stock</th>
                        <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Estado</th>
                        <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-stone-50 hover:bg-stone-50 transition">
                                <td className="py-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex-shrink-0" />
                                    <p className="font-medium text-stone-800">{product.name}</p>
                                </div>
                                </td>
                                <td className="py-3 text-stone-500">{product.category.name}</td>
                                <td className="py-3 font-bold text-stone-800">${product.price.toFixed(2)}</td>
                                <td className="py-3 text-stone-500">{product.stock}</td>
                                <td className="py-3">
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                        product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                    }`}>
                                        {product.stock > 0 ? "Activo" : "Agotado"}
                                    </span>
                                </td>
                                <td className="py-3">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => onEdit(product)}
                                            className="p-1.5 border border-stone-200 rounded-lg hover:bg-stone-50 transition"
                                        >
                                            <Pencil size={14} className="text-stone-400" />
                                        </button>
                                        <button
                                            onClick={() => onDelete(product.id)}
                                            className="p-1.5 border border-stone-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition"
                                        >
                                            <Trash2 size={14} className="text-stone-400 hover:text-red-400" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}