import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutHero from "./components/AboutHero"
import Mission from "./components/Mission"
import Values from "./components/Values"
import Team from "./components/Team"

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