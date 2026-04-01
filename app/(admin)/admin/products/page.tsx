"use client"

import { useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ProductsTable from "./components/ProductsTable"
import AddProductModal from "./components/AddProductModal"
import Link from "next/link"

export default function AdminProductsPage() {
    const [showModal, setShowModal] = useState(false)

    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-800">Productos</h1>
                        <p className="text-stone-400 text-sm mt-1">Gestiona tu catálogo de productos</p>
                    </div>
                    <Link
                        href="/admin"
                        className="text-sm text-stone-500 hover:text-stone-800 transition"
                    >
                        ← Volver al dashboard
                    </Link>
                </div>

                <ProductsTable onAdd={() => setShowModal(true)} />

            </section>

            {showModal && <AddProductModal onClose={() => setShowModal(false)} />}

            <Footer />
        </main>
    )
}