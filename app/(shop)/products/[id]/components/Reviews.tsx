"use client"
import { useEffect, useState } from "react"
import { useAuth } from "@/app/context/AuthContext"

type Review = {
    id: string
    rating: number
    comment: string
    createdAt: string
    user: { name: string }
}

export default function Reviews({ productId }: { productId: string }) {
    const { user } = useAuth()
    const [reviews, setReviews] = useState<Review[]>([])
    const [rating, setRating] = useState(5)
    const [comment, setComment] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`/api/reviews?productId=${productId}`)
            .then((res) => res.json())
            .then(setReviews)
    }, [productId])

    const handleSubmit = async () => {
        if (!user) return
        setLoading(true)
        try {
            const res = await fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({ userId: user.id, productId, rating, comment }),
            })
            const newReview = await res.json()
            setReviews([newReview, ...reviews])
            setComment("")
            setRating(5)
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <section className="mt-16">
            <h2 className="text-2xl font-bold text-stone-800 mb-8">Reseñas</h2>

            {/* Lista de reseñas */}
            <div className="flex flex-col gap-6 mb-10">
                {reviews.length === 0 ? (
                <p className="text-stone-400 text-sm">No hay reseñas aún.</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="border border-stone-100 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-stone-200 rounded-full" />
                                    <p className="text-sm font-semibold text-stone-800">{review.user.name}</p>
                                </div>
                                <p className="text-xs text-stone-400">
                                    {new Date(review.createdAt).toLocaleDateString("es-ES", { month: "short", year: "numeric" })}
                                </p>
                            </div>
                            <div className="text-yellow-400 text-sm mb-2">
                                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                            </div>
                            <p className="text-stone-500 text-sm">{review.comment}</p>
                        </div>
                    ))
                )}
            </div>

            {/* Formulario nueva reseña */}
            {user ? (
                <div className="bg-stone-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-stone-800 mb-4">Dejar una reseña</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 text-2xl text-stone-300">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={star <= rating ? "text-yellow-400" : "text-stone-300"}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Escribe tu reseña..."
                            rows={3}
                            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 resize-none bg-white"
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={loading || !comment}
                            className="self-start bg-stone-800 text-white text-sm px-6 py-3 rounded-full hover:bg-stone-700 transition disabled:opacity-50"
                        >
                            {loading ? "Publicando..." : "Publicar reseña"}
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-stone-400 text-sm">
                    <a href="/login" className="text-stone-800 underline">Inicia sesión</a> para dejar una reseña.
                </p>
            )}
        </section>
    )
}