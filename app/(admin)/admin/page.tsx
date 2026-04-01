import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import StatsCards from "./components/StatsCards"
import RecentOrders from "./components/RecentOrders"
import TopProducts from "./components/TopProducts"
import Link from "next/link"

export default function AdminPage() {
  return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-800">Dashboard</h1>
                        <p className="text-stone-400 text-sm mt-1">Bienvenido al panel de administración</p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="/admin/products"
                            className="text-sm border border-stone-200 text-stone-700 px-5 py-2 rounded-full hover:bg-stone-800 hover:text-white hover:border-stone-800 transition"
                        >
                            Productos
                        </Link>
                        <Link
                            href="/admin/users"
                            className="text-sm border border-stone-200 text-stone-700 px-5 py-2 rounded-full hover:bg-stone-800 hover:text-white hover:border-stone-800 transition"
                        >
                            Usuarios
                        </Link>
                    </div>
                    </div>

                    <StatsCards />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        <div className="lg:col-span-2">
                            <RecentOrders />
                        </div>
                    <div>
                        <TopProducts />
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    )
}