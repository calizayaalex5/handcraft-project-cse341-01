"use client"

const categories = ["Todos", "Joyería", "Decoración Hogar", "Ropa", "Nuevos"]
const prices = [
    { label: "Todos", min: 0, max: Infinity },
    { label: "Menos de $20", min: 0, max: 20 },
    { label: "$20 - $50", min: 20, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "Más de $100", min: 100, max: Infinity },
]

export default function FiltersComponent({
    selectedCategory,
    selectedPrice,
    onCategoryChange,
    onPriceChange,
}: {
    selectedCategory: string
    selectedPrice: string
    onCategoryChange: (cat: string) => void
    onPriceChange: (price: string) => void
}) {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm">

                <div className="mb-6">
                <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-3">
                    Categoría
                </h3>
                <ul className="flex flex-col gap-2">
                    {categories.map((cat) => (
                    <li key={cat}>
                        <button
                        onClick={() => onCategoryChange(cat)}
                        className={`text-sm transition w-full text-left px-2 py-1 rounded-lg ${
                            selectedCategory === cat
                            ? "bg-stone-800 text-white font-medium"
                            : "text-stone-500 hover:text-stone-900 hover:bg-stone-50"
                        }`}
                        >
                        {cat}
                        </button>
                    </li>
                    ))}
                </ul>
                </div>

                <div>
                <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-3">
                    Precio
                </h3>
                <ul className="flex flex-col gap-2">
                    {prices.map((price) => (
                    <li key={price.label}>
                        <button
                        onClick={() => onPriceChange(price.label)}
                        className={`text-sm transition w-full text-left px-2 py-1 rounded-lg ${
                            selectedPrice === price.label
                            ? "bg-stone-800 text-white font-medium"
                            : "text-stone-500 hover:text-stone-900 hover:bg-stone-50"
                        }`}
                        >
                        {price.label}
                        </button>
                    </li>
                    ))}
                </ul>
                </div>

            </div>
        </aside>
    )
}