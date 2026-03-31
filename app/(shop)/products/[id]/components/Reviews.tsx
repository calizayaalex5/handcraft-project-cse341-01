const reviews = [
  { id: 1, user: "María L.", rating: 5, comment: "Hermoso collar, exactamente como en las fotos. Muy buena calidad.", date: "Mar 2026" },
  { id: 2, user: "Carlos R.", rating: 4, comment: "Bonito diseño, llegó bien empacado. Lo recomiendo.", date: "Feb 2026" },
  { id: 3, user: "Sofia M.", rating: 5, comment: "Me encantó, es aún más bonito en persona.", date: "Ene 2026" },
]

export default function Reviews() {
    return (
        <section className="mt-16">
            <h2 className="text-2xl font-bold text-stone-800 mb-8">Reseñas</h2>

            <div className="flex flex-col gap-6 mb-10">
                {reviews.map((review) => (
                <div key={review.id} className="border border-stone-100 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-stone-200 rounded-full" />
                                <p className="text-sm font-semibold text-stone-800">{review.user}</p>
                            </div>
                            <p className="text-xs text-stone-400">{review.date}</p>
                        </div>
                    <div className="text-yellow-400 text-sm mb-2">
                        {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </div>
                    <p className="text-stone-500 text-sm">{review.comment}</p>
                </div>
                ))}
            </div>

            <div className="bg-stone-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">Dejar una reseña</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 text-2xl text-stone-300">
                        {[1,2,3,4,5].map((star) => (
                            <button key={star} className="hover:text-yellow-400 transition">★</button>
                        ))}
                    </div>
                    <textarea
                        placeholder="Escribe tu reseña..."
                        rows={3}
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300 resize-none bg-white"
                    />
                    <button className="self-start bg-stone-800 text-white text-sm px-6 py-3 rounded-full hover:bg-stone-700 transition">
                    Publicar reseña
                    </button>
                </div>
            </div>
        </section>
    )
}