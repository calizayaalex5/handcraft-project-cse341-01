const orders = [
    { id: "001", user: "Juan Pérez",   product: "Collar Artesanal",  total: "$24.99",  status: "Entregado" },
    { id: "002", user: "María López",  product: "Jarrón de Barro",   total: "$39.99",  status: "En camino" },
    { id: "003", user: "Carlos Ruiz",  product: "Bolso Tejido",      total: "$54.99",  status: "Pendiente" },
    { id: "004", user: "Ana García",   product: "Aretes de Plata",   total: "$18.99",  status: "Entregado" },
    { id: "005", user: "Luis Torres",  product: "Cojín Bordado",     total: "$29.99",  status: "En camino" },
]

const statusColor: Record<string, string> = {
    "Entregado": "bg-green-100 text-green-700",
    "En camino": "bg-blue-100 text-blue-700",
    "Pendiente": "bg-yellow-100 text-yellow-700",
}

export default function RecentOrders() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-5">Pedidos Recientes</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-stone-100">
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">ID</th>
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Usuario</th>
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Producto</th>
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Total</th>
                            <th className="text-left text-xs text-stone-400 uppercase tracking-widest pb-3">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-stone-50 hover:bg-stone-50 transition">
                                <td className="py-3 text-stone-500">#{order.id}</td>
                                <td className="py-3 font-medium text-stone-800">{order.user}</td>
                                <td className="py-3 text-stone-500">{order.product}</td>
                                <td className="py-3 font-bold text-stone-800">{order.total}</td>
                                <td className="py-3">
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}