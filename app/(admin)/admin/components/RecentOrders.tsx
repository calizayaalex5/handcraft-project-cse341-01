type Order = {
    id: string
    total: number
    status: string
    createdAt: string
    user: { name: string; email: string }
    items: { product: { name: string } }[]
}

const statusColor: Record<string, string> = {
    PENDING:   "bg-yellow-100 text-yellow-700",
    SHIPPED:   "bg-blue-100 text-blue-700",
    DELIVERED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
}

const statusLabel: Record<string, string> = {
    PENDING:   "Pendiente",
    SHIPPED:   "En camino",
    DELIVERED: "Entregado",
    CANCELLED: "Cancelado",
}

export default function RecentOrders({ orders }: { orders: Order[] }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-5">Pedidos recientes</h2>
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
                                <td className="py-3 text-stone-500">#{order.id.slice(-6)}</td>
                                <td className="py-3 font-medium text-stone-800">{order.user.name}</td>
                                <td className="py-3 text-stone-500">{order.items[0]?.product.name ?? "—"}</td>
                                <td className="py-3 font-bold text-stone-800">${order.total.toFixed(2)}</td>
                                <td className="py-3">
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                                        {statusLabel[order.status]}
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