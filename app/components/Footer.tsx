import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-stone-800 text-stone-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h3 className="text-white font-bold tracking-widest uppercase mb-4">
                        Handcraft Haven
                    </h3>
                    <p className="text-sm text-stone-400">
                        Conectando artesanos con personas que aprecian lo único y hecho a mano.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Categorías</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/products/category/joyeria" className="hover:text-white transition">Joyería</Link></li>
                        <li><Link href="/products/category/decoracion" className="hover:text-white transition">Decoración Hogar</Link></li>
                        <li><Link href="/products/category/ropa" className="hover:text-white transition">Ropa</Link></li>
                        <li><Link href="/products/category/nuevos" className="hover:text-white transition">Nuevos Productos</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                        <li><Link href="/login" className="hover:text-white transition">Login</Link></li>
                        <li><Link href="/register" className="hover:text-white transition">Register</Link></li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto border-t border-stone-700 mt-10 pt-6 text-center text-xs text-stone-500">
                © 2026 Handcraft Haven. Todos los derechos reservados.
            </div>
        </footer>
    )
}