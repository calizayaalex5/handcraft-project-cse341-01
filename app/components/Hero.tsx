import Link from "next/link"
import { Search } from "lucide-react"

export default function Hero() {
    return (
        <section className="bg-stone-50 py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                <div className="flex-1 flex flex-col items-start gap-6">
                <div>
                    <h1 className="text-6xl font-bold text-stone-800 tracking-widest uppercase">
                    HH
                    </h1>
                    <p className="text-stone-400 text-sm tracking-widest">.com</p>
                </div>

                <div className="flex items-center gap-3 border border-stone-300 rounded-full px-5 py-3 w-full max-w-sm bg-white shadow-sm hover:shadow-md transition">
                    <Search size={16} className="text-stone-400" />
                    <input
                    type="text"
                    placeholder="Busca algo único..."
                    className="flex-1 outline-none text-sm text-stone-700 bg-transparent"
                    />
                </div>

                <Link
                    href="/products"
                    className="bg-stone-800 text-white text-sm px-6 py-3 rounded-full hover:bg-stone-700 transition"
                >
                    Ver todos los productos
                </Link>
                </div>

                <div className="flex-1 w-full h-80 bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-sm">
                Banner Image
                </div>

            </div>
    </section>
    )
}