const categories = ["Todos", "Joyería", "Decoración Hogar", "Ropa", "Nuevos"]
const prices = ["Todos", "Menos de $20", "$20 - $50", "$50 - $100", "Más de $100"]

export default function FiltersComponent() {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0">
        <div className="bg-white rounded-2xl p-6 shadow-sm">

            {/* Categorías */}
            <div className="mb-6">
            <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-3">
                Categoría
            </h3>
            <ul className="flex flex-col gap-2">
                {categories.map((cat) => (
                <li key={cat}>
                    <button className="text-sm text-stone-500 hover:text-stone-900 hover:font-medium transition w-full text-left">
                    {cat}
                    </button>
                </li>
                ))}
            </ul>
            </div>

            {/* Precio */}
            <div>
            <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-3">
                Precio
            </h3>
            <ul className="flex flex-col gap-2">
                {prices.map((price) => (
                <li key={price}>
                    <button className="text-sm text-stone-500 hover:text-stone-900 hover:font-medium transition w-full text-left">
                    {price}
                    </button>
                </li>
                ))}
            </ul>
            </div>

        </div>
        </aside>
    )
}