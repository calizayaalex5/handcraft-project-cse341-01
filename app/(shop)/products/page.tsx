import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Filters from "./components/Filters"
import ProductGrid from "./components/ProductGrid"
import { Search } from "lucide-react"

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
                <h1 className="text-3xl font-bold text-stone-800">Productos</h1>

                <div className="flex items-center gap-2 border border-stone-300 rounded-full px-4 py-2 bg-white w-full md:w-72">
                    <Search size={16} className="text-stone-400" />
                    <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="flex-1 outline-none text-sm text-stone-700 bg-transparent"
                    />
                </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                <Filters />
                <div className="flex-1">
                    <ProductGrid />
                </div>
                </div>

            </section>

            <Footer />
        </main>
    )
}