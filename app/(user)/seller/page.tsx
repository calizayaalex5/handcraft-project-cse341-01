"use client"
import { useEffect, useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import SellerStats from "./components/SellerStats"
import SellerProducts from "./components/SellerProducts"
import SellerProductModal from "./components/SellerProductModal"
import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext"
import { User, Mail } from "lucide-react"
import Image from "next/image"

type Product = {
  id: string
    name: string
    description: string
    price: number
    stock: number
    categoryId: string
    image?: string
    category: { name: string }
}

export default function SellerPage() {
    const { user } = useAuth()
    const [products, setProducts] = useState<Product[]>([])
    const [showModal, setShowModal] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) return
        fetch(`/api/seller/products?sellerId=${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            setLoading(false)
        })
    }, [user])

    const handleSave = (product: Product) => {
        setProducts((prev) => {
        const exists = prev.find((p) => p.id === product.id)
        if (exists) return prev.map((p) => p.id === product.id ? product : p)
        return [product, ...prev]
        })
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Eliminar este producto?")) return
        await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user!.token}` },
        })
        setProducts(products.filter((p) => p.id !== id))
    }

    const stats = {
        totalProducts: products.length,
        totalSales: 0,
        totalRevenue: 0,
        avgRating: 0,
    }

    if (!user || user.role !== "SELLER") {
        return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="max-w-6xl mx-auto px-6 py-32 text-center">
            <p className="text-stone-500 mb-4">Esta página es solo para vendedores.</p>
            <Link href="/profile" className="text-stone-800 underline text-sm">
                Volver al perfil
            </Link>
            </section>
            <Footer />
        </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-stone-800">Panel de Vendedor</h1>
                    <p className="text-stone-400 text-sm mt-1">Gestiona tus productos y ventas</p>
                </div>
                <Link href="/profile" className="text-sm text-stone-500 hover:text-stone-800 transition">
                    ← Volver al perfil
                </Link>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 flex items-center gap-5">
                <div className="relative w-16 h-16 bg-stone-200 rounded-full overflow-hidden flex-shrink-0">
                    {user.image ? (
                        <Image
                        src={user.image}
                        alt={user.name}
                        fill
                        className="object-cover"
                        />
                    ) : (
                        <User size={28} className="text-stone-400" />
                    )}
                </div>
                <div>
                    <h2 className="text-xl font-bold text-stone-800">{user.name}</h2>
                    <div className="flex items-center gap-2 text-sm text-stone-400 mt-1">
                    <Mail size={14} />
                    <span>{user.email}</span>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full mt-2 inline-block">
                    Vendedor
                    </span>
                </div>
                </div>

                {/* Stats */}
                <SellerStats stats={stats} />

                {/* Productos */}
                {loading ? (
                <p className="text-stone-400">Cargando productos...</p>
                ) : (
                <SellerProducts
                    products={products}
                    onAdd={() => { setEditingProduct(null); setShowModal(true) }}
                    onEdit={(p) => { setEditingProduct(p); setShowModal(true) }}
                    onDelete={handleDelete}
                />
                )}
            </section>

            {showModal && (
                <SellerProductModal
                onClose={() => { setShowModal(false); setEditingProduct(null) }}
                onSave={handleSave}
                product={editingProduct}
                />
            )}

            <Footer />
        </main>
    )
}