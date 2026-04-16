"use client"
import Link from "next/link"
import { Store, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
    { icon: Store,      title: "Tu propia tienda",     description: "Crea tu perfil y lista tus productos fácilmente." },
    { icon: TrendingUp, title: "Aumenta tus ventas",   description: "Llega a miles de compradores que aman lo artesanal." },
    { icon: Users,      title: "Comunidad activa",     description: "Únete a una comunidad de artesanos apasionados." },
]

export default function BecomeSellerSection() {
    return (
        <section className="py-20 px-6 bg-cream">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-terracotta text-sm uppercase tracking-widest mb-3 font-medium">Para artesanos</p>
                    <h2 className="text-3xl font-bold text-charcoal mb-4">
                    ¿Eres artesano? <br />Únete a nuestra comunidad
                    </h2>
                    <p className="text-gray-soft text-sm leading-relaxed mb-8">
                    Handcraft Haven es el lugar perfecto para mostrar tu talento al mundo.
                    Crea tu tienda, lista tus productos y conecta con compradores que valoran
                    el trabajo hecho a mano.
                    </p>
                    <Link
                    href="/register"
                    className="inline-block bg-terracotta text-white text-sm px-8 py-3 rounded-full hover:opacity-90 transition"
                    >
                    Empieza a vender
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 bg-white-soft rounded-2xl p-5 shadow-sm border border-stone-100"
                    >
                        <div className="w-10 h-10 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon size={20} className="text-sage" />
                        </div>
                        <div>
                        <p className="text-sm font-bold text-charcoal mb-1">{benefit.title}</p>
                        <p className="text-xs text-gray-soft leading-relaxed">{benefit.description}</p>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>

                </div>
            </div>
        </section>
    )
}