import Link from "next/link"
import { Heart } from "lucide-react"

const productsByCategory: Record<string, {id: number; name: string; price: string}[]> = {
    joyeria: [
        { id: 1, name: "Collar Artesanal",  price: "$24.99" },
        { id: 4, name: "Aretes de Plata",   price: "$18.99" },
        { id: 6, name: "Pulsera de Cuero",  price: "$15.99" },
    ],
    decoracion: [
        { id: 2, name: "Jarrón de Barro",       price: "$39.99" },
        { id: 5, name: "Cojín Bordado",          price: "$29.99" },
        { id: 8, name: "Macetero de Cerámica",   price: "$44.99" },
    ],
    ropa: [
        { id: 3, name: "Bolso Tejido",       price: "$54.99" },
        { id: 7, name: "Vestido Artesanal",  price: "$74.99" },
    ],
    nuevos: [
        { id: 1, name: "Collar Artesanal",  price: "$24.99" },
        { id: 2, name: "Jarrón de Barro",   price: "$39.99" },
        { id: 3, name: "Bolso Tejido",      price: "$54.99" },
        { id: 4, name: "Aretes de Plata",   price: "$18.99" },
    ],
}

export default function categoryGrid({ slug }: {slug: string}) {
    const products = productsByCategory[slug] ?? []

    if (products.length === 0) {
        return (
        <div className="text-center py-24 text-stone-400">
            <p className="text-lg">No hay productos en esta categoría.</p>
            <Link href="/products" className="text-sm text-stone-800 hover:underline mt-2 inline-block">
                Ver todos los productos
            </Link>
        </div>
        )
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                    
                    <div className="relative w-full h-48 bg-stone-100">
                        <div className="w-full h-full bg-stone-200 group-hover:bg-stone-300 transition" />
                        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:text-red-400 transition">
                            <Heart size={16} className="text-stone-400" />
                        </button>
                    </div>

                    <div className="p-4">
                        <Link href={`/products/${product.id}`}>
                            <p className="text-sm font-semibold text-stone-800 hover:underline">{product.name}</p>
                        </Link>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm font-bold text-stone-800">{product.price}</p>
                            <button className="text-xs bg-stone-800 text-white px-3 py-1 rounded-full hover:bg-stone-700 transition">
                                + Carrito
                            </button>
                        </div>
                    </div>
                    
                </div>

            ))}
        </div>
    )
}