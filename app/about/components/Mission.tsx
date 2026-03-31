export default function Mission() {
    return (
        <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-72 bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-sm">
                Imagen misión
            </div>
            
            <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-4">Nuestra Misión</h2>
                <p className="text-stone-500 leading-relaxed text-sm">
                    En Handcraft Haven, creemos que cada pieza artesanal cuenta una historia.
                    Nuestra misión es revolucionar la manera en que los productos hechos a mano
                    son descubiertos, apreciados y adquiridos, fomentando una comunidad de
                    creadores apasionados y consumidores conscientes.
                </p>
            </div>
        </div>
        </section>
    )
}