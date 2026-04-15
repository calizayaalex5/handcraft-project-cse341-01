import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-lg mx-auto px-6 py-32 text-center">
                <h1 className="text-9xl font-bold text-stone-200">404</h1>
                <h2 className="text-2xl font-bold text-stone-800 mt-4 mb-3">
                    Página no encontrada
                </h2>
                <p className="text-stone-400 text-sm mb-8">
                    Lo sentimos, la página que buscas no existe o fue movida.
                </p>

                <div className="flex flex-col gap-3 items-center">
                    <Link
                        href="/"
                        className="bg-stone-800 text-white text-sm px-8 py-3 rounded-full hover:bg-stone-700 transition"
                    >
                        Volver al inicio
                    </Link>
                    <Link
                        href="/products"
                        className="text-sm text-stone-500 hover:text-stone-800 transition"
                    >
                        Ver productos
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}