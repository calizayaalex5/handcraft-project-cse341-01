export default function ProductImages() {
    return (
        <div className="flex flex-col gap-4">

            <div className="w-full h-96 bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-sm">
                Imagen Principal
            </div>

            <div className="flex gap-3">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="w-20 h-20 bg-stone-100 rounded-xl cursor-pointer hover:ring-2 hover:ring-stone-400 transition"
                    />
                ))}
            </div>
        </div>
    )
}