"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PromoBanner() {
    return (
        <section className="px-6 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-stone-800 rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
            >
            <div className="text-center md:text-left">
                <p className="text-stone-400 text-sm uppercase tracking-widest mb-2">Oferta especial</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Descubre artesanías únicas
                </h2>
                <p className="text-stone-400 text-sm max-w-md">
                Cada producto cuenta una historia. Apoya a artesanos locales y lleva a casa algo verdaderamente especial.
                </p>
            </div>
            <Link
                href="/products"
                className="flex-shrink-0 bg-white text-stone-800 text-sm font-bold px-8 py-4 rounded-full hover:bg-stone-100 transition"
            >
                Ver productos →
            </Link>
            </motion.div>
        </div>
        </section>
    )
}