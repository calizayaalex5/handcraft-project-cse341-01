"use client"
import Link from "next/link"
import { ShoppingCart, User, LogOut, Search } from "lucide-react"
import { useAuth } from "@/app/context/AuthContext"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCartCount } from "@/app/hooks/useCartCount"
import Image from "next/image"

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
    const cartCount = useCartCount()

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
                    <button onClick={handleSearch} aria-label="Buscar">
                        <Search size={14} className="text-stone-400 hover:text-stone-700 transition" />
                    </button>
                </div>

                {user ? (
                    <>
                        <Link href="/profile" className="flex items-center gap-2 text-sm hover:text-stone-900 transition">

                        <div className="relative w-8 h-8 bg-stone-200 rounded-full overflow-hidden flex-shrink-0">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="object-cover"
                                />
                                ) : (
                                <div className="w-full h-full flex items-center justify-center bg-stone-800 text-white text-xs font-bold">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        <span>{user.name.split(" ")[0]}</span>
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
                            aria-label="Cerrar sesión"
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

                <Link href="/cart" aria-label="Ver carrito" className="hover:text-stone-900 transition relative">
                    <ShoppingCart size={20} />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                            {cartCount > 9 ? "9+" : cartCount}
                        </span>
                    )}
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