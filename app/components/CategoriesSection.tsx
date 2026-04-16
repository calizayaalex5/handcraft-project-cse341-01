"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
    { name: "Joyería",          slug: "joyeria",    image: "/images/products/collar.jpg" },
    { name: "Decoración Hogar", slug: "decoracion", image: "/images/products/jarron.jpg" },
    { name: "Ropa",             slug: "ropa",       image: "/images/products/vestido.jpg" },
    { name: "Nuevos",           slug: "nuevos",     image: "/images/products/bolso.jpg" },
]

export default function CategoriesSection() {
    return (
        <section className="py-16 px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-2xl font-bold text-stone-800 tracking-wider uppercase mb-10"
                >
                    Explorar Categorías
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={`/products/category/${cat.slug}`}
                                className="group relative block w-full h-48 rounded-2xl overflow-hidden shadow-sm"
                            >
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white font-bold text-lg tracking-widest uppercase">
                                    {cat.name}
                                </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}