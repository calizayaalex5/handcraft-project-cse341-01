"use client"
import { useEffect, useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import UsersTable from "./components/UsersTable"
import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext"

type User = {
    id: string
    name: string
    email: string
    role: string
    _count: { orders: number }
}

export default function AdminUsersPage() {
    const { user } = useAuth()
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) return
        fetch("/api/users", {
        headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
            setLoading(false)
        })
    }, [user])

  return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-stone-800">Usuarios</h1>
                    <p className="text-stone-400 text-sm mt-1">Gestiona los usuarios de la plataforma</p>
                </div>
                <Link href="/admin" className="text-sm text-stone-500 hover:text-stone-800 transition">
                    ← Volver al dashboard
                </Link>
                </div>

                {loading ? (
                <p className="text-stone-400">Cargando usuarios...</p>
                ) : (
                <UsersTable initialUsers={users} />
                )}
            </section>
            <Footer />
        </main>
    )
}