import { Trash2 } from "lucide-react";

export default function CartItem() {
    return (
        <div className="flex items-center gap-6 border-b border-stone-100 py-6">
            <div className="w-24 h-24 bg-stone-200 rounded-xl flex-shrink-0" />

            <div className="flex-1">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Joyería</p>
                <p className="text-sm font-semibold text-stone-800">Collar Artesanal</p>
                <p className="text-sm text-stone-500 mt-1">Vendido por Ana García</p>
            </div>

            <div className="flex items-center border border-stone-200 rounded-full">
                <button className="px-3 py-1 text-stone-600 hover:text-stone-900 transition">−</button>
                <span className="px-3 text-sm">1</span>
                <button className="px-3 py-1 text-stone-600 hover:text-stone-900 transition">+</button>
            </div>

            <p className="text-sm font-bold text-stone-800 w-16 text-right">$24.99</p>

            <button className="text-stone-300 hover:text-red-400 transition">
                <Trash2 size={18} />
            </button>

        </div>
    )
}
