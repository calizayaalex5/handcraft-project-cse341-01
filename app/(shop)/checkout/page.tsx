import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import CheckoutForm from "./components/CheckoutForm"
import OrderSummary from "./components/OrderSummary"

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
        <Navbar />

        <section className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-stone-800 mb-10">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
                <CheckoutForm />
            </div>
            <div className="w-full lg:w-80">
                <OrderSummary />
            </div>
            </div>
        </section>

        <Footer />
        </main>
    )
}