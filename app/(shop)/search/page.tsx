import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"

export default function SearchPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <h1 className="text-3xl font-bold text-stone-800 text-center mb-8">
                    Buscar productos
                </h1>

                <SearchBar />

                <SearchResults />

            </section>

            <Footer />
        </main>
    )
}