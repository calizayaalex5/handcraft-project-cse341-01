const values = [
    {
        icon: "🤝",
        title: "Comunidad",
        description: "Fomentamos una comunidad de artesanos y consumidores que comparten el amor por lo hecho a mano.",
    },
    {
        icon: "🌱",
        title: "Sostenibilidad",
        description: "Promovemos el consumo consciente y sostenible, apoyando a artesanos locales.",
    },
    {
        icon: "✨",
        title: "Autenticidad",
        description: "Cada producto en nuestra plataforma es único, hecho con dedicación y amor por el arte.",
    },
    ]

    export default function Values() {
    return (
        <section className="bg-stone-50 py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">
                    Nuestros Valores
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value) => (
                        <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className="text-lg font-semibold text-stone-800 mb-2">{value.title}</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}