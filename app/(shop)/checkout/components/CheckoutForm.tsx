export default function CheckoutForm() {
    return (
        <div className="flex flex-col gap-8">

            {/* Información de contacto */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-stone-800 mb-5">Información de contacto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Nombre</label>
                        <input
                            type="text"
                            placeholder="Juan"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Apellido</label>
                        <input
                            type="text"
                            placeholder="Pérez"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                    <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Email</label>
                        <input
                            type="email"
                            placeholder="juan@email.com"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-stone-800 mb-5">Dirección de envío</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Dirección</label>
                        <input
                            type="text"
                            placeholder="Calle 123"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Ciudad</label>
                        <input
                            type="text"
                            placeholder="Ciudad"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">País</label>
                        <input
                            type="text"
                            placeholder="País"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-stone-800 mb-5">Información de pago</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-stone-500 uppercase tracking-widest">Número de tarjeta</label>
                        <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-stone-500 uppercase tracking-widest">Vencimiento</label>
                            <input
                                type="text"
                                placeholder="MM/AA"
                                className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-stone-500 uppercase tracking-widest">CVV</label>
                            <input
                                type="text"
                                placeholder="123"
                                className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:ring-2 focus:ring-stone-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}