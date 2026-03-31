import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import CartItem from "./components/CartItems"
import CartSummary from "./components/CartSummary"

export default function CartPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
        <Navbar />

        <section className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-stone-800 mb-10">Tu Carrito</h1>

            <div className="flex flex-col lg:flex-row gap-12">

            {/* Items — lado izquierdo */}
            <div className="flex-1">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>

            {/* Resumen — lado derecho */}
            <div className="w-full lg:w-80">
                <CartSummary />
            </div>

            </div>
        </section>

        <Footer />
        </main>
    )
}