import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutHero from "./components/AboutHero"
import Mission from "./components/Mission"
import Values from "./components/Values"
import Team from "./components/Team"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "Conoce la misión y el equipo detrás de Handcraft Haven.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />
            <AboutHero />
            <Mission />
            <Values />
            <Team />
            <Footer />
        </main>
    )
}