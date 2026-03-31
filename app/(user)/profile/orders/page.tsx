import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import OrderCard from "./components/OrderCard"
import Link from "next/link"

const orders = [
    {
        id: "001",
        date: "Mar 2026",
        total: "$24.99",
        status: "Entregado",
        items: [{ name: "Collar Artesanal", price: "$24.99", qty: 1 }],
    },
    {
        id: "002",
        date: "Feb 2026",
        total: "$104.97",
        status: "En camino",
        items: [
        { name: "Jarrón de Barro",  price: "$39.99", qty: 2 },
        { name: "Bolso Tejido",     price: "$54.99", qty: 1 },
        ],
    },
    {
        id: "003",
        date: "Ene 2026",
        total: "$39.99",
        status: "Entregado",
        items: [{ name: "Jarrón de Barro", price: "$39.99", qty: 1 }],
    },
]

export default function OrdersPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-4xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold text-stone-800">Mis Pedidos</h1>
                    <Link
                        href="/profile"
                        className="text-sm text-stone-500 hover:text-stone-800 transition"
                    >
                        ← Volver al perfil
                    </Link>
                </div>

                <div className="flex flex-col gap-6">
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}