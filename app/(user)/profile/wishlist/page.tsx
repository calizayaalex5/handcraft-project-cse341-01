import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import WishlistItem from "./components/WishListItem"
import Link from "next/link"

const wishlist = [
    { id: 1, name: "Collar Artesanal",    price: "$24.99", category: "Joyería" },
    { id: 2, name: "Jarrón de Barro",     price: "$39.99", category: "Decoración" },
    { id: 3, name: "Bolso Tejido",        price: "$54.99", category: "Ropa" },
    { id: 4, name: "Aretes de Plata",     price: "$18.99", category: "Joyería" },
    { id: 5, name: "Macetero de Cerámica",price: "$44.99", category: "Decoración" },
]

export default function WishlistPage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold text-stone-800">Mi Wishlist</h1>
                    <Link
                        href="/profile"
                        className="text-sm text-stone-500 hover:text-stone-800 transition"
                    >
                        ← Volver al perfil
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishlist.map((item) => (
                        <WishlistItem key={item.id} item={item} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}