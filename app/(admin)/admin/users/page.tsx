import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import UsersTable from "./components/UsersTable"
import Link from "next/link"

export default function AdminUsersPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-7xl mx-auto px-6 py-16">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-800">Usuarios</h1>
                        <p className="text-stone-400 text-sm mt-1">Gestiona los usuarios de la plataforma</p>
                    </div>
                    <Link
                        href="/admin"
                        className="text-sm text-stone-500 hover:text-stone-800 transition"
                    >
                        ← Volver al dashboard
                    </Link>
                </div>

                <UsersTable />

            </section>

            <Footer />
        </main>
    )
}