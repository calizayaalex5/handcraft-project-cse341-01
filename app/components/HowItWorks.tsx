"use client"
import { Search, ShoppingBag, Heart } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        icon: Search,
        title: "Explora",
        description: "Navega por miles de productos artesanales únicos hechos a mano por artesanos talentosos.",
        step: "01",
        bg: "rgba(197, 106, 61, 0.1)",
        color: "#C56A3D"
    },
    {
        icon: Heart,
        title: "Elige",
        description: "Encuentra el producto perfecto, agrégalo a tu wishlist o directamente al carrito.",
        step: "02",
        bg: "rgba(122, 158, 126, 0.1)",
        color: "#7A9E7E"
    },
    {
        icon: ShoppingBag,
        title: "Recibe",
        description: "Completa tu compra de forma segura y recibe tu artesanía única en la puerta de tu casa.",
        step: "03",
        bg: "rgba(227, 168, 87, 0.1)",
        color: "#E3A857"
    },
]

export default function HowItWorks() {
    return (
        <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
            >
            <h2 className="text-2xl font-bold text-charcoal tracking-wider uppercase mb-3">
                Cómo Funciona
            </h2>
            <p className="text-gray-soft text-sm max-w-md mx-auto">
                Comprar artesanías únicas nunca fue tan fácil. Sigue estos simples pasos.
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
                <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-4"
                >
                <div className="relative">
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: step.bg, color: step.color }}
                    >
                        <step.icon size={28} />
                    </div>
                    <span className="absolute -top-3 -right-3 text-xs font-bold text-stone-300">
                    {step.step}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-charcoal">{step.title}</h3>
                <p className="text-sm text-gray-soft leading-relaxed">{step.description}</p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    )
}