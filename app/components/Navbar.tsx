import Link from "next/link"
import { ShoppingCart, User, Search } from "lucide-react"

const categories = [
  { label: "Joyería",            href: "/category/joyeria" },
  { label: "Decoración Hogar",   href: "/category/decoracion" },
  { label: "Ropa",               href: "/category/ropa" },
  { label: "Nuevos Productos",   href: "/category/nuevos" },
]

export default function Navbar() {
    return (
        <header className="border-b border-stone-200 bg-white">
            <div className="flex items-center justify between pc-8 py-3">
                <Link href="/about" className="text-sm text-stone-500 hover:text-stone-800">
                    About Us
                </Link>

                <Link href="/" className="text-2xl font-bold tracking-widest text-stone-800">
                    HANDCRAFT HAVEN
                </Link>

                <div className="flex items-center gap-4 text-stone-600">
                    <Link href="/login" className="text-sm hover:text-stone-900">Login</Link>
                    <Link href="/register" className="text-sm hover:text-stone-900">Register</Link>
                    <Link href="/cart">
                        <ShoppingCart size={20} />
                    </Link>
                </div>
            </div>

            <nav className="flex justify-center gap-10 px-8 py-2 border-t border-stone-100">
                {categories.map((cat) => (
                    <Link
                        key={cat.href}
                        href={cat.href}
                        className="text-sm text-stone-600 hover:text-stone-900 hover-underline underline-offset-4"
                    >
                        {cat.label}
                    </Link>
                ))}
            </nav>
        </header> 
    )
}