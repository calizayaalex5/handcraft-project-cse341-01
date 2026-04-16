"use client"
import Link from "next/link"
import { ShoppingCart, LogOut, Search, Menu, X } from "lucide-react"
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
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()
    const cartCount = useCartCount()

    const handleSearch = () => {
        if (!query.trim()) return
        router.push(`/search?q=${encodeURIComponent(query)}`)
        setQuery("")
        setMenuOpen(false)
    }

    return (
        <header className="bg-white border-b border-stone-200 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/about" className="text-sm text-stone-500 hover:text-stone-800 transition hidden md:block">
            About Us
            </Link>

            <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest text-stone-800 uppercase">
            Handcraft Haven
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-5 text-stone-600">
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
                        <Image src={user.image} alt={user.name} fill className="object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-stone-800 text-white text-xs font-bold">
                        {user.name.charAt(0).toUpperCase()}
                        </div>
                    )}
                    </div>
                    <span>{user.name.split(" ")[0]}</span>
                </Link>
                {user.role === "ADMIN" && (
                    <Link href="/admin" className="text-sm text-purple-600 hover:text-purple-800 transition font-medium">Admin</Link>
                )}
                {user.role === "SELLER" && (
                    <Link href="/seller" className="text-sm text-blue-600 hover:text-blue-800 transition font-medium">Mi Tienda</Link>
                )}
                <button onClick={logout} aria-label="Cerrar sesión" className="text-red-400 hover:text-red-600 transition">
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

            {/* Mobile — carrito + hamburguesa */}
            <div className="flex md:hidden items-center gap-4">
            <Link href="/cart" aria-label="Ver carrito" className="relative text-stone-600">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {cartCount > 9 ? "9+" : cartCount}
                </span>
                )}
            </Link>
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
                className="text-stone-600"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
            <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-4">

            <div className="flex items-center gap-2 border border-stone-200 rounded-full px-4 py-2 bg-stone-50">
                <Search size={14} className="text-stone-400" />
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Buscar productos..."
                className="flex-1 outline-none text-sm text-stone-700 bg-transparent"
                />
            </div>

            <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-stone-600 hover:text-stone-900 py-1 border-b border-stone-50"
                >
                    {cat.label}
                </Link>
                ))}
            </div>

            {user ? (
                <div className="flex flex-col gap-3 pt-2 border-t border-stone-100">
                    <Link href="/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-sm text-stone-700">
                        <div className="relative w-8 h-8 bg-stone-200 rounded-full overflow-hidden">
                        {user.image ? (
                            <Image src={user.image} alt={user.name} fill className="object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-stone-800 text-white text-xs font-bold">
                            {user.name.charAt(0).toUpperCase()}
                            </div>
                        )}
                        </div>
                        {user.name}
                    </Link>
                    {user.role === "ADMIN" && (
                        <Link href="/admin" onClick={() => setMenuOpen(false)} className="text-sm text-purple-600">Panel Admin</Link>
                    )}
                    {user.role === "SELLER" && (
                        <Link href="/seller" onClick={() => setMenuOpen(false)} className="text-sm text-blue-600">Mi Tienda</Link>
                    )}
                    <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-stone-500">About Us</Link>
                    <button
                        onClick={() => { logout(); setMenuOpen(false) }}
                        className="text-sm text-red-400 text-left"
                    >
                        Cerrar sesión
                    </button>
                </div>
            ) : (
                <div className="flex flex-col gap-3 pt-2 border-t border-stone-100">
                <Link href="/login" onClick={() => setMenuOpen(false)} className="text-sm text-stone-700">Login</Link>
                <Link href="/register" onClick={() => setMenuOpen(false)} className="text-sm text-stone-700">Register</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-stone-500">About Us</Link>
                </div>
            )}
            </div>
        )}

        <nav className="hidden md:block border-t border-stone-100">
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