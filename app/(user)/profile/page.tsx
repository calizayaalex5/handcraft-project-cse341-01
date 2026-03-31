import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ProfileInfo from "./components/ProfileInfo"
import OrdersList from "./components/OrdersList"
import WishlistGrid from "./components/WishlistGrid"

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-[#fdf8f3]">
            <Navbar />

            <section className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-bold text-stone-800 mb-10">Mi Perfil</h1>

                <div className="flex flex-col lg:flex-row gap-8">

                {/* Lado izquierdo — Info */}
                <div className="w-full lg:w-72">
                    <ProfileInfo />
                </div>

                {/* Lado derecho — Pedidos + Wishlist */}
                <div className="flex-1 flex flex-col gap-8">
                    <OrdersList />
                    <WishlistGrid />
                </div>

                </div>
            </section>

            <Footer />
        </main>
    )
}