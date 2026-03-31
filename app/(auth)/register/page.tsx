import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import RegisterForm from "./components/RegisterForm"

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <section className="flex items-center justify-center py-24 px-6">
                <RegisterForm />
            </section>
            <Footer />
        </main>
    )
}