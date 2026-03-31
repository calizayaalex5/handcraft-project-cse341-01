import Link from "next/link"
import { CheckCircle } from "lucide-react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function OrderConfirmationPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
        <Navbar />

        <section className="max-w-lg mx-auto px-6 py-32 text-center">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />

            <h1 className="text-3xl font-bold text-stone-800 mb-3">
            ¡Pedido confirmado!
            </h1>
            <p className="text-stone-500 text-sm mb-8">
            Gracias por tu compra. Recibirás un email con los detalles de tu pedido.
            </p>

            <div className="flex flex-col gap-3">
            <Link
                href="/profile/orders"
                className="bg-stone-800 text-white text-sm px-6 py-3 rounded-full hover:bg-stone-700 transition"
            >
                Ver mis pedidos
            </Link>
            <Link
                href="/products"
                className="text-sm text-stone-500 hover:text-stone-800 transition"
            >
                Seguir comprando
            </Link>
            </div>
        </section>

        <Footer />
        </main>
    )
}