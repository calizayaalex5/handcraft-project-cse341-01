import Link from "next/link"
import { Heart } from "lucide-react"

const wishlist = [
  { id: 1, name: "Collar Artesanal", price: "$24.99", category: "Joyería" },
  { id: 2, name: "Jarrón de Barro",  price: "$39.99", category: "Decoración" },
  { id: 3, name: "Bolso Tejido",     price: "$54.99", category: "Ropa" },
]

export default function WishlistGrid() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-5">Mi Wishlist</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {wishlist.map((item) => (
                    <div key={item.id} className="group border border-stone-100 rounded-xl overflow-hidden hover:shadow-md transition">
                        <div className="relative w-full h-32 bg-stone-100">
                            <div className="w-full h-full bg-stone-200 group-hover:bg-stone-300 transition" />
                                <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm">
                                    <Heart size={14} className="text-red-400 fill-red-400" />
                                </button>
                            </div>
                            <div className="p-3">
                                <p className="text-xs text-stone-400">{item.category}</p>
                                <Link href={`/products/${item.id}`}>
                                    <p className="text-sm font-semibold text-stone-800 hover:underline">{item.name}</p>
                                </Link>
                                <p className="text-sm text-stone-500 mt-1">{item.price}</p>
                            </div>
                        </div>
                    ))}
            </div>

            <Link
                href="/profile/wishlist"
                className="block text-center text-sm text-stone-500 hover:text-stone-800 transition mt-5"
            >
                Ver wishlist completa
            </Link>
        </div>
    )
}