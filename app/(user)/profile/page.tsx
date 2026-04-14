"use client"
import { useAuth } from "@/app/context/AuthContext"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ProfileInfo from "./components/ProfileInfo"
import OrdersList from "./components/OrdersList"
import WishlistGrid from "./components/WishlistGrid"
import Link from "next/link"

export default function ProfilePage() {
    const { user } = useAuth()
    
    if (!user) {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="max-w-6xl mx-auto px-6 py-32 text-center">
                <p className="text-stone-500 mb-4">Debes iniciar sesión para ver tu perfil.</p>
                <Link href="/login" className="bg-stone-800 text-white text-sm px-6 py-3 rounded-full hover:bg-stone-700 transition">
                    Iniciar sesión
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
                <h1 className="text-3xl font-bold text-stone-800 mb-10">Mi Perfil</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-72">
                        <ProfileInfo user={user} />
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <OrdersList userId={user.id} token={user.token} />
                        <WishlistGrid userId={user.id} token={user.token} />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}