"use client"
import Link from "next/link"
import { ShoppingCart, User, LogOut, Search } from "lucide-react"
import { useAuth } from "@/app/context/AuthContext"
import { useState } from "react"
import { useRouter } from "next/navigation"

const categories = [
    { label: "Joyería",           href: "/products/category/joyeria" },
    { label: "Decoración Hogar",  href: "/products/category/decoracion" },
    { label: "Ropa",              href: "/products/category/ropa" },
    { label: "Nuevos Productos",  href: "/products/category/nuevos" },
]

export default function Navbar() {
    const { user, logout } = useAuth()
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = () => {
        if (!query.trim()) return
        router.push(`/search?q=${encodeURIComponent(query)}`)
        setQuery("")
    }

    return (
        <header className="bg-white border-b border-stone-200 sticky top-0 z-50">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/about" className="text-sm text-stone-500 hover:text-stone-800 transition">
                    About Us
                </Link>

                <Link href="/" className="text-2xl font-bold tracking-widest text-stone-800 uppercase">
                    Handcraft Haven
                </Link>

                <div className="flex items-center gap-5 text-stone-600">

                <div className="flex items-center gap-2 border border-stone-200 rounded-full px-3 py-1.5 bg-stone-50">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        placeholder="Buscar..."
                        className="outline-none text-xs text-stone-700 bg-transparent w-28"
                    />
                        <button onClick={handleSearch}>
                        <Search size={14} className="text-stone-400 hover:text-stone-700 transition" />
                    </button>
                </div>

                {user ? (
                    <>
                    <Link href="/profile" className="flex items-center gap-2 text-sm hover:text-stone-900 transition">
                        <User size={16} />
                        {user.name.split(" ")[0]}
                    </Link>
                    {user.role === "ADMIN" && (
                        <Link href="/admin" className="text-sm text-purple-600 hover:text-purple-800 transition font-medium">
                        Admin
                        </Link>
                    )}
                    {user.role === "SELLER" && (
                        <Link href="/seller" className="text-sm text-blue-600 hover:text-blue-800 transition font-medium">
                            Mi Tienda
                        </Link>
                    )}
                    <button
                        onClick={logout}
                        className="flex items-center gap-1 text-sm text-red-400 hover:text-red-600 transition"
                    >
                        <LogOut size={16} />
                    </button>
                    </>
                ) : (
                    <>
                    <Link href="/login" className="text-sm hover:text-stone-900 transition">Login</Link>
                    <Link href="/register" className="text-sm hover:text-stone-900 transition">Register</Link>
                    </>
                )}

                <Link href="/cart" className="hover:text-stone-900 transition">
                    <ShoppingCart size={20} />
                </Link>
                </div>
            </div>

            <nav className="border-t border-stone-100">
                <ul className="max-w-7xl mx-auto flex justify-center gap-10 px-6 py-3">
                {categories.map((cat) => (
                    <li key={cat.href}>
                    <Link
                        href={cat.href}
                        className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-4 transition"
                    >
                        {cat.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>

        </header>
    )
}