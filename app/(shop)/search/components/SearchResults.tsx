import Link from "next/link"
import { Heart } from "lucide-react"

const results = [
  { id: 1, name: "Collar Artesanal",      price: "$24.99", category: "Joyería" },
  { id: 2, name: "Collar de Perlas",      price: "$34.99", category: "Joyería" },
  { id: 3, name: "Bolso Tejido",          price: "$54.99", category: "Ropa" },
  { id: 4, name: "Aretes de Plata",       price: "$18.99", category: "Joyería" },
  { id: 5, name: "Cojín Bordado",         price: "$29.99", category: "Decoración" },
  { id: 6, name: "Pulsera de Cuero",      price: "$15.99", category: "Joyería" },
]

export default function SearchResults() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-12">

            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-stone-500">
                <span className="font-semibold text-stone-800">{results.length} resultados</span> encontrados
                </p>
                <select className="text-sm border border-stone-200 rounded-full px-4 py-2 text-stone-600 outline-none bg-white">
                    <option>Más relevantes</option>
                    <option>Menor precio</option>
                    <option>Mayor precio</option>
                    <option>Más nuevos</option>
                </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {results.map((item) => (
                    <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

                        <div className="relative w-full h-48 bg-stone-100">
                            <div className="w-full h-full bg-stone-200 group-hover:bg-stone-300 transition" />
                            <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:text-red-400 transition">
                                <Heart size={16} className="text-stone-400" />
                            </button>
                        </div>

                        <div className="p-4">
                            <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">{item.category}</p>
                            <Link href={`/products/${item.id}`}>
                                <p className="text-sm font-semibold text-stone-800 hover:underline">{item.name}</p>
                            </Link>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-sm font-bold text-stone-800">{item.price}</p>
                                <button className="text-xs bg-stone-800 text-white px-3 py-1 rounded-full hover:bg-stone-700 transition">
                                    + Carrito
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>  
    )
}