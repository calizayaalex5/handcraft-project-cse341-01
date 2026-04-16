"use client"
import { useEffect, useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import StatsCards from "./components/StatsCards"
import RecentOrders from "./components/RecentOrders"
import TopProducts from "./components/TopProducts"
import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext"

export default function AdminPage() {
    const { user } = useAuth()
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) return
        fetch("/api/admin/stats", {
            headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((res) => res.json())
            .then((d) => {
                setData(d)
                setLoading(false)
        })
    }, [user])

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
                        <Link href="/admin/products" className="text-sm border border-stone-200 text-stone-700 px-5 py-2 rounded-full hover:bg-stone-800 hover:text-white transition">
                            Productos
                        </Link>
                        <Link href="/admin/users" className="text-sm border border-stone-200 text-stone-700 px-5 py-2 rounded-full hover:bg-stone-800 hover:text-white transition">
                            Usuarios
                        </Link>
                    </div>
                </div>

                {loading ? (
                    <div className="animate-pulse">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {[1,2,3,4].map((i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm h-32" >
                                    <div className="h-3 bg-stone-200 rounded w-1/2 mb-4" />
                                    <div className="h-8 bg-stone-200 rounded w-3/4" />
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm h-64">
                                <div className="h-4 bg-stone-200 rounded w-1/4 mb-6" />
                                {[1,2,3,4,5].map((i) => (
                                    <div key={i} className="h-3 bg-stone-200 rounded mb-4" />
                                ))}
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-sm h-64">
                                <div className="h-4 bg-stone-200 rounded w-1/2 mb-6" />
                                {[1,2,3,4].map((i) => (
                                    <div key={i} className="h-3 bg-stone-200 rounded mb-4" />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                <>
                    <StatsCards stats={data.stats} />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        <div className="lg:col-span-2">
                            <RecentOrders orders={data.recentOrders} />
                        </div>
                        <div>
                            <TopProducts products={data.topProducts} />
                        </div>
                    </div>
                </>
                )}
            </section>
            <Footer />
        </main>
    )
}