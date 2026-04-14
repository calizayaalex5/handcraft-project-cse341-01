"use client"
import { useState, useEffect } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ProductsTable from "./components/ProductsTable"
import AddProductModal from "./components/AddProductModal"
import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext"

type Product = {
    id: string
    name: string
    description: string
    price: number
    stock: number
    categoryId: string
    category: { name: string }
    image?: string
}

export default function AdminProductsPage() {
    const { user } = useAuth()
    const [products, setProducts] = useState<Product[]>([])
    const [showModal, setShowModal] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)

    useEffect(() => {
        fetch("/api/products")
        .then((res) => res.json())
        .then(setProducts)
    }, [])

    const handleSave = (product: Product) => {
        setProducts((prev) => {
        const exists = prev.find((p) => p.id === product.id)
        if (exists) return prev.map((p) => p.id === product.id ? product : p)
        return [product, ...prev]
        })
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Estás seguro de eliminar este producto?")) return
        await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user!.token}` },
        })
        setProducts(products.filter((p) => p.id !== id))
    }

    const handleEdit = (product: Product) => {
        setEditingProduct(product)
        setShowModal(true)
    }

    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-stone-800">Productos</h1>
                    <p className="text-stone-400 text-sm mt-1">Gestiona tu catálogo de productos</p>
                </div>
                <Link href="/admin" className="text-sm text-stone-500 hover:text-stone-800 transition">
                    ← Volver al dashboard
                </Link>
                </div>

                <ProductsTable
                products={products}
                onAdd={() => { setEditingProduct(null); setShowModal(true) }}
                onEdit={handleEdit}
                onDelete={handleDelete}
                />
            </section>

            {showModal && (
                <AddProductModal
                onClose={() => { setShowModal(false); setEditingProduct(null) }}
                onSave={handleSave}
                product={editingProduct}
                />
            )}

            <Footer />
        </main>
    )
}