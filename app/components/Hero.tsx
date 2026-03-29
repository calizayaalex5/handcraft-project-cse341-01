import { Search } from "lucide-react"

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center py-24 px-8 bg-stone-50 text-center">

            <h1 className="text-5xl font-bold text-stone-800 mb-2">
                Handcraft Haven
            </h1>
            <p className="text-stone-500 mb-8">.com</p>

            <div className="flex items-center gap-2 border border-stone-300 rounded-full px-5 py-3 w-full max-w-md bg-white shadow-sm">
                <Search size={18} className="text-stone-400" />
                <input
                    type="text"
                    placeholder="Busca algo único..."
                    className="flex-1 outline-none text-sm text-stone-700 bg-transparent"
                />
            </div>
        </section>
    )
}