"use client"
import { useEffect, useState } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext"
import { Heart } from "lucide-react"
import WishlistItemComponent from "./components/WishListItem"
import { ProductGridSkeleton } from "@/app/components/Skeleton"

type WishlistItem = {
  id: string
  product: {
    id: string
    name: string
    price: number
    image?: string | null
    category: { name: string }
  }
}

export default function WishlistPage() {
  const { user } = useAuth()
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    fetch(`/api/wishlist?userId=${user.id}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data)
        setLoading(false)
      })
  }, [user])

  const handleRemove = async (id: string) => {
    await fetch(`/api/wishlist/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user!.token}` },
    })
    setWishlist(wishlist.filter((item) => item.id !== id))
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#fdf8f3]">
        <Navbar />
        <section className="max-w-6xl mx-auto px-6 py-32 text-center">
          <p className="text-stone-500">Debes iniciar sesión para ver tu wishlist.</p>
          <Link href="/login" className="text-stone-800 underline text-sm mt-2 inline-block">
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
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold text-stone-800">Mi Wishlist</h1>
                    <Link href="/profile" className="text-sm text-stone-500 hover:text-stone-800 transition">
                        ← Volver al perfil
                    </Link>
                </div>

                {loading ? (
                    <ProductGridSkeleton />
                ) : wishlist.length === 0 ? (
                    <div className="text-center py-24">
                        <Heart size={48} className="text-stone-200 mx-auto mb-4" />
                        <p className="text-stone-400">No tienes productos en tu wishlist.</p>
                        <Link href="/products" className="text-stone-800 underline text-sm mt-2 inline-block">
                        Ver productos
                        </Link>
                    </div>
                ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishlist.map((item) => (
                    <WishlistItemComponent
                        key={item.id}
                        item={{
                            id: item.product.id,
                            name: item.product.name,
                            price: item.product.price,
                            image: item.product.image,
                            category: item.product.category,
                        }}
                        onRemove={() => handleRemove(item.id)}
                    />
                    ))}
                </div>
                )}
            </section>

            <Footer />
        </main>
    )
}