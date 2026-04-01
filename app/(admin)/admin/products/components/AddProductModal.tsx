"use client"
import { X } from "lucide-react"

export default function AddProductModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl">

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-stone-800">Agregar producto</h2>
                    <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition">
                        <X size={20} className="text-stone-500" />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre del producto"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Descripción</label>
                        <textarea
                            rows={3}
                            placeholder="Descripción del producto..."
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-stone-500 uppercase tracking-widest">Precio</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-stone-500 uppercase tracking-widest">Stock</label>
                            <input
                                type="number"
                                placeholder="0"
                                className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Categoría</label>
                        <select className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 bg-white">
                            <option value="">Seleccionar categoría</option>
                            <option value="joyeria">Joyería</option>
                            <option value="decoracion">Decoración Hogar</option>
                            <option value="ropa">Ropa</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Imagen</label>
                        <div className="border-2 border-dashed border-stone-200 rounded-xl px-4 py-6 text-center text-stone-400 text-sm hover:border-stone-400 transition cursor-pointer">
                            Arrastra una imagen o haz clic para subir
                        </div>
                    </div>

                    <div className="flex gap-3 mt-2">
                        <button
                            onClick={onClose}
                            className="flex-1 border border-stone-200 text-stone-700 text-sm py-3 rounded-full hover:bg-stone-50 transition"
                        >
                            Cancelar
                        </button>
                        <button className="flex-1 bg-stone-800 text-white text-sm py-3 rounded-full hover:bg-stone-700 transition">
                            Agregar producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}