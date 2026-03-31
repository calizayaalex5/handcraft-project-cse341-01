import Link from "next/link"

const products = [
    { id: 1, name: "Collar Artesanal",  price: "$24.99", category: "Joyería" },
    { id: 2, name: "Jarrón de Barro",   price: "$39.99", category: "Decoracion" },
    { id: 3, name: "Bolso Tejido",      price: "$54.99", category: "Ropa" },
    { id: 4, name: "Aretes de Plata",   price: "$18.99", category: "Joyería" },
]

export default function FeaturedProducts() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                
                <h2 className="text-center text-2xl font-bold text-stone-800 tracking-wider uppercase mb-10">
                    Nuevos Productos
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="group bg-stone-50 rounded-2xl p-4 hover:shadow-lg transition cursor-pointer"
                        >
                            <div className="w-full h-48 bg-stone-200 rounded-xl mb-4 group-hover:bg-stone-300 transition" />

                            <p className="text-xs text-stone-400 mb-1">{product.category}</p>
                            <p className="text-sm font-semibold text-stone-800">{product.name}</p>
                            <p className="text-sm text-stone-500 mt-1">{product.price}</p>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/products"
                        className="border boder-stone-300 text-stone-700 text-sm px-8 py-3 rounded-full hover:bg-stone-800 hover:text-white transition"
                    >
                        Ver más productos
                    </Link>
                </div>
                
            </div>
        </section>
    )
}