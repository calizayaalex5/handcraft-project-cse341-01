import Link from "next/link"
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white px-6 pt-16 pb-8">
            <div className="max-w-7xl mx-auto">


                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                <div className="md:col-span-1">
                    <h2 className="text-xl font-bold tracking-widest uppercase mb-3">
                    Handcraft Haven
                    </h2>
                    <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    Conectando artesanos talentosos con personas que aprecian la belleza de lo hecho a mano.
                    </p>
                    <div className="flex gap-4">
                    <a href="#" aria-label="Instagram" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition">
                        <FaInstagram size={14} />
                    </a>
                    <a href="#" aria-label="Twitter" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition">
                        <FaTwitter size={14} />
                    </a>
                    <a href="#" aria-label="Facebook" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition">
                        <FaFacebook size={14} />
                    </a>
                    <a href="#" aria-label="Youtube" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition">
                        <FaYoutube size={14} />
                    </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">Explorar</h3>
                    <ul className="flex flex-col gap-3">
                    {[
                        { label: "Todos los productos", href: "/products" },
                        { label: "Joyería",             href: "/products/category/joyeria" },
                        { label: "Decoración Hogar",    href: "/products/category/decoracion" },
                        { label: "Ropa",                href: "/products/category/ropa" },
                        { label: "Nuevos productos",    href: "/products/category/nuevos" },
                    ].map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="text-stone-400 text-sm hover:text-white transition">
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">Mi Cuenta</h3>
                    <ul className="flex flex-col gap-3">
                    {[
                        { label: "Iniciar sesión", href: "/login" },
                        { label: "Registrarse",   href: "/register" },
                        { label: "Mi perfil",     href: "/profile" },
                        { label: "Mis pedidos",   href: "/profile/orders" },
                        { label: "Mi wishlist",   href: "/profile/wishlist" },
                    ].map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="text-stone-400 text-sm hover:text-white transition">
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">Vendedores</h3>
                    <ul className="flex flex-col gap-3">
                    {[
                        { label: "Conviértete en vendedor", href: "/register" },
                        { label: "Panel de vendedor",       href: "/seller" },
                        { label: "Sobre nosotros",          href: "/about" },
                    ].map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="text-stone-400 text-sm hover:text-white transition">
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>

                    <div className="mt-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-white">Newsletter</h3>
                    <div className="flex gap-2">
                        <input
                        type="email"
                        placeholder="tu@email.com"
                        className="flex-1 bg-white/10 text-white text-xs px-3 py-2 rounded-full outline-none placeholder:text-stone-500 focus:bg-white/20 transition"
                        />
                        <button className="bg-terracotta text-white text-xs px-4 py-2 rounded-full hover:opacity-90 transition">
                        OK
                        </button>
                    </div>
                    </div>
                </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-stone-500 text-xs">
                    © 2026 Handcraft Haven. Todos los derechos reservados.
                </p>
                <div className="flex gap-6">
                    <Link href="/about" className="text-stone-500 text-xs hover:text-white transition">
                    Sobre nosotros
                    </Link>
                    <a href="#" className="text-stone-500 text-xs hover:text-white transition">
                    Privacidad
                    </a>
                    <a href="#" className="text-stone-500 text-xs hover:text-white transition">
                    Términos
                    </a>
                </div>
                </div>

            </div>
        </footer>
    )
}