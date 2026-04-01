"use client"

import { Search } from "lucide-react"

const suggestions = ["Joyería", "Decoración", "Ropa", "Collar", "Aretes", "Bolsos"]

export default function SearchBar() {
    return (
        <div className="w-full max-w-2xl mx-auto">

            <div className="flex items-center gap-3 border border-stone-300 rounded-full px-6 py-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-stone-300 transition">
                <Search size={20} className="text-stone-400" />
                <input
                    type="text"
                    placeholder="Busca algo único..."
                    autoFocus
                    className="flex-1 outline-none text-sm text-stone-700 bg-transparent"
                />
                <button className="bg-stone-800 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-700 transition">
                    Buscar
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {suggestions.map((tag) => (
                    <button
                        key={tag}
                        className="text-xs border border-stone-200 text-stone-500 px-4 py-1.5 rounded-full hover:bg-stone-800 hover:text-white hover:border-stone-800 transition"
                    >
                        {tag}
                    </button>
                ))}
            </div>

        </div>
    )
}