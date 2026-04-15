import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import LoginForm from "./components/LoginForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Iniciar Sesión",
    description: "Inicia sesión en tu cuenta de Handcraft Haven.",
}

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="flex items-center justify-center py-24 px-6">
                <LoginForm />
            </section>
            <Footer />
        </main>
    )
}