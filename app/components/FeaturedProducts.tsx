const products = [
    { id: 1, name: "Collar Artesanal",  price: "$24.99" },
    { id: 2, name: "Jarrón de Barro",   price: "$39.99" },
    { id: 3, name: "Bolso Tejido",      price: "$54.99" },
    { id: 4, name: "Aretes de Plata",   price: "$18.99" },
]

export default function FeaturedProducts() {
    return (
        <section className="px-8 py-16">
            <h2 className="text-center text-xl font-semibold text-stone-700 mb-8 tracking-wider uppercase">
                Nueva Temporada
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition cursor-pointer"
                    >
                        <div className="w-full h-48 bg-stone-100 rounded-xl mb-3" />

                        <p className="text-sm font-medium text-stone-800">{product.name}</p>
                        <p className="text-sm text-stone-500">{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}