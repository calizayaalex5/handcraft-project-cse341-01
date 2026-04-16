"use client"
import Link from "next/link"
import { Search } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = () => {
        if (!query.trim()) return
        router.push(`/search?q=${encodeURIComponent(query)}`)
    }

    return (
        <section className="bg-stone-50 py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                <div className="flex-1 flex flex-col items-start gap-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-6xl font-bold text-stone-800 tracking-widest uppercase">HH</h1>
                    <p className="text-stone-400 text-sm tracking-widest">.com</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-3 border border-stone-300 rounded-full px-5 py-3 w-full max-w-sm bg-white shadow-sm hover:shadow-md transition"
                >
                    <Search size={16} className="text-stone-400" />
                    <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Busca algo único..."
                    className="flex-1 outline-none text-sm text-stone-700 bg-transparent"
                    />
                    <button onClick={handleSearch} aria-label="Buscar">
                    <Search size={14} className="text-stone-400 hover:text-stone-700 transition" />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                    href="/products"
                    className="bg-stone-800 text-white text-sm px-6 py-3 rounded-full hover:bg-stone-700 transition"
                    >
                    Ver todos los productos
                    </Link>
                </motion.div>

                </div>

                <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-1 w-full h-80 relative rounded-2xl overflow-hidden shadow-lg"
                >
                <Image
                    src="/images/banners/hero.webp"
                    alt="Handcraft Haven - Productos artesanales únicos"
                    fill
                    className="object-cover"
                    priority
                />
                </motion.div>

            </div>
        </section>
    )
}