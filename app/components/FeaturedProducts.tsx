import Link from "next/link"
import Image from "next/image"
import { getProducts } from "@/lib/controllers/product.controller"

export default async function FeaturedProducts() {
    const products = await getProducts()
    const featured = products.slice(0, 4)

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl font-bold text-stone-800 tracking-wider uppercase mb-10">
                    Nuevos Productos
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {featured.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="group bg-stone-50 rounded-2xl p-4 hover:shadow-lg transition cursor-pointer"
                        >
                            <div className="relative w-full h-48 rounded-xl mb-4 overflow-hidden bg-stone-200">
                                {product.image ? (
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition"
                                />
                                ) : (
                                    <div className="w-full h-full bg-stone-200 group-hover:bg-stone-300 transition" />
                                )}
                            </div>
                            <p className="text-xs text-stone-400 mb-1">{product.category.name}</p>
                            <p className="text-sm font-semibold text-stone-800">{product.name}</p>
                            <p className="text-sm text-stone-500 mt-1">${product.price.toFixed(2)}</p>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        href="/products"
                        className="border border-stone-300 text-stone-700 text-sm px-8 py-3 rounded-full hover:bg-stone-800 hover:text-white transition"
                    >
                        Ver más productos
                    </Link>
                </div>
            </div>
        </section>
    )
}