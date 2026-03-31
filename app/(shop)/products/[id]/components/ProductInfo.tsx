import { ShoppingCart, Heart } from "lucide-react"

export default function ProductInfoComponent() {
    return (
        <div className="flex flex-col gap-6">

        <p className="text-xs text-stone-400 uppercase tracking-widest">Joyería</p>

        <h1 className="text-4xl font-bold text-stone-800">
            Collar Artesanal
        </h1>

        <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
            {"★★★★☆"}
            </div>
            <span className="text-sm text-stone-400">(24 reseñas)</span>
        </div>

        <p className="text-3xl font-bold text-stone-800">$24.99</p>

        <p className="text-stone-500 text-sm leading-relaxed">
            Hermoso collar artesanal elaborado a mano con materiales de alta calidad.
            Cada pieza es única y refleja el talento y dedicación de nuestros artesanos locales.
        </p>

        <div className="flex items-center gap-3 border border-stone-200 rounded-xl p-3">
            <div className="w-10 h-10 bg-stone-200 rounded-full" />
            <div>
            <p className="text-xs text-stone-400">Vendido por</p>
            <p className="text-sm font-semibold text-stone-800">Ana García</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <p className="text-sm text-stone-600">Cantidad:</p>
            <div className="flex items-center border border-stone-200 rounded-full">
            <button className="px-4 py-2 text-stone-600 hover:text-stone-900 transition">−</button>
            <span className="px-4 text-sm">1</span>
            <button className="px-4 py-2 text-stone-600 hover:text-stone-900 transition">+</button>
            </div>
        </div>

        <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-stone-800 text-white py-3 rounded-full hover:bg-stone-700 transition text-sm">
            <ShoppingCart size={16} />
            Agregar al carrito
            </button>
            <button className="p-3 border border-stone-200 rounded-full hover:bg-stone-50 transition">
            <Heart size={18} className="text-stone-500" />
            </button>
        </div>

        </div>
    )
}