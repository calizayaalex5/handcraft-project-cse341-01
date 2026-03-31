import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import LoginForm from "./components/LoginForm"

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